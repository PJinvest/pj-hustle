
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
  };
  onClick: () => void;
}

export const HustleCard = ({ hustle, onClick }: HustleCardProps) => {
  const Icon = hustle.icon;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-purple-300 cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div className="flex space-x-2">
            <Badge variant="secondary" className={getDifficultyColor(hustle.difficulty)}>
              {hustle.difficulty}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
          {hustle.title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {hustle.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Earning Potential</p>
            <p className="font-semibold text-green-600">{hustle.earning}</p>
          </div>
          <Button variant="outline" size="sm" className="group-hover:bg-purple-50 group-hover:border-purple-300">
            View Details →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
