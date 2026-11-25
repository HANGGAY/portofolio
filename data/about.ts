import type { AboutData } from "@/types";

export const about: AboutData = {
  paragraphs: [
    {
      id: "Saya adalah IT engineer yang berfokus pada cybersecurity, dengan pengalaman hands-on di deteksi dan respons insiden, vulnerability management, serta assessment aplikasi web di lingkungan enterprise multi-site. Latar belakang saya di IT operations, jaringan, dan development memberi konteks operasional saat menangani alert dan risiko.",
      en: "I am a cybersecurity-focused IT engineer with hands-on experience in detection and incident response, vulnerability management, and web application assessment in enterprise multi-site environments. My background in IT operations, networking, and development gives me operational context when triaging alerts and risk.",
    },
    {
      id: "Di DINARSMU INDUSTRIES, saya mengimplementasikan Wazuh di 243 endpoint (118 laptop, 125 PC), menyelesaikan 550 temuan kerentanan termasuk 6 temuan critical, dan membersihkan 503 alert high serta 15,732 alert medium. Saya juga membangun IDS berbasis Suricata untuk 241 endpoint di 4 site dan mengintegrasikannya dengan MIT System, platform ITSM yang saya kembangkan penuh dan jalankan di 6 site, lengkap dengan notifikasi WhatsApp untuk alert high-severity.",
      en: "At DINARSMU INDUSTRIES, I implemented Wazuh across 243 endpoints (118 laptops, 125 PCs), resolved 550 vulnerability findings including 6 critical findings, and cleared 503 high-severity and 15,732 medium-severity alerts. I also built a Suricata-based IDS for 241 endpoints across 4 sites and integrated it with the MIT System, the full-stack ITSM platform I developed and run across 6 sites, with WhatsApp notification for high-severity alerts.",
    },
    {
      id: "Saat ini saya merancang layer SOAR berbasis AI untuk memperkuat triage alert, sambil menyelesaikan Master of Information Technology. Saya berbasis di Karawang dan terbuka untuk kerja onsite.",
      en: "I am currently designing an AI-assisted SOAR layer to strengthen alert triage while completing the Master of Information Technology program. I am based in Karawang and open to onsite work.",
    },
  ],
  values: [
    {
      icon: "ShieldCheck",
      title: { id: "Detection & Response", en: "Detection & Response" },
      description: {
        id: "Wazuh dan Suricata IDS untuk monitoring, threat hunting, dan triage alert.",
        en: "Wazuh and Suricata IDS for monitoring, threat hunting, and alert triage.",
      },
    },
    {
      icon: "Target",
      title: { id: "Vulnerability Management", en: "Vulnerability Management" },
      description: {
        id: "Prioritas berdasarkan severity, remediation, dan verifikasi berkelanjutan.",
        en: "Severity-based prioritization, remediation, and continuous verification.",
      },
    },
    {
      icon: "Workflow",
      title: { id: "Security Workflow", en: "Security Workflow" },
      description: {
        id: "Alert masuk ke alur tiket MIT System agar dapat dilacak sampai selesai.",
        en: "Alerts flow into the MIT System ticketing workflow so they stay tracked to closure.",
      },
    },
    {
      icon: "BarChart3",
      title: { id: "Measurable Impact", en: "Measurable Impact" },
      description: {
        id: "Setiap perbaikan diukur dari penurunan downtime, alert, dan temuan.",
        en: "Every improvement is measured through reductions in downtime, alerts, and findings.",
      },
    },
  ],
  education: [
    {
      institution: "Universitas Bina Sarana Informatika",
      degree: {
        id: "Master of Information Technology (sedang berjalan)",
        en: "Master of Information Technology (in progress)",
      },
      detail: {
        id: "Kandidat Master of Information Technology",
        en: "Master of Information Technology candidate",
      },
    },
    {
      institution: "Universitas Bina Sarana Informatika",
      degree: {
        id: "S1 Sistem Informasi",
        en: "Bachelor's in Information Systems",
      },
      detail: {
        id: "Sep 2021 – 2025 · IPK 3.65",
        en: "Sep 2021 – 2025 · GPA 3.65",
      },
    },
  ],
  focusAreas: [
    {
      id: "Security Monitoring & Detection (SIEM/IDS)",
      en: "Security Monitoring & Detection (SIEM/IDS)",
    },
    {
      id: "Vulnerability Management & Assessment",
      en: "Vulnerability Management & Assessment",
    },
    { id: "Incident Triage & Response", en: "Incident Triage & Response" },
    {
      id: "Web Application Security (OWASP)",
      en: "Web Application Security (OWASP)",
    },
    { id: "Security Automation (SOAR)", en: "Security Automation (SOAR)" },
    {
      id: "Threat Detection Research (AI/ML)",
      en: "Threat Detection Research (AI/ML)",
    },
    {
      id: "IT Infrastructure & Operations",
      en: "IT Infrastructure & Operations",
    },
    { id: "Network Security", en: "Network Security" },
    { id: "Risk & Compliance (ISO 27001)", en: "Risk & Compliance (ISO 27001)" },
  ],
  languages: [
    { flag: "🇮🇩", label: { id: "Bahasa Indonesia", en: "Indonesian" } },
    { flag: "🇺🇸", label: { id: "Bahasa Inggris", en: "English" } },
  ],
};
