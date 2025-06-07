
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
  external?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  dataAiHint?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

export interface LegendBenefit {
  benefit: string;
  included: boolean;
}

export interface MonetizationStream {
  stream: string;
  price: string;
  purpose: string;
  icon: LucideIcon;
}

export interface StatCardItem {
  id: string;
  name: string;
  mainStat: string;
  secondaryStat: string;
  image: string;
  dataAiHint?: string;
  rank?: number;
}

export interface PlayerQuote {
  id: string;
  quote: string;
  author: string;
  image: string;
  dataAiHint?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  dataAiHint?: string;
  bio?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'Completed' | 'Ongoing' | 'Upcoming' | 'Planned' | 'Researching' | 'Vision';
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  dataAiHint?: string;
}

export interface LifecycleStep {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnerFormData {
  region: string;
  platform: string;
  teamName: string;
  contactEmail: string;
  licenseType: 'player' | 'team' | 'league' | 'scout' | 'partner';
  message?: string;
}

export interface SupportFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AppModulePreview {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  dataAiHint: string;
}
