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
  Zap,
  Globe,
  DollarSign,
  Camera,
  Mic,
  Code,
  Mail,
  Search,
  Edit
} from "lucide-react";

export const globalHustles = [
  {
    id: 1,
    title: "Freelance Writing",
    description: "Create content for global clients on platforms like Upwork and Fiverr",
    icon: FileText,
    earning: "$100-$500/day",
    difficulty: "Easy",
    links: [
      { name: "Upwork", url: "https://upwork.com", description: "Find writing gigs globally" },
      { name: "Fiverr", url: "https://fiverr.com", description: "Sell writing services" },
      { name: "Contently", url: "https://contently.com", description: "Premium content platform" },
      { name: "Grammarly", url: "https://grammarly.com", description: "Writing enhancement tool" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Launch",
        description: "Start with basic gigs on Upwork and Fiverr",
        tasks: [
          "Create compelling profiles on Upwork and Fiverr with portfolio samples",
          "Start with $15-25/hour rates for blog posts and articles",
          "Apply to 10-15 jobs daily focusing on your niche",
          "Build initial client base with excellent delivery and communication"
        ],
        timeframe: "2-4 weeks",
        investment: "$0-$50",
        expectedEarning: "$500-$1500/month"
      },
      {
        phase: 2,
        title: "Portfolio & Rate Building",
        description: "Increase rates and build specialization",
        tasks: [
          "Develop expertise in high-paying niches (SaaS, Finance, Health)",
          "Raise rates to $35-75/hour based on proven results",
          "Create case studies showcasing client success stories",
          "Build long-term retainer relationships with 3-5 clients"
        ],
        timeframe: "1-2 months",
        investment: "$100-$300",
        expectedEarning: "$2000-$6000/month"
      },
      {
        phase: 3,
        title: "Scale with Ghostwriters",
        description: "Hire writers and focus on client relationships",
        tasks: [
          "Recruit and train 3-5 skilled ghostwriters",
          "Focus on account management and business development",
          "Charge premium rates ($100-200/hour) for strategy and management",
          "Build content agency serving multiple clients simultaneously"
        ],
        timeframe: "2-3 months",
        investment: "$500-$1000",
        expectedEarning: "$8000-$15000/month"
      }
    ]
  },
  {
    id: 2,
    title: "Affiliate Marketing",
    description: "Promote products and earn commissions through strategic content",
    icon: TrendingUp,
    earning: "$150-$500/day",
    difficulty: "Medium",
    links: [
      { name: "ClickBank", url: "https://clickbank.com", description: "High-commission digital products" },
      { name: "Digistore24", url: "https://digistore24.com", description: "Global affiliate network" },
      { name: "ShareASale", url: "https://shareasale.com", description: "Diverse affiliate programs" },
      { name: "ConvertKit", url: "https://convertkit.com", description: "Email marketing platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Setup",
        description: "Join networks and create initial content",
        tasks: [
          "Sign up for ClickBank, Digistore24, and ShareASale accounts",
          "Choose profitable niches (health, wealth, relationships)",
          "Create YouTube channel or blog for content marketing",
          "Start promoting 2-3 high-converting products with honest reviews"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-$200",
        expectedEarning: "$300-$1000/month"
      },
      {
        phase: 2,
        title: "Content Scaling",
        description: "Build audience and optimize conversions",
        tasks: [
          "Create valuable content around affiliate products consistently",
          "Build email list of 1000+ subscribers in your niche",
          "Test different promotional strategies and track conversion rates",
          "Expand to multiple traffic sources (social media, SEO, paid ads)"
        ],
        timeframe: "2-3 months",
        investment: "$300-$800",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Funnel Automation",
        description: "Scale with funnels and paid advertising",
        tasks: [
          "Build automated sales funnels with high-converting landing pages",
          "Launch Facebook and Google Ads campaigns with profitable ROAS",
          "Create product suite including your own info products",
          "Build affiliate team to promote your products and increase reach"
        ],
        timeframe: "3-4 months",
        investment: "$1000-$3000",
        expectedEarning: "$8000-$15000/month"
      }
    ]
  },
  {
    id: 3,
    title: "Print-on-Demand",
    description: "Sell custom designs on products without inventory",
    icon: Package,
    earning: "$100-$400/day",
    difficulty: "Easy",
    links: [
      { name: "Redbubble", url: "https://redbubble.com", description: "Art marketplace platform" },
      { name: "Etsy", url: "https://etsy.com", description: "Handmade and custom items" },
      { name: "Teespring", url: "https://teespring.com", description: "T-shirt printing service" },
      { name: "Canva", url: "https://canva.com", description: "Design tool for products" }
    ],
    phases: [
      {
        phase: 1,
        title: "Design & Launch",
        description: "Create designs and list on major platforms",
        tasks: [
          "Research trending niches and design popular themes",
          "Create 50+ designs using Canva targeting specific audiences",
          "Set up stores on Redbubble, Etsy, and Teespring",
          "Optimize listings with SEO keywords and compelling descriptions"
        ],
        timeframe: "2-3 weeks",
        investment: "$20-$100",
        expectedEarning: "$200-$800/month"
      },
      {
        phase: 2,
        title: "Optimization & Expansion",
        description: "Scale successful designs and expand product range",
        tasks: [
          "Analyze best-selling designs and create variations",
          "Expand to new platforms like Amazon Merch and Printful",
          "Test different product types (mugs, phone cases, stickers)",
          "Build social media presence to drive organic traffic"
        ],
        timeframe: "1-2 months",
        investment: "$100-$400",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 3,
        title: "Automation & VAs",
        description: "Hire virtual assistants and automate processes",
        tasks: [
          "Hire VAs to handle design uploads and store management",
          "Use automation tools for cross-platform listing",
          "Focus on high-level strategy and trend research",
          "Build brand around best-performing designs"
        ],
        timeframe: "2-3 months",
        investment: "$500-$1200",
        expectedEarning: "$4000-$12000/month"
      }
    ]
  },
  {
    id: 4,
    title: "Digital Products",
    description: "Create and sell digital courses, templates, and tools",
    icon: BookOpen,
    earning: "$200-$500/day",
    difficulty: "Medium",
    links: [
      { name: "Gumroad", url: "https://gumroad.com", description: "Digital product marketplace" },
      { name: "Teachable", url: "https://teachable.com", description: "Online course platform" },
      { name: "Notion", url: "https://notion.so", description: "Template creation tool" },
      { name: "Lemon Squeezy", url: "https://lemonsqueezy.com", description: "Digital commerce platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Product Creation",
        description: "Launch first digital product on Gumroad",
        tasks: [
          "Identify profitable niche based on market research",
          "Create valuable digital product (course, template, guide)",
          "Set up professional Gumroad store with compelling copy",
          "Price strategically and launch with early bird promotion"
        ],
        timeframe: "3-4 weeks",
        investment: "$50-$200",
        expectedEarning: "$500-$2000/month"
      },
      {
        phase: 2,
        title: "Bundle & Upsell",
        description: "Create product bundles and increase average order value",
        tasks: [
          "Develop complementary products to create bundles",
          "Implement upsell and cross-sell strategies",
          "Build email list for product launches and promotions",
          "Gather testimonials and case studies for social proof"
        ],
        timeframe: "1-2 months",
        investment: "$200-$600",
        expectedEarning: "$2000-$6000/month"
      },
      {
        phase: 3,
        title: "Brand Building",
        description: "Build recognized brand with premium pricing",
        tasks: [
          "Develop strong personal or business brand identity",
          "Launch premium courses priced $300-1000+",
          "Build community around your products and expertise",
          "Explore licensing and partnership opportunities"
        ],
        timeframe: "3-6 months",
        investment: "$800-$2000",
        expectedEarning: "$6000-$15000/month"
      }
    ]
  },
  {
    id: 5,
    title: "YouTube Automation",
    description: "Create faceless YouTube channels with outsourced content",
    icon: Video,
    earning: "$150-$400/day",
    difficulty: "Medium",
    links: [
      { name: "YouTube Studio", url: "https://studio.youtube.com", description: "Channel management" },
      { name: "TubeBuddy", url: "https://tubebuddy.com", description: "YouTube optimization" },
      { name: "Fiverr", url: "https://fiverr.com", description: "Outsource video creation" },
      { name: "InVideo", url: "https://invideo.io", description: "Video creation tool" }
    ],
    phases: [
      {
        phase: 1,
        title: "Channel Launch",
        description: "Start faceless channel with trending content",
        tasks: [
          "Research profitable niches (top 10s, how-tos, reviews)",
          "Create channel branding and optimize for discoverability",
          "Produce 20-30 videos using free tools and stock footage",
          "Focus on trending topics and SEO-optimized titles"
        ],
        timeframe: "1-2 months",
        investment: "$100-$300",
        expectedEarning: "$200-$800/month"
      },
      {
        phase: 2,
        title: "Shorts & Repurposing",
        description: "Scale with YouTube Shorts and content repurposing",
        tasks: [
          "Create daily YouTube Shorts from long-form content",
          "Repurpose content across TikTok and Instagram Reels",
          "Implement systematic upload schedule and consistency",
          "Monetize through ads, affiliates, and sponsorships"
        ],
        timeframe: "2-3 months",
        investment: "$300-$800",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 3,
        title: "Outsourced Production",
        description: "Hire team for full video production automation",
        tasks: [
          "Hire scriptwriters, video editors, and thumbnail designers",
          "Create standard operating procedures for content creation",
          "Focus on strategy, optimization, and channel growth",
          "Launch multiple channels in different niches"
        ],
        timeframe: "3-4 months",
        investment: "$1000-$2500",
        expectedEarning: "$4000-$12000/month"
      }
    ]
  },
  {
    id: 6,
    title: "AI Blogging",
    description: "Create SEO-optimized blogs using AI for monetization",
    icon: Edit,
    earning: "$100-$300/day",
    difficulty: "Easy",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com", description: "AI content generation" },
      { name: "WordPress", url: "https://wordpress.com", description: "Blog hosting platform" },
      { name: "Medium", url: "https://medium.com", description: "Publishing platform" },
      { name: "Google AdSense", url: "https://adsense.google.com", description: "Blog monetization" }
    ],
    phases: [
      {
        phase: 1,
        title: "Content Creation",
        description: "Use ChatGPT to create SEO-optimized blog posts",
        tasks: [
          "Research profitable niches with good ad revenue potential",
          "Create 50+ high-quality blog posts using AI assistance",
          "Optimize content for SEO with proper keyword targeting",
          "Publish on Medium and personal WordPress blog"
        ],
        timeframe: "1-2 months",
        investment: "$50-$200",
        expectedEarning: "$300-$1000/month"
      },
      {
        phase: 2,
        title: "Traffic & Authority",
        description: "Build domain authority and organic traffic",
        tasks: [
          "Implement comprehensive SEO strategy for rankings",
          "Build backlinks through guest posting and outreach",
          "Create pillar content and topic clusters",
          "Apply for Google AdSense and affiliate programs"
        ],
        timeframe: "3-4 months",
        investment: "$200-$600",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 3,
        title: "Monetization & Scale",
        description: "Diversify revenue with products and services",
        tasks: [
          "Launch digital products related to blog topics",
          "Offer premium content subscriptions and memberships",
          "Create email courses and lead magnets",
          "Scale with multiple niche sites using same strategy"
        ],
        timeframe: "4-6 months",
        investment: "$600-$1500",
        expectedEarning: "$3000-$9000/month"
      }
    ]
  },
  {
    id: 7,
    title: "Social Media Management",
    description: "Manage social accounts for small businesses worldwide",
    icon: Users,
    earning: "$150-$400/day",
    difficulty: "Easy",
    links: [
      { name: "Hootsuite", url: "https://hootsuite.com", description: "Social media scheduling" },
      { name: "Buffer", url: "https://buffer.com", description: "Content planning tool" },
      { name: "Canva", url: "https://canva.com", description: "Social media graphics" },
      { name: "Later", url: "https://later.com", description: "Visual content calendar" }
    ],
    phases: [
      {
        phase: 1,
        title: "Service Launch",
        description: "Offer basic social media management to small businesses",
        tasks: [
          "Create service packages for different business sizes",
          "Find first 5 clients through local networking and cold outreach",
          "Manage 2-3 platforms per client with consistent posting",
          "Use free tools like Buffer and Canva for content creation"
        ],
        timeframe: "2-4 weeks",
        investment: "$100-$300",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 2,
        title: "Client Expansion",
        description: "Scale to 10-15 clients with premium services",
        tasks: [
          "Increase client base through referrals and testimonials",
          "Add services like paid ad management and analytics reporting",
          "Implement efficient workflows and content calendars",
          "Raise prices and focus on high-value clients"
        ],
        timeframe: "2-3 months",
        investment: "$300-$800",
        expectedEarning: "$3000-$8000/month"
      },
      {
        phase: 3,
        title: "Agency Model",
        description: "Build full-service digital marketing agency",
        tasks: [
          "Hire team members for content creation and account management",
          "Expand services to include SEO, email marketing, and web design",
          "Focus on business development and strategic planning",
          "Target larger clients with higher monthly retainers"
        ],
        timeframe: "4-6 months",
        investment: "$1000-$3000",
        expectedEarning: "$8000-$20000/month"
      }
    ]
  },
  {
    id: 8,
    title: "Domain Flipping",
    description: "Buy undervalued domains and sell for profit",
    icon: Globe,
    earning: "$100-$500/day",
    difficulty: "Medium",
    links: [
      { name: "GoDaddy Auctions", url: "https://auctions.godaddy.com", description: "Domain marketplace" },
      { name: "Sedo", url: "https://sedo.com", description: "Domain trading platform" },
      { name: "Flippa", url: "https://flippa.com", description: "Website and domain sales" },
      { name: "NameCheap", url: "https://namecheap.com", description: "Domain registration" }
    ],
    phases: [
      {
        phase: 1,
        title: "Market Research",
        description: "Learn to identify valuable domains",
        tasks: [
          "Study domain valuation methods and trending keywords",
          "Start with $500-1000 budget for initial domain purchases",
          "Focus on short, brandable domains in growing industries",
          "List domains on major marketplaces with competitive pricing"
        ],
        timeframe: "1-2 months",
        investment: "$500-$1000",
        expectedEarning: "$500-$2000/month"
      },
      {
        phase: 2,
        title: "Strategic Buying",
        description: "Identify trends and make targeted purchases",
        tasks: [
          "Monitor expired domains with existing traffic and backlinks",
          "Follow industry trends to predict valuable domain categories",
          "Build relationships with domain brokers and investors",
          "Increase budget and focus on higher-value domains"
        ],
        timeframe: "2-4 months",
        investment: "$2000-$5000",
        expectedEarning: "$2000-$6000/month"
      },
      {
        phase: 3,
        title: "Automation & Scale",
        description: "Use tools and bots for systematic domain flipping",
        tasks: [
          "Implement automated bidding tools and market monitoring",
          "Build portfolio of premium domains for long-term holding",
          "Partner with developers to create simple landing pages",
          "Focus on high-ticket domains and bulk portfolio sales"
        ],
        timeframe: "6+ months",
        investment: "$5000-$15000",
        expectedEarning: "$6000-$15000/month"
      }
    ]
  },
  {
    id: 9,
    title: "Fiverr Gigs",
    description: "Offer specialized services on Fiverr platform",
    icon: Target,
    earning: "$100-$300/day",
    difficulty: "Easy",
    links: [
      { name: "Fiverr", url: "https://fiverr.com", description: "Freelance services platform" },
      { name: "Fiverr Pro", url: "https://pro.fiverr.com", description: "Premium service tier" },
      { name: "Canva", url: "https://canva.com", description: "Design tool for gigs" },
      { name: "Loom", url: "https://loom.com", description: "Video communication" }
    ],
    phases: [
      {
        phase: 1,
        title: "Gig Launch",
        description: "Create 1-3 starter services in profitable niches",
        tasks: [
          "Research high-demand, low-competition gig categories",
          "Create compelling gig descriptions with competitive pricing",
          "Start with services you can deliver quickly (logos, writing, data entry)",
          "Focus on getting first 10 reviews with excellent service"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-$100",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 2,
        title: "Upsell Bundles",
        description: "Create premium packages and upsells",
        tasks: [
          "Develop tiered pricing with basic, standard, and premium options",
          "Add relevant gig extras to increase average order value",
          "Optimize gigs based on performance data and feedback",
          "Expand to 5-8 gigs covering related services"
        ],
        timeframe: "1-2 months",
        investment: "$100-$300",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Team Scaling",
        description: "Hire team members to fulfill orders",
        tasks: [
          "Recruit skilled freelancers to handle order fulfillment",
          "Focus on customer service and quality control",
          "Apply for Fiverr Pro status for premium positioning",
          "Scale successful gigs and expand to new categories"
        ],
        timeframe: "2-4 months",
        investment: "$500-$1000",
        expectedEarning: "$5000-$12000/month"
      }
    ]
  },
  {
    id: 10,
    title: "User Testing",
    description: "Get paid to test websites and apps for usability",
    icon: Search,
    earning: "$50-$200/day",
    difficulty: "Easy",
    links: [
      { name: "UserTesting", url: "https://usertesting.com", description: "Website testing platform" },
      { name: "TryMyUI", url: "https://trymyui.com", description: "UX testing service" },
      { name: "PlaytestCloud", url: "https://playtestcloud.com", description: "Mobile game testing" },
      { name: "Userlytics", url: "https://userlytics.com", description: "User experience research" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Registration",
        description: "Sign up and complete qualification tests",
        tasks: [
          "Register on all major user testing platforms",
          "Complete demographic profiles and skill assessments",
          "Pass qualification tests to unlock higher-paying opportunities",
          "Start with 2-3 tests per day to build ratings and reviews"
        ],
        timeframe: "1-2 weeks",
        investment: "$0",
        expectedEarning: "$400-$1000/month"
      },
      {
        phase: 2,
        title: "Specialized Testing",
        description: "Focus on higher-paying specialized tests",
        tasks: [
          "Qualify for industry-specific testing (finance, healthcare, education)",
          "Participate in live moderated sessions for higher pay",
          "Build reputation for quality feedback and detailed reports",
          "Aim for 5-8 tests daily across multiple platforms"
        ],
        timeframe: "1-2 months",
        investment: "$50-$200",
        expectedEarning: "$1000-$2500/month"
      },
      {
        phase: 3,
        title: "Feedback Reports",
        description: "Create detailed UX reports for recurring income",
        tasks: [
          "Develop expertise in UX/UI principles and best practices",
          "Offer comprehensive usability audit services",
          "Build relationships with testing platforms for priority access",
          "Create content around UX testing to attract direct clients"
        ],
        timeframe: "2-3 months",
        investment: "$200-$500",
        expectedEarning: "$2500-$6000/month"
      }
    ]
  },
  {
    id: 11,
    title: "GPT Tools & Surveys",
    description: "Complete online tasks and surveys for steady income",
    icon: Zap,
    earning: "$50-$150/day",
    difficulty: "Easy",
    links: [
      { name: "Swagbucks", url: "https://swagbucks.com", description: "Rewards and surveys platform" },
      { name: "InboxDollars", url: "https://inboxdollars.com", description: "Paid online activities" },
      { name: "Survey Junkie", url: "https://surveyjunkie.com", description: "Paid survey platform" },
      { name: "Clickworker", url: "https://clickworker.com", description: "Microtask platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Setup",
        description: "Register and optimize profiles on major platforms",
        tasks: [
          "Sign up for 10-15 legitimate survey and task platforms",
          "Complete comprehensive profiles to unlock higher-paying opportunities",
          "Focus on daily activities: surveys, watching videos, simple tasks",
          "Track earnings across platforms to identify most profitable activities"
        ],
        timeframe: "1-2 weeks",
        investment: "$0",
        expectedEarning: "$300-$800/month"
      },
      {
        phase: 2,
        title: "Referral Building",
        description: "Build referral networks for passive income",
        tasks: [
          "Share referral links through social media and content creation",
          "Create helpful content about maximizing earnings on these platforms",
          "Focus on platforms with the best referral commission structures",
          "Build email list of people interested in online earning opportunities"
        ],
        timeframe: "1-3 months",
        investment: "$50-$200",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 3,
        title: "Content Creation",
        description: "Create content about online earning for recurring income",
        tasks: [
          "Start YouTube channel or blog about online earning strategies",
          "Create courses teaching others how to maximize survey earnings",
          "Build affiliate relationships with earning platforms",
          "Develop tools or apps to help others track their earnings"
        ],
        timeframe: "3-6 months",
        investment: "$200-$600",
        expectedEarning: "$2000-$4500/month"
      }
    ]
  },
  {
    id: 12,
    title: "Transcription Services",
    description: "Convert audio to text for global clients",
    icon: Mic,
    earning: "$80-$250/day",
    difficulty: "Easy",
    links: [
      { name: "Rev", url: "https://rev.com", description: "Transcription service platform" },
      { name: "GoTranscript", url: "https://gotranscript.com", description: "Audio transcription work" },
      { name: "TranscribeMe", url: "https://transcribeme.com", description: "Short audio transcription" },
      { name: "3Play Media", url: "https://3playmedia.com", description: "Captioning and transcription" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Entry",
        description: "Start with Rev and major transcription platforms",
        tasks: [
          "Pass qualification tests for Rev, GoTranscript, and TranscribeMe",
          "Learn proper transcription formatting and style guidelines",
          "Start with shorter files to build speed and accuracy",
          "Aim for 40+ WPM typing speed and 98%+ accuracy rate"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-$100",
        expectedEarning: "$600-$1500/month"
      },
      {
        phase: 2,
        title: "Specialization",
        description: "Move into higher-paying captioning and specialized fields",
        tasks: [
          "Qualify for captioning work which pays 2-3x more than basic transcription",
          "Specialize in medical, legal, or technical transcription for premium rates",
          "Build relationships with regular clients for consistent work",
          "Increase typing speed to 60+ WPM for maximum earning potential"
        ],
        timeframe: "1-2 months",
        investment: "$100-$300",
        expectedEarning: "$1500-$4000/month"
      },
      {
        phase: 3,
        title: "Team Agency",
        description: "Build transcription team and micro-agency",
        tasks: [
          "Recruit and train team of reliable transcriptionists",
          "Take on larger projects requiring multiple transcribers",
          "Focus on client acquisition and project management",
          "Offer premium services like rush delivery and specialized formatting"
        ],
        timeframe: "3-4 months",
        investment: "$500-$1200",
        expectedEarning: "$4000-$10000/month"
      }
    ]
  },
  {
    id: 13,
    title: "Online English Teaching",
    description: "Teach English to global students via video platforms",
    icon: Languages,
    earning: "$100-$400/day",
    difficulty: "Easy",
    links: [
      { name: "Cambly", url: "https://cambly.com", description: "Conversational English platform" },
      { name: "Preply", url: "https://preply.com", description: "Online tutoring marketplace" },
      { name: "iTalki", url: "https://italki.com", description: "Language learning platform" },
      { name: "Verbling", url: "https://verbling.com", description: "Language teaching platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Platform Setup",
        description: "Start teaching on Cambly and Preply",
        tasks: [
          "Create compelling teacher profiles with professional photos",
          "Start with Cambly for flexible conversation practice ($10-12/hour)",
          "Set up professional teaching space with good lighting and audio",
          "Build initial student base through consistent availability"
        ],
        timeframe: "2-3 weeks",
        investment: "$100-$300",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 2,
        title: "Premium Students",
        description: "Target higher-paying business and test prep students",
        tasks: [
          "Specialize in business English or test prep (IELTS, TOEFL)",
          "Raise rates to $15-25/hour for specialized instruction",
          "Build loyal student base with regular weekly sessions",
          "Create structured lesson plans and materials for better results"
        ],
        timeframe: "1-3 months",
        investment: "$200-$500",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Private Practice",
        description: "Move to private Zoom classes and premium pricing",
        tasks: [
          "Transition top students to private lessons at $30-50/hour",
          "Create group classes for 3-5 students at premium rates",
          "Develop English courses and digital materials for passive income",
          "Build reputation as expert instructor for executive coaching"
        ],
        timeframe: "3-6 months",
        investment: "$500-$1000",
        expectedEarning: "$5000-$12000/month"
      }
    ]
  },
  {
    id: 14,
    title: "TikTok Dropshipping",
    description: "Sell trending products through viral TikTok content",
    icon: ShoppingCart,
    earning: "$200-$500/day",
    difficulty: "Medium",
    links: [
      { name: "TikTok Shop", url: "https://shop.tiktok.com", description: "TikTok commerce platform" },
      { name: "AliExpress", url: "https://aliexpress.com", description: "Product sourcing platform" },
      { name: "Shopify", url: "https://shopify.com", description: "E-commerce platform" },
      { name: "Oberlo", url: "https://oberlo.com", description: "Dropshipping app" }
    ],
    phases: [
      {
        phase: 1,
        title: "Product Launch",
        description: "Find trending product and create viral content",
        tasks: [
          "Research trending products on TikTok using viral hashtags",
          "Set up Shopify store with winning product and attractive pricing",
          "Create 10-20 engaging TikTok videos showcasing product benefits",
          "Test different content styles: unboxing, demonstrations, testimonials"
        ],
        timeframe: "2-4 weeks",
        investment: "$200-$500",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 2,
        title: "Content & Ads",
        description: "Scale with consistent content and paid advertising",
        tasks: [
          "Post 2-3 TikTok videos daily with different hooks and angles",
          "Launch TikTok Ads campaigns targeting viral video audiences",
          "Test multiple products to find additional winners",
          "Build email list and retargeting campaigns for repeat customers"
        ],
        timeframe: "1-3 months",
        investment: "$800-$2000",
        expectedEarning: "$3000-$8000/month"
      },
      {
        phase: 3,
        title: "Automation & Fulfillment",
        description: "Automate operations and scale fulfillment",
        tasks: [
          "Implement automated order processing and customer service",
          "Move to private labeling and better margins with proven products",
          "Build team to handle content creation and store management",
          "Expand to multiple niches and product categories"
        ],
        timeframe: "3-6 months",
        investment: "$2000-$5000",
        expectedEarning: "$8000-$20000/month"
      }
    ]
  },
  {
    id: 15,
    title: "Clip Repurposing",
    description: "Edit and repurpose content for streamers and creators",
    icon: Camera,
    earning: "$100-$300/day",
    difficulty: "Medium",
    links: [
      { name: "Fiverr", url: "https://fiverr.com", description: "Freelance editing services" },
      { name: "Upwork", url: "https://upwork.com", description: "Video editing jobs" },
      { name: "DaVinci Resolve", url: "https://blackmagicdesign.com/products/davinciresolve", description: "Free video editing software" },
      { name: "Streamlabs", url: "https://streamlabs.com", description: "Streaming tools and community" }
    ],
    phases: [
      {
        phase: 1,
        title: "Service Launch",
        description: "Offer basic clip editing to Twitch streamers",
        tasks: [
          "Learn video editing using free software like DaVinci Resolve",
          "Create portfolio with sample clips from popular streamers",
          "Reach out to small-medium Twitch streamers with editing services",
          "Start with competitive pricing: $5-15 per edited clip"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-$200",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 2,
        title: "Package Services",
        description: "Create packages for regular content creation",
        tasks: [
          "Offer weekly packages: 10 clips + thumbnails for $150-300",
          "Expand to YouTube highlight reels and compilation videos",
          "Build relationships with 5-10 regular streamer clients",
          "Increase rates as you prove value and build reputation"
        ],
        timeframe: "1-2 months",
        investment: "$200-$500",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Scaling Service",
        description: "Build editing team and expand client base",
        tasks: [
          "Hire junior editors to handle basic clip creation",
          "Focus on client acquisition and relationship management",
          "Expand services to include stream setup and consulting",
          "Target larger streamers and content agencies for bigger contracts"
        ],
        timeframe: "2-4 months",
        investment: "$800-$2000",
        expectedEarning: "$5000-$12000/month"
      }
    ]
  },
  {
    id: 16,
    title: "Instagram Theme Pages",
    description: "Build niche Instagram accounts for monetization",
    icon: Heart,
    earning: "$100-$400/day",
    difficulty: "Easy",
    links: [
      { name: "Instagram", url: "https://instagram.com", description: "Social media platform" },
      { name: "Canva", url: "https://canva.com", description: "Content creation tool" },
      { name: "Later", url: "https://later.com", description: "Instagram scheduling" },
      { name: "Linktree", url: "https://linktr.ee", description: "Bio link management" }
    ],
    phases: [
      {
        phase: 1,
        title: "Page Building",
        description: "Create theme pages and build following with reposts",
        tasks: [
          "Choose profitable niche: motivation, fitness, luxury, animals, etc.",
          "Create branded Instagram account with professional bio and aesthetic",
          "Post 2-3 times daily with high-quality content and engaging captions",
          "Use hashtag strategies and engagement tactics to reach 10K+ followers"
        ],
        timeframe: "2-3 months",
        investment: "$100-$300",
        expectedEarning: "$500-$1500/month"
      },
      {
        phase: 2,
        title: "Affiliate Integration",
        description: "Monetize through affiliate links and promotions",
        tasks: [
          "Join relevant affiliate programs matching your niche",
          "Create engaging posts featuring affiliate products naturally",
          "Use Instagram Stories and Reels for higher engagement rates",
          "Build email list through lead magnets and free resources"
        ],
        timeframe: "1-2 months",
        investment: "$200-$600",
        expectedEarning: "$1500-$4000/month"
      },
      {
        phase: 3,
        title: "Shoutout Platform",
        description: "Monetize through paid promotions and shoutouts",
        tasks: [
          "Offer paid shoutouts to other accounts and products",
          "Create rate card based on engagement and follower count",
          "Build network of theme pages for cross-promotion",
          "Launch multiple pages in different niches for diversified income"
        ],
        timeframe: "3-4 months",
        investment: "$500-$1200",
        expectedEarning: "$4000-$12000/month"
      }
    ]
  },
  {
    id: 17,
    title: "Reddit Affiliate Marketing",
    description: "Use Reddit communities for authentic affiliate promotion",
    icon: MessageSquare,
    earning: "$150-$300/day",
    difficulty: "Medium",
    links: [
      { name: "Reddit", url: "https://reddit.com", description: "Community platform" },
      { name: "RedditMetrics", url: "https://redditmetrics.com", description: "Subreddit analytics" },
      { name: "ClickBank", url: "https://clickbank.com", description: "Affiliate network" },
      { name: "Amazon Associates", url: "https://associates.amazon.com", description: "Amazon affiliate program" }
    ],
    phases: [
      {
        phase: 1,
        title: "Community Building",
        description: "Build reputation in relevant subreddits",
        tasks: [
          "Identify subreddits in your target niche with active communities",
          "Build karma and reputation by providing valuable, helpful content",
          "Study community rules and posting guidelines carefully",
          "Establish yourself as trusted member before any promotional activity"
        ],
        timeframe: "1-2 months",
        investment: "$50-$200",
        expectedEarning: "$500-$1200/month"
      },
      {
        phase: 2,
        title: "Value-First Promotion",
        description: "Test affiliate offers with valuable content",
        tasks: [
          "Share genuinely helpful content that includes relevant affiliate links",
          "Write detailed reviews and comparisons that help users make decisions",
          "Use multiple affiliate networks to test different offers and commissions",
          "Track which subreddits and content types generate best conversion rates"
        ],
        timeframe: "2-3 months",
        investment: "$200-$500",
        expectedEarning: "$1200-$3500/month"
      },
      {
        phase: 3,
        title: "Funnel Building",
        description: "Drive traffic to owned properties for higher conversions",
        tasks: [
          "Create valuable resources (guides, tools) to capture email addresses",
          "Build landing pages optimized for specific subreddit audiences",
          "Develop email marketing funnels for long-term relationship building",
          "Scale successful strategies across multiple accounts and subreddits"
        ],
        timeframe: "3-4 months",
        investment: "$600-$1500",
        expectedEarning: "$3500-$9000/month"
      }
    ]
  },
  {
    id: 18,
    title: "Gumroad Affiliate Vaults",
    description: "Create affiliate resource collections on Gumroad",
    icon: Package,
    earning: "$100-$350/day",
    difficulty: "Easy",
    links: [
      { name: "Gumroad", url: "https://gumroad.com", description: "Digital product platform" },
      { name: "ClickBank", url: "https://clickbank.com", description: "Affiliate marketplace" },
      { name: "JVZoo", url: "https://jvzoo.com", description: "Digital product launches" },
      { name: "Canva", url: "https://canva.com", description: "Create affiliate materials" }
    ],
    phases: [
      {
        phase: 1,
        title: "Vault Creation",
        description: "Create affiliate product collections and promote top offers",
        tasks: [
          "Research highest-converting affiliate products in profitable niches",
          "Create comprehensive 'vault' collections with detailed reviews",
          "Design professional PDFs with affiliate links and bonus materials",
          "Price collections at $47-97 and list on Gumroad with compelling copy"
        ],
        timeframe: "2-4 weeks",
        investment: "$100-$300",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 2,
        title: "Niche Content",
        description: "Build targeted content around affiliate collections",
        tasks: [
          "Create blog or YouTube channel reviewing products in your vault",
          "Build email list offering free samples from your affiliate collections",
          "Partner with other affiliate marketers for joint promotions",
          "Expand to multiple niches with different vault collections"
        ],
        timeframe: "1-3 months",
        investment: "$300-$800",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Traffic Automation",
        description: "Automate traffic generation and scale vault sales",
        tasks: [
          "Implement SEO strategy for organic traffic to vault landing pages",
          "Launch paid advertising campaigns for proven converting vaults",
          "Create automated email sequences promoting different vault collections",
          "Build affiliate network of others promoting your vaults for commissions"
        ],
        timeframe: "3-6 months",
        investment: "$800-$2000",
        expectedEarning: "$5000-$10000/month"
      }
    ]
  },
  {
    id: 19,
    title: "White-label SaaS",
    description: "Resell software tools under your own brand",
    icon: Code,
    earning: "$200-$500/day",
    difficulty: "Medium",
    links: [
      { name: "AppSumo", url: "https://appsumo.com", description: "Software deals and white-label" },
      { name: "White Label Suite", url: "https://whitelabelsuite.com", description: "Rebrandable software" },
      { name: "Vendasta", url: "https://vendasta.com", description: "White-label platform" },
      { name: "GoHighLevel", url: "https://gohighlevel.com", description: "Marketing automation platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Tool Selection",
        description: "Choose and rebrand high-demand software tool",
        tasks: [
          "Research white-label opportunities in marketing, productivity, or design tools",
          "Select proven SaaS with strong demand and reasonable pricing structure",
          "Rebrand interface, create custom domain, and set up payment processing",
          "Start with simple tools like website builders or social media schedulers"
        ],
        timeframe: "3-4 weeks",
        investment: "$300-$800",
        expectedEarning: "$1000-$3000/month"
      },
      {
        phase: 2,
        title: "Subscription Sales",
        description: "Build customer base and recurring revenue",
        tasks: [
          "Create compelling sales pages highlighting unique value proposition",
          "Implement tiered pricing strategy with different feature levels",
          "Build customer support system and onboarding process",
          "Focus on customer retention and reducing churn rate"
        ],
        timeframe: "2-3 months",
        investment: "$800-$2000",
        expectedEarning: "$3000-$8000/month"
      },
      {
        phase: 3,
        title: "Affiliate Scaling",
        description: "Scale through affiliate partners and referrals",
        tasks: [
          "Launch affiliate program offering attractive commissions to partners",
          "Create marketing materials and training for affiliate partners",
          "Build integrations with complementary tools and services",
          "Expand to multiple white-label tools serving same customer base"
        ],
        timeframe: "4-6 months",
        investment: "$2000-$5000",
        expectedEarning: "$8000-$15000/month"
      }
    ]
  },
  {
    id: 20,
    title: "Custom Chatbots",
    description: "Create AI chatbots for businesses using GPT technology",
    icon: MessageSquare,
    earning: "$150-$400/day",
    difficulty: "Medium",
    links: [
      { name: "OpenAI API", url: "https://openai.com/api", description: "GPT API access" },
      { name: "Chatbase", url: "https://chatbase.co", description: "Custom chatbot platform" },
      { name: "Zapier", url: "https://zapier.com", description: "Automation and integrations" },
      { name: "Bubble", url: "https://bubble.io", description: "No-code app development" }
    ],
    phases: [
      {
        phase: 1,
        title: "GPT Bot Creation",
        description: "Build custom chatbots using GPT API",
        tasks: [
          "Learn to use GPT API and chatbot creation platforms",
          "Create demo chatbots for different industries (e-commerce, support, sales)",
          "Offer setup services to small businesses for $500-1500 per bot",
          "Focus on simple use cases like FAQ responses and lead qualification"
        ],
        timeframe: "3-4 weeks",
        investment: "$200-$600",
        expectedEarning: "$2000-$4000/month"
      },
      {
        phase: 2,
        title: "Setup & Integration",
        description: "Offer complete chatbot setup and website integration",
        tasks: [
          "Expand services to include website integration and custom training",
          "Create packages combining bot setup, training, and basic customization",
          "Build relationships with web developers and marketing agencies for referrals",
          "Increase pricing to $1500-3000 for complete chatbot solutions"
        ],
        timeframe: "2-3 months",
        investment: "$600-$1200",
        expectedEarning: "$4000-$8000/month"
      },
      {
        phase: 3,
        title: "Retainer Model",
        description: "Build recurring revenue through monthly retainers",
        tasks: [
          "Offer monthly retainer packages for bot maintenance and optimization",
          "Create advanced features like analytics, A/B testing, and performance reports",
          "Build SaaS platform allowing clients to manage their own bots",
          "Scale team to handle setup while focusing on strategy and sales"
        ],
        timeframe: "4-6 months",
        investment: "$1200-$3000",
        expectedEarning: "$8000-$20000/month"
      }
    ]
  },
  {
    id: 21,
    title: "Beehiiv Newsletter Growth",
    description: "Help others grow newsletters using Beehiiv platform",
    icon: Mail,
    earning: "$150-$400/day",
    difficulty: "Medium",
    links: [
      { name: "Beehiiv", url: "https://beehiiv.com", description: "Newsletter platform" },
      { name: "ConvertKit", url: "https://convertkit.com", description: "Email marketing tool" },
      { name: "Twitter", url: "https://twitter.com", description: "Newsletter promotion" },
      { name: "Medium", url: "https://medium.com", description: "Content publishing" }
    ],
    phases: [
      {
        phase: 1,
        title: "Growth Services",
        description: "Help newsletter creators gain subscribers",
        tasks: [
          "Master Beehiiv platform features and growth strategies",
          "Offer newsletter setup and optimization services for $300-800",
          "Create growth strategies using social media and content marketing",
          "Help clients implement lead magnets and subscriber acquisition funnels"
        ],
        timeframe: "2-4 weeks",
        investment: "$200-$500",
        expectedEarning: "$1500-$3000/month"
      },
      {
        phase: 2,
        title: "Content Strategy",
        description: "Provide ongoing content and growth strategy",
        tasks: [
          "Offer monthly retainer packages for content strategy and growth",
          "Create templates and frameworks for different newsletter niches",
          "Build partnerships with newsletter creators for case studies",
          "Expand services to include email design and automation setup"
        ],
        timeframe: "1-3 months",
        investment: "$500-$1000",
        expectedEarning: "$3000-$6000/month"
      },
      {
        phase: 3,
        title: "Marketing Agency",
        description: "Build full-service newsletter marketing agency",
        tasks: [
          "Hire team to handle setup, design, and content creation",
          "Focus on high-level strategy and client acquisition",
          "Create done-for-you newsletter services for busy entrepreneurs",
          "Build tools and courses teaching newsletter growth strategies"
        ],
        timeframe: "4-6 months",
        investment: "$1000-$3000",
        expectedEarning: "$6000-$15000/month"
      }
    ]
  },
  {
    id: 22,
    title: "PDF Hustles with Canva",
    description: "Create and sell digital templates and resources",
    icon: FileText,
    earning: "$100-$300/day",
    difficulty: "Easy",
    links: [
      { name: "Canva", url: "https://canva.com", description: "Design tool for templates" },
      { name: "Etsy", url: "https://etsy.com", description: "Digital template marketplace" },
      { name: "Creative Market", url: "https://creativemarket.com", description: "Design asset marketplace" },
      { name: "Gumroad", url: "https://gumroad.com", description: "Digital product sales" }
    ],
    phases: [
      {
        phase: 1,
        title: "Template Creation",
        description: "Create high-demand templates using Canva",
        tasks: [
          "Research trending template categories: planners, resumes, social media",
          "Create 20-30 professional templates in chosen niche",
          "List templates on Etsy and Gumroad with SEO-optimized titles",
          "Price individual templates at $5-15 and track best performers"
        ],
        timeframe: "2-3 weeks",
        investment: "$30-$100",
        expectedEarning: "$500-$1500/month"
      },
      {
        phase: 2,
        title: "Bundle Packages",
        description: "Create template bundles and expand to new niches",
        tasks: [
          "Bundle related templates into packages priced $25-75",
          "Expand to new categories based on market demand and competition",
          "Create seasonal and trending templates for timely promotions",
          "Build email list for product launches and repeat customers"
        ],
        timeframe: "1-2 months",
        investment: "$100-$400",
        expectedEarning: "$1500-$4000/month"
      },
      {
        phase: 3,
        title: "Gumroad Store",
        description: "Build comprehensive template store with multiple niches",
        tasks: [
          "Create professional Gumroad store with organized categories",
          "Develop exclusive template collections not available elsewhere",
          "Launch affiliate program allowing others to promote your templates",
          "Create subscription model for monthly template releases"
        ],
        timeframe: "2-4 months",
        investment: "$400-$1000",
        expectedEarning: "$4000-$9000/month"
      }
    ]
  },
  {
    id: 23,
    title: "Instagram Growth Coaching",
    description: "Help individuals and businesses grow their Instagram presence",
    icon: TrendingUp,
    earning: "$150-$400/day",
    difficulty: "Medium",
    links: [
      { name: "Instagram", url: "https://instagram.com", description: "Platform to master" },
      { name: "Later", url: "https://later.com", description: "Instagram analytics tool" },
      { name: "Hootsuite", url: "https://hootsuite.com", description: "Social media management" },
      { name: "Canva", url: "https://canva.com", description: "Content creation tool" }
    ],
    phases: [
      {
        phase: 1,
        title: "Profile Audits",
        description: "Offer Instagram profile reviews and optimization",
        tasks: [
          "Master Instagram algorithm and best growth practices",
          "Create comprehensive audit checklist covering profile, content, and engagement",
          "Offer profile review services for $50-150 per audit",
          "Build portfolio with before/after case studies of client growth"
        ],
        timeframe: "2-4 weeks",
        investment: "$100-$300",
        expectedEarning: "$1000-$2500/month"
      },
      {
        phase: 2,
        title: "Growth Audits",
        description: "Provide detailed growth strategies and monthly check-ins",
        tasks: [
          "Develop comprehensive growth strategy packages priced $300-800",
          "Offer monthly consulting calls and strategy updates",
          "Create custom content calendars and hashtag strategies",
          "Build reputation through client success stories and testimonials"
        ],
        timeframe: "1-3 months",
        investment: "$300-$600",
        expectedEarning: "$2500-$6000/month"
      },
      {
        phase: 3,
        title: "Course Creation",
        description: "Create Instagram growth course and group coaching",
        tasks: [
          "Develop comprehensive Instagram growth course priced $497-1997",
          "Launch group coaching program with monthly calls and community",
          "Create done-for-you services for busy entrepreneurs",
          "Build personal brand as Instagram growth expert through content"
        ],
        timeframe: "3-6 months",
        investment: "$800-$2000",
        expectedEarning: "$6000-$12000/month"
      }
    ]
  },
  {
    id: 24,
    title: "Canva Freelance Design",
    description: "Offer professional design services using Canva",
    icon: PenTool,
    earning: "$100-$350/day",
    difficulty: "Easy",
    links: [
      { name: "Canva", url: "https://canva.com", description: "Professional design tool" },
      { name: "Fiverr", url: "https://fiverr.com", description: "Freelance design marketplace" },
      { name: "99designs", url: "https://99designs.com", description: "Design contest platform" },
      { name: "Dribbble", url: "https://dribbble.com", description: "Design portfolio platform" }
    ],
    phases: [
      {
        phase: 1,
        title: "Service Launch",
        description: "Start with basic design services using Canva templates",
        tasks: [
          "Master Canva Pro features and design principles",
          "Create service offerings: logos, flyers, social media graphics",
          "Build portfolio with diverse design samples",
          "Start with competitive pricing: $25-75 per design project"
        ],
        timeframe: "2-3 weeks",
        investment: "$50-$200",
        expectedEarning: "$800-$2000/month"
      },
      {
        phase: 2,
        title: "Brand Kits",
        description: "Offer complete brand identity packages",
        tasks: [
          "Create comprehensive brand packages: logo, colors, fonts, templates",
          "Price brand identity packages at $300-800",
          "Develop relationships with small business owners and entrepreneurs",
          "Add services like business card design and marketing materials"
        ],
        timeframe: "1-2 months",
        investment: "$200-$500",
        expectedEarning: "$2000-$5000/month"
      },
      {
        phase: 3,
        title: "Design Shop",
        description: "Build template shop and passive income streams",
        tasks: [
          "Create and sell design templates on Etsy and Creative Market",
          "Offer design subscription services for ongoing client needs",
          "Build team of junior designers to handle basic projects",
          "Focus on high-value clients and complex design projects"
        ],
        timeframe: "3-4 months",
        investment: "$500-$1200",
        expectedEarning: "$5000-$10000/month"
      }
    ]
  },
  {
    id: 25,
    title: "Productized Services",
    description: "Create standardized services like resume revamps and landing pages",
    icon: Target,
    earning: "$200-$500/day",
    difficulty: "Medium",
    links: [
      { name: "Gumroad", url: "https://gumroad.com", description: "Service delivery platform" },
      { name: "Notion", url: "https://notion.so", description: "Service documentation" },
      { name: "Calendly", url: "https://calendly.com", description: "Appointment scheduling" },
      { name: "Loom", url: "https://loom.com", description: "Video communication" }
    ],
    phases: [
      {
        phase: 1,
        title: "Service Packages",
        description: "Create standardized resume and profile services",
        tasks: [
          "Develop fixed-price packages: resume revamp ($150), LinkedIn optimization ($100)",
          "Create streamlined process with templates and checklists",
          "Build intake forms and automated delivery systems",
          "Focus on quick turnaround times and consistent quality"
        ],
        timeframe: "2-4 weeks",
        investment: "$100-$400",
        expectedEarning: "$2000-$4000/month"
      },
      {
        phase: 2,
        title: "Landing Pages",
        description: "Add website and landing page creation services",
        tasks: [
          "Learn no-code tools like Carrd, Webflow, or WordPress",
          "Offer landing page creation packages priced $300-800",
          "Create template library for faster delivery",
          "Build relationships with coaches, consultants, and small businesses"
        ],
        timeframe: "1-3 months",
        investment: "$400-$800",
        expectedEarning: "$4000-$8000/month"
      },
      {
        phase: 3,
        title: "Brand Agency",
        description: "Scale into full personal brand agency",
        tasks: [
          "Combine all services into comprehensive personal brand packages",
          "Hire team members to handle different aspects of service delivery",
          "Focus on high-ticket clients willing to pay $2000-5000 for complete branding",
          "Build reputation as go-to expert for personal brand development"
        ],
        timeframe: "4-6 months",
        investment: "$1000-$2500",
        expectedEarning: "$8000-$15000/month"
      }
    ]
  }
];