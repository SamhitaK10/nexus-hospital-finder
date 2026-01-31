import { MapPin, Navigation, Filter, Search, MessageSquare } from 'lucide-react';

export function MapView() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      {/* Screen Label */}
      <div className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Desktop View: Main Map Interface</h2>
        <span className="text-sm bg-blue-500 px-3 py-1 rounded">1920 × 1080</span>
      </div>

      <div className="flex h-[800px]">
        {/* Left Sidebar - Hospital List */}
        <div className="w-96 border-r-2 border-gray-300 bg-gray-50 p-4 overflow-auto">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="border-2 border-gray-400 rounded-lg p-3 bg-white">
                <div className="flex items-center gap-2 text-gray-500">
                  <Search className="w-5 h-5" />
                  <span className="text-gray-400">Search by location or hospital name...</span>
                </div>
              </div>
            </div>

            {/* Filter Button */}
            <button className="w-full border-2 border-gray-400 rounded-lg p-3 bg-white flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span>Filters & Bed Types</span>
              </div>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">3 active</span>
            </button>

            {/* AI Assistant Button */}
            <button className="w-full border-2 border-blue-500 rounded-lg p-3 bg-blue-50 flex items-center gap-2 hover:bg-blue-100">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Ask AI for Recommendations</span>
            </button>

            {/* Hospital Cards */}
            <div className="space-y-3 mt-6">
              {/* Hospital 1 - High Availability */}
              <div className="border-2 border-green-500 bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">St. Mary's Medical Center</h3>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                    HIGH
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>2.3 mi • 8 min drive</span>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ER Beds:</span>
                    <span className="font-medium text-green-600">12 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ICU Beds:</span>
                    <span className="font-medium text-green-600">5 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Wait Time:</span>
                    <span className="font-medium">~15 min</span>
                  </div>
                </div>

                <button className="w-full border-2 border-gray-300 rounded py-2 text-sm font-medium hover:bg-gray-50">
                  View Details
                </button>
              </div>

              {/* Hospital 2 - Medium Availability */}
              <div className="border-2 border-yellow-500 bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">Central City Hospital</h3>
                  <div className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded font-medium">
                    MEDIUM
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>3.7 mi • 12 min drive</span>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ER Beds:</span>
                    <span className="font-medium text-yellow-600">4 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ICU Beds:</span>
                    <span className="font-medium text-red-600">1 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Wait Time:</span>
                    <span className="font-medium">~35 min</span>
                  </div>
                </div>

                <button className="w-full border-2 border-gray-300 rounded py-2 text-sm font-medium hover:bg-gray-50">
                  View Details
                </button>
              </div>

              {/* Hospital 3 - Low Availability */}
              <div className="border-2 border-red-500 bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">Riverside General</h3>
                  <div className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-medium">
                    LOW
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>1.8 mi • 6 min drive</span>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ER Beds:</span>
                    <span className="font-medium text-red-600">1 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ICU Beds:</span>
                    <span className="font-medium text-gray-400">0 available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Wait Time:</span>
                    <span className="font-medium text-red-600">~90 min</span>
                  </div>
                </div>

                <button className="w-full border-2 border-gray-300 rounded py-2 text-sm font-medium hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="flex-1 bg-gray-100 relative">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            {/* Map Label */}
            <div className="absolute top-4 left-4 bg-white border-2 border-gray-300 rounded px-4 py-2 shadow-sm">
              <span className="text-sm text-gray-600 font-mono">[INTERACTIVE MAP AREA]</span>
            </div>

            {/* Hospital Markers */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-green-500 border-4 border-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-500 rounded px-2 py-1 whitespace-nowrap text-xs shadow-lg">
                  St. Mary's (12 beds)
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-yellow-500 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white border-2 border-yellow-500 rounded px-2 py-1 whitespace-nowrap text-xs shadow-lg">
                  Central City (4 beds)
                </div>
              </div>
            </div>

            <div className="absolute top-3/4 left-1/4">
              <div className="relative">
                <div className="w-12 h-12 bg-red-500 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white border-2 border-red-500 rounded px-2 py-1 whitespace-nowrap text-xs shadow-lg">
                  Riverside (1 bed)
                </div>
              </div>
            </div>

            {/* User Location */}
            <div className="absolute top-2/3 left-2/3">
              <div className="w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded px-2 py-1 text-xs whitespace-nowrap">
                Your Location
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 space-y-2">
              <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded shadow flex items-center justify-center hover:bg-gray-50">
                <span className="text-xl text-gray-600">+</span>
              </button>
              <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded shadow flex items-center justify-center hover:bg-gray-50">
                <span className="text-xl text-gray-600">−</span>
              </button>
              <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded shadow flex items-center justify-center hover:bg-gray-50">
                <Navigation className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white border-2 border-gray-300 rounded-lg p-3 shadow-lg">
              <h4 className="text-xs font-semibold mb-2">Availability Legend</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>High (8+ beds)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span>Medium (3-7 beds)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>Low (1-2 beds)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="bg-gray-100 border-t-2 border-gray-300 p-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-blue-600">Key Features:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Real-time hospital list with availability</li>
              <li>Color-coded status (green/yellow/red)</li>
              <li>Distance and drive time calculation</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-600">Interactions:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Click hospital card to view details</li>
              <li>Click map marker to highlight hospital</li>
              <li>Search filters update both list & map</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-600">Real-time Updates:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Bed availability updates every 30 seconds</li>
              <li>Wait times recalculated dynamically</li>
              <li>New hospitals appear automatically</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
