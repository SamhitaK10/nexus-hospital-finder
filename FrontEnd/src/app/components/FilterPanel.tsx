import { Filter, X, AlertCircle, Heart, Baby, Users, Clock, MapPin, DollarSign } from 'lucide-react';

export function FilterPanel() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      {/* Screen Label */}
      <div className="bg-green-600 text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Desktop View: Filter & Search Panel</h2>
        <span className="text-sm bg-green-500 px-3 py-1 rounded">1920 × 1080</span>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Filter className="w-8 h-8 text-gray-700" />
              <h1 className="text-2xl font-bold">Search & Filter Hospitals</h1>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Clear All Filters
            </button>
          </div>

          {/* Active Filters */}
          <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-blue-900">Active Filters (3)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white border-2 border-blue-400 rounded-full px-3 py-1 flex items-center gap-2">
                <span className="text-sm">ER Beds Available</span>
                <button className="text-blue-600 hover:text-blue-800">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white border-2 border-blue-400 rounded-full px-3 py-1 flex items-center gap-2">
                <span className="text-sm">Within 5 miles</span>
                <button className="text-blue-600 hover:text-blue-800">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white border-2 border-blue-400 rounded-full px-3 py-1 flex items-center gap-2">
                <span className="text-sm">Accepts Medicare</span>
                <button className="text-blue-600 hover:text-blue-800">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bed Type Filters */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Bed Type Availability</h2>
            <div className="grid grid-cols-2 gap-4">
              <label className="border-2 border-blue-500 bg-blue-50 rounded-lg p-4 cursor-pointer hover:bg-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 border-2 border-blue-600 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold">Emergency Room (ER)</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Show hospitals with ER beds available</p>
              </label>

              <label className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 border-2 border-gray-400 bg-white rounded"></div>
                  <Heart className="w-6 h-6 text-gray-600" />
                  <span className="font-semibold">Intensive Care (ICU)</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Critical care and monitoring units</p>
              </label>

              <label className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 border-2 border-gray-400 bg-white rounded"></div>
                  <Baby className="w-6 h-6 text-gray-600" />
                  <span className="font-semibold">Pediatric</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Specialized care for children</p>
              </label>

              <label className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 border-2 border-gray-400 bg-white rounded"></div>
                  <Users className="w-6 h-6 text-gray-600" />
                  <span className="font-semibold">Maternity</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Labor, delivery, and postpartum care</p>
              </label>
            </div>
          </div>

          {/* Distance & Location */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Distance & Location
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Maximum Distance
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    defaultValue="5"
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="border-2 border-blue-500 bg-blue-50 rounded px-4 py-2 min-w-[100px] text-center font-semibold">
                    5 miles
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Current Location
                </label>
                <div className="border-2 border-gray-300 rounded-lg p-3 bg-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Enter address or use current location"
                    className="flex-1 outline-none"
                  />
                  <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm font-medium hover:bg-blue-700">
                    Use GPS
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Wait Time Filter */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Wait Time Preference
            </h2>
            
            <div className="space-y-3">
              <label className="border-2 border-gray-300 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                <input type="radio" name="waitTime" className="w-5 h-5" />
                <div>
                  <div className="font-medium">Any wait time</div>
                  <div className="text-sm text-gray-600">Show all hospitals regardless of wait</div>
                </div>
              </label>

              <label className="border-2 border-blue-500 bg-blue-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer">
                <input type="radio" name="waitTime" className="w-5 h-5" defaultChecked />
                <div>
                  <div className="font-medium">Under 30 minutes</div>
                  <div className="text-sm text-gray-600">Shorter estimated wait times</div>
                </div>
              </label>

              <label className="border-2 border-gray-300 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                <input type="radio" name="waitTime" className="w-5 h-5" />
                <div>
                  <div className="font-medium">Under 60 minutes</div>
                  <div className="text-sm text-gray-600">Moderate wait times acceptable</div>
                </div>
              </label>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-2 gap-6">
            {/* Insurance */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Insurance
              </h2>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>Medicare</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-blue-600 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Medicaid</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>Private Insurance</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>Uninsured Accepted</span>
                </label>
              </div>
            </div>

            {/* Hospital Features */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Hospital Features</h2>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>Trauma Center</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>Teaching Hospital</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>24/7 Emergency Services</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded"></div>
                  <span>On-site Pharmacy</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-blue-600 text-white border-2 border-blue-700 rounded-lg py-4 px-6 font-semibold text-lg hover:bg-blue-700">
              Apply Filters (24 hospitals found)
            </button>
            <button className="border-2 border-gray-300 rounded-lg py-4 px-6 font-semibold hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="bg-gray-100 border-t-2 border-gray-300 p-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-green-600">Filter Categories:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Bed type availability (multi-select)</li>
              <li>Distance from current location</li>
              <li>Wait time preferences</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-600">Real-time Updates:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Results count updates dynamically</li>
              <li>Active filters shown with remove option</li>
              <li>Bed availability checked in real-time</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-600">User Experience:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Visual checkbox states for selections</li>
              <li>Interactive slider for distance</li>
              <li>GPS location auto-detect option</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
