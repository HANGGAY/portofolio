export type Locale = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface NavItem {
  href: string;
  label: LocalizedText;
}

export interface HeroMetric {
  value: number;
  suffix: string;
  label: LocalizedText;
}

export interface HeroCardStat {
  label: LocalizedText;
  display: string;
  percent: number;
  gradient: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  role: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
  location: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  website: string;
  websiteDisplay: string;
  resumeUrl: string;
  avatarSrc?: string;
  status: LocalizedText;
  cardTitle: LocalizedText;
  metrics: HeroMetric[];
  cardStats: HeroCardStat[];
}

export interface CoreValue {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface AboutData {
  paragraphs: LocalizedText[];
  values: CoreValue[];
  education: {
    institution: string;
    degree: LocalizedText;
    detail: LocalizedText;
  };
  focusAreas: string[];
  languages: { flag: string; label: LocalizedText }[];
}

export interface ExpertiseItem {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface TimelineEntry {
  role: LocalizedText;
  company: string;
  type?: LocalizedText;
  date: string;
  description: LocalizedText;
  tags: string[];
  impact: LocalizedText;
  impactIcon: string;
}

export interface ProjectEntry {
  badge: string;
  title: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  tech: string[];
}

export interface ImpactStat {
  prefix?: string;
  value: number;
  suffix: string;
  label: LocalizedText;
  description: LocalizedText;
}

export type SkillCategory =
  | "infra"
  | "backend"
  | "frontend"
  | "cloud"
  | "automation"
  | "database"
  | "os";

export interface SkillItem {
  cat: SkillCategory;
  icon: string;
  name: string;
}

export interface CertificationEntry {
  icon: string;
  title: LocalizedText;
  organization: string;
  date: LocalizedText;
  description: LocalizedText;
}

export interface ContactLink {
  icon: string;
  label: LocalizedText;
  value: string;
  href?: string;
}
