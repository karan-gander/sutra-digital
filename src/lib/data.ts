import { ServiceItem, Project, ProcessStep, Testimonial, TechItem } from "@/types";

export const AGENCY_INFO = {
  name: "SUTRA",
  hindiName: "सूत्र डिजिटल",
  legalName: "Sutra Digital Solutions Pvt. Ltd.",
  tagline: "Timeless Indian Craftsmanship. Next-Gen Digital Engineering.",
  shortDescription:
    "We empower Indian enterprises, startups, and global visionaries to build high-converting web applications, fluid mobile products, and compound SEO growth engines.",
  email: "technicalkaran075@gmail.com",
  phone: "+91 8432168950",
  address: "Sardarpura, Jodhpur",
  workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
  // status: "Shubh Aarambh: Booking for Q1 / Q2 Projects",
  // socials: {
  //   github: "https://github.com",
  //   twitter: "https://x.com",
  //   linkedin: "https://linkedin.com",
  //   dribbble: "https://dribbble.com",
  // },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo-growth",
    category: "seo",
    title: "SEO & Digital Growth",
    tagline: "Dominate search rankings across Bharat & global markets.",
    badge: "Organic Growth Engine",
    iconName: "TrendingUp",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    description:
      "Transform search engines into your most reliable customer acquisition engine. We combine technical SEO audits, vernacular Hindi/English semantic optimization, and authoritative backlink strategies to deliver compounding organic visibility.",
    deliverables: [
      "Technical SEO & Core Web Vitals Optimization",
      "Multilingual & Vernacular Semantic Optimization",
      "Off-Page Authority Building & Digital PR",
      "High-Intent Keyword Intelligence & Gap Analysis",
      "Google Search Console & SERP Feature Takeover",
      "Programmatic SEO & Content Conversion Engines",
    ],
    metrics: [
      { label: "Avg. Organic Lift", value: "+420%" },
      { label: "Keywords on Page 1", value: "15,000+" },
      { label: "Domain Authority Boost", value: "+38 pts" },
    ],
    detailedOverview:
      "Our SEO strategies are tailored for high-growth Indian commerce and global SaaS companies. We engineer programmatic Next.js schemas, lightning-fast rendering, and regional search dominance that algorithms reward continuously.",
    tools: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "PostHog", "Next.js Metadata"],
  },
  {
    id: "web-development",
    category: "web-dev",
    title: "Web Development",
    tagline: "Blazing-fast Next.js web applications crafted with precision.",
    badge: "Enterprise Engineering",
    iconName: "Globe",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    description:
      "From high-conversion D2C storefronts and corporate flagships to complex enterprise cloud platforms, we architect resilient, accessible, and ultra-fast web applications built on modern frameworks.",
    deliverables: [
      "High-Performance Business Websites",
      "D2C E-commerce & Headless Storefronts",
      "Custom SaaS & FinTech Web Applications",
      "Full-Stack Architecture & Microservices",
      "UPI, NetBanking & International Payment Gateways",
      "Website Redesign & Core Web Vitals 99+ Tuning",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Median Page Load Time", value: "< 400ms" },
      { label: "Uptime Reliability", value: "99.99%" },
    ],
    detailedOverview:
      "Engineered with Next.js App Router, React 19, TypeScript, and Razorpay/Stripe integration. Every component is tuned for sub-second page loads across Indian 4G/5G mobile networks and global fiber connections.",
    tools: ["Next.js 16", "TypeScript", "Tailwind CSS", "React 19", "PostgreSQL", "Prisma", "Razorpay", "Vercel"],
  },
  {
    id: "mobile-development",
    category: "mobile-dev",
    title: "Mobile App Development",
    tagline: "Silky-smooth native and cross-platform apps users cherish.",
    badge: "Fluid Native Experience",
    iconName: "Smartphone",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    description:
      "We design and build intuitive, aesthetically sublime mobile applications for Android and iOS. Featuring instant UPI payments, offline-first sync, and 60fps animations, our apps delight millions of daily active users.",
    deliverables: [
      "Native Android Applications (Kotlin / Jetpack)",
      "Native iOS Applications (Swift / SwiftUI)",
      "Cross-Platform Apps (React Native / Expo)",
      "Instant UPI Deep-linking & Biometric Auth",
      "Secure GraphQL / REST API Microservices",
      "App Store & Google Play Storefront Optimization",
    ],
    metrics: [
      { label: "Play Store Avg. Rating", value: "4.9 ★" },
      { label: "Frame Rate Consistency", value: "60 FPS" },
      { label: "Crash-Free Sessions", value: "99.95%" },
    ],
    detailedOverview:
      "From fintech wallets and healthcare platforms to quick-commerce mobile experiences, our mobile engineering ensures low battery consumption, offline-ready SQLite caches, and seamless vernacular language switching.",
    tools: ["React Native", "SwiftUI", "Kotlin", "Expo", "Firebase", "UPI SDKs", "Fastlane"],
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: "tradition-tech",
    title: "Timeless Craft & Modern Tech",
    description:
      "We combine the meticulous dedication of Indian artisan craftsmanship with modern Next.js, TypeScript, and edge cloud engineering.",
    icon: "Sparkles",
    badge: "Artisan Quality",
    highlight: "Zero Technical Debt",
  },
  {
    id: "bharat-scale",
    title: "Engineered for Bharat & Beyond",
    description:
      "Optimized to run flawlessly on budget smartphones on 4G networks as smoothly as on gigabit fiber in New York or London.",
    icon: "Globe",
    badge: "Pan-India & Global",
    highlight: "Sub-400ms on 4G/5G",
  },
  {
    id: "payments-upi",
    title: "Seamless UPI & Global Payments",
    description:
      "Native integration with Razorpay, Cashfree, Stripe, PayU, and instant UPI auto-pay alongside multi-currency international billing.",
    icon: "CreditCard",
    badge: "Zero Drop-Off",
    highlight: "UPI, Cards & Crypto",
  },
  {
    id: "performance",
    title: "Obsessive Performance",
    description:
      "Sub-500ms TTFB, 99+ Core Web Vitals, and zero layout shift. Speed directly translates into higher Google ranks and increased conversions.",
    icon: "Zap",
    badge: "99+ Lighthouse",
    highlight: "< 450ms Latency",
  },
  {
    id: "transparency",
    title: "Radical Transparency",
    description:
      "Direct Slack/WhatsApp channels, weekly sprint Loom video walk-throughs, and transparent Jira boards. No hidden surprises.",
    icon: "MessageSquare",
    badge: "Direct Access",
    highlight: "Weekly Live Sprints",
  },
  {
    id: "support",
    title: "Dedicated Ongoing Support",
    description:
      "Launch day is just the auspicious beginning. We provide 24/7 SLA monitoring, automated backups, and continuous feature sprints.",
    icon: "ShieldCheck",
    badge: "24/7 SLA",
    highlight: "Dedicated Dev Pod",
  },
];

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    number: "01",
    title: "Sankalp & Discovery",
    subtitle: "Understanding your vision, business goals, and target demographic.",
    description:
      "We dive deep into your market ecosystem, user personas across Tier 1, 2, and 3 markets, and conduct a technical audit to architect an airtight digital roadmap.",
    deliverables: ["Product Vision Document", "Technical Feasibility Audit", "Competitive Landscape Matrix", "Project KPI Scope"],
    timeline: "Week 1",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Yojana & Strategy",
    subtitle: "Architecting the technical blueprint, API specs, and milestone timelines.",
    description:
      "We design system architecture diagrams, database schemas, payment integrations, and sprint timelines to ensure maximum scalability and cost efficiency.",
    deliverables: ["System Architecture Blueprint", "Database Schema & API Specs", "Sprint Breakdown & Milestones", "Risk Mitigation Plan"],
    timeline: "Week 2",
    icon: "FileCode2",
  },
  {
    number: "03",
    title: "Kala & UI/UX Design",
    subtitle: "Bespoke design systems, interactive prototypes, and Indian cultural finesse.",
    description:
      "We craft clickable Figma prototypes with harmonious color palettes, intuitive typography scales, accessible micro-interactions, and mobile-first layouts.",
    deliverables: ["Clickable Figma Prototypes", "Component Design System", "Responsive Breakpoints UI", "Design Handoff Assets"],
    timeline: "Weeks 3 – 4",
    icon: "Palette",
  },
  {
    number: "04",
    title: "Nirman & Development",
    subtitle: "Building clean, type-safe Next.js and mobile code with continuous integration.",
    description:
      "Our engineers develop your web and mobile applications using Next.js 16, React 19, TypeScript, and native mobile toolchains with weekly staging previews.",
    deliverables: ["Type-Safe Codebase", "Component Library", "Server Actions & API Routes", "Staging Environment Previews"],
    timeline: "Weeks 5 – 8",
    icon: "Terminal",
  },
  {
    number: "05",
    title: "Parikshan & Shubh Launch",
    subtitle: "Comprehensive QA, load testing, security audits, and zero-downtime release.",
    description:
      "We execute automated end-to-end tests, cross-device testing, Core Web Vitals checks, and DNS cutover strategies for an auspicious, celebration-worthy launch.",
    deliverables: ["E2E Test Coverage Reports", "Core Web Vitals 99+ Certification", "Security & SEO Checklist", "Zero-Downtime Live Release"],
    timeline: "Week 9",
    icon: "Rocket",
  },
  {
    number: "06",
    title: "Seva & Ongoing Growth",
    subtitle: "Continuous optimization, 24/7 monitoring, and proactive iteration sprints.",
    description:
      "We maintain 24/7 uptime monitoring, automated database backups, security patches, and conversion optimization to compound your digital returns.",
    deliverables: ["24/7 Uptime & Error Alerting", "Monthly Core Updates & Security Patches", "Growth Experiments Sprints", "Dedicated SLA Channel"],
    timeline: "Continuous",
    icon: "Activity",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "vedic-pay",
    title: "BharatPay Mobile",
    slug: "bharatpay-fintech-wallet",
    client: "Bharat Digital Payments",
    category: "Mobile Apps",
    description: "Next-gen Indian fintech mobile wallet with instant UPI 2.0 payments, sound-box integration, and multilingual voice navigation.",
    fullOverview:
      "A consumer and merchant fintech app designed for millions of users across 12 Indian languages with sub-second biometric UPI transfers and offline transaction support.",
    tags: ["React Native", "UPI 2.0 SDK", "Expo", "Multilingual", "Node.js"],
    gradient: "from-emerald-500 via-teal-500 to-amber-500",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Transaction Speed", value: "280ms" },
      { label: "Monthly Volume", value: "₹180 Cr+" },
    ],
    challenge: "Enabling seamless UPI checkouts on low-bandwidth rural networks with 100% transaction integrity.",
    solution: "Engineered offline-resilient gesture queues, SQLite local caching, and adaptive network payload compression.",
    mockupType: "mobile",
    featured: true,
    isDemo: true,
  },
  {
    id: "swarna-craft",
    title: "Swarna Heritage Atelier",
    slug: "swarna-heritage-commerce",
    client: "Swarna Jewellers Jaipur",
    category: "Web Development",
    description: "Luxury Indian heritage jewelry D2C platform with 3D gold bullion customizer, virtual try-on, and global courier dispatch.",
    fullOverview:
      "An iconic Jaipur jewelry house requiring an ultra-luxurious digital flagship that presents intricate Kundan and Polki craft with high-resolution imagery and sub-second loading.",
    tags: ["Next.js 16", "Shopify Storefront", "Tailwind CSS", "Razorpay Global"],
    gradient: "from-amber-600 via-orange-500 to-yellow-600",
    metrics: [
      { label: "Conversion Lift", value: "+54%" },
      { label: "Average Order Value", value: "₹48,500" },
      { label: "Lighthouse Score", value: "99/100" },
    ],
    challenge: "Rendering 4K macro photography of handcrafted gold jewelry without exceeding mobile bundle weight thresholds.",
    solution: "Implemented Next.js Image with WebP/AVIF progressive edge streaming and pre-warmed checkout routing.",
    mockupType: "browser",
    featured: true,
    isDemo: true,
  },
  {
    id: "dharma-seo",
    title: "AyurVeda Organic Engine",
    slug: "ayurveda-global-growth",
    client: "AyurVeda Wellness India",
    category: "SEO & Growth",
    description: "Multi-market technical SEO overhaul and Ayurvedic programmatic encyclopedia that generated +460% qualified organic traffic.",
    fullOverview:
      "An Ayurvedic wellness brand seeking to establish global and domestic topical authority for 500+ natural remedies, doshas, and wellness consultations.",
    tags: ["Technical SEO", "Schema Graphs", "Programmatic SEO", "Next.js"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    metrics: [
      { label: "Organic Inbound Traffic", value: "+460%" },
      { label: "High-Intent Consults", value: "+230%" },
      { label: "Page 1 Keywords", value: "11,200+" },
    ],
    challenge: "Restructuring 35,000 legacy herb and consultation URLs without losing established organic rankings.",
    solution: "Engineered automated semantic JSON-LD graphs, automated 301 redirection maps, and fast static page generation.",
    mockupType: "analytics",
    featured: true,
    isDemo: true,
  },
  {
    id: "kisan-setu",
    title: "Kisan Setu Agri-Tech",
    slug: "kisan-setu-platform",
    client: "Kisan Setu Rural Tech",
    category: "Web Development",
    description: "B2B agricultural produce marketplace connecting 85,000+ farmers directly with regional wholesale mandis across 7 states.",
    fullOverview:
      "A scalable mandi bidding and price discovery platform with real-time mandi rate updates, vernacular voice search, and instant bank settlement.",
    tags: ["Next.js", "WebSockets", "Prisma", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-green-600 via-emerald-600 to-teal-700",
    metrics: [
      { label: "Mandis Connected", value: "450+" },
      { label: "Farmer Payouts", value: "₹92 Cr+" },
      { label: "Daily Active Users", value: "65,000" },
    ],
    challenge: "Handling morning peak auction hours with tens of thousands of concurrent bids across patchy rural internet.",
    solution: "Architected lightweight WebSocket event dispatchers and distributed Redis queues on Mumbai cloud edges.",
    mockupType: "browser",
    featured: false,
    isDemo: true,
  },
  {
    id: "aarogya-care",
    title: "Aarogya Telehealth App",
    slug: "aarogya-telehealth-mobile",
    client: "Aarogya Healthcare Foundation",
    category: "Mobile Apps",
    description: "Bilingual telemedicine and diagnostic app connecting rural patients with leading urban specialist doctors in under 5 minutes.",
    fullOverview:
      "A fast, friendly medical consultation app offering encrypted video calls, digital prescription generation, and medicine home delivery.",
    tags: ["React Native", "WebRTC", "HIPAA/DISHA Compliant", "Express"],
    gradient: "from-blue-600 via-teal-600 to-emerald-600",
    metrics: [
      { label: "Patient Satisfaction", value: "98.2%" },
      { label: "Consultation Connect", value: "< 2 mins" },
      { label: "Active Doctors", value: "1,800+" },
    ],
    challenge: "Providing crystal-clear video consultation over low-bandwidth 3G/4G connections in remote villages.",
    solution: "Implemented adaptive WebRTC bitrate streaming with automatic audio-first fallback.",
    mockupType: "mobile",
    featured: false,
    isDemo: true,
  },
  {
    id: "indie-rank",
    title: "BharatRank AI Portal",
    slug: "bharatrank-search-intelligence",
    client: "BharatRank Marketing Labs",
    category: "SEO & Growth",
    description: "Real-time AI search intent analyzer tailored for Indian vernacular queries, festive trends, and regional search volumes.",
    fullOverview:
      "An automated search intelligence console tracking regional language SERP dynamics, festive shopping surges, and Google AI Overviews.",
    tags: ["Python", "Next.js", "Vector DB", "Google SERP API"],
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    metrics: [
      { label: "SERPs Monitored Daily", value: "2.5M" },
      { label: "Festive Trends Tracked", value: "100%" },
      { label: "Enterprise Marketers", value: "480+" },
    ],
    challenge: "Processing millions of multilingual search queries across Romanized Hindi, Tamil, Telugu, and English.",
    solution: "Constructed asynchronous Python parsing pipelines with edge-cached Next.js dashboard visualizers.",
    mockupType: "analytics",
    featured: false,
    isDemo: true,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sutra Digital rebuilt our D2C e-commerce platform on Next.js, and our conversion rate jumped by 58% within 60 days. Their ability to fuse aesthetic elegance with technical speed is truly world-class.",
    author: "Aditi Singhania",
    role: "Founder & CEO",
    company: "Swarna Heritage Atelier, Jaipur",
    rating: 5,
    avatarText: "AS",
    stats: "+58% Conversion Lift",
    isPlaceholderNotice: true,
  },
  {
    id: "2",
    quote:
      "Working with Sutra felt like having India's finest engineering minds on our core team. They delivered our UPI mobile banking app ahead of schedule with 99.95% crash-free sessions.",
    author: "Rajesh Kulkarni",
    role: "Chief Technology Officer",
    company: "Bharat Digital Payments, Mumbai",
    rating: 5,
    avatarText: "RK",
    stats: "4.9 ★ App Rating",
    isPlaceholderNotice: true,
  },
  {
    id: "3",
    quote:
      "Our organic search revenue had plateaued. Sutra restructured our technical SEO and vernacular schemas, driving over 460% growth in qualified organic inbound inquiries. Exceptional partners.",
    author: "Meera Krishnan",
    role: "VP of Digital Growth",
    company: "AyurVeda Wellness India, Bengaluru",
    rating: 5,
    avatarText: "MK",
    stats: "+460% Organic Surge",
    isPlaceholderNotice: true,
  },
  {
    id: "4",
    quote:
      "The aesthetic finesse, warm color harmony, and micro-interactions they crafted for our platform gave us the premium positioning we needed to win institutional clients in India and the US.",
    author: "Vikramaditya Sharma",
    role: "Managing Director",
    company: "Veda Capital Ventures, Gurugram",
    rating: 5,
    avatarText: "VS",
    stats: "-42% Bounce Rate",
    isPlaceholderNotice: true,
  },
];

export const TECH_STACK_DATA: TechItem[] = [
  { name: "Next.js 16", category: "Frontend", description: "App Router, Turbopack, React Server Components", level: "Expert" },
  { name: "TypeScript", category: "Frontend", description: "Strict type safety across client and server workflows", level: "Core" },
  { name: "React 19", category: "Frontend", description: "Concurrent rendering, server actions, and optimistic updates", level: "Expert" },
  { name: "Tailwind CSS", category: "Frontend", description: "Custom Indian heritage warm color palettes & responsive grid", level: "Expert" },
  { name: "Motion for React", category: "Frontend", description: "Fluid spring animations and tactile micro-interactions", level: "Expert" },
  { name: "React Native", category: "Mobile", description: "High-performance cross-platform Android & iOS apps", level: "Specialist" },
  { name: "Swift & SwiftUI", category: "Mobile", description: "Native iOS capabilities and hardware-accelerated fluid UI", level: "Specialist" },
  { name: "Kotlin & Jetpack", category: "Mobile", description: "Modern, reactive Android applications with UPI integration", level: "Specialist" },
  { name: "PostgreSQL & Prisma", category: "Backend & Cloud", description: "Scalable relational schema design with type-safe ORM", level: "Core" },
  { name: "Node.js & Edge Functions", category: "Backend & Cloud", description: "Ultra-low latency serverless functions in Mumbai & global edges", level: "Core" },
  { name: "Razorpay & Cashfree", category: "Backend & Cloud", description: "Seamless Indian UPI, Cards, NetBanking & Subscriptions", level: "Specialist" },
  { name: "Technical SEO & Schema", category: "SEO & Analytics", description: "Multilingual structured data and Core Web Vitals 99+ tuning", level: "Specialist" },
];

export const STATS_METRICS = [
  { label: "Completed Projects", value: "220+", suffix: "Delivered", description: "Across D2C, fintech, healthcare & SaaS" },
  { label: "Average Performance", value: "99.8", suffix: "Score", description: "Lighthouse Core Web Vitals rating" },
  { label: "Client Organic Lift", value: "4.5x", suffix: "Growth", description: "Average search traffic increase in 12 months" },
  { label: "Client Capital Generated", value: "₹450 Cr+", suffix: "Added", description: "In revenue & enterprise valuation" },
];
