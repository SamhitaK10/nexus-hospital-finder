import { X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface PRDDocumentProps {
  onClose: () => void;
}

export function PRDDocument({ onClose }: PRDDocumentProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-700 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div>
              <h1 className="text-2xl font-bold">NEXUS - Product Requirements Document</h1>
              <p className="text-sm text-slate-300 mt-1">Real-Time Hospital Bed Finder Application</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-slate-600">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-8 prose prose-sm max-w-none">
            {/* Executive Summary */}
            <section className="mb-8 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 m-0">Executive Summary</h2>
                <span className="text-sm text-gray-600">Version 1.0 • January 31, 2026</span>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <h3 className="font-bold text-lg mb-2 m-0">🎯 Product Vision</h3>
                <p className="text-gray-800 m-0">
                  NEXUS is a "Google Maps for hospital beds" that transforms emergency healthcare access by providing real-time 
                  visibility into hospital bed availability, enabling patients, families, and medical professionals to make 
                  informed decisions during critical moments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-red-600 m-0">❗ Problem Statement</h4>
                  <ul className="text-sm space-y-1 text-gray-700 m-0 pl-4">
                    <li>Patients waste time calling multiple hospitals to find available beds</li>
                    <li>Emergency situations escalate due to lack of real-time information</li>
                    <li>Paramedics struggle to find appropriate facilities during transfers</li>
                    <li>No centralized platform for bed availability across facilities</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-600 m-0">✅ Solution Overview</h4>
                  <ul className="text-sm space-y-1 text-gray-700 m-0 pl-4">
                    <li>Real-time map showing all nearby hospitals with bed counts</li>
                    <li>AI-powered recommendations based on symptoms and needs</li>
                    <li>Live wait time estimates and distance calculations</li>
                    <li>Filter by bed type, insurance, specialties, and amenities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <h4 className="font-bold mb-3 m-0">📊 Success Metrics (KPIs)</h4>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-green-700 mb-1">User Engagement</p>
                    <p className="m-0">• 10,000+ active users in Month 1</p>
                    <p className="m-0">• 3 min avg session duration</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Performance</p>
                    <p className="m-0">• &lt;2s page load time</p>
                    <p className="m-0">• 99.9% uptime</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Impact</p>
                    <p className="m-0">• 30% reduction in hospital search time</p>
                    <p className="m-0">• 85% user satisfaction</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-8 border-b-2 border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">🎨 Key Features</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">1. Interactive Hospital Map</h3>
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">P0 - Critical</span>
                  </div>
                  <p className="text-sm mb-2 text-gray-700">
                    Display all hospitals on an interactive map with color-coded markers indicating bed availability (green/yellow/red).
                  </p>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>Real-time bed count overlays</li>
                    <li>User location detection</li>
                    <li>Click markers for quick hospital info</li>
                    <li>Distance and travel time calculations</li>
                  </ul>
                </div>

                <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">2. Real-Time Bed Availability</h3>
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">P0 - Critical</span>
                  </div>
                  <p className="text-sm mb-2 text-gray-700">
                    Show current bed availability by department (ER, ICU, Pediatric, Maternity) with automatic updates.
                  </p>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>WebSocket updates every 30 seconds</li>
                    <li>Visual progress bars for capacity</li>
                    <li>"Last updated" timestamps</li>
                    <li>Color-coded availability status</li>
                  </ul>
                </div>

                <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">3. AI-Powered Recommendations</h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">P1 - High</span>
                  </div>
                  <p className="text-sm mb-2 text-gray-700">
                    Chatbot interface that analyzes user symptoms and recommends the best hospital.
                  </p>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>Natural language processing for symptoms</li>
                    <li>Ranking algorithm: specialty match (40%), distance (30%), availability (20%), wait time (10%)</li>
                    <li>Explains reasoning for recommendations</li>
                    <li>Quick action buttons for common queries</li>
                  </ul>
                </div>

                <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">4. Advanced Filters</h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">P1 - High</span>
                  </div>
                  <p className="text-sm text-gray-700 m-0">
                    Filter hospitals by bed type, distance, wait time, insurance acceptance, trauma level, and specialties.
                  </p>
                </div>

                <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">5. Hospital Details & Actions</h3>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-bold">P2 - Medium</span>
                  </div>
                  <p className="text-sm text-gray-700 m-0">
                    Comprehensive hospital information with one-click actions for directions, calling, and website visits.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Stack */}
            <section className="mb-8 border-b-2 border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">⚙️ Technical Architecture</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-3 m-0">Frontend Stack</h3>
                  <ul className="text-sm space-y-1 text-gray-700 pl-4 m-0">
                    <li>React 18 + TypeScript</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Google Maps API for mapping</li>
                    <li>WebSocket for real-time updates</li>
                    <li>Responsive mobile-first design</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-3 m-0">Backend Stack</h3>
                  <ul className="text-sm space-y-1 text-gray-700 pl-4 m-0">
                    <li>Node.js + Express</li>
                    <li>PostgreSQL database</li>
                    <li>Redis for caching</li>
                    <li>OpenAI GPT-4 for AI features</li>
                    <li>AWS hosting (EC2/ECS)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 border-2 border-gray-300 rounded-lg p-4">
                <h3 className="font-bold mb-2 m-0">Core API Endpoints</h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div><span className="bg-green-100 px-2 py-0.5 rounded">GET</span> /api/hospitals?lat=&lng=&radius=</div>
                  <div><span className="bg-green-100 px-2 py-0.5 rounded">GET</span> /api/hospitals/:id</div>
                  <div><span className="bg-green-100 px-2 py-0.5 rounded">GET</span> /api/beds/availability</div>
                  <div><span className="bg-blue-100 px-2 py-0.5 rounded">POST</span> /api/ai/recommend</div>
                  <div><span className="bg-green-100 px-2 py-0.5 rounded">GET</span> /api/search?filters=</div>
                  <div><span className="bg-yellow-100 px-2 py-0.5 rounded">WS</span> /ws/bed-updates</div>
                </div>
              </div>
            </section>

            {/* Implementation Plan */}
            <section className="mb-8 border-b-2 border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">🚀 Implementation Roadmap</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-green-400 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">Phase 1: MVP (2 weeks)</h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">Sprint 1-2</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Deliverables:</p>
                    <ul className="pl-4 m-0">
                      <li>Basic map view with mock hospital data</li>
                      <li>Hospital list with bed counts</li>
                      <li>Color-coded availability markers</li>
                      <li>Hospital detail modal</li>
                      <li>Simple filter by bed type</li>
                      <li>Mobile-responsive design</li>
                    </ul>
                  </div>
                </div>

                <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">Phase 2: Production (1 month)</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Sprint 3-6</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Deliverables:</p>
                    <ul className="pl-4 m-0">
                      <li>Real hospital data integration</li>
                      <li>Live AI recommendations (GPT-4)</li>
                      <li>Real-time WebSocket updates</li>
                      <li>Advanced filters and search</li>
                      <li>Google Maps integration</li>
                      <li>Click-to-call functionality</li>
                    </ul>
                  </div>
                </div>

                <div className="border-2 border-purple-400 bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg m-0">Phase 3: Scale (3 months)</h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">Sprint 7-18</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="m-0">Hospital admin dashboard, predictive analytics, user accounts, emergency alerts, EMS integration, multi-language support</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Criteria */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">✅ Success Criteria</h2>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-blue-600 m-0">User Metrics</h4>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>10K+ MAU in month 1</li>
                    <li>3min avg session</li>
                    <li>70% return rate</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-600 m-0">Performance</h4>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>&lt;2s page load</li>
                    <li>&lt;500ms API response</li>
                    <li>99.9% uptime</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-purple-600 m-0">Impact</h4>
                  <ul className="text-sm text-gray-700 pl-4 m-0">
                    <li>30% faster hospital selection</li>
                    <li>85% user satisfaction</li>
                    <li>50+ hospital partners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t-2 border-gray-300 pt-4 text-center text-sm text-gray-600">
              <p className="font-semibold m-0">NEXUS Product Team • healthcare@nexus.com</p>
              <p className="text-xs mt-2 m-0">Version 1.0 • January 31, 2026 • Status: In Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
