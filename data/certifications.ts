import type { CertificationEntry } from "@/types";

export const certifications: CertificationEntry[] = [
  {
    icon: "Landmark",
    title: {
      id: "Sertifikasi Pengembang Software — BNSP",
      en: "Software Developer Certification — BNSP",
    },
    organization: "Lembaga Sertifikasi Profesi UBSI",
    date: { id: "Dikeluarkan: 6 Februari 2024", en: "Issued: February 6, 2024" },
    description: {
      id: "Sertifikasi nasional yang memvalidasi kompetensi pengembangan perangkat lunak profesional — OOP, clean code, testing, dan integrasi database.",
      en: "Nationally recognized certification validating professional software development competencies — OOP, clean code, testing, and database integration.",
    },
  },
  {
    icon: "Globe2",
    title: { id: "TOEFL English Proficiency", en: "TOEFL English Proficiency" },
    organization: "Language for International Communication (LIC)",
    date: {
      id: "Dikeluarkan: 24 Januari 2025 · Skor: 483 (High Intermediate)",
      en: "Issued: January 24, 2025 · Score: 483 (High Intermediate)",
    },
    description: {
      id: "Kecakapan kerja profesional untuk komunikasi teknis, dokumentasi, dan kolaborasi lintas fungsi dalam lingkungan internasional.",
      en: "Professional working proficiency for technical communication, documentation, and cross-functional collaboration in international environments.",
    },
  },
  {
    icon: "Wrench",
    title: {
      id: "Laravel Programming — Beginner to Advanced",
      en: "Laravel Programming — Beginner to Advanced",
    },
    organization: "Udemy",
    date: { id: "Dikeluarkan: Juli 2023", en: "Issued: July 2023" },
    description: {
      id: "Arsitektur Laravel, REST API, Eloquent ORM, keamanan aplikasi, dan pengembangan sistem enterprise. Diterapkan untuk platform ITSM internal.",
      en: "Laravel architecture, REST API, Eloquent ORM, application security, and enterprise system development. Applied for internal ITSM platform.",
    },
  },
  {
    icon: "ChartSpline",
    title: {
      id: "Data Science & Machine Learning Foundations",
      en: "Data Science & Machine Learning Foundations",
    },
    organization: "Udemy",
    date: { id: "Dikeluarkan: Juli 2024", en: "Issued: July 2024" },
    description: {
      id: "EDA, data cleaning, regression & classification models. Digunakan untuk analisis operasional IT dan pengambilan keputusan berbasis data.",
      en: "EDA, data cleaning, regression & classification models. Used for IT operational analysis and data-driven decision-making.",
    },
  },
];
