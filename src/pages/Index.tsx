import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  MessageSquare, 
  Languages, 
  Video, 
  BookOpen, 
  Package, 
  PenTool, 
  ShoppingCart, 
  Calendar, 
  User, 
  Link, 
  Users, 
  Heart, 
  Lightbulb,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";
import { HustleCard } from "@/components/HustleCard";
import { PhaseDetails } from "@/components/PhaseDetails";
import { ThemeToggle } from "@/components/ThemeToggle";

const hustleIdeas = [
  {
    id: 1,
    title: "AI Prompt Packs",
    description: "Create targeted AI prompt collections for specific audiences",
    icon: FileText,
    earning: "R100-R250",
    difficulty: "Easy",
    links: [
      { name: "Gumroad", url: "https://gumroad.com", description: "Sell digital products easily" },
      { name: "Canva", url: "https://canva.com", description: "Design professional PDFs" },
      { name: "ChatGPT", url: "https://chat.openai.com", description: "Generate AI prompts" },
      { name: "Notion", url: "https://notion.so", description: "Create organized prompt collections" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual PDF Sales",
        description: "Create simple PDFs with Canva/Notion, sell via WhatsApp/Gumroad",
        tasks: ["Research target audience", "Create 10-20 quality prompts", "Design PDF with Canva", "Set up Gumroad store", "Market on WhatsApp groups"],
        timeframe: "1-2 weeks",
        investment: "R0-R50",
        expectedEarning: "R500-R2000/month"
      },
      {
        phase: 2,
        title: "Bundle & Premium Themes",
        description: "Create themed bundles and premium prompt collections",
        tasks: ["Create 3-5 themed bundles", "Design premium templates", "Set up email marketing", "Build customer base"],
        timeframe: "2-3 weeks",
        investment: "R200-R500",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 3,
        title: "Automated Delivery",
        description: "Automate sales and resell through Telegram channels",
        tasks: ["Set up automated Gumroad delivery", "Create Telegram channels", "Build affiliate network", "Scale marketing"],
        timeframe: "1 month",
        investment: "R500-R1000",
        expectedEarning: "R5000-R15000/month"
      }
    ]
  },
  {
    id: 2,
    title: "WhatsApp Bio & Auto-Reply Setup",
    description: "Professional WhatsApp Business setup for local businesses",
    icon: MessageSquare,
    earning: "R150-R300",
    difficulty: "Easy",
    links: [
      { name: "WhatsApp Business", url: "https://business.whatsapp.com", description: "Download WhatsApp Business app" },
      { name: "Meta Business", url: "https://business.facebook.com/tools/whatsapp", description: "WhatsApp Business features guide" },
      { name: "Local Facebook Groups", url: "https://facebook.com/groups", description: "Find local business groups" }
    ],
    phases: [
      {
        phase: 1,
        title: "Basic Setup Service",
        description: "Manual WhatsApp Business configuration for local shops",
        tasks: ["Learn WhatsApp Business features", "Create service templates", "Find first 5 clients", "Document process"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Package Solutions",
        description: "Complete packages with menus and price lists",
        tasks: ["Create menu templates", "Design price list formats", "Build package offerings", "Standardize pricing"],
        timeframe: "2 weeks",
        investment: "R100-R300",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Subscription Service",
        description: "Order forms and ongoing subscription management",
        tasks: ["Build order form system", "Create subscription tiers", "Automate client onboarding", "Scale operations"],
        timeframe: "3 weeks",
        investment: "R500-R1000",
        expectedEarning: "R8000-R20000/month"
      }
    ]
  },
  {
    id: 3,
    title: "Flyer/Menu Translation",
    description: "AI-powered translation services for local businesses",
    icon: Languages,
    earning: "R50-R200",
    difficulty: "Easy",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "AI translation tool" },
      { name: "Canva", url: "https://canva.com", description: "Design translated flyers" },
      { name: "Google Translate", url: "https://translate.google.com", description: "Quick translation reference" },
      { name: "Fiverr", url: "https://fiverr.com", description: "Study competitor pricing" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual Translation",
        description: "Use ChatGPT for English-local language translations",
        tasks: ["Master ChatGPT translation prompts", "Create quality templates", "Find local businesses", "Build portfolio"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Design Upsell",
        description: "Add flyer design services to translation offerings",
        tasks: ["Learn Canva design", "Create design templates", "Package translation + design", "Increase pricing"],
        timeframe: "2 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R7000/month"
      },
      {
        phase: 3,
        title: "Team Scaling",
        description: "Hire assistants and scale fulfillment",
        tasks: ["Recruit freelance translators", "Create quality standards", "Build order management", "Focus on marketing"],
        timeframe: "1 month",
        investment: "R1000-R2000",
        expectedEarning: "R7000-R20000/month"
      }
    ]
  },
  {
    id: 4,
    title: "Video Resume Scripts",
    description: "AI-generated scripts for personal video introductions",
    icon: Video,
    earning: "R200-R400",
    difficulty: "Medium",
    links: [
      { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice generation" },
      { name: "LinkedIn", url: "https://linkedin.com", description: "Find job seekers" },
      { name: "Fiverr", url: "https://fiverr.com", description: "List your services" },
      { name: "Upwork", url: "https://upwork.com", description: "Find freelance clients" }
    ],
    phases: [
      {
        phase: 1,
        title: "Script Writing",
        description: "Convert CVs to engaging video scripts using AI",
        tasks: ["Develop AI prompts for scripts", "Create script templates", "Test with pilot clients", "Refine process"],
        timeframe: "1-2 weeks",
        investment: "R0-R100",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Visual CV Bundles",
        description: "Add visual CV templates and bundles",
        tasks: ["Create visual CV templates", "Bundle script + visual CV", "Develop premium packages", "Market to professionals"],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "AI Voiceover Add-on",
        description: "Automated delivery with ElevenLabs voice generation",
        tasks: ["Integrate ElevenLabs API", "Create voiceover options", "Automate entire process", "Scale marketing"],
        timeframe: "1 month",
        investment: "R800-R1500",
        expectedEarning: "R12000-R30000/month"
      }
    ]
  },
  {
    id: 5,
    title: "Business Starter PDFs",
    description: "Step-by-step business guides for local hustles",
    icon: BookOpen,
    earning: "R150-R300",
    difficulty: "Medium",
    links: [
      { name: "Gumroad", url: "https://gumroad.com", description: "Sell digital guides" },
      { name: "Etsy", url: "https://etsy.com", description: "Digital marketplace" },
      { name: "Canva", url: "https://canva.com", description: "Design professional guides" },
      { name: "Telegram", url: "https://telegram.org", description: "Create sales channels" }
    ],
    phases: [
      {
        phase: 1,
        title: "Individual Guides",
        description: "Create specific business guides using Canva",
        tasks: ["Research popular local hustles", "Create detailed PDF guides", "Design with Canva", "Test market response"],
        timeframe: "2 weeks",
        investment: "R100-R200",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Digital Shop",
        description: "Build organized online shop for all guides",
        tasks: ["Set up professional shop", "Organize guide categories", "Create bundle offers", "Implement SEO"],
        timeframe: "2-3 weeks",
        investment: "R500-R800",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Licensing & Automation",
        description: "License to resellers and automate updates",
        tasks: ["Create reseller program", "Automate guide updates", "Build affiliate network", "Passive income focus"],
        timeframe: "1 month",
        investment: "R1000-R2000",
        expectedEarning: "R10000-R25000/month"
      }
    ]
  },
  {
    id: 6,
    title: "Voice Notes to Study PDFs",
    description: "Convert audio lectures to organized study materials",
    icon: FileText,
    earning: "R150-R300",
    difficulty: "Medium",
    links: [
      { name: "Otter.ai", url: "https://otter.ai", description: "AI transcription service" },
      { name: "Whisper by OpenAI", url: "https://openai.com/research/whisper", description: "Free transcription tool" },
      { name: "Canva", url: "https://canva.com", description: "Format study materials" },
      { name: "Student Facebook Groups", url: "https://facebook.com", description: "Find student clients" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual Conversion",
        description: "Use Whisper/Otter.ai for transcription and formatting",
        tasks: ["Master transcription tools", "Create formatting templates", "Find student clients", "Build quality process"],
        timeframe: "1 week",
        investment: "R100-R300",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Study Pack Creation",
        description: "Develop comprehensive study materials and packs",
        tasks: ["Create study pack templates", "Add visual elements", "Bundle multiple subjects", "Premium pricing"],
        timeframe: "2-3 weeks",
        investment: "R400-R700",
        expectedEarning: "R4000-R9000/month"
      },
      {
        phase: 3,
        title: "Tutor Partnerships",
        description: "Scale through partnerships with tutors and educators",
        tasks: ["Partner with local tutors", "Create revenue sharing", "Automate client acquisition", "Scale operations"],
        timeframe: "1 month",
        investment: "R800-R1500",
        expectedEarning: "R9000-R25000/month"
      }
    ]
  },
  {
    id: 7,
    title: "Digital Hustler Packs",
    description: "Complete digital setup for WhatsApp sellers",
    icon: Package,
    earning: "R300-R500",
    difficulty: "Medium",
    links: [
      { name: "WhatsApp Business", url: "https://business.whatsapp.com", description: "Business features guide" },
      { name: "Canva", url: "https://canva.com", description: "Design templates" },
      { name: "Telegram", url: "https://telegram.org", description: "Find WhatsApp sellers" },
      { name: "Facebook Marketplace", url: "https://facebook.com/marketplace", description: "Connect with local sellers" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Packs",
        description: "Create auto-replies, price lists, and order messages",
        tasks: ["Develop pack templates", "Create customization process", "Find perfume/cake sellers", "Document workflows"],
        timeframe: "2 weeks",
        investment: "R0-R200",
        expectedEarning: "R3000-R6000/month"
      },
      {
        phase: 2,
        title: "Template System",
        description: "Standardize into repeatable templates",
        tasks: ["Create template library", "Standardize pricing", "Build template customization", "Market to niches"],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R6000-R15000/month"
      },
      {
        phase: 3,
        title: "Dashboard Shop",
        description: "Automated dashboard for self-service purchases",
        tasks: ["Build dashboard interface", "Automate pack generation", "Payment integration", "Scale marketing"],
        timeframe: "1-2 months",
        investment: "R1000-R3000",
        expectedEarning: "R15000-R40000/month"
      }
    ]
  },
  {
    id: 8,
    title: "AI Product Descriptions",
    description: "ChatGPT-powered product descriptions for sellers",
    icon: PenTool,
    earning: "R20-R50",
    difficulty: "Easy",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "AI writing tool" },
      { name: "Fiverr", url: "https://fiverr.com", description: "List your services" },
      { name: "WhatsApp Business Groups", url: "https://chat.whatsapp.com", description: "Find seller groups" },
      { name: "Facebook Groups", url: "https://facebook.com/groups", description: "Local business communities" }
    ],
    phases: [
      {
        phase: 1,
        title: "Per-Item Service",
        description: "Individual product descriptions using ChatGPT",
        tasks: ["Perfect ChatGPT prompts", "Create quality templates", "Find WhatsApp sellers", "Build client base"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Bundle Offerings",
        description: "Package deals and bulk description services",
        tasks: ["Create bundle packages", "Offer bulk discounts", "Add category specialization", "Increase volume"],
        timeframe: "2 weeks",
        investment: "R100-R300",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Self-Service Generator",
        description: "Automated description generator tool",
        tasks: ["Build web interface", "Integrate AI API", "Payment processing", "Market automation tool"],
        timeframe: "1 month",
        investment: "R1000-R2500",
        expectedEarning: "R8000-R25000/month"
      }
    ]
  },
  {
    id: 9,
    title: "WhatsApp Ordering Systems",
    description: "Automated ordering flows for small businesses",
    icon: ShoppingCart,
    earning: "R300-R500",
    difficulty: "Medium",
    links: [
      { name: "WhatsApp Business API", url: "https://developers.facebook.com/docs/whatsapp", description: "Advanced features guide" },
      { name: "Zapier", url: "https://zapier.com", description: "Automation workflows" },
      { name: "Google Forms", url: "https://forms.google.com", description: "Create order forms" },
      { name: "Local Business Directories", url: "https://google.com/business", description: "Find potential clients" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual Setup",
        description: "Custom auto-reply systems for individual brands",
        tasks: ["Master WhatsApp flows", "Create setup templates", "Find small brands", "Document best practices"],
        timeframe: "2 weeks",
        investment: "R0-R100",
        expectedEarning: "R3000-R6000/month"
      },
      {
        phase: 2,
        title: "Feature Packages",
        description: "Enhanced packages with additional features",
        tasks: ["Add advanced features", "Create tier pricing", "Include training materials", "Upsell existing clients"],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R6000-R15000/month"
      },
      {
        phase: 3,
        title: "Automated Builder",
        description: "Form-based automation for quick system builds",
        tasks: ["Create form interface", "Automate system generation", "Self-service model", "Scale operations"],
        timeframe: "1-2 months",
        investment: "R1000-R2500",
        expectedEarning: "R15000-R35000/month"
      }
    ]
  },
  {
    id: 10,
    title: "Pricing Flyers",
    description: "Professional pricing flyers for small businesses",
    icon: FileText,
    earning: "R150-R400",
    difficulty: "Easy",
    links: [
      { name: "Canva", url: "https://canva.com", description: "Design professional flyers" },
      { name: "Fiverr", url: "https://fiverr.com", description: "Study competitor designs" },
      { name: "99designs", url: "https://99designs.com", description: "Design inspiration" },
      { name: "Local Facebook Groups", url: "https://facebook.com/groups", description: "Find local businesses" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Design",
        description: "Individual flyer design using Canva",
        tasks: ["Master Canva design", "Create design templates", "Find local businesses", "Build portfolio"],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Template Shop",
        description: "Sell ready-made flyer templates",
        tasks: ["Create template collection", "Set up template shop", "Add customization options", "Market templates"],
        timeframe: "2-3 weeks",
        investment: "R400-R800",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "Team Fulfillment",
        description: "Hire designers and scale operations",
        tasks: ["Recruit designers", "Create quality standards", "Automate order flow", "Focus on growth"],
        timeframe: "1 month",
        investment: "R1000-R2000",
        expectedEarning: "R12000-R30000/month"
      }
    ]
  },
  {
    id: 11,
    title: "Google Forms Setup",
    description: "Professional form creation for bookings and orders",
    icon: Calendar,
    earning: "R150-R300",
    difficulty: "Easy",
    links: [
      { name: "Google Forms", url: "https://forms.google.com", description: "Free form builder" },
      { name: "Calendly", url: "https://calendly.com", description: "Booking system inspiration" },
      { name: "Typeform", url: "https://typeform.com", description: "Advanced form features" },
      { name: "Local Service Providers", url: "https://google.com/maps", description: "Find potential clients" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Forms",
        description: "Individual Google Forms for appointments/orders",
        tasks: ["Master Google Forms", "Create form templates", "Add automation features", "Find service businesses"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R4000/month"
      },
      {
        phase: 2,
        title: "Template Library",
        description: "Pre-made form templates for different industries",
        tasks: ["Create industry templates", "Add advanced features", "Package with instructions", "Market template library"],
        timeframe: "2 weeks",
        investment: "R200-R500",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Automated Creation",
        description: "Custom site or Notion for automated form building",
        tasks: ["Build form creation tool", "Automate form generation", "Add payment processing", "Scale platform"],
        timeframe: "1 month",
        investment: "R800-R2000",
        expectedEarning: "R10000-R25000/month"
      }
    ]
  },
  {
    id: 12,
    title: "Digital Portfolios",
    description: "Professional online portfolios for students",
    icon: User,
    earning: "R100-R200",
    difficulty: "Easy",
    links: [
      { name: "Notion", url: "https://notion.so", description: "Portfolio templates" },
      { name: "GitHub Pages", url: "https://pages.github.com", description: "Free website hosting" },
      { name: "LinkedIn", url: "https://linkedin.com", description: "Professional networking" },
      { name: "Student WhatsApp Groups", url: "https://chat.whatsapp.com", description: "Find fellow students" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Portfolios",
        description: "Individual portfolios in Notion/Google Docs",
        tasks: ["Master Notion/Docs", "Create portfolio templates", "Find fellow students", "Build referral system"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Upgrade Templates",
        description: "Premium templates and additional features",
        tasks: ["Create premium templates", "Add interactive features", "Package with tutorials", "Upsell existing clients"],
        timeframe: "2 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Delivery",
        description: "Tutorial videos and automated template delivery",
        tasks: ["Create video tutorials", "Automate template delivery", "Build online course", "Scale through education"],
        timeframe: "3 weeks",
        investment: "R500-R1000",
        expectedEarning: "R8000-R20000/month"
      }
    ]
  },
  {
    id: 13,
    title: "Homework to PDF",
    description: "Professional formatting of study materials",
    icon: FileText,
    earning: "R200-R300",
    difficulty: "Easy",
    links: [
      { name: "Google Docs", url: "https://docs.google.com", description: "Document formatting" },
      { name: "Canva", url: "https://canva.com", description: "Professional PDF design" },
      { name: "Student Facebook Groups", url: "https://facebook.com", description: "Find student clients" },
      { name: "Fiverr", url: "https://fiverr.com", description: "List your services" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual Formatting",
        description: "Convert notes and photos to formatted PDFs",
        tasks: ["Master PDF formatting", "Create style templates", "Find student clients", "Build quality process"],
        timeframe: "1 week",
        investment: "R0-R100",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Study Bundles",
        description: "Past papers, visual summaries, and bundle packages",
        tasks: ["Create study bundles", "Add visual elements", "Package multiple subjects", "Market to schools"],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Outsourced Typing",
        description: "Hire typists and focus on business growth",
        tasks: ["Recruit typist team", "Create quality standards", "Automate client flow", "Focus on scaling"],
        timeframe: "1 month",
        investment: "R1000-R2000",
        expectedEarning: "R10000-R25000/month"
      }
    ]
  },
  {
    id: 14,
    title: "Link-in-Bio Pages",
    description: "Professional bio pages for WhatsApp sellers",
    icon: Link,
    earning: "R200-R350",
    difficulty: "Easy",
    links: [
      { name: "Carrd", url: "https://carrd.co", description: "Simple website builder" },
      { name: "Linktree", url: "https://linktr.ee", description: "Study competitor features" },
      { name: "Notion", url: "https://notion.so", description: "Create bio pages" },
      { name: "WhatsApp Business Groups", url: "https://chat.whatsapp.com", description: "Find sellers" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Pages",
        description: "Individual bio pages using Carrd/Notion",
        tasks: ["Master Carrd/Notion", "Create page templates", "Find WhatsApp sellers", "Build showcase portfolio"],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Design Upgrades",
        description: "Premium designs and enhanced features",
        tasks: ["Create premium designs", "Add advanced features", "Upsell existing clients", "Market premium tier"],
        timeframe: "2 weeks",
        investment: "R300-R600",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "Page Builder Platform",
        description: "Self-service page builder dashboard",
        tasks: ["Build page builder tool", "Automate page creation", "Add payment processing", "Scale platform"],
        timeframe: "1-2 months",
        investment: "R1000-R3000",
        expectedEarning: "R12000-R30000/month"
      }
    ]
  },
  {
    id: 15,
    title: "Tutor Finder Middleman",
    description: "Connect students with tutors for commission",
    icon: Users,
    earning: "R50-R150",
    difficulty: "Easy",
    links: [
      { name: "Google Forms", url: "https://forms.google.com", description: "Create tutor/student forms" },
      { name: "WhatsApp Groups", url: "https://chat.whatsapp.com", description: "Find tutors and students" },
      { name: "Facebook Groups", url: "https://facebook.com/groups", description: "Local education communities" },
      { name: "University Notice Boards", url: "#", description: "Post flyers on campus" }
    ],
    phases: [
      {
        phase: 1,
        title: "Manual Matching",
        description: "Connect students to tutors manually",
        tasks: ["Build tutor database", "Create student intake", "Manual matching process", "Collect referral fees"],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Tutor Network",
        description: "Build comprehensive tutor list and system",
        tasks: ["Expand tutor network", "Create rating system", "Add subject specializations", "Improve matching"],
        timeframe: "2-3 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Booking",
        description: "Google Forms system for automated matching",
        tasks: ["Create automated forms", "Build booking system", "Add payment processing", "Scale operations"],
        timeframe: "1 month",
        investment: "R500-R1000",
        expectedEarning: "R8000-R20000/month"
      }
    ]
  },
  {
    id: 16,
    title: "AI Quote Packs",
    description: "Motivational quotes and affirmations for resale",
    icon: Heart,
    earning: "R150-R300",
    difficulty: "Easy",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "Generate motivational quotes" },
      { name: "Canva", url: "https://canva.com", description: "Design quote wallpapers" },
      { name: "Etsy", url: "https://etsy.com", description: "Sell digital downloads" },
      { name: "Telegram", url: "https://telegram.org", description: "Create quote channels" }
    ],
    phases: [
      {
        phase: 1,
        title: "Quote Packs",
        description: "AI-generated quote wallpapers and PDFs",
        tasks: ["Generate quote collections", "Create wallpaper designs", "Package for resale", "Find initial customers"],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R1500-R4000/month"
      },
      {
        phase: 2,
        title: "Motivational Brand",
        description: "Build branded motivational content business",
        tasks: ["Create brand identity", "Expand content types", "Build social presence", "Develop loyal following"],
        timeframe: "2-3 weeks",
        investment: "R400-R800",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Marketplace Scaling",
        description: "Sell on Etsy, Telegram, and multiple platforms",
        tasks: ["Set up marketplace stores", "Create Telegram channels", "Automate content creation", "Scale distribution"],
        timeframe: "1 month",
        investment: "R800-R1500",
        expectedEarning: "R10000-R25000/month"
      }
    ]
  },
  {
    id: 17,
    title: "AI Hustle Generator",
    description: "Personalized hustle plans using ChatGPT",
    icon: Lightbulb,
    earning: "R100-R200",
    difficulty: "Medium",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "AI planning tool" },
      { name: "Typeform", url: "https://typeform.com", description: "Create questionnaires" },
      { name: "Google Forms", url: "https://forms.google.com", description: "Free form builder" },
      { name: "Fiverr", url: "https://fiverr.com", description: "List your services" }
    ],
    phases: [
      {
        phase: 1,
        title: "Custom Plans",
        description: "Personalized hustle plans via questionnaire",
        tasks: ["Create intake questionnaire", "Develop ChatGPT prompts", "Test plan quality", "Find first clients"],
        timeframe: "1-2 weeks",
        investment: "R0-R100",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Premium Bundles",
        description: "Enhanced plans with additional resources",
        tasks: ["Create premium tiers", "Add resource bundles", "Include follow-up support", "Market premium options"],
        timeframe: "2 weeks",
        investment: "R300-R600",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Platform",
        description: "Website or WhatsApp chatbot for automation",
        tasks: ["Build automated platform", "Integrate payment system", "Create chatbot flow", "Scale marketing"],
        timeframe: "1-2 months",
        investment: "R1000-R2500",
        expectedEarning: "R8000-R25000/month"
      }
    ]
  }
];

const Index = () => {
  const [selectedHustle, setSelectedHustle] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const selectedHustleData = selectedHustle ? hustleIdeas.find(h => h.id === selectedHustle) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-purple-100 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  PJ7 Hustle
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your step-by-step guide to income generation</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                17 Proven Strategies
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!selectedHustle ? (
          <div className="space-y-8">
            {/* Overview Section */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Transform Ideas Into Income
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each hustle follows the same proven 3-phase approach: Start lean (MVP), build systems, then automate for passive income.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
                <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/20">
                  <CardHeader className="text-center pb-3">
                    <Target className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <CardTitle className="text-lg text-purple-900 dark:text-purple-300">Phase 1: MVP</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-purple-700 dark:text-purple-300">Start with one client, one product. Validate and learn.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
                  <CardHeader className="text-center pb-3">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <CardTitle className="text-lg text-blue-900 dark:text-blue-300">Phase 2: Scale</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-blue-700 dark:text-blue-300">Build repeatable systems and standardized processes.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
                  <CardHeader className="text-center pb-3">
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <CardTitle className="text-lg text-green-900 dark:text-green-300">Phase 3: Automate</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-green-700 dark:text-green-300">Semi-automated income with minimal manual effort.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hustle Ideas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hustleIdeas.map((hustle, index) => (
                <HustleCard
                  key={hustle.id}
                  hustle={{...hustle, number: index + 1}}
                  onClick={() => setSelectedHustle(hustle.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Back Button */}
            <Button
              variant="outline"
              onClick={() => setSelectedHustle(null)}
              className="mb-4"
            >
              ← Back to All Hustles
            </Button>

            {/* Hustle Details */}
            {selectedHustleData && (
              <PhaseDetails
                hustle={selectedHustleData}
                selectedPhase={selectedPhase}
                onPhaseChange={setSelectedPhase}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
