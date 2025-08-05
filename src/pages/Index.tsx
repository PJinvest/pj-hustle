import { useState, useEffect } from "react";
import { HustleCard } from "@/components/HustleCard";
import { PhaseDetails } from "@/components/PhaseDetails";
import { ThemeToggle } from "@/components/ThemeToggle";
import { globalHustles } from "@/data/globalHustles";
import { Sparkles, TrendingUp, DollarSign, Globe, Zap, Target } from "lucide-react";

const Index = () => {
  const [selectedHustle, setSelectedHustle] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (selectedHustle !== null) {
    const hustle = globalHustles.find(h => h.id === selectedHustle);
    if (hustle) {
      return (
        <PhaseDetails 
          hustle={hustle} 
          selectedPhase={selectedPhase}
          onPhaseChange={setSelectedPhase}
          onBack={() => setSelectedHustle(null)}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-secondary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6 shimmer">
                  <Sparkles className="w-4 h-4" />
                  <span>25 Proven Strategies</span>
                </div>
                
                <h1 className="text-7xl font-bold gradient-text mb-6 leading-tight">
                  Global Hustle
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Transform your financial future with international money-making strategies. 
                  <span className="text-primary font-semibold"> Earn $100-$500 daily</span> from anywhere in the world.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-3 mx-auto glow-primary">
                      <DollarSign className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">$100-500</h3>
                    <p className="text-muted-foreground">Daily Earning Potential</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-xl mb-3 mx-auto glow">
                      <Globe className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">25+</h3>
                    <p className="text-muted-foreground">International Strategies</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-success rounded-xl mb-3 mx-auto glow">
                      <Target className="w-8 h-8 text-success-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">3 Phases</h3>
                    <p className="text-muted-foreground">Structured Growth Path</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      <span>Start Your Journey</span>
                    </div>
                  </button>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <span>Scale globally in 3 phases</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Hustle Grid */}
          <div className={`${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Hustle</h2>
              <p className="text-muted-foreground">Each strategy includes a complete 3-phase roadmap to success</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {globalHustles.map((hustle, index) => (
                <div 
                  key={hustle.id} 
                  className={`${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <HustleCard
                    hustle={hustle}
                    onClick={() => setSelectedHustle(hustle.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Theme Toggle */}
          <div className="lg:hidden fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;