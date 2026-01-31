import { X, MapPin, Phone, Navigation, ExternalLink, AlertCircle, Heart, Baby, Users, Activity } from 'lucide-react';
import { Hospital, getAvailabilityStatus } from '@/app/data/hospitalData';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';

interface HospitalDetailModalProps {
  hospital: Hospital;
  onClose: () => void;
}

export function HospitalDetailModal({ hospital, onClose }: HospitalDetailModalProps) {
  const status = getAvailabilityStatus(hospital);
  
  const statusConfig = {
    high: { bg: 'bg-green-100', text: 'text-green-700' },
    medium: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    low: { bg: 'bg-red-100', text: 'text-red-700' }
  };

  const config = statusConfig[status];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{hospital.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {hospital.address.street}, {hospital.address.city}, {hospital.address.state} {hospital.address.zip}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {hospital.distance} miles away • {hospital.travelTime} minute drive
                </div>
              </div>
              <div className={`${config.bg} ${config.text} px-4 py-2 rounded-lg font-semibold text-center`}>
                {status.toUpperCase()} AVAILABILITY
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <Button 
                className="flex items-center justify-center gap-2"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${hospital.address.coordinates.lat},${hospital.address.coordinates.lng}`, '_blank')}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </Button>
              <Button 
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={() => window.location.href = `tel:${hospital.contact.phone}`}
              >
                <Phone className="w-4 h-4" />
                Call Hospital
              </Button>
              <Button 
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={() => window.open(hospital.contact.website, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Website
              </Button>
            </div>
          </div>

          {/* Bed Availability */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Real-Time Bed Availability
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* ER Beds */}
              <div className={`border-2 rounded-lg p-4 ${
                hospital.beds.er.available > 5 ? 'border-green-400 bg-green-50' : 
                hospital.beds.er.available > 2 ? 'border-yellow-400 bg-yellow-50' : 
                'border-red-400 bg-red-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <h4 className="font-semibold">Emergency Room</h4>
                  </div>
                  <span className="text-2xl font-bold">{hospital.beds.er.available}</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium">{hospital.beds.er.available} of {hospital.beds.er.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Wait:</span>
                    <span className="font-medium">~{hospital.waitTimes.er} minutes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        hospital.beds.er.available > 5 ? 'bg-green-500' : 
                        hospital.beds.er.available > 2 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${(hospital.beds.er.available / hospital.beds.er.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* ICU Beds */}
              <div className={`border-2 rounded-lg p-4 ${
                hospital.beds.icu.available > 3 ? 'border-green-400 bg-green-50' : 
                hospital.beds.icu.available > 0 ? 'border-yellow-400 bg-yellow-50' : 
                'border-gray-400 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    <h4 className="font-semibold">ICU</h4>
                  </div>
                  <span className="text-2xl font-bold">{hospital.beds.icu.available}</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium">{hospital.beds.icu.available} of {hospital.beds.icu.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium">
                      {hospital.beds.icu.available > 0 ? 'Available' : 'Full'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        hospital.beds.icu.available > 3 ? 'bg-green-500' : 
                        hospital.beds.icu.available > 0 ? 'bg-yellow-500' : 
                        'bg-gray-400'
                      }`}
                      style={{ width: `${(hospital.beds.icu.available / hospital.beds.icu.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Pediatric Beds */}
              <div className={`border-2 rounded-lg p-4 ${
                hospital.beds.pediatric.available > 3 ? 'border-green-400 bg-green-50' : 
                hospital.beds.pediatric.available > 0 ? 'border-yellow-400 bg-yellow-50' : 
                'border-gray-400 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Baby className="w-5 h-5" />
                    <h4 className="font-semibold">Pediatric</h4>
                  </div>
                  <span className="text-2xl font-bold">{hospital.beds.pediatric.available}</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium">{hospital.beds.pediatric.available} of {hospital.beds.pediatric.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Wait:</span>
                    <span className="font-medium">~{hospital.waitTimes.pediatric} minutes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        hospital.beds.pediatric.available > 3 ? 'bg-green-500' : 
                        hospital.beds.pediatric.available > 0 ? 'bg-yellow-500' : 
                        'bg-gray-400'
                      }`}
                      style={{ width: `${(hospital.beds.pediatric.available / hospital.beds.pediatric.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Maternity Beds */}
              <div className={`border-2 rounded-lg p-4 ${
                hospital.beds.maternity.available > 3 ? 'border-green-400 bg-green-50' : 
                hospital.beds.maternity.available > 0 ? 'border-yellow-400 bg-yellow-50' : 
                'border-gray-400 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <h4 className="font-semibold">Maternity</h4>
                  </div>
                  <span className="text-2xl font-bold">{hospital.beds.maternity.available}</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium">{hospital.beds.maternity.available} of {hospital.beds.maternity.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium">
                      {hospital.beds.maternity.available > 0 ? 'Available' : 'Full'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        hospital.beds.maternity.available > 3 ? 'bg-green-500' : 
                        hospital.beds.maternity.available > 0 ? 'bg-yellow-500' : 
                        'bg-gray-400'
                      }`}
                      style={{ width: `${(hospital.beds.maternity.available / hospital.beds.maternity.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hospital Information</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Type:</span>
                  <p>{hospital.type}</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <p className="text-blue-600">{hospital.contact.phone}</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Emergency Line:</span>
                  <p className="text-red-600 font-semibold">{hospital.contact.emergency}</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Trauma Level:</span>
                  <p>{hospital.features.traumaLevel}</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Specialties:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {hospital.specialties.map(specialty => (
                      <span key={specialty} className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Services & Amenities</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: '24/7 Emergency Services', available: hospital.features.has24EmergencyServices },
                  { label: 'On-site Laboratory', available: hospital.features.hasLaboratory },
                  { label: 'Advanced Imaging (CT, MRI)', available: hospital.features.hasImaging },
                  { label: 'Surgical Suites', available: hospital.features.hasSurgicalSuites },
                  { label: 'Pharmacy', available: hospital.features.hasPharmacy },
                  { label: 'Free Parking', available: hospital.features.hasFreeParking },
                  { label: 'Helicopter Pad', available: hospital.features.hasHelicopterPad },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                      item.available ? 'border-green-600 bg-green-50' : 'border-gray-400 bg-gray-50'
                    }`}>
                      {item.available && <span className="text-green-600 text-xs">✓</span>}
                      {!item.available && <span className="text-gray-400 text-xs">✗</span>}
                    </div>
                    <span className={item.available ? '' : 'text-gray-400'}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm">
                  <span className="text-gray-600 font-medium">Insurance Accepted:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {hospital.insurance.slice(0, 3).map(ins => (
                      <span key={ins} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {ins}
                      </span>
                    ))}
                    {hospital.insurance.length > 3 && (
                      <span className="text-xs text-gray-500">+{hospital.insurance.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
            Last updated: {new Date(hospital.lastUpdated).toLocaleString()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
