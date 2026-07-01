import type { ImpactStat } from "@/types";

export const impactStats: ImpactStat[] = [
  {
    prefix: "↓",
    value: 40,
    suffix: "%",
    label: { id: "Penurunan IT Downtime", en: "IT Downtime Reduction" },
    description: {
      id: "Melalui MIT System & monitoring proaktif",
      en: "Through MIT System & proactive monitoring",
    },
  },
  {
    value: 5,
    suffix: "+",
    label: { id: "Site Enterprise Dikelola", en: "Enterprise Sites Managed" },
    description: {
      id: "Koordinasi IT lintas Jakarta, Karawang, Cikarang, Sentul",
      en: "IT coordination across Jakarta, Karawang, Cikarang, Sentul",
    },
  },
  {
    value: 70,
    suffix: "+",
    label: { id: "Pengguna Migrasi OS", en: "Users Migrated (OS)" },
    description: {
      id: "Windows → Linux Mint di 3 site operasional",
      en: "Windows → Linux Mint across 3 operational sites",
    },
  },
  {
    prefix: "↓",
    value: 20,
    suffix: "%",
    label: { id: "Pengurangan Material Waste", en: "Material Waste Reduction" },
    description: {
      id: "Di PT Honda Prospect Motor melalui analisis data",
      en: "At PT Honda Prospect Motor through data analysis",
    },
  },
  {
    value: 100,
    suffix: "+",
    label: { id: "Solusi Teknis Delivered", en: "Technical Solutions Delivered" },
    description: {
      id: "Support Level 1–2 lintas network, OS, aplikasi",
      en: "Level 1–2 support across network, OS, applications",
    },
  },
  {
    value: 99,
    suffix: "%",
    label: { id: "Ketersediaan Infrastruktur", en: "Infrastructure Availability" },
    description: {
      id: "Target SLA yang konsisten terpenuhi",
      en: "SLA targets consistently met",
    },
  },
];
