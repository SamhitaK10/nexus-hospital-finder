import { useState } from 'react';
import { Filter, X, AlertCircle, Heart, Baby, Users, MapPin, Clock, DollarSign } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Slider } from '@/app/components/ui/slider';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

interface FilterDialogProps {
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

export function FilterDialog({ onClose, onApplyFilters, activeFilters }: FilterDialogProps) {
  const [bedTypes, setBedTypes] = useState<string[]>(activeFilters.filter(f => ['er', 'icu', 'pediatric', 'maternity'].includes(f)));
  const [maxDistance, setMaxDistance] = useState(10);
  const [waitTime, setWaitTime] = useState('any');
  const [insurance, setInsurance] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);

  const handleApply = () => {
    const filters = [...bedTypes, ...insurance, ...features, `distance-${maxDistance}`, `wait-${waitTime}`];
    onApplyFilters(filters);
  };

  const handleClear = () => {
    setBedTypes([]);
    setMaxDistance(10);
    setWaitTime('any');
    setInsurance([]);
    setFeatures([]);
  };

  const toggleBedType = (type: string) => {
    setBedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleInsurance = (ins: string) => {
    setInsurance(prev => 
      prev.includes(ins) ? prev.filter(i => i !== ins) : [...prev, ins]
    );
  };

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Filter className="w-6 h-6" />
              Search & Filter Hospitals
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={handleClear}>
              Clear All
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Bed Type Filters */}
          <div>
            <h3 className="font-semibold mb-3">Bed Type Availability</h3>
            <div className="grid grid-cols-2 gap-3">
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  bedTypes.includes('er') ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleBedType('er')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Checkbox checked={bedTypes.includes('er')} />
                  <AlertCircle className={`w-5 h-5 ${bedTypes.includes('er') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className="font-semibold">Emergency Room (ER)</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Show hospitals with ER beds available</p>
              </div>

              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  bedTypes.includes('icu') ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleBedType('icu')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Checkbox checked={bedTypes.includes('icu')} />
                  <Heart className={`w-5 h-5 ${bedTypes.includes('icu') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className="font-semibold">Intensive Care (ICU)</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Critical care and monitoring units</p>
              </div>

              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  bedTypes.includes('pediatric') ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleBedType('pediatric')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Checkbox checked={bedTypes.includes('pediatric')} />
                  <Baby className={`w-5 h-5 ${bedTypes.includes('pediatric') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className="font-semibold">Pediatric</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Specialized care for children</p>
              </div>

              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  bedTypes.includes('maternity') ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleBedType('maternity')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Checkbox checked={bedTypes.includes('maternity')} />
                  <Users className={`w-5 h-5 ${bedTypes.includes('maternity') ? 'text-blue-600' : 'text-gray-600'}`} />
                  <span className="font-semibold">Maternity</span>
                </div>
                <p className="text-sm text-gray-600 ml-9">Labor, delivery, and postpartum care</p>
              </div>
            </div>
          </div>

          {/* Distance Filter */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Maximum Distance
            </h3>
            <div className="flex items-center gap-4">
              <Slider
                value={[maxDistance]}
                onValueChange={(value) => setMaxDistance(value[0])}
                min={1}
                max={50}
                step={1}
                className="flex-1"
              />
              <div className="border-2 border-blue-500 bg-blue-50 rounded px-4 py-2 min-w-[100px] text-center font-semibold">
                {maxDistance} miles
              </div>
            </div>
          </div>

          {/* Wait Time Filter */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Wait Time Preference
            </h3>
            <RadioGroup value={waitTime} onValueChange={setWaitTime}>
              <div className="space-y-2">
                <div className="border-2 border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="any" id="wait-any" />
                    <Label htmlFor="wait-any" className="flex-1 cursor-pointer">
                      <div className="font-medium">Any wait time</div>
                      <div className="text-sm text-gray-600">Show all hospitals regardless of wait</div>
                    </Label>
                  </div>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="30" id="wait-30" />
                    <Label htmlFor="wait-30" className="flex-1 cursor-pointer">
                      <div className="font-medium">Under 30 minutes</div>
                      <div className="text-sm text-gray-600">Shorter estimated wait times</div>
                    </Label>
                  </div>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-3 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="60" id="wait-60" />
                    <Label htmlFor="wait-60" className="flex-1 cursor-pointer">
                      <div className="font-medium">Under 60 minutes</div>
                      <div className="text-sm text-gray-600">Moderate wait times acceptable</div>
                    </Label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-2 gap-6">
            {/* Insurance */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Insurance
              </h3>
              <div className="space-y-2">
                {['Medicare', 'Medicaid', 'Private Insurance', 'Uninsured Accepted'].map(ins => (
                  <div key={ins} className="flex items-center gap-2 cursor-pointer" onClick={() => toggleInsurance(ins)}>
                    <Checkbox checked={insurance.includes(ins)} />
                    <Label className="cursor-pointer">{ins}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Features */}
            <div>
              <h3 className="font-semibold mb-3">Hospital Features</h3>
              <div className="space-y-2">
                {['Trauma Center', 'Teaching Hospital', '24/7 Emergency', 'On-site Pharmacy'].map(feature => (
                  <div key={feature} className="flex items-center gap-2 cursor-pointer" onClick={() => toggleFeature(feature)}>
                    <Checkbox checked={features.includes(feature)} />
                    <Label className="cursor-pointer">{feature}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button onClick={handleApply} className="flex-1">
              Apply Filters ({bedTypes.length + insurance.length + features.length} active)
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
