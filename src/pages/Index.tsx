import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, DollarSign, TrendingUp, Users, Zap } from "lucide-react";
import Header from "@/components/Header";

const hustleIdeas = [
  {
    id: 1,
    title: "Freelance Writing",
    description: "Offer your writing skills to businesses and individuals.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 5000,
      growth: 20,
      users: 150,
    },
  },
  {
    id: 2,
    title: "Affiliate Marketing",
    description: "Promote other companies' products and earn a commission.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 3000,
      growth: 15,
      users: 100,
    },
  },
  {
    id: 3,
    title: "Online Courses",
    description: "Create and sell courses on platforms like Udemy or Teachable.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 7000,
      growth: 25,
      users: 200,
    },
  },
  {
    id: 4,
    title: "Dropshipping",
    description: "Sell products online without holding any inventory.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 4000,
      growth: 18,
      users: 120,
    },
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "Manage social media accounts for businesses.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 6000,
      growth: 22,
      users: 180,
    },
  },
  {
    id: 6,
    title: "Blogging",
    description: "Share your expertise and monetize through ads or affiliate links.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 2500,
      growth: 12,
      users: 80,
    },
  },
  {
    id: 7,
    title: "Virtual Assistant",
    description: "Provide administrative, technical, or creative assistance to clients.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 4500,
      growth: 20,
      users: 140,
    },
  },
  {
    id: 8,
    title: "E-commerce Store",
    description: "Sell your own products through an online store.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 8000,
      growth: 30,
      users: 250,
    },
  },
  {
    id: 9,
    title: "Mobile App Development",
    description: "Create and sell mobile applications.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 9000,
      growth: 35,
      users: 300,
    },
  },
  {
    id: 10,
    title: "Consulting",
    description: "Offer your expertise to businesses as a consultant.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 7500,
      growth: 28,
      users: 220,
    },
  },
  {
    id: 11,
    title: "Photography",
    description: "Sell your photos online or offer photography services.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 3500,
      growth: 16,
      users: 110,
    },
  },
  {
    id: 12,
    title: "Web Design",
    description: "Design and develop websites for clients.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 6500,
      growth: 24,
      users: 190,
    },
  },
  {
    id: 13,
    title: "YouTube Channel",
    description: "Create content and monetize through ads and sponsorships.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 5500,
      growth: 21,
      users: 160,
    },
  },
  {
    id: 14,
    title: "Podcasting",
    description: "Create and monetize a podcast.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 3200,
      growth: 14,
      users: 90,
    },
  },
  {
    id: 15,
    title: "Online Tutoring",
    description: "Offer tutoring services online.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 4800,
      growth: 19,
      users: 130,
    },
  },
  {
    id: 16,
    title: "Graphic Design",
    description: "Offer graphic design services to businesses.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 5200,
      growth: 23,
      users: 170,
    },
  },
  {
    id: 17,
    title: "SEO Services",
    description: "Help businesses improve their search engine rankings.",
    phases: ["Start Lean", "Build Systems", "Automate"],
    metrics: {
      revenue: 7200,
      growth: 26,
      users: 210,
    },
  },
];

const Index = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            PJ7 Hustle Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform ideas into income with 17 proven strategies. Each hustle follows a 3-phase approach: Start lean, build systems, then automate for passive income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hustleIdeas.map((hustle, index) => (
            <Card key={hustle.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {hustle.title}
                  <Badge variant="secondary">Phase: {hustle.phases[0]}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{hustle.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" /> Revenue:
                  </span>
                  <span>${hustle.metrics.revenue}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4" /> Growth:
                  </span>
                  <span>{hustle.metrics.growth}%</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4" /> Users:
                  </span>
                  <span>{hustle.metrics.users}</span>
                </div>
                <Collapsible open={openCards.includes(index)} onOpenChange={() => toggleCard(index)}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Learn More
                      {openCards.includes(index) ? (
                        <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li>Start Lean: {hustle.phases[0]}</li>
                      <li>Build Systems: {hustle.phases[1]}</li>
                      <li>Automate: {hustle.phases[2]}</li>
                    </ul>
                    <Button variant="outline" className="mt-4 w-full">
                      <Zap className="mr-2 h-4 w-4" /> Get Started
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
