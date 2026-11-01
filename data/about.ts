import type { AboutData } from "@/types";

export const about: AboutData = {
  paragraphs: [
    {
      id: "Saya adalah IT Engineer dengan lebih dari 3 tahun pengalaman mengelola infrastruktur teknologi di lingkungan enterprise multi-site. Keahlian saya mencakup operasi IT, keamanan jaringan, manajemen sistem, dan pengembangan solusi digital yang diselaraskan dengan tujuan bisnis.",
      en: "I am an IT Engineer with over 3 years of experience managing technology infrastructure in enterprise multi-site environments. My expertise spans IT operations, network security, system management, and digital solution development aligned with business objectives.",
    },
    {
      id: "Di DINARSMU INDUSTRIES, saya menjadi titik sentral koordinasi IT lintas 6 site operasional — Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah & Cimanggis. Selain menekan downtime ~40% (Des 2025–Sep) lewat MIT System, saya membangun infrastruktur keamanan proaktif menggunakan IDS Suricata dan Wazuh untuk memantau 241 endpoint secara real-time demi menjamin integritas data dan kelangsungan bisnis.",
      en: "At DINARSMU INDUSTRIES, I serve as the central IT coordination hub across 6 operational sites — Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah & Cimanggis. Beyond cutting downtime ~40% (Dec 2025–Sep) via the MIT System, I built a proactive security infrastructure using Suricata IDS and Wazuh to monitor 241 endpoints in real-time, ensuring data integrity and business continuity.",
    },
    {
      id: "Filosofi saya sederhana: IT yang baik tidak terlihat, karena semuanya berjalan. Setiap keputusan teknis harus dapat dipertanggungjawabkan terhadap dampak bisnis — bukan sekadar keindahan arsitektur.",
      en: "My philosophy is simple: good IT is invisible because everything just works. Every technical decision must be accountable to business impact — not just architectural elegance.",
    },
  ],
  values: [
    {
      icon: "Target",
      title: { id: "Business-First", en: "Business-First" },
      description: {
        id: "Solusi teknis selalu dikaitkan dengan nilai bisnis yang terukur.",
        en: "Technical solutions are always tied to measurable business value.",
      },
    },
    {
      icon: "ShieldCheck",
      title: { id: "Security by Design", en: "Security by Design" },
      description: {
        id: "Keamanan diintegrasikan sejak awal, bukan tambahan di akhir.",
        en: "Security is integrated from the start, not added as an afterthought.",
      },
    },
    {
      icon: "Zap",
      title: { id: "Proactive Operations", en: "Proactive Operations" },
      description: {
        id: "Mencegah insiden lebih baik daripada bereaksi terhadapnya.",
        en: "Preventing incidents is always better than reacting to them.",
      },
    },
    {
      icon: "BarChart3",
      title: { id: "Data-Driven", en: "Data-Driven" },
      description: {
        id: "Keputusan IT didukung analisis data dan KPI yang jelas.",
        en: "IT decisions are backed by data analysis and clear KPIs.",
      },
    },
  ],
  education: {
    institution: "Universitas Bina Sarana Informatika",
    degree: { id: "S1 Sistem Informasi", en: "Bachelor's in Information Systems" },
    detail: { id: "IPK 3.61 · Cumlaude · 2021–2025", en: "GPA 3.61 · Cum Laude · 2021–2025" },
  },
  focusAreas: [
    "Enterprise IT Ops",
    "Network Security",
    "Private Cloud",
    "ITSM / ITIL",
    "Linux Server",
    "Full Stack Dev",
    "AI Automation",
    "Digital Transformation",
    "Data Analysis",
    "Infrastructure",
  ],
  languages: [
    { flag: "🇮🇩", label: { id: "Bahasa Indonesia — Native", en: "Bahasa Indonesia — Native" } },
    {
      flag: "🇺🇸",
      label: {
        id: "English — High Intermediate (TOEFL 483)",
        en: "English — High Intermediate (TOEFL 483)",
      },
    },
  ],
};
