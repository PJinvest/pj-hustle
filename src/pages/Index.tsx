import { useState } from "react";
import { HustleCard } from "@/components/HustleCard";
import { PhaseDetails } from "@/components/PhaseDetails";
import { ThemeToggle } from "@/components/ThemeToggle";
import { globalHustles } from "@/data/globalHustles";

const Index = () => {
  const [selectedHustle, setSelectedHustle] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(0);

  if (selectedHustle !== null) {
    const hustle = globalHustles.find(h => h.id === selectedHustle);
    if (hustle) {
      return (
        <PhaseDetails 
          hustle={hustle} 
          selectedPhase={selectedPhase}
          onPhaseChange={setSelectedPhase}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
              Global Hustle
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              25 International Strategies • Earn $100-$500 daily • Scale globally
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Hustle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalHustles.map((hustle) => (
            <HustleCard
              key={hustle.id}
              hustle={hustle}
              onClick={() => setSelectedHustle(hustle.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;