
import type { NavItem, Feature, FaqItem, LegendBenefit, MonetizationStream, StatCardItem, PlayerQuote, RoadmapItem, TeamMember, HowItWorksStep, LifecycleStep, AppModulePreview } from '@/types';
import { ShieldCheck, BarChart3, Users, Star, Trophy, MessageSquare, Compass, FileText, HelpCircle, Briefcase, TrendingUp, UserPlus, ShieldQuestion, Gamepad2, Users2, Bot, UploadCloud, Zap, Award, Target, DollarSign, RadioTower, CalendarDays, Sparkles, Rocket, Brain, Network, Play, Smartphone, BarChartHorizontalBig, ScanText, Share2, Calculator, Vote, Activity, Home, Car, Palette } from 'lucide-react';

export const SITE_NAME = "VirtualProClubs";
export const DISCORD_INVITE_URL = "https://discord.gg/your-invite-link"; // Replace with actual Discord invite

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/features', label: 'Features' },
  { href: '/partner', label: 'Leagues' },
];

export const FEATURES_LIST: Feature[] = [
  {
    title: 'VPC Life™ Economy',
    description: 'Manage your pro\'s finances, investments, and lifestyle within a dynamic in-app economy. Make choices that impact your virtual career and wealth.',
    icon: Activity,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=VPC+Life+Economy',
    dataAiHint: 'digital economy graph',
  },
  {
    title: 'Match Upload + OCR',
    description: 'Effortlessly track your game stats. Upload screenshots of match results, and our OCR technology will automatically parse and record your performance.',
    icon: UploadCloud,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=OCR+Upload',
    dataAiHint: 'data upload scan',
  },
  {
    title: 'Team Hub + Comms',
    description: 'Coordinate with your teammates in a dedicated hub. Plan strategies, schedule matches, and communicate effectively for better team synergy.',
    icon: Users,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Team+Hub',
    dataAiHint: 'team communication chat',
  },
  {
    title: 'Auto-Generated CV (PDF/Web)',
    description: 'Showcase your virtual pro\'s achievements with an automatically generated CV, available as a shareable PDF or web link.',
    icon: FileText,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Player+CV',
    dataAiHint: 'digital resume document',
  },
  {
    title: 'Leaderboards',
    description: 'Compete for glory. Track your rank on global and regional leaderboards for various stats, keeping the competitive spirit alive.',
    icon: BarChart3,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Leaderboards',
    dataAiHint: 'stat chart rank',
  },
  {
    title: 'XP + VLevel Ascension™',
    description: 'Earn Experience Points (XP) through gameplay and missions. Level up your pro with VLevel Ascension™ to unlock new skills and perks.',
    icon: TrendingUp,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=XP+Progression',
    dataAiHint: 'level up arrow',
  },
  {
    title: 'Avatar Builder + Inventory',
    description: 'Customize your virtual pro\'s appearance with an extensive avatar builder and manage your collection of gear and items in your inventory.',
    icon: Palette,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Avatar+Builder',
    dataAiHint: 'player customization character',
  },
  {
    title: 'Referral + Social Graph',
    description: 'Grow your network. Invite friends to join VirtualProClubs and build your social graph to connect with other players and teams.',
    icon: Share2,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Social+Graph',
    dataAiHint: 'social network connections',
  },
  {
    title: 'Missions + Rewards',
    description: 'Undertake diverse missions and challenges to earn exclusive rewards, XP, and in-game items, keeping your journey engaging.',
    icon: Target,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Missions',
    dataAiHint: 'achievement goal target',
  },
  {
    title: 'Player Valuation System',
    description: 'Discover your pro\'s market value with our dynamic valuation system, influenced by performance, XP, and community perception.',
    icon: Calculator,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Player+Valuation',
    dataAiHint: 'financial value chart',
  },
  {
    title: 'Community Stat Voting',
    description: 'Participate in community polls to influence player attribute ratings, ensuring stats reflect perceived performance and skill.',
    icon: Vote,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Stat+Voting',
    dataAiHint: 'community poll vote',
  }
];


export const LEGEND_PASS_BENEFITS: { free: LegendBenefit[], legend: LegendBenefit[] } = {
  free: [
    { benefit: 'Basic Stat Tracking', included: true },
    { benefit: 'Limited Avatar Customization', included: true },
    { benefit: 'Standard CV Builder', included: true },
    { benefit: 'Community Forum Access', included: true },
    { benefit: 'Basic VPC Life™ Features', included: true, details: "Limited access" },
    { benefit: 'Properties (Mansion & Assets)', included: false },
    { benefit: 'Vehicles', included: false },
    { benefit: 'Family System', included: false },
    { benefit: 'Passive Income Mechanics', included: false },
    { benefit: 'XP Boosters & Max Level Cap', included: false },
    { benefit: 'Premium Leaderboard Access', included: false },
    { benefit: 'Priority Support', included: false },
    { benefit: 'Ad-Free Experience', included: false },
  ],
  legend: [
    { benefit: 'Advanced Stat Tracking & Analytics', included: true },
    { benefit: 'Full Avatar Customization & Premium Items', included: true },
    { benefit: 'Professional Career CV (PDF/Web)', included: true },
    { benefit: 'Legend-Only Discord Channels & Events', included: true },
    { benefit: 'Full VPC Life™ Access', included: true },
    { benefit: 'Exclusive Properties (e.g., Digital Mansion)', included: true },
    { benefit: 'Unlockable Vehicles', included: true },
    { benefit: 'In-depth Family System & Interactions', included: true },
    { benefit: 'Advanced Passive Income Mechanics', included: true },
    { benefit: 'XP Boosters & Increased Level Cap (Lvl 120)', included: true },
    { benefit: 'Access to Premium Leaderboards & Tiers', included: true },
    { benefit: 'Priority Customer Support', included: true },
    { benefit: 'Ad-Free Experience', included: true },
  ],
};

export const MONETIZATION_STREAMS: MonetizationStream[] = [
  { stream: 'Legend Pass™', price: '$12.99/mo', purpose: 'Unlock all premium features, exclusive content, and the full VPC experience.', icon: Star },
  { stream: 'League License', price: '$25/mo', purpose: 'Fixture tools, validation, admin features, league promotion.', icon: ShieldCheck },
  { stream: 'Boosted Posts', price: '$2/promo', purpose: 'Paid exposure for clips/profiles on leaderboards and community hub.', icon: TrendingUp },
  { stream: 'Cosmetic Packs', price: '$3–10 each', purpose: 'Avatar skins, custom trophies, profile cosmetics, mansion upgrades.', icon: Sparkles },
  { stream: 'Sponsorships', price: 'Variable (CPM)', purpose: 'Ad placements, club kit sponsorships, branded tournaments, leaderboard takeovers.', icon: Briefcase },
];


export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is VirtualProClubs?',
    answer: 'VirtualProClubs is a next-generation football companion app that merges stat tracking, avatar simulation, team management, and career-building into one immersive gamified ecosystem. It\'s designed for players who want to take their virtual football experience to the next level.',
    icon: ShieldQuestion
  },
  {
    question: 'How does stat tracking work?',
    answer: 'You can upload your match results via OCR (Optical Character Recognition) by submitting a screenshot, or manually input stats. Leagues can also validate match results for official record-keeping. These stats contribute to your player profile, XP, and leaderboard rankings.',
    icon: BarChart3
  },
  {
    question: 'What is VPC Life?',
    answer: 'VPC Life is an in-app simulation where you manage your virtual pro\'s life off the pitch. This includes financial decisions, relationships, training regimes, and lifestyle choices, all of which can impact your in-game performance and career progression.',
    icon: Gamepad2
  },
  {
    question: 'How do I join a league or create a team?',
    answer: 'Team creation and league participation are core features. You can search for existing leagues and teams to join, or if you have a League License, you can create and manage your own league with comprehensive admin tools.',
    icon: Users
  },
  {
    question: 'What is the Legend Pass?',
    answer: 'The Legend Pass is our premium subscription tier that unlocks the full VirtualProClubs experience. Benefits include advanced stat tracking, full avatar customization, complete VPC Life access, XP boosters, exclusive digital assets like mansions, and much more. See the Legend Pass page for a full comparison.',
    icon: Star
  },
  {
    question: 'Is VirtualProClubs free to play?',
    answer: 'Yes, VirtualProClubs offers a robust free-to-play experience, including basic stat tracking, avatar customization, and community access. The Legend Pass and other specific features are optional paid upgrades.',
    icon: DollarSign
  }
];

export const TOP_PLAYERS: StatCardItem[] = [
  { id: '1', name: 'StrikerSupreme', mainStat: 'XP: 150,000 | VC$: 2.5M', secondaryStat: 'Goals: 250', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P1', dataAiHint: 'player avatar' },
  { id: '2', name: 'MidfieldMaestro', mainStat: 'XP: 125,000 | VC$: 1.8M', secondaryStat: 'Goals: 180', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P2', dataAiHint: 'player avatar' },
  { id: '3', name: 'WallDefender', mainStat: 'XP: 110,000 | VC$: 1.2M', secondaryStat: 'Goals: 50', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P3', dataAiHint: 'player avatar' },
  { id: '4', name: 'AgileAssassin', mainStat: 'XP: 180,000 | VC$: 3.1M', secondaryStat: 'Goals: 220', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P4', dataAiHint: 'player avatar' },
  { id: '5', name: 'GoalMachine', mainStat: 'XP: 200,000 | VC$: 4.0M', secondaryStat: 'Goals: 300', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P5', dataAiHint: 'player avatar' },
];

export const TOP_TEAMS: StatCardItem[] = [
  { id: 'T1', name: 'Galactic FC', mainStat: 'Win %: 75 | VC$: 1.2M', secondaryStat: 'Global Rank: 1', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T1', dataAiHint: 'team logo' },
  { id: 'T2', name: 'Shadow Strikers', mainStat: 'Win %: 72 | VC$: 950K', secondaryStat: 'Global Rank: 2', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T2', dataAiHint: 'team logo' },
  { id: 'T3', name: 'Phantom XI', mainStat: 'Win %: 68 | VC$: 800K', secondaryStat: 'Global Rank: 3', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T3', dataAiHint: 'team logo' },
  { id: 'T4', name: 'Cosmic United', mainStat: 'Win %: 80 | VC$: 1.5M', secondaryStat: 'Global Rank: 4', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T4', dataAiHint: 'team logo' },
  { id: 'T5', name: 'Nova Legends', mainStat: 'Win %: 70 | VC$: 1.0M', secondaryStat: 'Global Rank: 5', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T5', dataAiHint: 'team logo' },
];

export const PLAYER_QUOTES: PlayerQuote[] = [
  { id: 'q1', quote: "VPC has revolutionized how our team tracks stats and builds camaraderie. The VPC Life sim is insanely addictive!", author: "PlayerX_22", image: "https://placehold.co/80x80/BE29EC/f5e6fc?text=Q1", dataAiHint: 'player avatar' },
  { id: 'q2', quote: "Finally, a platform that understands the pro clubs community. The leaderboards are fierce!", author: "LegendaryNoob", image: "https://placehold.co/80x80/BE29EC/f5e6fc?text=Q2", dataAiHint: 'player avatar' },
  { id: 'q3', quote: "The avatar customization is next level. My pro looks exactly how I want, and the Legend Pass perks are worth every penny.", author: "StyleQueenFC", image: "https://placehold.co/80x80/BE29EC/f5e6fc?text=Q3", dataAiHint: 'player avatar' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'tm1', name: 'Faisal', role: 'Founder & Visionary', avatar: 'https://placehold.co/150x150/121E33/f0f4f8?text=F', dataAiHint: 'person avatar', bio: 'Driving the future of virtual football, blending passion for gaming with innovative tech.' },
  { id: 'tm2', name: 'Alex Chen', role: 'Lead Developer', avatar: 'https://placehold.co/150x150/121E33/f0f4f8?text=AC', dataAiHint: 'person avatar', bio: 'Architecting the immersive VPC experience with cutting-edge development practices.' },
  { id: 'tm3', name: 'Maria Santos', role: 'Head of Community', avatar: 'https://placehold.co/150x150/121E33/f0f4f8?text=MS', dataAiHint: 'person avatar', bio: 'Fostering a vibrant and engaging community for all VPC players and partners.' },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'r1',
    title: 'Q4 2024: Mobile App Launch (iOS & Android)',
    description: 'Full mobile app release, bringing VPC to your fingertips anytime, anywhere. Enhanced UI/UX for mobile devices.',
    icon: Rocket,
    status: 'Upcoming'
  },
  {
    id: 'r2',
    title: 'Q1 2025: In-App Economy Expansion',
    description: 'Introduction of a player-driven marketplace for cosmetics, boosts, and services. Deeper integration of VPC Coin.',
    icon: DollarSign,
    status: 'Planned'
  },
  {
    id: 'r3',
    title: 'Q2 2025: Web3 Integration & Collectibles',
    description: 'Exploring NFT-based unique items, player cards, and achievements. Secure and transparent ownership of digital assets.',
    icon: Network,
    status: 'Researching'
  },
  {
    id: 'r4',
    title: 'Q3 2025: Real-Money Leagues & Tournaments',
    description: 'Introducing optional, regulated real-money leagues for highly competitive players, with prize pools and pro-level features.',
    icon: Trophy,
    status: 'Vision'
  },
  {
    id: 'r5',
    title: 'Ongoing: AI-Powered Scouting & Talent ID',
    description: 'Developing AI tools to help scouts identify promising talent within the VPC ecosystem based on advanced performance metrics.',
    icon: Brain,
    status: 'Ongoing'
  },
];


export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Start as a Player",
    description: "Create your pro, play matches, and upload stats via OCR or manually. Gain XP, complete missions, build your CV, and make a name for yourself. Your journey begins on the pitch, honing skills and rising through the ranks.",
    icon: UserPlus,
    image: "https://placehold.co/600x400/121E33/BE29EC?text=Player+Focus",
    dataAiHint: "player football action",
  },
  {
    title: "Evolve into a Manager",
    description: "Ready for more responsibility? Become a team manager. Recruit talent, define tactics, manage your squad's morale, and handle club finances through VPC Life™. Lead your team to victory and build a lasting legacy.",
    icon: Briefcase,
    image: "https://placehold.co/600x400/121E33/EC297B?text=Manager+Tactics",
    dataAiHint: "manager strategy board",
  },
  {
    title: "Ascend to League Admin",
    description: "Mastered management? Shape the entire competitive landscape as a League Administrator. Create custom leagues, manage fixtures, validate results, and foster a thriving community. Your decisions impact hundreds of players and teams.",
    icon: ShieldCheck,
    image: "https://placehold.co/600x400/BE29EC/f5e6fc?text=League+Admin+View",
    dataAiHint: "league dashboard overview",
  },
];

export const VPC_LIFECYCLE_STEPS: LifecycleStep[] = [
  { name: "Upload Stats", description: "Easily submit match results via OCR or manual entry.", icon: UploadCloud },
  { name: "Track Stats", description: "See your performance data update in real-time on your profile.", icon: BarChart3 },
  { name: "Earn Rewards", description: "Gain XP, unlock achievements, and receive in-game items.", icon: Award },
  { name: "Progress Pro", description: "Improve your avatar's skills, attributes, and overall VPC Life™.", icon: TrendingUp },
];

export const APP_MODULE_PREVIEWS: AppModulePreview[] = [
  {
    title: 'VPC Life™ Dashboard',
    description: 'Manage your pro\'s off-field activities, finances, training, and lifestyle choices that directly impact your career.',
    icon: Smartphone,
    image: 'https://placehold.co/600x400/BE29EC/f5e6fc?text=VPC+Life+Dashboard',
    dataAiHint: 'app dashboard',
  },
  {
    title: 'XP & Progression Tracker',
    description: 'Monitor your experience points, skill development, and progress towards unlocking new abilities and rewards.',
    icon: BarChartHorizontalBig,
    image: 'https://placehold.co/600x400/EC297B/fce6ee?text=XP+Tracker',
    dataAiHint: 'progress chart',
  },
  {
    title: 'Stat OCR Uploader',
    description: 'Quickly upload match results by snapping a photo. Our OCR tech automatically parses stats for you.',
    icon: ScanText,
    image: 'https://placehold.co/600x400/121E33/BE29EC?text=Stat+OCR',
    dataAiHint: 'ocr scan app',
  },
];

export const LEGAL_PAGES: NavItem[] = [
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/eula', label: 'EULA' },
];

export const SOCIAL_LINKS = [
  { name: 'Discord', href: DISCORD_INVITE_URL, icon: MessageSquare },
  { name: 'Twitter', href: '#', icon: Compass }, 
  { name: 'TikTok', href: '#', icon: Play },
];
