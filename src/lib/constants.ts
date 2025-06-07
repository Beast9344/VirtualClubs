
import type { NavItem, Feature, FaqItem, LegendBenefit, MonetizationStream, StatCardItem, PlayerQuote, RoadmapItem, TeamMember, HowItWorksStep, LifecycleStep, AppModulePreview } from '@/types';
import { ShieldCheck, BarChart3, Users, Star, Trophy, MessageSquare, Compass, FileText, HelpCircle, Briefcase, TrendingUp, UserPlus, ShieldQuestion, Gamepad2, Users2, Bot, UploadCloud, Zap, Award, Target, DollarSign, RadioTower, CalendarDays, Sparkles, Rocket, Brain, Network, Play, Smartphone, BarChartHorizontalBig, ScanText } from 'lucide-react';

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
    title: 'VPC Life: The Simulation',
    description: 'Live out your pro career. Manage finances, relationships, and lifestyle choices that impact your on-field performance and off-field legacy.',
    icon: Gamepad2,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=VPC+Life',
    dataAiHint: 'digital lifestyle',
  },
  {
    title: 'Dynamic Leaderboards',
    description: 'Compete for glory. Global and regional leaderboards for players, teams, and even viral clips. Updated in real-time.',
    icon: BarChart3,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Leaderboards',
    dataAiHint: 'stat chart',
  },
  {
    title: 'Advanced Avatar Builder',
    description: 'Craft your unique identity. Deep customization options for your in-game pro, from appearance to gear and celebrations.',
    icon: Users2,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Avatar+Builder',
    dataAiHint: 'player avatar',
  },
  {
    title: 'OCR Match Upload',
    description: 'Effortless stat tracking. Simply upload a screenshot of your match results, and our OCR technology parses the data automatically.',
    icon: UploadCloud,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=OCR+Upload',
    dataAiHint: 'data upload',
  },
  {
    title: 'Engaging Missions & Challenges',
    description: 'Earn XP and rewards. Complete daily, weekly, and special event missions to boost your pro’s development and unlock exclusive items.',
    icon: Zap,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Missions',
    dataAiHint: 'achievement goal',
  },
  {
    title: 'Community Stat Voting',
    description: 'Have your say. Participate in community votes to influence player ratings and attribute adjustments based on real performances.',
    icon: Award,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Stat+Voting',
    dataAiHint: 'community poll',
  },
  {
    title: 'Live Transfer Feed',
    description: 'Stay updated on player movements. A dynamic feed showcasing transfers, contract negotiations, and loan deals across the VPC ecosystem.',
    icon: RadioTower,
    image: 'https://placehold.co/600x400/121E33/f0f4f8?text=Transfer+Feed',
    dataAiHint: 'news feed',
  },
];

export const LEGEND_PASS_BENEFITS: { free: LegendBenefit[], legend: LegendBenefit[] } = {
  free: [
    { benefit: 'Basic Stat Tracking', included: true },
    { benefit: 'Limited Avatar Customization', included: true },
    { benefit: 'Standard CV Builder', included: true },
    { benefit: 'Community Forum Access', included: true },
    { benefit: 'VPC Life (Limited)', included: false },
    { benefit: 'Exclusive Mansion & Assets', included: false },
    { benefit: 'Family System Access', included: false },
    { benefit: 'XP Boosters', included: false },
    { benefit: 'Priority Support', included: false },
    { benefit: 'No Ads', included: false },
  ],
  legend: [
    { benefit: 'Advanced Stat Tracking & Analytics', included: true },
    { benefit: 'Full Avatar Customization & Premium Items', included: true },
    { benefit: 'Professional CV Builder with Sharing', included: true },
    { benefit: 'Legend-Only Discord Channels', included: true },
    { benefit: 'VPC Life (Full Access)', included: true },
    { benefit: 'Exclusive Mansion & Assets', included: true },
    { benefit: 'Family System Access', included: true },
    { benefit: 'XP Boosters', included: true },
    { benefit: 'Priority Support', included: true },
    { benefit: 'No Ads', included: true },
  ],
};

export const MONETIZATION_STREAMS: MonetizationStream[] = [
  { stream: 'Player ProCore', price: '$5/mo', purpose: 'Stats history, CV builder, basic VPC Life features.', icon: UserPlus },
  { stream: 'League License', price: '$25/mo', purpose: 'Fixture tools, validation, admin features, league promotion.', icon: ShieldCheck },
  { stream: 'Boosted Posts', price: '$2/promo', purpose: 'Paid exposure for clips/profiles on leaderboards and community hub.', icon: TrendingUp },
  { stream: 'Premium Themes', price: '$3–5 each', purpose: 'Avatar skins, custom trophies, profile cosmetics, mansion upgrades.', icon: Sparkles },
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
  { id: '1', name: 'StrikerSupreme', mainStat: 'Goals: 250', secondaryStat: 'Rating: 9.5', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P1', dataAiHint: 'player avatar' },
  { id: '2', name: 'MidfieldMaestro', mainStat: 'Assists: 180', secondaryStat: 'Rating: 9.3', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P2', dataAiHint: 'player avatar' },
  { id: '3', name: 'WallDefender', mainStat: 'Tackles: 300', secondaryStat: 'Rating: 9.2', image: 'https://placehold.co/100x100/BE29EC/f5e6fc?text=P3', dataAiHint: 'player avatar' },
];

export const TOP_TEAMS: StatCardItem[] = [
  { id: 'T1', name: 'Galactic FC', mainStat: 'Wins: 50', secondaryStat: 'Rank: 1', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T1', dataAiHint: 'team logo' },
  { id: 'T2', name: 'Shadow Strikers', mainStat: 'Wins: 45', secondaryStat: 'Rank: 2', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T2', dataAiHint: 'team logo' },
  { id: 'T3', name: 'Phantom XI', mainStat: 'Wins: 42', secondaryStat: 'Rank: 3', image: 'https://placehold.co/100x100/EC297B/fce6ee?text=T3', dataAiHint: 'team logo' },
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
