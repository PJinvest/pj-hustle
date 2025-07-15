
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HustleCardProps {
  hustle: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    earning: string;
    difficulty: string;
    number?: number;
  };
  onClick: () => void;
}

export const HustleCard = ({ hustle, onClick }: HustleCardProps) => {
  const Icon = hustle.icon;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 cursor-pointer bg-white dark:bg-gray-800" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {hustle.number && (
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full flex items-center justify-center text-sm font-semibold">
                {hustle.number}
              </div>
            )}
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex space-x-2">
            <Badge variant="secondary" className={getDifficultyColor(hustle.difficulty)}>
              {hustle.difficulty}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors dark:text-white">
          {hustle.title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2 dark:text-gray-400">
          {hustle.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Earning Potential</p>
            <p className="font-semibold text-green-600 dark:text-green-400">{hustle.earning}</p>
          </div>
          <Button variant="outline" size="sm" className="group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 group-hover:border-purple-300 dark:group-hover:border-purple-600">
            View Details →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
