import { MapPin, Phone, Navigation, Clock, Users, Activity, Baby, Heart, AlertCircle, ExternalLink } from 'lucide-react';

export function HospitalDetail() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      {/* Screen Label */}
      <div className="bg-purple-600 text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Desktop View: Hospital Detail Page</h2>
        <span className="text-sm bg-purple-500 px-3 py-1 rounded">1920 × 1080</span>
      </div>

      <div className="p-8 max-h-[800px] overflow-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">St. Mary's Medical Center</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>1234 Healthcare Drive, San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>2.3 miles away • 8 minute drive</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold text-center">
                  HIGH AVAILABILITY
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Updated 2 min ago
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white border-2 border-blue-700 rounded-lg py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-blue-700">
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <button className="flex-1 bg-white border-2 border-gray-300 rounded-lg py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                <Phone className="w-5 h-5" />
                Call Hospital
              </button>
              <button className="flex-1 bg-white border-2 border-gray-300 rounded-lg py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                <ExternalLink className="w-5 h-5" />
                Visit Website
              </button>
            </div>
          </div>

          {/* Bed Availability Section */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              Real-Time Bed Availability
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Emergency Room */}
              <div className="border-2 border-green-400 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-lg">Emergency Room</h3>
                  </div>
                  <span className="text-2xl font-bold text-green-700">12</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Beds:</span>
                    <span className="font-medium">12 of 20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Wait Time:</span>
                    <span className="font-medium text-green-700">~15 minutes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* ICU */}
              <div className="border-2 border-green-400 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-lg">Intensive Care (ICU)</h3>
                  </div>
                  <span className="text-2xl font-bold text-green-700">5</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Beds:</span>
                    <span className="font-medium">5 of 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-700">Available</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>

              {/* Pediatric */}
              <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Baby className="w-6 h-6 text-yellow-700" />
                    <h3 className="font-semibold text-lg">Pediatric</h3>
                  </div>
                  <span className="text-2xl font-bold text-yellow-700">3</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Beds:</span>
                    <span className="font-medium">3 of 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Wait Time:</span>
                    <span className="font-medium text-yellow-700">~25 minutes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>

              {/* Maternity */}
              <div className="border-2 border-green-400 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-lg">Maternity</h3>
                  </div>
                  <span className="text-2xl font-bold text-green-700">7</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Beds:</span>
                    <span className="font-medium">7 of 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-700">Available</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Hospital Information */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Hospital Information</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Type:</span>
                  <p className="mt-1">General Acute Care Hospital</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <p className="mt-1 text-blue-600">(415) 555-1234</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Emergency Line:</span>
                  <p className="mt-1 text-red-600 font-semibold">(415) 555-9999</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Total Capacity:</span>
                  <p className="mt-1">250 beds</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Trauma Level:</span>
                  <p className="mt-1">Level II Trauma Center</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Specialties:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Cardiology</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Emergency</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Pediatrics</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Maternity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Amenities */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Services & Amenities</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>24/7 Emergency Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>On-site Laboratory</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Advanced Imaging (CT, MRI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Surgical Suites Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Pharmacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Free Parking Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-xs">✗</span>
                  </div>
                  <span className="text-gray-400">Helicopter Pad</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Insurance Accepted:</span>
                  <span className="text-blue-600 text-sm cursor-pointer hover:underline">View list →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="border-2 border-gray-300 rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Location Map</h2>
            <div className="bg-gray-100 h-64 rounded border-2 border-gray-300 flex items-center justify-center relative">
              <div className="text-gray-500 font-mono text-sm">[EMBEDDED MAP VIEW]</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-red-500 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
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
            <strong className="text-purple-600">Key Features:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Comprehensive bed availability by department</li>
              <li>Real-time wait time estimates</li>
              <li>Visual progress bars for capacity</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-600">Call-to-Actions:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Direct navigation to Google Maps</li>
              <li>One-click call to hospital</li>
              <li>Quick access to hospital website</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-600">Data Displayed:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Detailed hospital capabilities & specialties</li>
              <li>Services and amenities checklist</li>
              <li>Insurance acceptance information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
