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
    expectedYear?: LocalizedText;
  }[];
  focusAreas: LocalizedText[];
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
  bullets?: { heading: LocalizedText; items: LocalizedText[] }[];
  responsibilities?: LocalizedText[];
  achievements?: LocalizedText[];
  tags: string[];
  impact: LocalizedText;
  impactIcon: string;
  link?: {
    href: string;
    label: LocalizedText;
    description: LocalizedText;
  };
}

export interface ProjectEntry {
  badge: string;
  status?: LocalizedText;
  title: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  tech: string[];
  link?: string;
}

export interface ResearchEntry {
  title: LocalizedText;
  role: LocalizedText;
  status?: LocalizedText;
  bullets: LocalizedText[];
  tags: string[];
}

export interface ImpactStat {
  prefix?: string;
  value: number;
  suffix: string;
  label: LocalizedText;
  description: LocalizedText;
}

export interface ProjectDetail {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  overview: LocalizedText;
  modules: {
    name: LocalizedText;
    description: LocalizedText;
    icon: string;
    metrics: LocalizedText;
  }[];
  integration: {
    title: LocalizedText;
    items: {
      name: string;
      description: LocalizedText;
    }[];
  };
  impact: {
    title: LocalizedText;
    metrics: {
      label: LocalizedText;
      value: string;
      detail: LocalizedText;
    }[];
  };
  stack: {
    title: LocalizedText;
    technologies: {
      category: string;
      items: string[];
    }[];
  };
  screenshots: {
    mit: { path: string; label: LocalizedText }[];
    esign: { path: string; label: LocalizedText }[];
  };
}

export interface SecurityFlowNode {
  key: string;
  title: LocalizedText;
  detail?: LocalizedText;
  x: number;
  y: number;
  w: number;
  h: number;
  tone: "source" | "server" | "soar" | "branch" | "decision" | "action" | "note";
}

export interface SecurityFlowDiagram {
  width: number;
  height: number;
  edges: string[];
  nodes: SecurityFlowNode[];
}

export interface SecurityPageData {
  badge: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  overview: LocalizedText;
  metrics: {
    label: LocalizedText;
    value: string;
    detail: LocalizedText;
  }[];
  diagram: SecurityFlowDiagram;
  screenshots: {
    path: string;
    label: LocalizedText;
  }[];
}

export interface SkillGroup {
  key: string;
  icon: string;
  label: LocalizedText;
  items: string[];
}

export interface CertificationEntry {
  icon: string;
  title: LocalizedText;
  organization: string;
  date: LocalizedText;
  description?: LocalizedText;
}

export interface ContactLink {
  icon: string;
  label: LocalizedText;
  value: string;
  href?: string;
}
