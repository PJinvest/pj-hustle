import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HustleCard } from "@/components/HustleCard";
import { PhaseDetails } from "@/components/PhaseDetails";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  PenTool, 
  MessageSquare, 
  FileText, 
  Users, 
  Camera, 
  TrendingUp, 
  ArrowLeft 
} from "lucide-react";

const hustles = [
  {
    id: 1,
    title: "Logo Design Service",
    description: "Create professional logos for small businesses and startups using design tools like Canva Pro or Adobe Illustrator.",
    icon: PenTool,
    earning: "$50-200 per logo",
    difficulty: "Easy",
    number: 1,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Launch your basic logo design service",
        tasks: [
          "Set up Canva Pro account ($12.99/month) and master logo templates - spend 2-3 hours learning advanced features like brand kits, custom fonts, and transparent backgrounds",
          "Create 10-15 sample logos in different styles (minimalist, vintage, modern, tech, restaurant themes) - save these as portfolio pieces on Behance or Dribbble",
          "Post on local Facebook groups offering logos for $25-50 - search for '[Your City] Business Network' or 'Small Business [Your Area]' groups",
          "Create simple Gumroad store listing 'Logo Design Service' with your portfolio images and clear pricing tiers (Basic $25, Premium $50, Complete Brand Kit $100)",
          "Study 20+ competitor logos on 99designs and Fiverr - note popular color schemes, typography choices, and industry-specific design trends"
        ],
        timeframe: "1-2 weeks",
        investment: "$15-30",
        expectedEarning: "$200-500"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Expand your reach and increase pricing",
        tasks: [
          "Raise prices to $75-150 per logo after completing 10+ orders - create 'Premium Designer' positioning with before/after case studies",
          "Create logo packages: Basic Logo ($75), Logo + Business Card ($125), Complete Brand Identity ($200) including color palette, fonts, and usage guidelines",
          "Join 15+ Facebook business groups, post helpful design tips weekly, soft-pitch your services in comments (not main posts to avoid spam rules)",
          "Partner with 3-5 local web designers, offer 20% commission for referrals - reach out via LinkedIn with portfolio and partnership proposal template",
          "Set up automated Calendly booking system with design questionnaire - ask about industry, target audience, preferred colors, competitors they like/dislike"
        ],
        timeframe: "1-2 months",
        investment: "$50-100",
        expectedEarning: "$1,000-2,500"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build systems for consistent income",
        tasks: [
          "Hire 2-3 freelance designers from Philippines/India at $5-15 per logo via Upwork - create detailed brand guidelines and approval process",
          "Create premium pricing tier ($200-500) for 'Senior Designer' work - position as exclusive service with 1-week turnaround and 3 revision rounds",
          "Build email sequence for past clients: 6-month brand refresh offers, business card updates, social media template packages",
          "Launch referral program: existing clients get $25 credit for each new customer they bring - create shareable referral links and tracking system",
          "Develop logo subscription service for agencies: $297/month for 10 logos - market to marketing agencies, web design firms, and business consultants"
        ],
        timeframe: "2-3 months",
        investment: "$200-500",
        expectedEarning: "$3,000-8,000"
      }
    ],
    links: [
      { name: "Canva Pro", url: "https://www.canva.com/pro/", description: "Professional design tools" },
      { name: "Gumroad", url: "https://gumroad.com", description: "Sell your design services" },
      { name: "99designs", url: "https://99designs.com", description: "Study competitor pricing" },
      { name: "Behance", url: "https://www.behance.net", description: "Showcase your portfolio" }
    ]
  },
  {
    id: 2,
    title: "Social Media Manager",
    description: "Manage social media accounts for local businesses, creating content and growing their online presence.",
    icon: MessageSquare,
    earning: "$300-1500 per client",
    difficulty: "Medium",
    number: 2,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Start managing your first clients",
        tasks: [
          "Master ChatGPT prompts for content creation - learn specific prompts like 'Create 10 Instagram captions for a [type] business targeting [audience] with trending hashtags'",
          "Create content templates for 5 business types (restaurants, fitness, beauty, retail, professional services) - develop 30-day content calendars for each",
          "Offer free 1-week trial to 3 local businesses - approach coffee shops, gyms, salons with before/after social media audits showing improvement potential",
          "Learn basic Canva for post creation and Hootsuite/Buffer for scheduling - spend 5 hours practicing with different post formats and optimal posting times",
          "Study successful local business pages - analyze top performing posts, engagement rates, hashtag strategies, and posting frequency patterns"
        ],
        timeframe: "2-3 weeks",
        investment: "$30-50",
        expectedEarning: "$300-800"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Grow your client base and increase rates",
        tasks: [
          "Increase rates to $500-800/month after proving ROI with case studies showing follower growth, engagement rates, and lead generation",
          "Develop specialized packages: Content Only ($300), Content + Management ($500), Full Service + Ads ($800) with clear deliverables for each tier",
          "Create social media audit service ($150 one-time) - identify posting gaps, competitor analysis, hashtag optimization, bio improvements",
          "Build relationships with 10+ local business networking groups - attend meetings, offer free social media tips, collect business cards for follow-up",
          "Partner with web designers and marketing agencies for referrals - offer 15% commission and co-marketing opportunities"
        ],
        timeframe: "2-3 months",
        investment: "$100-200",
        expectedEarning: "$2,000-5,000"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build a social media agency",
        tasks: [
          "Hire virtual assistants for content creation and basic engagement - train them on brand voice, community management, and crisis response protocols",
          "Create premium tier ($1200-2000/month) including paid ad management, influencer outreach, and monthly strategy calls",
          "Develop social media courses ($197-497) teaching business owners DIY strategies - create video modules on content planning, hashtag research, engagement tactics",
          "Launch done-for-you content packages for industries: '$297/month for 30 ready-to-post graphics and captions' targeting specific niches",
          "Build software tool for social media audits and reporting - white-label solution you can sell to other agencies for $97/month"
        ],
        timeframe: "3-4 months",
        investment: "$500-1000",
        expectedEarning: "$5,000-15,000"
      }
    ],
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "AI content creation" },
      { name: "Hootsuite", url: "https://hootsuite.com", description: "Social media scheduling" },
      { name: "Canva", url: "https://www.canva.com", description: "Create social media graphics" },
      { name: "Buffer", url: "https://buffer.com", description: "Schedule and analyze posts" }
    ]
  },
  {
    id: 3,
    title: "Resume Writing Service",
    description: "Help job seekers create professional resumes and cover letters using proven templates and industry knowledge.",
    icon: FileText,
    earning: "$75-300 per resume",
    difficulty: "Easy",
    number: 3,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Launch your resume writing service",
        tasks: [
          "Research ATS-friendly resume formats and study 50+ successful resumes on LinkedIn and Indeed - note formatting, keyword usage, and achievement quantification",
          "Create 5 template variations for different industries (tech, healthcare, sales, management, entry-level) using Google Docs or Canva with proper formatting",
          "Practice with 5 free resumes for friends/family - gather testimonials, before/after examples, and refine your revision process based on feedback",
          "Set up Gumroad listing with clear packages: Basic Resume ($75), Resume + Cover Letter ($125), LinkedIn Optimization Bundle ($150)",
          "Post in job search Facebook groups offering resume reviews - provide genuine value first, then mention your paid services in comments"
        ],
        timeframe: "1-2 weeks",
        investment: "$20-40",
        expectedEarning: "$300-600"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Expand services and increase pricing",
        tasks: [
          "Increase pricing to $150-250 based on industry specialization (tech resumes command higher rates) - develop expertise in high-paying sectors",
          "Add LinkedIn profile optimization ($100), interview prep calls ($75/hour), and salary negotiation coaching ($150) to service menu",
          "Partner with career coaches and university career centers - offer 20% referral fees and co-host resume workshops for students and alumni",
          "Create industry-specific resume guides and sell as digital products ($29-47) - target trending fields like remote work, AI, healthcare, cybersecurity",
          "Develop relationships with 10+ recruiting agencies - offer bulk resume formatting services at discounted rates for steady workflow"
        ],
        timeframe: "1-2 months",
        investment: "$75-150",
        expectedEarning: "$1,500-3,500"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build comprehensive career services",
        tasks: [
          "Hire 2-3 specialized writers for different industries - train them on your templates, quality standards, and client communication protocols",
          "Launch premium executive resume service ($400-800) targeting C-suite and senior management - partner with executive search firms for referrals",
          "Create subscription model: '$197/month Career Accelerator' including monthly resume updates, LinkedIn optimization, and job search strategy calls",
          "Develop AI-powered resume builder tool and license to universities, libraries, and workforce development centers for $500-2000/month per location",
          "Build online course 'Land Your Dream Job in 30 Days' ($297-497) including resume templates, interview scripts, and job search automation tools"
        ],
        timeframe: "2-3 months",
        investment: "$300-600",
        expectedEarning: "$4,000-10,000"
      }
    ],
    links: [
      { name: "Indeed Resume", url: "https://www.indeed.com/career-advice/resumes-cover-letters", description: "Study successful resume examples" },
      { name: "LinkedIn", url: "https://www.linkedin.com", description: "Research industry trends" },
      { name: "Gumroad", url: "https://gumroad.com", description: "Sell resume services" },
      { name: "Canva", url: "https://www.canva.com", description: "Create professional resume templates" }
    ]
  },
  {
    id: 4,
    title: "Virtual Event Hosting",
    description: "Host engaging virtual events, webinars, and online workshops for businesses and communities.",
    icon: Users,
    earning: "$200-1000 per event",
    difficulty: "Medium",
    number: 4,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Start hosting your first virtual events",
        tasks: [
          "Master Zoom/Teams advanced features - practice breakout rooms, screen sharing, polls, recording, and technical troubleshooting for 10+ hours",
          "Create 3 workshop topics you can teach (productivity, social media basics, small business marketing) - develop 60-90 minute structured presentations",
          "Host 2-3 free events to build testimonials and refine your presentation skills - record sessions for portfolio and promotional content",
          "Set up Eventbrite page with professional bio, event descriptions, and clear pricing structure ($25-75 per attendee depending on topic)",
          "Create simple tech setup checklist and backup plans - test lighting, audio, internet connection, and have phone hotspot ready"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-100",
        expectedEarning: "$400-800"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Expand your event offerings",
        tasks: [
          "Develop signature workshop series that commands $100-200 per person - create multi-part programs with workbooks and follow-up resources",
          "Partner with business associations, chambers of commerce, and professional groups - offer to host monthly educational sessions for their members",
          "Create corporate training packages ($500-2000 per session) for companies wanting employee development - focus on remote work skills, leadership, communication",
          "Build email list of 500+ past attendees and send monthly event announcements - offer early bird discounts and VIP access to premium sessions",
          "Develop interactive elements: networking breakouts, Q&A segments, live polls, and group exercises to increase engagement and referrals"
        ],
        timeframe: "1-2 months",
        investment: "$100-250",
        expectedEarning: "$2,000-5,000"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build virtual event business",
        tasks: [
          "Launch monthly membership program ($47-97/month) with exclusive workshops, networking events, and resource library access",
          "Create done-for-you event packages for other trainers/coaches - provide templates, marketing materials, and technical support for $297-497",
          "Develop high-ticket mastermind programs ($2000-5000) combining group coaching, virtual retreats, and personalized business guidance",
          "Build platform for hosting other speakers' events - take 20-30% commission while providing technical support, marketing, and audience",
          "Create certification program teaching others to host virtual events - charge $1997-3997 for comprehensive training with ongoing support"
        ],
        timeframe: "3-4 months",
        investment: "$500-1000",
        expectedEarning: "$6,000-20,000"
      }
    ],
    links: [
      { name: "Zoom", url: "https://zoom.us", description: "Professional video conferencing" },
      { name: "Eventbrite", url: "https://www.eventbrite.com", description: "Event ticketing and promotion" },
      { name: "Calendly", url: "https://calendly.com", description: "Easy event scheduling" },
      { name: "Canva", url: "https://www.canva.com", description: "Create event graphics and slides" }
    ]
  },
  {
    id: 5,
    title: "Product Photography",
    description: "Provide professional product photos for e-commerce businesses and online sellers using smartphone or DSLR camera.",
    icon: Camera,
    earning: "$100-500 per shoot",
    difficulty: "Medium",
    number: 5,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Start your product photography service",
        tasks: [
          "Learn smartphone photography techniques - master lighting with windows, white background setups using poster board, and photo editing with VSCO or Lightroom Mobile",
          "Practice with 20+ different product types (jewelry, clothing, electronics, food) - understand specific lighting needs and angle requirements for each category",
          "Create before/after portfolio showing dramatic improvements - contact local businesses offering free photo shoots in exchange for testimonials and portfolio rights",
          "Set up basic equipment: white seamless paper ($20), reflector ($15), tripod ($30) - learn to create professional-looking shots with minimal investment",
          "Study top-selling products on Amazon/Etsy in your area - analyze their photo styles, number of images, and what makes listings convert well"
        ],
        timeframe: "2-3 weeks",
        investment: "$100-200",
        expectedEarning: "$500-1,200"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Expand your photography business",
        tasks: [
          "Invest in better equipment: DSLR camera ($400-600), lighting kit ($150-250), variety of backgrounds and props for different product styles",
          "Develop packages: Basic 5 photos ($150), Standard 10 photos + editing ($250), Premium 15 photos + lifestyle shots ($400)",
          "Create specialized services: 360° product spins ($75 extra), lifestyle photography with models ($500-800), Amazon A+ content creation ($300-500)",
          "Build relationships with e-commerce agencies, Amazon FBA sellers groups, and Shopify store owners - offer volume discounts for bulk work",
          "Partner with fulfillment centers and co-working spaces where e-commerce businesses operate - set up regular on-site photo days"
        ],
        timeframe: "1-2 months",
        investment: "$600-1000",
        expectedEarning: "$2,500-6,000"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build photography studio business",
        tasks: [
          "Set up dedicated studio space with permanent lighting setups - offer clients the option to visit or provide pickup/delivery service",
          "Hire additional photographers and train them on your quality standards - create detailed shot lists and editing guidelines for consistency",
          "Launch subscription service for e-commerce stores: '$497/month for 50 product photos' - target businesses with regular new inventory",
          "Create done-for-you Amazon listing optimization service combining photography, copywriting, and keyword research for $800-1500 per listing",
          "Develop online course teaching product photography ($297-497) and sell presets/templates for consistent income stream"
        ],
        timeframe: "2-4 months",
        investment: "$1500-3000",
        expectedEarning: "$5,000-15,000"
      }
    ],
    links: [
      { name: "Amazon Seller Central", url: "https://sellercentral.amazon.com", description: "Find sellers needing photos" },
      { name: "Shopify", url: "https://www.shopify.com", description: "Connect with e-commerce stores" },
      { name: "Etsy", url: "https://www.etsy.com", description: "Study successful product listings" },
      { name: "VSCO", url: "https://vsco.co", description: "Professional photo editing" }
    ]
  },
  {
    id: 6,
    title: "Online Course Creation",
    description: "Create and sell educational courses on platforms like Udemy, teaching skills you already possess.",
    icon: TrendingUp,
    earning: "$500-5000 per course",
    difficulty: "Hard",
    number: 6,
    phases: [
      {
        phase: 1,
        title: "MVP Setup",
        description: "Create your first course",
        tasks: [
          "Identify your expertise area and validate demand - research trending topics on Udemy, Skillshare, and CourseUdemy using keyword tools and competitor analysis",
          "Create detailed course outline with 20-30 lessons, each 5-10 minutes long - include practical exercises, downloadable resources, and clear learning objectives",
          "Record pilot course using screen recording software (OBS Studio free, or Camtasia $299) - ensure good audio quality with external microphone ($50-100)",
          "Upload to Udemy with compelling title, thumbnail, and description - study top courses in your category and model their successful elements",
          "Create accompanying resources: worksheets, templates, checklists, and bonus materials that students can download and implement immediately"
        ],
        timeframe: "4-6 weeks",
        investment: "$150-400",
        expectedEarning: "$500-2,000"
      },
      {
        phase: 2,
        title: "Scale Operations",
        description: "Expand your course portfolio",
        tasks: [
          "Create 2-3 additional courses in related topics - build a comprehensive learning path where students naturally progress from beginner to advanced levels",
          "Develop premium course priced $200-500 with live Q&A sessions, private Facebook group, and personalized feedback on assignments",
          "Launch on multiple platforms: Teachable, Thinkific, and your own website using tools like WordPress + LearnDash for higher profit margins",
          "Build email list of students and create course bundle offers - cross-sell related courses and create loyalty among your student base",
          "Partner with influencers and bloggers in your niche for affiliate promotions - offer 30-50% commission to drive traffic and sales"
        ],
        timeframe: "2-3 months",
        investment: "$300-600",
        expectedEarning: "$3,000-8,000"
      },
      {
        phase: 3,
        title: "Automate & Scale",
        description: "Build online education business",
        tasks: [
          "Create comprehensive learning academy with tiered pricing: Basic ($97), Pro ($297), Master ($597) with increasing levels of access and support",
          "Develop certification programs that students can use for career advancement - partner with industry organizations for credibility and recognition",
          "Launch mastermind program ($2000-5000) combining course access, group coaching calls, and done-with-you implementation sessions",
          "Create white-label courses for corporations and training companies - license your content for $5000-20,000 plus ongoing royalties",
          "Build automated webinar funnel selling your premium course - create evergreen sales system generating passive income 24/7"
        ],
        timeframe: "4-6 months",
        investment: "$1000-2500",
        expectedEarning: "$10,000-50,000"
      }
    ],
    links: [
      { name: "Udemy", url: "https://www.udemy.com", description: "Create and sell courses" },
      { name: "Teachable", url: "https://teachable.com", description: "Build your course platform" },
      { name: "OBS Studio", url: "https://obsproject.com", description: "Free screen recording" },
      { name: "Canva", url: "https://www.canva.com", description: "Create course thumbnails and graphics" }
    ]
  }
];

const Index = () => {
  const [selectedHustle, setSelectedHustle] = useState<typeof hustles[0] | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(1);

  return (
    <div className="min-h-screen bg-background transition-colors">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {selectedHustle && (
            <Button 
              variant="outline" 
              onClick={() => setSelectedHustle(null)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Hustles</span>
            </Button>
          )}
          
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              PJ7 Hustle Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              6 Proven Side Hustles to Start Making Money This Week
            </p>
          </div>
          
          <ThemeToggle />
        </div>

        {!selectedHustle ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-800 dark:text-green-300">Total Earning Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">$500-15K/mo</div>
                  <p className="text-xs text-green-600 dark:text-green-400">Per hustle at scale</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-300">Start-up Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">$15-400</div>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Low barrier to entry</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-800 dark:text-purple-300">Time to Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">1-6 weeks</div>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Depending on hustle</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-orange-800 dark:text-orange-300">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">85%+</div>
                  <p className="text-xs text-orange-600 dark:text-orange-400">With consistent effort</p>
                </CardContent>
              </Card>
            </div>

            {/* Hustles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hustles.map((hustle) => (
                <HustleCard
                  key={hustle.id}
                  hustle={hustle}
                  onClick={() => setSelectedHustle(hustle)}
                />
              ))}
            </div>
          </>
        ) : (
          <PhaseDetails
            hustle={selectedHustle}
            selectedPhase={selectedPhase}
            onPhaseChange={setSelectedPhase}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
