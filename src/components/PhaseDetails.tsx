
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, DollarSign, TrendingUp, Target, Calendar } from "lucide-react";

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
}

interface PhaseDetailsProps {
  hustle: Hustle;
  selectedPhase: number;
  onPhaseChange: (phase: number) => void;
}

export const PhaseDetails = ({ hustle, selectedPhase, onPhaseChange }: PhaseDetailsProps) => {
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
    <div className="space-y-6">
      {/* Hustle Header */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl text-gray-900">{hustle.title}</CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-1">
                {hustle.description}
              </CardDescription>
              <div className="flex space-x-4 mt-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {hustle.earning} per sale
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {hustle.difficulty} difficulty
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

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
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getPhaseColor(phase.phase)} flex items-center justify-center text-white font-bold text-sm`}>
                      {phase.phase}
                    </div>
                    <span className="font-semibold">{phase.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">{phase.description}</p>
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
                  <CardTitle className="text-xl">{currentPhase.title}</CardTitle>
                  <CardDescription>{currentPhase.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Action Steps</span>
                  </h4>
                  <ul className="space-y-2">
                    {currentPhase.tasks.map((task, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-purple-600">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{task}</span>
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
                  <span>Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">{currentPhase.timeframe}</p>
                <p className="text-sm text-gray-600">Expected completion time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span>Investment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">{currentPhase.investment}</p>
                <p className="text-sm text-gray-600">Initial capital needed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Expected Earning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">{currentPhase.expectedEarning}</p>
                <p className="text-sm text-gray-600">Monthly income potential</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Phase Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Phase Comparison Overview</CardTitle>
          <CardDescription>See how each phase builds upon the previous one</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Phase</th>
                  <th className="text-left p-3 font-semibold">Focus</th>
                  <th className="text-left p-3 font-semibold">Timeline</th>
                  <th className="text-left p-3 font-semibold">Investment</th>
                  <th className="text-left p-3 font-semibold">Expected Earning</th>
                </tr>
              </thead>
              <tbody>
                {hustle.phases.map((phase) => (
                  <tr
                    key={phase.phase}
                    className={`border-b hover:bg-gray-50 ${
                      selectedPhase === phase.phase ? 'bg-purple-50' : ''
                    }`}
                  >
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getPhaseColor(phase.phase)} flex items-center justify-center text-white font-bold text-sm`}>
                          {phase.phase}
                        </div>
                        <span className="font-medium">{phase.title}</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-600">{phase.description}</td>
                    <td className="p-3 text-gray-600">{phase.timeframe}</td>
                    <td className="p-3 text-gray-600">{phase.investment}</td>
                    <td className="p-3 font-semibold text-green-600">{phase.expectedEarning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
