import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    badge: "Security & ITSM · 6 Sites",
    title: {
      id: "MIT System — DINARSMU INDUSTRIES",
      en: "MIT System — DINARSMU INDUSTRIES",
    },
    challenge: {
      id: "Operasi IT dan alur security alert terfragmentasi di 6 site tanpa satu platform tiket, aset, dan tracking insiden terpusat.",
      en: "IT operations and security alert workflows were fragmented across 6 sites without a single platform for ticketing, assets, and incident tracking.",
    },
    solution: {
      id: "Membangun MIT System dari nol sebagai platform ITSM full-stack — ticketing & incident management, asset management, assessment, service request, work order/SPK, dan software license management — lalu mengintegrasikan alert Suricata IDS dan Wazuh ke dalam alur tiket.",
      en: "Built the MIT System from scratch as a full-stack ITSM platform — ticketing and incident management, asset management, assessments, service requests, work orders/SPK, and software license management — then integrated Suricata IDS and Wazuh alerts into the ticketing workflow.",
    },
    result: {
      id: "550 temuan terselesaikan · 503 high + 15,732 medium alert dibersihkan · 241 endpoint Suricata di 4 site · 214 tiket · downtime turun ~40%",
      en: "550 findings resolved · 503 high + 15,732 medium alerts cleared · 241 Suricata endpoints across 4 sites · 214 tickets · downtime down ~40%",
    },
    tech: [
      "Wazuh",
      "Suricata IDS",
      "MIT System",
      "ITSM",
      "PHP/Laravel",
      "React.js",
      "Next.js",
      "Mikrotik",
      "VLAN",
    ],
    link: "/mit",
  },
  {
    badge: "SOAR / LLM",
    status: {
      id: "Sedang dikembangkan",
      en: "In development",
    },
    title: {
      id: "AI-assisted SOAR untuk triage alert (Wazuh + Suricata + MIT)",
      en: "AI-assisted SOAR for alert triage (Wazuh + Suricata + MIT)",
    },
    challenge: {
      id: "False positive pada alert Suricata membebani proses triage manual dan memperlambat respons.",
      en: "False positives in Suricata alerts burden manual triage and slow down response.",
    },
    solution: {
      id: "Merancang layer SOAR berbasis Shuffle di server Wazuh/Suricata yang terintegrasi dengan MIT System. Alert level 10 ke atas diperkaya dengan IP reputation, allowlist, CVE, dan criticalitas aset; LLM mengembalikan verdict terstruktur (severity, confidence); decision step mengarahkan ke auto-close, auto-action berisiko rendah via Wazuh API (block IP sementara), atau approval analis via Telegram/Slack/email. Guardrail: least privilege, allowlist aset kritikal, block berdurasi terbatas, rate limit, dan LLM tidak pernah mengeksekusi aksi — SOAR yang melakukannya.",
      en: "Designing a Shuffle-based SOAR layer on the Wazuh/Suricata server, integrated with the MIT System. Alerts of level 10 and above are enriched with IP reputation, allowlist, CVE, and asset criticality; an LLM returns a structured verdict (severity, confidence); a decision step routes each alert to auto-close, low-risk auto-action via the Wazuh API (temporary IP block), or analyst approval via Telegram/Slack/email. Guardrails: least privilege, critical-asset allowlist, time-limited blocks, rate limits, and the LLM never executes actions — SOAR does.",
    },
    result: {
      id: "Sedang dikembangkan — belum di-deploy.",
      en: "In development — not deployed.",
    },
    tech: [
      "Shuffle",
      "Wazuh",
      "Suricata IDS",
      "MIT System",
      "LLM",
      "Telegram",
      "Slack",
      "Email",
    ],
    link: "/security",
  },
  {
    badge: "AI Automation",
    title: {
      id: "AI Chatbot — SMK Wirasaba",
      en: "AI Chatbot — SMK Wirasaba",
    },
    challenge: {
      id: "Respons informasi akademik yang lambat dan tidak konsisten untuk siswa dan stakeholder.",
      en: "Slow and inconsistent academic information responses for students and stakeholders.",
    },
    solution: {
      id: "Membangun AI chatbot untuk profil sekolah dan layanan akademik menggunakan Flowise dan Node.js.",
      en: "Built an AI chatbot for school profile and academic services using Flowise and Node.js.",
    },
    result: {
      id: "Kecepatan respons informasi meningkat · aksesibilitas layanan 24/7",
      en: "Information response speed improved · 24/7 service accessibility",
    },
    tech: ["Flowise AI", "Node.js", "LLM", "RAG"],
  },
  {
    badge: "Web Platform",
    title: {
      id: "Portal Akademik — SMK Wirasaba",
      en: "Academic Portal — SMK Wirasaba",
    },
    challenge: {
      id: "Tidak adanya platform digital terpusat untuk manajemen informasi dan layanan akademik.",
      en: "No centralized digital platform for information management and academic services.",
    },
    solution: {
      id: "Mengembangkan dan memelihara portal web akademik lengkap dengan sistem manajemen konten.",
      en: "Developed and maintained a complete academic web portal with a content management system.",
    },
    result: {
      id: "Platform digital sekolah pertama yang terintegrasi & mudah diakses",
      en: "First integrated digital school platform — accessible and well-maintained",
    },
    tech: ["Laravel", "React.js", "MySQL", "REST API"],
  },
];
