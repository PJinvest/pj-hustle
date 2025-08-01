
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Global Hustle</span>
          </button>
          <ThemeToggle />
        </div>
      {/* Hustle Header */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 dark:border-purple-800 dark:from-purple-900/20 dark:to-blue-900/20">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl text-gray-900 dark:text-white">{hustle.title}</CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                {hustle.description}
              </CardDescription>
              <div className="flex space-x-4 mt-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  {hustle.earning} per sale
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {hustle.difficulty} difficulty
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Start Links */}
      {hustle.links && hustle.links.length > 0 && (
        <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-orange-900 dark:text-orange-300">
              <Rocket className="h-5 w-5" />
              <span>Quick Start Links - Get Started Now!</span>
            </CardTitle>
            <CardDescription className="text-orange-700 dark:text-orange-400">
              Click these links to start implementing this hustle immediately
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {hustle.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                        {link.name}
                      </span>
                      <ExternalLink className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
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
  );
};
