# 🏥 NEXUS - Hospital Bed Finder

**AI-Powered Real-Time Hospital Bed Availability Platform**

---

## 🎯 Problem

- Patients waste hours driving to full hospitals
- No centralized system shows real-time bed availability
- Ambulances drive to multiple ERs searching for space
- During emergencies, people guess which hospital to go to

---

## 💡 Solution

NEXUS provides:
- **Interactive map** showing hospital locations
- **Real-time bed availability** (ER, ICU, Maternity, Pediatric)
- **AI-powered recommendations** based on symptoms and distance
- **Live wait time estimates**

---

## 🛠️ Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** React + Leaflet Maps + Tailwind CSS
- **AI:** Toolhouse + Google Gemini
- **Data:** Real hospital data from CMS (Centers for Medicare & Medicaid Services)

---

## 📊 Data

- **15 real California hospitals**
- Real names, addresses, phone numbers, ratings
- Simulated real-time bed counts
- Emergency services information

---

## 🚀 Backend API

### Running the Server

```bash
cd backend
pip install fastapi uvicorn
python main.py
