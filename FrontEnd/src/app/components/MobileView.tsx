import { MapPin, Navigation, Filter, MessageSquare, Menu, X, Phone, AlertCircle } from 'lucide-react';

export function MobileView() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      {/* Screen Label */}
      <div className="bg-orange-600 text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Mobile View: Responsive Design</h2>
        <span className="text-sm bg-orange-500 px-3 py-1 rounded">375 × 812</span>
      </div>

      <div className="p-8 bg-gray-100">
        <div className="flex gap-8 justify-center flex-wrap">
          {/* Mobile Screen 1 - Map View */}
          <div className="w-[375px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gray-900 text-white px-6 py-2 flex items-center justify-between text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-xl font-bold">NEXUS</h1>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
              
              {/* Search & Filter Bar */}
              <div className="flex gap-2">
                <div className="flex-1 border-2 border-gray-300 rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Your location</span>
                </div>
                <button className="border-2 border-gray-300 rounded-lg px-3 flex items-center justify-center">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Map Area */}
            <div className="h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 relative">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>

              {/* Hospital Markers */}
              <div className="absolute top-1/4 left-1/3">
                <div className="w-10 h-10 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
              </div>
              <div className="absolute top-1/2 right-1/4">
                <div className="w-10 h-10 bg-yellow-500 border-4 border-white rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-1/4 left-1/2">
                <div className="w-10 h-10 bg-red-500 border-4 border-white rounded-full shadow-lg"></div>
              </div>

              {/* User Location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-blue-600 border-3 border-white rounded-full animate-pulse"></div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 space-y-2">
                <button className="w-10 h-10 bg-white border border-gray-300 rounded shadow flex items-center justify-center">
                  <span className="text-lg">+</span>
                </button>
                <button className="w-10 h-10 bg-white border border-gray-300 rounded shadow flex items-center justify-center">
                  <span className="text-lg">−</span>
                </button>
              </div>
            </div>

            {/* Bottom Sheet - Hospital List */}
            <div className="bg-white rounded-t-3xl -mt-6 relative z-10 shadow-xl">
              <div className="flex justify-center pt-2 pb-3">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>

              <div className="px-4 pb-4 space-y-3 max-h-[280px] overflow-auto">
                {/* Hospital Card 1 */}
                <div className="border-2 border-green-500 bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">St. Mary's Medical</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">
                      HIGH
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>2.3 mi • 8 min</span>
                  </div>
                  <div className="flex gap-1 text-xs mb-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">ER: 12</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">ICU: 5</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">~15 min</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white rounded py-2 text-xs font-medium">
                      Directions
                    </button>
                    <button className="border border-gray-300 rounded px-3 py-2">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hospital Card 2 */}
                <div className="border border-gray-300 bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">Central City Hospital</h3>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-medium">
                      MED
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>3.7 mi • 12 min</span>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">ER: 4</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded">ICU: 1</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">~35 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Button */}
            <button className="absolute bottom-24 right-4 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Mobile Screen 2 - Hospital Detail */}
          <div className="w-[375px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gray-900 text-white px-6 py-2 flex items-center justify-between text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
              <button className="p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-lg font-bold">Hospital Details</h1>
            </div>

            {/* Content */}
            <div className="overflow-auto h-[650px] pb-20">
              {/* Map Preview */}
              <div className="h-[150px] bg-gradient-to-br from-gray-100 to-gray-200 relative border-b-4 border-green-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                </div>
              </div>

              <div className="px-4 py-4">
                {/* Hospital Name & Status */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-bold">St. Mary's Medical Center</h2>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                      HIGH
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>2.3 mi away • 8 min drive</span>
                  </div>
                  <p className="text-xs text-gray-500">Updated 2 minutes ago</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button className="bg-blue-600 text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Directions
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg py-3 font-medium flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                </div>

                {/* Bed Availability */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Bed Availability
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="border-2 border-green-400 bg-green-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">Emergency Room</span>
                        <span className="text-lg font-bold text-green-700">12</span>
                      </div>
                      <div className="text-xs text-gray-600">12 of 20 beds • ~15 min wait</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div className="border border-gray-300 bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">ICU</span>
                        <span className="text-lg font-bold text-green-700">5</span>
                      </div>
                      <div className="text-xs text-gray-600">5 of 15 beds available</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '33%' }}></div>
                      </div>
                    </div>

                    <div className="border border-gray-300 bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">Pediatric</span>
                        <span className="text-lg font-bold text-yellow-700">3</span>
                      </div>
                      <div className="text-xs text-gray-600">3 of 12 beds • ~25 min wait</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hospital Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold mb-3">Hospital Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Type:</span>
                      <p>General Acute Care</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <p className="text-blue-600">(415) 555-1234</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Emergency:</span>
                      <p className="text-red-600 font-semibold">(415) 555-9999</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Specialties:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">Cardiology</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">Emergency</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">Pediatrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Screen 3 - AI Chat */}
          <div className="w-[375px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gray-900 text-white px-6 py-2 flex items-center justify-between text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 flex items-center gap-3">
              <button className="p-1">
                <X className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-lg font-bold">NEXUS AI</h1>
                <p className="text-xs opacity-90">Ask me anything</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[600px] bg-gray-50 overflow-auto p-4 space-y-3">
              {/* AI Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">AI</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm">
                    <p className="text-sm">Hi! Tell me about your medical situation and I'll find the best hospital for you.</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="flex-1 max-w-[80%]">
                  <div className="bg-blue-600 text-white rounded-lg rounded-tr-none p-3 shadow-sm">
                    <p className="text-sm">Need pediatric ER for my daughter with high fever</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block text-right">2 min ago</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">AI</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm">
                    <p className="text-sm mb-2">I recommend St. Mary's Medical Center:</p>
                    
                    <div className="bg-green-50 border border-green-300 rounded p-2 mb-2">
                      <p className="text-xs font-semibold mb-1">⭐ Best Match</p>
                      <p className="text-xs">• 8 pediatric beds available</p>
                      <p className="text-xs">• 2.3 miles away</p>
                      <p className="text-xs">• ~10 min wait time</p>
                    </div>

                    <button className="w-full bg-green-600 text-white rounded py-2 text-xs font-medium mt-2">
                      Get Directions
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="space-y-2">
                  <button className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs text-left hover:bg-gray-50">
                    Find nearest trauma center
                  </button>
                  <button className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs text-left hover:bg-gray-50">
                    Maternity ward with availability
                  </button>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
                />
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="bg-gray-100 border-t-2 border-gray-300 p-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-orange-600">Mobile Screen 1:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Map view with bottom sheet</li>
              <li>Swipeable hospital cards</li>
              <li>Floating AI assistant button</li>
            </ul>
          </div>
          <div>
            <strong className="text-orange-600">Mobile Screen 2:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Full hospital detail view</li>
              <li>Touch-optimized action buttons</li>
              <li>Scrollable content area</li>
            </ul>
          </div>
          <div>
            <strong className="text-orange-600">Mobile Screen 3:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Full-screen chat interface</li>
              <li>Quick action suggestions</li>
              <li>Keyboard-friendly input</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
