
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CheckCircle, Clock, DollarSign, TrendingUp, Target, Calendar, ExternalLink, Rocket } from "lucide-react";

interface Phase {
  phase: number;
  title: string;
  description: string;
  tasks: string[];
  timeframe: string;
  investment: string;
  expectedEarning: string;
}

interface Hustle {
  id: number;
  title: string;
  description: string;
  icon: any;
  earning: string;
  difficulty: string;
  phases: Phase[];
  links?: {
    name: string;
    url: string;
    description: string;
  }[];
}

interface PhaseDetailsProps {
  hustle: Hustle;
  selectedPhase: number;
  onPhaseChange: (phase: number) => void;
  onBack: () => void;
}

export const PhaseDetails = ({ hustle, selectedPhase, onPhaseChange, onBack }: PhaseDetailsProps) => {
  const Icon = hustle.icon;
  const currentPhase = hustle.phases.find(p => p.phase === selectedPhase);
  
  const getPhaseColor = (phase: number) => {
    switch (phase) {
      case 1:
        return "from-purple-500 to-purple-600";
      case 2:
        return "from-blue-500 to-blue-600";
      case 3:
        return "from-green-500 to-green-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getPhaseProgress = (phase: number) => {
    return phase * 33.33;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          {/* Enhanced Header with Back Button */}
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-glass border border-border/30 rounded-xl text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-card"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">Back to Global Hustle</span>
            </button>
            <ThemeToggle />
          </div>
          {/* Spectacular Hustle Header */}
          <div className="relative mb-12 animate-slide-in">
            <Card className="glass-card border-0 overflow-hidden shadow-hover">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-gradient-shift" />
              <div className="absolute inset-0 shimmer" />
              
              <CardHeader className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  {/* Enhanced Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-60 animate-pulse-glow" />
                    <div className="relative p-6 bg-gradient-primary rounded-2xl shadow-glow">
                      <Icon className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <CardTitle className="text-4xl font-bold gradient-text mb-2 leading-tight">
                        {hustle.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-muted-foreground leading-relaxed">
                        {hustle.description}
                      </CardDescription>
                    </div>
                    
                    {/* Enhanced Badges */}
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-success text-success-foreground border-0 px-4 py-2 text-sm font-semibold shadow-glow">
                        💰 {hustle.earning} per sale
                      </Badge>
                      <Badge className="bg-gradient-accent text-accent-foreground border-0 px-4 py-2 text-sm font-semibold shadow-glow">
                        🎯 {hustle.difficulty} difficulty
                      </Badge>
                      <Badge className="bg-gradient-secondary text-secondary-foreground border-0 px-4 py-2 text-sm font-semibold shadow-glow">
                        🚀 3-Phase System
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Revolutionary Quick Start Section */}
          {hustle.links && hustle.links.length > 0 && (
            <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Card className="glass-card border-0 shadow-hover overflow-hidden">
                {/* Pulsing Background */}
                <div className="absolute inset-0 bg-gradient-secondary opacity-5 animate-pulse-glow" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-secondary rounded-lg animate-pulse-glow">
                      <Rocket className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">
                      🚀 Quick Start Launch Pad
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg text-muted-foreground">
                    Click these links to start implementing this hustle immediately. Each link is hand-picked for maximum results.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {hustle.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 bg-gradient-glass border border-border/30 rounded-xl hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-hover"
                      >
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-500 -z-10" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse" />
                            <span className="font-bold text-sm group-hover:text-primary-foreground">
                              {link.name}
                            </span>
                            <ExternalLink className="h-4 w-4 ml-auto group-hover:text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Phase Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>3-Phase Implementation Strategy</span>
          </CardTitle>
          <div className="space-y-4">
            <Progress value={getPhaseProgress(selectedPhase)} className="h-2" />
            <div className="grid grid-cols-3 gap-4">
              {hustle.phases.map((phase) => (
                <button
                  key={phase.phase}
                  onClick={() => onPhaseChange(phase.phase)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedPhase === phase.phase
                      ? 'border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getPhaseColor(phase.phase)} flex items-center justify-center text-white font-bold text-sm`}>
                      {phase.phase}
                    </div>
                    <span className="font-semibold dark:text-white">{phase.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Current Phase Details */}
      {currentPhase && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Phase Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getPhaseColor(currentPhase.phase)} flex items-center justify-center text-white font-bold`}>
                  {currentPhase.phase}
                </div>
                <div>
                  <CardTitle className="text-xl dark:text-white">{currentPhase.title}</CardTitle>
                  <CardDescription className="dark:text-gray-400">{currentPhase.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="dark:text-white">Action Steps</span>
                  </h4>
                  <ul className="space-y-2">
                    {currentPhase.tasks.map((task, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-purple-600 dark:text-purple-300">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase Metrics */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="dark:text-white">Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">{currentPhase.timeframe}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expected completion time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span className="dark:text-white">Investment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">{currentPhase.investment}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Initial capital needed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="dark:text-white">Expected Earning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">{currentPhase.expectedEarning}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly income potential</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Phase Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="dark:text-white">Phase Comparison Overview</CardTitle>
          <CardDescription className="dark:text-gray-400">See how each phase builds upon the previous one</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-3 font-semibold dark:text-white">Phase</th>
                  <th className="text-left p-3 font-semibold dark:text-white">Focus</th>
                  <th className="text-left p-3 font-semibold dark:text-white">Timeline</th>
                  <th className="text-left p-3 font-semibold dark:text-white">Investment</th>
                  <th className="text-left p-3 font-semibold dark:text-white">Expected Earning</th>
                </tr>
              </thead>
              <tbody>
                {hustle.phases.map((phase) => (
                  <tr
                    key={phase.phase}
                    className={`border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      selectedPhase === phase.phase ? 'bg-purple-50 dark:bg-purple-900/20' : ''
                    }`}
                  >
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getPhaseColor(phase.phase)} flex items-center justify-center text-white font-bold text-sm`}>
                          {phase.phase}
                        </div>
                        <span className="font-medium dark:text-white">{phase.title}</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{phase.description}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{phase.timeframe}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{phase.investment}</td>
                    <td className="p-3 font-semibold text-green-600">{phase.expectedEarning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
        </div>
      </div>
    </div>
  );
};
