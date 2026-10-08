import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    badge: "ITSM Platform · 6 Sites",
    title: { id: "MIT System — DINARSMU INDUSTRIES", en: "MIT System — DINARSMU INDUSTRIES" },
    challenge: {
      id: "Operasi IT terfragmentasi di 6 site tanpa visibilitas, tracking insiden, atau kontrol aset terpusat — mengandalkan spreadsheet/WhatsApp/email.",
      en: "Fragmented IT operations across 6 sites with no visibility, incident tracking, or centralized asset control — relying on spreadsheets/WhatsApp/email.",
    },
    solution: {
      id: "Membangun MIT System dari nol — Asset Management, Ticketing & Incident, Assessment, Service Request, SPK & License Management — plus template Mikrotik/VLAN/OS-deployment yang menstandardisasi setup network/OS/backup.",
      en: "Built the MIT System from scratch — Asset Management, Ticketing & Incident, Assessments, Service Requests, Work Orders (SPK) & License Management — plus Mikrotik/VLAN/OS-deployment templates standardizing network/OS/backup setup.",
    },
    result: {
      id: "214 tiket tertangani · 92% assessment (49/53) & service request (47/51) selesai · Downtime ↓~40% (Des 2025–Sep) · Single platform 6 site untuk governance & SLA",
      en: "214 tickets handled · 92% assessments (49/53) & service requests (47/51) closed · Downtime ↓~40% (Dec 2025–Sep) · Single 6-site platform for governance & SLA",
    },
    tech: ["Laravel", "PHP", "MySQL", "ITIL", "ISO 27001", "Mikrotik", "VLAN"],
  },
  {
    badge: "Cloud Infrastructure",
    title: { id: "Private Cloud Storage (Nextcloud)", en: "Private Cloud Storage (Nextcloud)" },
    challenge: {
      id: "Ketergantungan tinggi pada layanan cloud publik yang mahal tanpa kendali data internal.",
      en: "High dependency on expensive public cloud services with no internal data control.",
    },
    solution: {
      id: "Implementasi private cloud internal yang aman untuk kolaborasi lintas site dengan kendali akses penuh.",
      en: "Implemented a secure internal private cloud for cross-site collaboration with full access control.",
    },
    result: {
      id: "Kepemilikan data meningkat · Biaya cloud publik berkurang signifikan",
      en: "Data ownership improved · Public cloud costs significantly reduced",
    },
    tech: ["Nextcloud", "Linux", "VPS", "SSL/TLS"],
  },
  {
    badge: "OS Migration",
    title: { id: "Migrasi OS: Windows → Linux Mint", en: "OS Migration: Windows → Linux Mint" },
    challenge: {
      id: "Biaya lisensi Windows yang tinggi dan risiko keamanan dari sistem yang tidak ter-update.",
      en: "High Windows licensing costs and security risks from unpatched systems.",
    },
    solution: {
      id: "Migrasi bertahap dengan user training — 70 dari 209 pengguna berhasil dimigrasikan di 3 site.",
      en: "Phased migration with user training — 70 of 209 users successfully migrated across 3 sites.",
    },
    result: {
      id: "70 pengguna migrasi · Keamanan & efisiensi biaya lisensi meningkat",
      en: "70 users migrated · Security & licensing cost efficiency improved",
    },
    tech: ["Linux Mint", "Ubuntu", "Change Management"],
  },
  {
    badge: "Web Application",
    title: { id: "QR Invoice System — Astra Daihatsu", en: "QR Invoice System — Astra Daihatsu" },
    challenge: {
      id: "Proses validasi dokumen invoice yang lambat dan rentan kesalahan manual.",
      en: "Slow invoice document validation process prone to manual errors.",
    },
    solution: {
      id: "Membangun sistem invoice berbasis QR Code untuk meningkatkan validasi dan traceability dokumen.",
      en: "Built a QR Code-based invoice system to improve document validation and traceability.",
    },
    result: {
      id: "Alur kerja administratif dipercepat · Kesalahan manual berkurang",
      en: "Administrative workflow accelerated · Manual errors reduced",
    },
    tech: ["Laravel 10", "QR Code", "MySQL", "REST API"],
  },
  {
    badge: "AI Automation",
    title: { id: "AI Chatbot — SMK Wirasaba", en: "AI Chatbot — SMK Wirasaba" },
    challenge: {
      id: "Respons informasi akademik yang lambat dan tidak konsisten untuk siswa dan stakeholder.",
      en: "Slow and inconsistent academic information responses for students and stakeholders.",
    },
    solution: {
      id: "Membangun AI chatbot untuk profil sekolah dan layanan akademik menggunakan Flowise dan Node.js.",
      en: "Built an AI chatbot for school profile and academic services using Flowise and Node.js.",
    },
    result: {
      id: "Kecepatan respons informasi meningkat · Aksesibilitas layanan 24/7",
      en: "Information response speed improved · 24/7 service accessibility",
    },
    tech: ["Flowise AI", "Node.js", "LLM", "RAG"],
  },
  {
    badge: "Web Platform",
    title: { id: "Portal Akademik — SMK Wirasaba", en: "Academic Portal — SMK Wirasaba" },
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
