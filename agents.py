"""
Multi-agent hospital recommendation system using LangGraph.

Pipeline: User message → Triage Agent → Hospital Finder Agent → Recommendation Agent → Final recommendation
"""

import json
import os
from typing import TypedDict

from langgraph.graph import END, StateGraph

# Load hospitals_data.json (support running from project root or subdir)
_json_path = "hospitals_data.json"
if not os.path.exists(_json_path):
    _json_path = os.path.join(os.path.dirname(__file__), "hospitals_data.json")
with open(_json_path, "r", encoding="utf-8") as f:
    hospitals = json.load(f)


# --- State ---

class HospitalState(TypedDict):
    user_message: str
    symptoms: str
    urgency: str  # "critical" | "urgent" | "routine"
    recommended_hospitals: list
    final_recommendation: dict
    reasoning: str


# --- 1. Triage Agent ---

def triage_agent(state: HospitalState) -> dict:
    """
    Analyzes user symptoms and determines urgency: critical, urgent, or routine.
    """
    message = state["user_message"].strip().lower()

    # Critical: life-threatening / emergency (chest, heart, cardiac, stroke, severe bleeding, unconscious)
    if any(
        w in message
        for w in [
            "chest pain",
            "chest",
            "heart",
            "cardiac",
            "stroke",
            "can't breathe",
            "unconscious",
            "severe bleeding",
            "heart attack",
        ]
    ):
        return {
            **state,
            "symptoms": "emergency/cardiac",
            "urgency": "critical",
        }

    # Urgent: needs prompt care (child fever, labor, pregnancy, injury, broken bone)
    if any(
        w in message
        for w in [
            "child",
            "kid",
            "baby",
            "pediatric",
            "pregnancy",
            "labor",
            "delivery",
            "injury",
            "broken",
            "fracture",
            "high fever",
        ]
    ):
        return {
            **state,
            "symptoms": "pediatric" if any(x in message for x in ["child", "kid", "baby", "pediatric"]) else "maternity" if any(x in message for x in ["pregnancy", "labor", "delivery"]) else "urgent_general",
            "urgency": "urgent",
        }

    # Routine: general symptoms, check-up, non-urgent
    return {
        **state,
        "symptoms": "general",
        "urgency": "routine",
    }


# --- 2. Hospital Finder Agent ---

def finder_agent(state: HospitalState) -> dict:
    """
    Searches hospitals_data.json for hospitals matching symptoms and urgency.
    """
    symptoms = state["symptoms"]
    urgency = state["urgency"]
    filtered = []

    for h in hospitals:
        if urgency == "critical":
            # Need ER + emergency services
            if h.get("emergency_services") and (h.get("beds") or {}).get("er", 0) > 0:
                filtered.append(h)
        elif symptoms == "pediatric":
            if (h.get("beds") or {}).get("pediatric", 0) > 0 and h.get("availableBeds", 0) > 0:
                filtered.append(h)
        elif symptoms == "maternity":
            if (h.get("beds") or {}).get("maternity", 0) > 0 and h.get("availableBeds", 0) > 0:
                filtered.append(h)
        else:
            # routine or urgent_general: any hospital with availability
            if h.get("availableBeds", 0) > 0:
                filtered.append(h)

    # Prefer emergency_services for urgent when no specialty match
    if urgency == "urgent" and symptoms == "urgent_general":
        filtered.sort(key=lambda x: (x.get("emergency_services", False), x.get("availableBeds", 0)), reverse=True)
    else:
        filtered.sort(key=lambda x: (x.get("availableBeds", 0), -x.get("waitTime", 999)), reverse=True)

    return {
        **state,
        "recommended_hospitals": filtered[:10],
    }


# --- 3. Recommendation Agent ---

def recommendation_agent(state: HospitalState) -> dict:
    """
    Picks the best hospital from the shortlist and explains why.
    """
    hospitals_list = state["recommended_hospitals"]
    urgency = state["urgency"]

    if not hospitals_list:
        return {
            **state,
            "final_recommendation": {},
            "reasoning": "No hospitals found matching your symptoms and urgency. Please call 911 if this is an emergency.",
        }

    # Best: for critical/urgent prefer ER capacity and low wait; for routine prefer availability and rating
    if urgency == "critical":
        best = max(
            hospitals_list,
            key=lambda x: (x.get("beds") or {}).get("er", 0) * 10 - x.get("waitTime", 999),
        )
    else:
        best = max(
            hospitals_list,
            key=lambda x: (x.get("availableBeds", 0), x.get("rating", 0), -x.get("waitTime", 999)),
        )

    reasons = [
        f"{best.get('name', 'Hospital')} is recommended because:",
        f"- Urgency level: {urgency}.",
        f"- Available beds: {best.get('availableBeds', 0)}; wait time: {best.get('waitTime', 0)} minutes.",
        f"- Location: {best.get('city', '')}, {best.get('state', '')}.",
    ]
    if best.get("specialties"):
        reasons.append(f"- Specialties: {', '.join(best['specialties'])}.")
    if best.get("emergency_services") and urgency in ("critical", "urgent"):
        reasons.append("- Has emergency services.")
    reasoning = " ".join(reasons)

    return {
        **state,
        "final_recommendation": best,
        "reasoning": reasoning,
    }


# --- LangGraph pipeline ---

workflow = StateGraph(HospitalState)

workflow.add_node("triage", triage_agent)
workflow.add_node("finder", finder_agent)
workflow.add_node("recommender", recommendation_agent)

workflow.set_entry_point("triage")
workflow.add_edge("triage", "finder")
workflow.add_edge("finder", "recommender")
workflow.add_edge("recommender", END)

app = workflow.compile()


# --- Public API ---

def get_recommendation(user_message: str) -> dict:
    """
    Run the multi-agent pipeline and return hospital recommendation with reasoning and urgency.

    Returns:
        {
            "hospital": {...hospital object...},
            "reasoning": "why this hospital",
            "urgency": "critical" | "urgent" | "routine"
        }
    """
    initial: HospitalState = {
        "user_message": user_message,
        "symptoms": "",
        "urgency": "",
        "recommended_hospitals": [],
        "final_recommendation": {},
        "reasoning": "",
    }
    result = app.invoke(initial)
    return {
        "hospital": result["final_recommendation"],
        "reasoning": result["reasoning"],
        "urgency": result["urgency"],
    }
