import { Bot, Send, Sparkles, MapPin, AlertCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

export function ChatbotInterface() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
      {/* Screen Label */}
      <div className="bg-indigo-600 text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Desktop View: AI-Powered Recommendation Chatbot</h2>
        <span className="text-sm bg-indigo-500 px-3 py-1 rounded">1920 × 1080</span>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">NEXUS AI Assistant</h1>
            <p className="text-gray-600">Describe your symptoms and needs, and I'll recommend the best hospital for you</p>
          </div>

          {/* Chat Container */}
          <div className="border-2 border-gray-300 rounded-lg bg-gray-50 h-[600px] flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-auto space-y-4">
              {/* AI Welcome Message */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white border-2 border-gray-300 rounded-lg rounded-tl-none p-4 shadow-sm">
                    <p className="text-gray-800">
                      Hi! I'm the NEXUS AI Assistant. I can help you find the best hospital based on your condition, location, and preferences. 
                    </p>
                    <p className="text-gray-800 mt-2">
                      Tell me about your situation, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Symptoms or medical condition</li>
                      <li>Urgency level</li>
                      <li>Your location</li>
                      <li>Any special requirements (insurance, specialists, etc.)</li>
                    </ul>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* User Message 1 */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-md">
                  <div className="bg-blue-600 text-white border-2 border-blue-700 rounded-lg rounded-tr-none p-4 shadow-sm">
                    <p>
                      My 6-year-old daughter has a high fever (103°F), severe cough, and trouble breathing. I'm in downtown San Francisco. I need a hospital with a pediatric ER quickly.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block text-right">2 min ago</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">U</span>
                </div>
              </div>

              {/* AI Thinking Indicator */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="bg-white border-2 border-indigo-300 rounded-lg rounded-tl-none p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-sm">Analyzing your needs and checking hospitals...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Response with Recommendations */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white border-2 border-gray-300 rounded-lg rounded-tl-none p-4 shadow-sm">
                    <p className="text-gray-800 font-medium mb-3">
                      Based on your daughter's symptoms and location, I've found 3 hospitals. Here's my recommendation:
                    </p>

                    {/* Recommended Hospital Card */}
                    <div className="border-2 border-green-500 bg-green-50 rounded-lg p-4 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          ⭐ BEST MATCH
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                          HIGH AVAILABILITY
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2">St. Mary's Medical Center</h3>
                      
                      <div className="space-y-2 text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-600" />
                          <span>2.3 miles away • 8 min drive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-green-700">Pediatric ER: 8 beds available</span>
                        </div>
                      </div>

                      <div className="bg-white border border-green-300 rounded p-3 mb-3">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Why I recommend this:</p>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>Specialized pediatric emergency department with 8 beds available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>Closest hospital with pediatric specialists on-site 24/7</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>Very short wait time (~10 minutes)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>Has respiratory care unit for breathing difficulties</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 bg-green-600 text-white rounded py-2 text-sm font-medium hover:bg-green-700">
                          Get Directions
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-300 rounded py-2 text-sm font-medium hover:bg-gray-50">
                          Call Hospital
                        </button>
                      </div>
                    </div>

                    {/* Alternative Options */}
                    <div className="border-t-2 border-gray-200 pt-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Other options nearby:</p>
                      
                      <div className="space-y-2">
                        <div className="border border-gray-300 bg-gray-50 rounded p-3 text-sm">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-semibold">UCSF Benioff Children's Hospital</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">MEDIUM</span>
                          </div>
                          <p className="text-gray-600 text-xs">4.1 mi away • 3 pediatric beds • 20 min wait</p>
                        </div>

                        <div className="border border-gray-300 bg-gray-50 rounded p-3 text-sm">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-semibold">California Pacific Medical Center</span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">LOW</span>
                          </div>
                          <p className="text-gray-600 text-xs">3.2 mi away • 1 pediatric bed • 45 min wait</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t-2 border-gray-200 mt-4 pt-3">
                      <p className="text-sm text-gray-600">
                        <strong>⚠️ Important:</strong> Given the breathing difficulties, please call 911 if symptoms worsen during travel.
                      </p>
                    </div>
                  </div>
                  
                  {/* Feedback Buttons */}
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-500">2 min ago</span>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-green-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-gray-500">Was this helpful?</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Quick Actions */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-3">Or try asking:</p>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
                    "Find nearest trauma center"
                  </button>
                  <button className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
                    "ICU bed for heart attack patient"
                  </button>
                  <button className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
                    "Maternity ward with NICU"
                  </button>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t-2 border-gray-300 p-4 bg-white">
              <div className="flex gap-3">
                <input 
                  type="text"
                  placeholder="Describe your medical situation or ask a question..."
                  className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700">
                  <Send className="w-5 h-5" />
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: Be specific about symptoms, urgency, and any special needs for better recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="bg-gray-100 border-t-2 border-gray-300 p-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-indigo-600">AI Capabilities:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Natural language understanding of symptoms</li>
              <li>Multi-factor recommendation algorithm</li>
              <li>Real-time bed availability integration</li>
            </ul>
          </div>
          <div>
            <strong className="text-indigo-600">Recommendation Factors:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Symptom severity & specialty match</li>
              <li>Distance & travel time</li>
              <li>Bed availability & wait times</li>
            </ul>
          </div>
          <div>
            <strong className="text-indigo-600">User Features:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Conversational interface</li>
              <li>Quick action buttons for common queries</li>
              <li>Feedback system to improve AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
