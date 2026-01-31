import { useState } from 'react';
import { HospitalMap } from '@/app/components/HospitalMap';
import { PRDDocument } from '@/app/components/PRDDocument';
import { Hospital } from '@/app/data/hospitalData';

export default function App() {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [showPRD, setShowPRD] = useState(false);

  if (showPRD) {
    return <PRDDocument onClose={() => setShowPRD(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HospitalMap 
        selectedHospital={selectedHospital}
        onSelectHospital={setSelectedHospital}
        onShowPRD={() => setShowPRD(true)}
      />
    </div>
  );
}
