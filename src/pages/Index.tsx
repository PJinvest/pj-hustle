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
        tasks: [
          "Research target audience: Join Facebook groups for entrepreneurs, students, or content creators. Identify their pain points - what tasks take them hours that AI could solve in minutes?",
          "Create 10-20 quality prompts: Focus on one niche (e.g., 'Social Media Content Creation'). Example prompts: 'Write 5 Instagram captions for a fitness brand promoting protein powder' or 'Create a week's worth of LinkedIn posts for a marketing consultant'",
          "Design PDF with Canva: Use their template library, add your branding, organize prompts by category. Include examples of outputs and usage instructions. Make it visually appealing with icons and consistent formatting",
          "Set up Gumroad store: Create compelling product descriptions, set pricing at R150, add preview images. Enable instant digital delivery and create thank-you messages with usage tips",
          "Market on WhatsApp groups: Join 5-10 relevant business groups, share value first (free tips), then introduce your product. Create a compelling pitch: 'Save 10 hours weekly with these proven AI prompts'"
        ],
        timeframe: "1-2 weeks",
        investment: "R0-R50",
        expectedEarning: "R500-R2000/month"
      },
      {
        phase: 2,
        title: "Bundle & Premium Themes",
        description: "Create themed bundles and premium prompt collections",
        tasks: [
          "Create 3-5 themed bundles: 'Complete Marketing Kit' (50 prompts), 'Student Success Pack' (academic prompts), 'Small Business Starter' (business prompts). Price bundles at R300-R500",
          "Design premium templates: Use Canva Pro features, create interactive PDFs with clickable links, add bonus content like video tutorials or exclusive Facebook group access",
          "Set up email marketing: Use Mailchimp free tier, create welcome sequences, send weekly tips with new prompts. Build relationship with customers for repeat sales",
          "Build customer base: Offer affiliate commissions (20%) to customers who refer others. Create testimonial campaigns, showcase customer success stories on social media"
        ],
        timeframe: "2-3 weeks",
        investment: "R200-R500",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 3,
        title: "Automated Delivery",
        description: "Automate sales and resell through Telegram channels",
        tasks: [
          "Set up automated Gumroad delivery: Create email sequences, automated thank-you messages, upsell sequences for additional products. Use Zapier to connect with other tools",
          "Create Telegram channels: Build 'AI Prompts Daily' channel, share free prompts daily to build audience, then promote paid collections. Use channel subscribers for market research",
          "Build affiliate network: Recruit 10-20 affiliates from your customer base, provide them with marketing materials, track sales with unique codes. Offer graduated commission structure",
          "Scale marketing: Launch on Instagram with prompt previews, create YouTube channel with 'How to use AI prompts' tutorials, partner with influencers in your niche for product reviews"
        ],
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
        tasks: [
          "Learn WhatsApp Business features: Master catalog setup, auto-replies, business hours, labels for customer management. Practice with your own business account first",
          "Create service templates: Develop 5 standard packages - 'Basic Setup' (R150), 'Premium Setup' (R250), 'Full Package' (R350) with different feature levels. Include welcome messages, FAQs, ordering process",
          "Find first 5 clients: Visit local shops, hair salons, restaurants. Offer to set up their WhatsApp Business for free to build portfolio. Take before/after screenshots for marketing",
          "Document process: Create step-by-step guides for each service, time how long each takes, identify common client questions. Build FAQ document for efficiency"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Package Solutions",
        description: "Complete packages with menus and price lists",
        tasks: [
          "Create menu templates: Design 10 different menu templates in Canva for restaurants, salons, retail stores. Include QR codes, pricing tables, contact information. Make them easily customizable",
          "Design price list formats: Create professional price lists for different industries - beauty services, food delivery, retail products. Include terms and conditions, payment options",
          "Build package offerings: 'Starter Package' (R300) - basic setup + menu, 'Professional Package' (R500) - full setup + menu + auto-replies, 'Premium Package' (R750) - everything + monthly maintenance",
          "Standardize pricing: Create clear pricing structure based on complexity and time. Offer payment plans for larger packages. Include revision rounds and support period"
        ],
        timeframe: "2 weeks",
        investment: "R100-R300",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Subscription Service",
        description: "Order forms and ongoing subscription management",
        tasks: [
          "Build order form system: Create Google Forms for client intake, include business type, current setup, specific needs. Automate follow-up emails with service timelines",
          "Create subscription tiers: 'Maintenance Pro' (R200/month) - monthly updates, new features, priority support. 'Growth Package' (R400/month) - includes marketing campaigns, analytics reports",
          "Automate client onboarding: Develop welcome packets, setup checklists, training videos for clients. Create system for tracking client progress and satisfaction",
          "Scale operations: Hire 2-3 assistants to handle basic setups while you focus on complex clients and business development. Create training materials and quality standards"
        ],
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
        tasks: [
          "Master ChatGPT translation prompts: Develop prompts like 'Translate this restaurant menu from English to Afrikaans, keeping cultural context and food terms accurate. Make it sound natural for local customers.' Test with different content types",
          "Create quality templates: Build templates for common translation types - restaurant menus, service flyers, product descriptions. Include formatting guidelines and cultural adaptation notes",
          "Find local businesses: Target tourist areas, international restaurants, expat-owned businesses. Offer sample translations to demonstrate quality. Focus on high-traffic areas with diverse clientele",
          "Build portfolio: Create before/after examples showing English and translated versions. Include testimonials from satisfied clients. Showcase different industries and languages"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Design Upsell",
        description: "Add flyer design services to translation offerings",
        tasks: [
          "Learn Canva design: Master typography for different languages, understand text expansion/contraction in translations. Learn about color psychology across cultures",
          "Create design templates: Develop 15 professional templates for different industries - restaurants, beauty salons, retail stores. Make them easily customizable with translated text",
          "Package translation + design: Offer 'Complete Package' - translation + professional design for R400-R600. Include multiple format options (print, digital, social media)",
          "Increase pricing: Position as premium service. 'Translation only' (R100), 'Translation + Basic Design' (R250), 'Premium Package' (R400) with revisions and multiple formats"
        ],
        timeframe: "2 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R7000/month"
      },
      {
        phase: 3,
        title: "Team Scaling",
        description: "Hire assistants and scale fulfillment",
        tasks: [
          "Recruit freelance translators: Find native speakers for popular local languages. Test their quality with sample projects. Build team of 3-5 reliable translators",
          "Create quality standards: Develop quality checklists, review processes, client approval workflows. Implement 2-tier review system for accuracy",
          "Build order management: Create system for tracking orders, deadlines, payments. Use project management tools like Trello or Asana. Automate client communication",
          "Focus on marketing: While team handles fulfillment, focus on business development. Partner with printing shops, marketing agencies, business consultants for referrals"
        ],
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
        tasks: [
          "Develop AI prompts for scripts: Create prompts like 'Convert this CV into a compelling 60-second video script that highlights achievements and personality. Include hooks, smooth transitions, and call-to-action.' Test with different career levels",
          "Create script templates: Build templates for different industries - tech, healthcare, marketing, education. Include intro hooks, achievement highlights, personality elements, and strong closings",
          "Test with pilot clients: Find 5 job seekers willing to test your service for free. Record their feedback on script effectiveness. Use their success stories as testimonials",
          "Refine process: Develop intake forms to gather CV info, career goals, target companies. Create revision process and quality standards. Time your workflow for pricing"
        ],
        timeframe: "1-2 weeks",
        investment: "R0-R100",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Visual CV Bundles",
        description: "Add visual CV templates and bundles",
        tasks: [
          "Create visual CV templates: Design 20 modern CV templates in Canva for different industries. Include infographic elements, skill bars, achievement highlights. Make them ATS-friendly",
          "Bundle script + visual CV: Offer 'Complete Package' - video script + matching visual CV for R600-R800. Include LinkedIn profile optimization and cover letter template",
          "Develop premium packages: 'Job Hunter Pro' (R1200) - video script + visual CV + LinkedIn optimization + interview prep materials + 30-day email support",
          "Market to professionals: Target LinkedIn, professional Facebook groups, university career centers. Offer free CV reviews to build relationships and showcase expertise"
        ],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "AI Voiceover Add-on",
        description: "Automated delivery with ElevenLabs voice generation",
        tasks: [
          "Integrate ElevenLabs API: Learn voice generation technology, test different voices and settings. Create samples for client selection. Develop quality standards for audio output",
          "Create voiceover options: Offer 'Script Only' (R400), 'Script + Voiceover' (R800), 'Complete Video Package' (R1200) with script, voiceover, and basic video editing",
          "Automate entire process: Build workflow from CV input to final video delivery. Create automated email sequences, file delivery systems, and client communication templates",
          "Scale marketing: Launch on TikTok with job search tips, create YouTube channel with CV and interview advice, partner with career coaches and recruitment agencies"
        ],
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
        tasks: [
          "Research popular local hustles: Survey Facebook groups, forums, and local communities. Identify top 10 most asked-about businesses - food trucks, cleaning services, tutoring, online stores, event planning, etc.",
          "Create detailed PDF guides: For each business, include startup costs breakdown, legal requirements, step-by-step launch process, marketing strategies, and first-month action plan. Make each guide 15-20 pages comprehensive",
          "Design with Canva: Use professional templates, consistent branding, clear sections with icons. Include checklists, templates, and resource lists. Add contact forms for follow-up support",
          "Test market response: Launch 3 guides first - 'Start Your Food Truck Business', 'Home Cleaning Service Guide', 'Online Tutoring Business'. Price at R200 each and track which performs best"
        ],
        timeframe: "2 weeks",
        investment: "R100-R200",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Digital Shop",
        description: "Build organized online shop for all guides",
        tasks: [
          "Set up professional shop: Create branded Gumroad store with professional logo, consistent design, clear navigation. Write compelling product descriptions with benefits and outcomes",
          "Organize guide categories: Group by industry (Food & Beverage, Services, Online Business, Retail), investment level (Under R5000, R5000-R20000, R20000+), and difficulty level",
          "Create bundle offers: 'Complete Business Starter Pack' (10 guides for R1500), 'Service Business Bundle' (5 guides for R800), 'Online Business Bundle' (5 guides for R800)",
          "Implement SEO: Research keywords like 'how to start business South Africa', optimize product titles and descriptions. Create blog content linking to guides"
        ],
        timeframe: "2-3 weeks",
        investment: "R500-R800",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Licensing & Automation",
        description: "License to resellers and automate updates",
        tasks: [
          "Create reseller program: Develop 'Business Coach License' allowing others to sell your guides for 40% commission. Provide marketing materials, training, and support",
          "Automate guide updates: Set up system to update guides quarterly with new regulations, trends, and opportunities. Create email list to notify customers of updates",
          "Build affiliate network: Recruit business coaches, consultants, and influencers to promote guides. Offer 30% commission and provide sales training and materials",
          "Passive income focus: Develop evergreen content, create automated email sequences for different customer segments, build membership site with monthly business tips and updated guides"
        ],
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
        tasks: [
          "Master transcription tools: Learn Otter.ai and Whisper for accurate transcription. Test with different audio qualities, accents, and technical subjects. Develop workflow for editing and cleaning transcripts",
          "Create formatting templates: Design study-friendly formats - bullet points, numbered lists, key concepts highlighted, definitions in boxes. Create templates for different subjects (science, humanities, business)",
          "Find student clients: Target university WhatsApp groups, study groups, and academic Facebook communities. Offer free sample conversions to demonstrate quality and build testimonials",
          "Build quality process: Develop editing checklist, spell-check procedures, formatting standards. Create system for handling unclear audio and technical terms"
        ],
        timeframe: "1 week",
        investment: "R100-R300",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Study Pack Creation",
        description: "Develop comprehensive study materials and packs",
        tasks: [
          "Create study pack templates: Develop 'Complete Study Pack' format - transcription + summary + key points + practice questions + flashcards. Design visually appealing layouts",
          "Add visual elements: Include diagrams, mind maps, flowcharts for complex topics. Use Canva to create infographics and visual summaries that enhance understanding",
          "Bundle multiple subjects: Offer 'Semester Pack' - all lectures for one subject (R800), 'Exam Prep Bundle' - key lectures + summaries + practice materials (R600)",
          "Premium pricing: Position as premium study service. 'Basic Transcription' (R150), 'Study Pack' (R300), 'Exam Prep Package' (R500) with guarantees and revision support"
        ],
        timeframe: "2-3 weeks",
        investment: "R400-R700",
        expectedEarning: "R4000-R9000/month"
      },
      {
        phase: 3,
        title: "Tutor Partnerships",
        description: "Scale through partnerships with tutors and educators",
        tasks: [
          "Partner with local tutors: Find 5-10 tutors willing to refer students for 20% commission. Provide them with marketing materials and samples of your work",
          "Create revenue sharing: Develop partnerships with study groups where you provide materials and they handle distribution. Share profits 60/40 in your favor",
          "Automate client acquisition: Build landing page with testimonials, create automated email sequences for inquiries, develop referral system with incentives for existing clients",
          "Scale operations: Hire part-time assistants for basic formatting while you focus on complex subjects and business development. Create training materials and quality standards"
        ],
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
        tasks: [
          "Develop pack templates: Create 'Hustler Complete Pack' including auto-reply messages, price lists, order forms, thank you messages, and customer service templates. Make them easily customizable",
          "Create customization process: Develop intake forms to understand seller's business, products, and style. Create 5 different personality styles (professional, friendly, trendy, luxury, casual)",
          "Find perfume/cake sellers: Target Facebook Marketplace, Instagram sellers, and local business WhatsApp groups. Offer free consultation to understand their needs and pain points",
          "Document workflows: Create standard operating procedures for each pack type, time requirements, and customization options. Build quality checklists and client approval processes"
        ],
        timeframe: "2 weeks",
        investment: "R0-R200",
        expectedEarning: "R3000-R6000/month"
      },
      {
        phase: 2,
        title: "Template System",
        description: "Standardize into repeatable templates",
        tasks: [
          "Create template library: Build 50+ templates for different industries - beauty products, food, clothing, electronics, services. Include seasonal variations and promotional templates",
          "Standardize pricing: 'Basic Pack' (R300) - essential templates, 'Professional Pack' (R500) - full templates + branding, 'Premium Pack' (R750) - everything + monthly updates",
          "Build template customization: Create form-based system where clients select their industry, style, and specific needs. Automate template generation based on selections",
          "Market to niches: Focus on specific seller communities - beauty product sellers, food entrepreneurs, clothing resellers. Create targeted marketing messages for each niche"
        ],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R6000-R15000/month"
      },
      {
        phase: 3,
        title: "Dashboard Shop",
        description: "Automated dashboard for self-service purchases",
        tasks: [
          "Build dashboard interface: Create user-friendly website where clients can select templates, customize them, and download immediately. Include preview options and editing tools",
          "Automate pack generation: Develop system that generates custom packs based on client selections. Include automated personalization, file generation, and delivery systems",
          "Payment integration: Set up secure payment processing with multiple options. Create subscription plans for ongoing template updates and support",
          "Scale marketing: Launch social media campaigns, create YouTube tutorials, partner with business influencers, and develop affiliate program for other entrepreneurs"
        ],
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
        tasks: [
          "Perfect ChatGPT prompts: Develop prompts like 'Write a compelling product description for [product] that highlights benefits, creates urgency, and includes emotional triggers. Target [audience] and focus on [key benefit]'. Test with different products",
          "Create quality templates: Build frameworks for different product types - beauty products, electronics, clothing, food items. Include benefit-focused language, emotional triggers, and call-to-action templates",
          "Find WhatsApp sellers: Join 10+ local seller groups, observe their current descriptions, offer free samples to 5 sellers to showcase your quality. Build relationships before selling",
          "Build client base: Start with R25 per description, offer package deals (5 descriptions for R100), create referral incentives. Focus on building long-term relationships rather than one-time sales"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Bundle Offerings",
        description: "Package deals and bulk description services",
        tasks: [
          "Create bundle packages: 'Starter Pack' (10 descriptions for R200), 'Professional Pack' (25 descriptions for R400), 'Complete Store Setup' (50 descriptions for R700) with bonus social media captions",
          "Offer bulk discounts: Volume pricing for established sellers. 50+ descriptions at R15 each, 100+ at R12 each. Create loyalty program with progressive discounts",
          "Add category specialization: Become expert in specific categories - beauty products, electronics, fashion. Develop specialized knowledge and premium pricing for expertise",
          "Increase volume: Hire 2-3 part-time writers, train them on your methods, handle 5-10 clients simultaneously. Create quality control processes and client satisfaction tracking"
        ],
        timeframe: "2 weeks",
        investment: "R100-R300",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Self-Service Generator",
        description: "Automated description generator tool",
        tasks: [
          "Build web interface: Create simple website where sellers input product details and get instant descriptions. Include options for tone, length, and target audience",
          "Integrate AI API: Connect to ChatGPT API for automated generation. Create multiple template options, allow customization, and provide instant preview functionality",
          "Payment processing: Set up subscription model - 'Basic' (R100/month for 50 descriptions), 'Pro' (R200/month for 150 descriptions), 'Enterprise' (R400/month unlimited)",
          "Market automation tool: Target larger sellers and small businesses. Create demo videos, offer free trials, build case studies showing improved sales with better descriptions"
        ],
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
        tasks: [
          "Master WhatsApp flows: Learn to create complex auto-reply sequences, catalog management, quick replies, and automated order processing. Practice with different business types",
          "Create setup templates: Develop standard flows for restaurants (menu → order → payment → delivery), retail stores (catalog → selection → payment → pickup), and service businesses (booking → confirmation → reminder)",
          "Find small brands: Target local restaurants, clothing stores, beauty salons. Offer free setup to first 3 clients in exchange for testimonials and case studies",
          "Document best practices: Create guides for different industries, common customer questions, payment integration options, and troubleshooting guides"
        ],
        timeframe: "2 weeks",
        investment: "R0-R100",
        expectedEarning: "R3000-R6000/month"
      },
      {
        phase: 2,
        title: "Feature Packages",
        description: "Enhanced packages with additional features",
        tasks: [
          "Add advanced features: Include inventory management, customer database, order tracking, promotional campaigns, and analytics reporting. Create tiered service offerings",
          "Create tier pricing: 'Basic System' (R400) - simple ordering, 'Professional System' (R700) - advanced features, 'Enterprise System' (R1200) - full automation + training",
          "Include training materials: Create video tutorials, user manuals, and ongoing support packages. Offer 'Training Package' (R300) for existing clients",
          "Upsell existing clients: Offer system upgrades, additional features, and maintenance packages. Create 'Monthly Maintenance' (R150/month) for updates and support"
        ],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R6000-R15000/month"
      },
      {
        phase: 3,
        title: "Automated Builder",
        description: "Form-based automation for quick system builds",
        tasks: [
          "Create form interface: Build web form where clients select their business type, required features, and preferences. Generate custom setup automatically based on inputs",
          "Automate system generation: Develop templates that auto-populate based on business type and client selections. Include automated testing and quality checks",
          "Self-service model: Create 'DIY Package' (R200) with automated setup, 'Assisted Package' (R400) with guided setup, 'Full Service' (R800) with custom development",
          "Scale operations: Build team of 3-5 technicians to handle implementations while you focus on sales and business development. Create training programs and quality standards"
        ],
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
        tasks: [
          "Master Canva design: Learn professional design principles - color theory, typography, layout balance. Practice with different business types and study successful flyer designs",
          "Create design templates: Build 20 base templates for different industries - restaurants, beauty salons, gyms, retail stores. Include space for logos, pricing, and contact information",
          "Find local businesses: Visit shopping centers, business districts, and local markets. Offer free flyer design to first 5 businesses in exchange for testimonials and permission to use as portfolio",
          "Build portfolio: Create before/after showcases, collect client testimonials, document results (increased sales, more inquiries). Use these for marketing to new clients"
        ],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Template Shop",
        description: "Sell ready-made flyer templates",
        tasks: [
          "Create template collection: Design 50+ professional templates across 10 industries. Include seasonal variations, promotional themes, and different size formats (A4, A5, social media)",
          "Set up template shop: Launch on Etsy, Gumroad, and local Facebook groups. Price templates at R50-R150 each, offer industry bundles for R400-R600",
          "Add customization options: Offer 'Template + Customization' service where clients buy template (R100) and pay extra for personalization (R150). Include 2 revision rounds",
          "Market templates: Create social media presence showing template examples, join design communities, offer free templates to build email list for marketing"
        ],
        timeframe: "2-3 weeks",
        investment: "R400-R800",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "Team Fulfillment",
        description: "Hire designers and scale operations",
        tasks: [
          "Recruit designers: Find 2-3 skilled designers willing to work on commission basis. Test their skills with sample projects and establish quality standards",
          "Create quality standards: Develop design guidelines, review processes, client communication protocols. Create training materials and style guides for consistency",
          "Automate order flow: Build system for client intake, design briefing, revision tracking, and file delivery. Use project management tools to track progress and deadlines",
          "Focus on growth: While team handles design work, focus on business development, client acquisition, and strategic partnerships with printing shops and marketing agencies"
        ],
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
        tasks: [
          "Master Google Forms: Learn advanced features - conditional logic, file uploads, payment integration, automated responses. Practice with different business scenarios",
          "Create form templates: Build forms for appointments (hair salons, doctors, consultants), orders (restaurants, bakeries, retail), and registrations (events, classes, workshops)",
          "Add automation features: Set up automated email confirmations, Google Calendar integration, response tracking in Google Sheets. Create follow-up sequences",
          "Find service businesses: Target hair salons, medical practices, fitness trainers, consultants. Offer free form setup to demonstrate value and build portfolio"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1500-R4000/month"
      },
      {
        phase: 2,
        title: "Template Library",
        description: "Pre-made form templates for different industries",
        tasks: [
          "Create industry templates: Build comprehensive template library - 'Restaurant Order Form', 'Salon Booking Form', 'Event Registration Form', 'Service Quote Request Form'. Include 30+ templates",
          "Add advanced features: Include payment processing, automated scheduling, customer data management, and reporting dashboards. Create multi-step forms for complex processes",
          "Package with instructions: Create video tutorials, setup guides, and customization instructions for each template. Offer 'Template + Setup' packages",
          "Market template library: Sell on Etsy, Gumroad, and business Facebook groups. Price individual templates at R100, offer industry bundles for R500, complete library for R1200"
        ],
        timeframe: "2 weeks",
        investment: "R200-R500",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Automated Creation",
        description: "Custom site or Notion for automated form building",
        tasks: [
          "Build form creation tool: Create web interface where clients select their industry, form type, and features. Generate custom forms automatically based on selections",
          "Automate form generation: Develop system that creates forms, sets up automation, and provides client training materials. Include automated testing and quality checks",
          "Add payment processing: Integrate subscription model - 'Basic' (R200/month) for 10 forms, 'Professional' (R400/month) for 50 forms, 'Enterprise' (R800/month) unlimited",
          "Scale platform: Build customer support system, create user community, develop affiliate program. Focus on recurring revenue and platform growth"
        ],
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
        tasks: [
          "Master Notion/Docs: Learn advanced formatting, template creation, sharing settings, and collaboration features. Practice with different portfolio styles and layouts",
          "Create portfolio templates: Build templates for different fields - design, writing, marketing, business, engineering. Include sections for projects, skills, experience, and testimonials",
          "Find fellow students: Target final-year students, recent graduates, and those applying for internships. Offer free portfolio creation to build testimonials and showcase quality",
          "Build referral system: Create incentive program where satisfied clients refer friends for 50% discount. Track referrals and reward top referrers with free services"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Upgrade Templates",
        description: "Premium templates and additional features",
        tasks: [
          "Create premium templates: Design advanced portfolios with interactive elements, custom domains, professional photography sections. Include personal branding guidance",
          "Add interactive features: Include contact forms, project galleries, testimonial sections, social media integration. Create mobile-responsive designs",
          "Package with tutorials: Create 'Portfolio Pro Package' (R300) with premium template + video tutorial + personal branding guide + LinkedIn optimization tips",
          "Upsell existing clients: Offer portfolio updates, additional sections, personal branding consultations, and interview preparation materials"
        ],
        timeframe: "2 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Delivery",
        description: "Tutorial videos and automated template delivery",
        tasks: [
          "Create video tutorials: Record comprehensive video guides for portfolio creation, personal branding, and online presence optimization. Include industry-specific advice",
          "Automate template delivery: Set up system for instant template delivery, automated email sequences, and client onboarding. Include progress tracking and support",
          "Build online course: Create 'Complete Personal Branding Course' (R800) with portfolio creation, LinkedIn optimization, interview skills, and career planning",
          "Scale through education: Launch YouTube channel with career tips, partner with university career centers, create affiliate program for career coaches"
        ],
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
        tasks: [
          "Master PDF formatting: Learn professional document design - proper headings, bullet points, spacing, fonts, and layouts. Practice with different academic subjects and note types",
          "Create style templates: Develop templates for different subjects - science (with formulas), humanities (essay format), business (report style), math (problem-solving format)",
          "Find student clients: Target study groups, academic Facebook groups, and university WhatsApp groups. Offer free formatting for first 5 students to build portfolio",
          "Build quality process: Create checklists for formatting standards, spell-check procedures, and client approval processes. Time your work to establish fair pricing"
        ],
        timeframe: "1 week",
        investment: "R0-R100",
        expectedEarning: "R2000-R4000/month"
      },
      {
        phase: 2,
        title: "Study Bundles",
        description: "Past papers, visual summaries, and bundle packages",
        tasks: [
          "Create study bundles: Develop 'Complete Study Pack' - formatted notes + visual summaries + practice questions + flashcards. Price at R400-R600 per subject",
          "Add visual elements: Include mind maps, flowcharts, infographics, and diagrams using Canva. Create visually appealing study materials that enhance learning",
          "Package multiple subjects: Offer 'Semester Bundle' (R1500) covering 5 subjects, 'Exam Prep Package' (R800) with key topics across subjects, 'Year-End Bundle' (R2000) complete notes",
          "Market to schools: Partner with study groups, tutoring centers, and student organizations. Offer group discounts and referral programs"
        ],
        timeframe: "2-3 weeks",
        investment: "R300-R600",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Outsourced Typing",
        description: "Hire typists and focus on business growth",
        tasks: [
          "Recruit typist team: Find 3-5 skilled typists willing to work on per-project basis. Test their speed, accuracy, and reliability. Provide training on your standards",
          "Create quality standards: Develop detailed guidelines, quality checklists, and review processes. Implement two-tier review system for accuracy and client satisfaction",
          "Automate client flow: Build system for client intake, project assignment, progress tracking, and delivery. Use project management tools to streamline operations",
          "Focus on scaling: While team handles typing, focus on business development, client acquisition, and strategic partnerships with educational institutions"
        ],
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
        tasks: [
          "Master Carrd/Notion: Learn to create professional bio pages with contact buttons, product showcases, testimonials, and social links. Practice with different business types",
          "Create page templates: Build templates for different seller types - beauty products, food, clothing, services. Include sections for about, products, testimonials, and contact",
          "Find WhatsApp sellers: Target Instagram sellers, Facebook Marketplace vendors, and local WhatsApp business groups. Offer free bio page to demonstrate value",
          "Build showcase portfolio: Create before/after examples, collect client testimonials, and document results (increased inquiries, better customer perception)"
        ],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R2000-R5000/month"
      },
      {
        phase: 2,
        title: "Design Upgrades",
        description: "Premium designs and enhanced features",
        tasks: [
          "Create premium designs: Develop advanced pages with custom branding, professional photography integration, product catalogs, and booking systems",
          "Add advanced features: Include contact forms, testimonial carousels, social media feeds, analytics tracking, and mobile optimization",
          "Upsell existing clients: Offer 'Premium Upgrade' (R300) with advanced features, 'Maintenance Package' (R100/month) for updates, 'Analytics Package' (R150) for tracking",
          "Market premium tier: Target established sellers and small business owners. Create case studies showing increased sales and professional credibility"
        ],
        timeframe: "2 weeks",
        investment: "R300-R600",
        expectedEarning: "R5000-R12000/month"
      },
      {
        phase: 3,
        title: "Page Builder Platform",
        description: "Self-service page builder dashboard",
        tasks: [
          "Build page builder tool: Create web interface where sellers can build bio pages using drag-and-drop editor. Include templates, customization options, and preview functionality",
          "Automate page creation: Develop system that generates pages based on user inputs, handles hosting, and provides analytics. Include SEO optimization and mobile responsiveness",
          "Add payment processing: Create subscription model - 'Basic' (R150/month) for simple pages, 'Professional' (R300/month) for advanced features, 'Enterprise' (R500/month) with full customization",
          "Scale platform: Build customer support system, create user tutorials, develop affiliate program. Focus on recurring revenue and platform growth"
        ],
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
        tasks: [
          "Build tutor database: Find 20-30 qualified tutors across popular subjects. Collect their qualifications, rates, availability, and teaching style. Create detailed profiles",
          "Create student intake: Develop intake forms to understand student needs, budget, preferred learning style, and schedule. Create system for tracking student requirements",
          "Manual matching process: Create systematic approach to match students with tutors based on subject, personality, location, and budget. Document successful matches",
          "Collect referral fees: Charge 10-15% commission on first month's tutoring fees. Create simple invoicing system and track payments from both parties"
        ],
        timeframe: "1 week",
        investment: "R0",
        expectedEarning: "R1000-R3000/month"
      },
      {
        phase: 2,
        title: "Tutor Network",
        description: "Build comprehensive tutor list and system",
        tasks: [
          "Expand tutor network: Recruit 50+ tutors across all subjects and grade levels. Include specialized tutors for difficult subjects and exam preparation",
          "Create rating system: Develop system for students to rate tutors, track success rates, and provide feedback. Use ratings to improve matching quality",
          "Add subject specializations: Create categories for different subjects, grade levels, and special needs. Include exam preparation specialists and adult education tutors",
          "Improve matching: Develop questionnaire to better understand learning styles, personality compatibility, and specific needs. Create trial session system"
        ],
        timeframe: "2-3 weeks",
        investment: "R200-R400",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Booking",
        description: "Google Forms system for automated matching",
        tasks: [
          "Create automated forms: Build sophisticated forms that collect detailed information and automatically suggest tutor matches based on criteria",
          "Build booking system: Create system for students to book trial sessions, schedule regular sessions, and make payments. Include automated reminders and confirmations",
          "Add payment processing: Integrate payment system that handles tutor payments, commission collection, and refunds. Create transparent fee structure",
          "Scale operations: Build customer service system, create quality assurance processes, develop partnerships with schools and educational institutions"
        ],
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
        tasks: [
          "Generate quote collections: Use ChatGPT to create 100+ motivational quotes for different themes - success, love, fitness, business, spirituality. Create 10 themed collections",
          "Create wallpaper designs: Design beautiful quote wallpapers using Canva with different styles - minimalist, colorful, nature backgrounds, geometric patterns. Create phone and desktop sizes",
          "Package for resale: Create 'Quote Pack Collections' with 50 quotes + wallpapers per theme. Price at R200-R300 per pack. Include PDF versions and social media formats",
          "Find initial customers: Target motivational Facebook groups, Instagram accounts, and personal development communities. Offer free sample packs to build credibility"
        ],
        timeframe: "1 week",
        investment: "R100-R200",
        expectedEarning: "R1500-R4000/month"
      },
      {
        phase: 2,
        title: "Motivational Brand",
        description: "Build branded motivational content business",
        tasks: [
          "Create brand identity: Develop 'Daily Inspiration' brand with logo, color scheme, and consistent visual style. Create brand guidelines and messaging framework",
          "Expand content types: Add daily affirmations, success stories, goal-setting templates, vision board templates. Create 'Complete Motivation Kit' with multiple content types",
          "Build social presence: Launch Instagram account with daily quotes, create TikTok with motivational content, build email list with daily inspiration messages",
          "Develop loyal following: Create Facebook group for customers, host weekly motivation calls, share success stories. Build community around your brand"
        ],
        timeframe: "2-3 weeks",
        investment: "R400-R800",
        expectedEarning: "R4000-R10000/month"
      },
      {
        phase: 3,
        title: "Marketplace Scaling",
        description: "Sell on Etsy, Telegram, and multiple platforms",
        tasks: [
          "Set up marketplace stores: Launch on Etsy, Gumroad, and Creative Market. Optimize product listings with SEO keywords and compelling descriptions",
          "Create Telegram channels: Build 'Daily Motivation' channel with 1000+ subscribers, share free quotes daily, promote premium packs weekly",
          "Automate content creation: Use AI to generate new quotes weekly, create templates for easy design updates, build content calendar for consistent posting",
          "Scale distribution: Partner with influencers for promotion, create affiliate program for customers, develop wholesale pricing for resellers"
        ],
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
        tasks: [
          "Create intake questionnaire: Build comprehensive form asking about skills, interests, available time, startup capital, goals, and preferences. Include 20-30 detailed questions",
          "Develop ChatGPT prompts: Create sophisticated prompts that generate personalized business plans based on client responses. Include market analysis, step-by-step plans, and resource lists",
          "Test plan quality: Work with 10 beta clients to refine your questionnaire and prompts. Ensure plans are actionable, realistic, and tailored to individual circumstances",
          "Find first clients: Target entrepreneur Facebook groups, Reddit communities, and professional networks. Offer discounted plans to build testimonials and refine process"
        ],
        timeframe: "1-2 weeks",
        investment: "R0-R100",
        expectedEarning: "R1500-R3000/month"
      },
      {
        phase: 2,
        title: "Premium Bundles",
        description: "Enhanced plans with additional resources",
        tasks: [
          "Create premium tiers: 'Basic Plan' (R200) - business idea + action steps, 'Premium Plan' (R400) - detailed plan + resources + templates, 'Complete Package' (R600) - everything + 30-day support",
          "Add resource bundles: Include business plan templates, marketing materials, financial projections, legal checklists, and industry-specific resources",
          "Include follow-up support: Offer email support, progress check-ins, plan revisions, and additional consultations. Create 'Accountability Partner' add-on service",
          "Market premium options: Target serious entrepreneurs willing to invest in quality planning. Create case studies showing successful plan implementations"
        ],
        timeframe: "2 weeks",
        investment: "R300-R600",
        expectedEarning: "R3000-R8000/month"
      },
      {
        phase: 3,
        title: "Automated Platform",
        description: "Website or WhatsApp chatbot for automation",
        tasks: [
          "Build automated platform: Create website where clients complete questionnaire and receive instant personalized plans. Include payment processing and plan delivery",
          "Integrate payment system: Set up automated billing for different plan tiers, subscription options for ongoing support, and affiliate commission tracking",
          "Create chatbot flow: Build WhatsApp chatbot that collects client information and generates plans automatically. Include follow-up sequences and upsell opportunities",
          "Scale marketing: Launch content marketing with business tips, create YouTube channel with entrepreneurship advice, partner with business coaches for referrals"
        ],
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
