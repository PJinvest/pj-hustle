
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon, ExternalLink, Sparkles, TrendingUp, Zap } from "lucide-react";

interface HustleCardProps {
  hustle: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    earning: string;
    difficulty: string;
    number?: number;
    links?: {
      name: string;
      url: string;
      description: string;
    }[];
  };
  onClick: () => void;
}

export const HustleCard = ({ hustle, onClick }: HustleCardProps) => {
  const Icon = hustle.icon;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-gradient-success text-success-foreground shadow-glow";
      case "Medium":
        return "bg-gradient-secondary text-secondary-foreground shadow-glow";
      case "Hard":
        return "bg-gradient-accent text-accent-foreground shadow-glow";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Sparkles className="w-3 h-3" />;
      case "Medium":
        return <TrendingUp className="w-3 h-3" />;
      case "Hard":
        return <Zap className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Card onClick={onClick} className="group glass-card interactive-hover border-0 cursor-pointer relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-500" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {hustle.number && (
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow group-hover:scale-110 transition-transform duration-300">
                {hustle.number}
              </div>
            )}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <Badge className={`${getDifficultyColor(hustle.difficulty)} border-0 px-3 py-1 text-xs font-semibold flex items-center gap-1`}>
            {getDifficultyIcon(hustle.difficulty)}
            {hustle.difficulty}
          </Badge>
        </div>

        <CardTitle className="text-xl font-bold text-foreground leading-tight">
          {hustle.title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed">
          {hustle.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Earning Potential</p>
            <p className="text-lg font-bold text-success">{hustle.earning}</p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-gradient-primary text-primary-foreground border-0 hover:scale-105 transition-all duration-300 shadow-glow font-semibold"
          >
            Launch Now →
          </Button>
        </div>

        {/* Quick Start Links */}
        {hustle.links && hustle.links.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse" />
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Quick Start</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {hustle.links.slice(0, 2).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs bg-gradient-glass px-3 py-1.5 rounded-lg border border-border/30 text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <span className="font-medium">{link.name}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
              
              {hustle.links.length > 2 && (
                <div className="inline-flex items-center text-xs text-muted-foreground px-2 py-1">
                  +{hustle.links.length - 2} more
                </div>
              )}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">3-Phase System</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gradient-primary rounded-full" />
              <div className="w-2 h-2 bg-gradient-secondary rounded-full" />
              <div className="w-2 h-2 bg-gradient-success rounded-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
