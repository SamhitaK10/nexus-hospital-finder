import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, ThumbsUp, ThumbsDown, MapPin, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Hospital, getAvailabilityStatus } from '@/app/data/hospitalData';

interface AIChatProps {
  onClose: () => void;
  onSelectHospital: (hospital: Hospital) => void;
  hospitals: Hospital[];
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recommendations?: Hospital[];
}

export function AIChat({ onClose, onSelectHospital, hospitals }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm the NEXUS AI Assistant. I can help you find the best hospital based on your condition, location, and preferences.\n\nTell me about your situation, including:\n• Symptoms or medical condition\n• Urgency level\n• Your location\n• Any special requirements (insurance, specialists, etc.)",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages(prev => [...prev, aiResponse]);
      setIsThinking(false);
    }, 2000);
  };

  const generateAIResponse = (userInput: string): Message => {
    const lower = userInput.toLowerCase();
    
    // Detect keywords
    const isPediatric = lower.includes('child') || lower.includes('kid') || lower.includes('baby') || lower.includes('daughter') || lower.includes('son');
    const isICU = lower.includes('icu') || lower.includes('intensive') || lower.includes('critical');
    const isMaternity = lower.includes('pregnant') || lower.includes('labor') || lower.includes('delivery') || lower.includes('maternity');
    const isEmergency = lower.includes('emergency') || lower.includes('urgent') || lower.includes('pain') || lower.includes('fever') || lower.includes('bleeding');

    // Filter and sort hospitals
    let filtered = [...hospitals];
    
    if (isPediatric) {
      filtered = filtered.filter(h => h.beds.pediatric.available > 0);
      filtered.sort((a, b) => b.beds.pediatric.available - a.beds.pediatric.available);
    } else if (isICU) {
      filtered = filtered.filter(h => h.beds.icu.available > 0);
      filtered.sort((a, b) => b.beds.icu.available - a.beds.icu.available);
    } else if (isMaternity) {
      filtered = filtered.filter(h => h.beds.maternity.available > 0);
      filtered.sort((a, b) => b.beds.maternity.available - a.beds.maternity.available);
    } else if (isEmergency) {
      filtered = filtered.filter(h => h.beds.er.available > 0);
      filtered.sort((a, b) => {
        const scoreA = (b.beds.er.available * 2) + (60 - b.waitTimes.er) - (b.distance || 0) * 5;
        const scoreB = (a.beds.er.available * 2) + (60 - a.waitTimes.er) - (a.distance || 0) * 5;
        return scoreB - scoreA;
      });
    }

    const topHospital = filtered[0] || hospitals[0];
    const alternatives = filtered.slice(1, 3);

    const bedType = isPediatric ? 'Pediatric' : isICU ? 'ICU' : isMaternity ? 'Maternity' : 'ER';
    const bedCount = isPediatric ? topHospital.beds.pediatric.available : 
                     isICU ? topHospital.beds.icu.available :
                     isMaternity ? topHospital.beds.maternity.available :
                     topHospital.beds.er.available;

    let responseText = `Based on your situation, I've found ${filtered.length} hospitals that can help. Here's my recommendation:\n\n`;
    responseText += `🏥 **${topHospital.name}**\n\n`;
    responseText += `📍 ${topHospital.distance} miles away • ${topHospital.travelTime} min drive\n`;
    responseText += `✅ ${bedType} Beds: ${bedCount} available\n`;
    responseText += `⏱️ Wait Time: ~${isPediatric ? topHospital.waitTimes.pediatric : topHospital.waitTimes.er} minutes\n\n`;
    
    responseText += `**Why I recommend this:**\n`;
    if (bedCount > 5) {
      responseText += `• High availability with ${bedCount} ${bedType.toLowerCase()} beds\n`;
    }
    if (topHospital.distance! < 3) {
      responseText += `• Very close to your location (${topHospital.distance} miles)\n`;
    }
    if ((isPediatric ? topHospital.waitTimes.pediatric : topHospital.waitTimes.er) < 20) {
      responseText += `• Short wait time expected\n`;
    }
    if (isPediatric && topHospital.specialties.some(s => s.toLowerCase().includes('pediatric'))) {
      responseText += `• Specialized pediatric care available\n`;
    }

    if (isEmergency) {
      responseText += `\n⚠️ **Important:** Given the urgent nature, please call 911 if symptoms worsen during travel.`;
    }

    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: responseText,
      timestamp: new Date(),
      recommendations: [topHospital, ...alternatives]
    };
  };

  const quickQuestions = [
    "Find nearest trauma center",
    "Pediatric ER with short wait",
    "ICU bed for transfer",
    "Maternity ward availability"
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">NEXUS AI Assistant</h2>
                <p className="text-sm text-white/90">Powered by advanced AI</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className={`flex-1 max-w-2xl ${message.role === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`rounded-lg p-4 ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white ml-12' 
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}>
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                    
                    {message.recommendations && message.recommendations.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {message.recommendations.map((hospital, index) => {
                          const status = getAvailabilityStatus(hospital);
                          return (
                            <div 
                              key={hospital.id}
                              className={`border-2 rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow ${
                                index === 0 
                                  ? 'border-green-500 bg-green-50' 
                                  : 'border-gray-300 bg-gray-50'
                              }`}
                              onClick={() => onSelectHospital(hospital)}
                            >
                              {index === 0 && (
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                                    ⭐ BEST MATCH
                                  </span>
                                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                                    status === 'high' ? 'bg-green-100 text-green-700' :
                                    status === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-red-100 text-red-700'
                                  }`}>
                                    {status.toUpperCase()} AVAILABILITY
                                  </span>
                                </div>
                              )}
                              <h4 className="font-semibold mb-1">{hospital.name}</h4>
                              <div className="flex items-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{hospital.distance} mi • {hospital.travelTime} min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  <span>ER: {hospital.beds.er.available} beds</span>
                                </div>
                              </div>
                              {index === 0 && (
                                <Button 
                                  size="sm" 
                                  className="w-full mt-2 bg-green-600 hover:bg-green-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectHospital(hospital);
                                  }}
                                >
                                  View Details & Get Directions
                                </Button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  
                  <div className={`flex items-center gap-4 mt-1 px-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">U</span>
                  </div>
                )}
              </div>
            ))}

            {isThinking && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="bg-white border border-indigo-300 rounded-lg p-4">
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
            )}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white">
                <p className="text-sm text-gray-600 mb-3">Or try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map(question => (
                    <button
                      key={question}
                      onClick={() => setInput(question)}
                      className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your medical situation or ask a question..."
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={!input.trim() || isThinking}>
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Tip: Be specific about symptoms, urgency, and any special needs for better recommendations
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
