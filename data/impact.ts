import type { ImpactStat } from "@/types";

export const impactStats: ImpactStat[] = [
  {
    prefix: "↓",
    value: 40,
    suffix: "%",
    label: { id: "Penurunan IT Downtime", en: "IT Downtime Reduction" },
    description: { id: "Melalui MIT System · Des 2025–Sep", en: "Via MIT System · Dec 2025–Sep" },
  },
  {
    value: 6,
    suffix: "",
    label: { id: "Site Enterprise Dikelola", en: "Enterprise Sites Managed" },
    description: { id: "Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis", en: "Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis" },
  },
  {
    value: 214,
    suffix: "",
    label: { id: "Tiket Terselesaikan", en: "Tickets Resolved" },
    description: { id: "Hardware, software, OS, jaringan — 6 site, 92% SLA", en: "Hardware, software, OS, network — 6 sites, 92% SLA" },
  },
  {
    value: 92,
    suffix: "%",
    label: { id: "Assessment & Request Selesai", en: "Assessments & Requests Closed" },
    description: { id: "49/53 assessment · 47/51 service request", en: "49/53 assessments · 47/51 service requests" },
  },
  {
    value: 70,
    suffix: "+",
    label: { id: "Pengguna Migrasi OS", en: "Users Migrated (OS)" },
    description: { id: "Windows → Linux Mint di 3 site operasional", en: "Windows → Linux Mint across 3 operational sites" },
  },
  {
    value: 99,
    suffix: "%",
    label: { id: "Ketersediaan Infrastruktur", en: "Infrastructure Availability" },
    description: { id: "Target SLA konsisten terpenuhi", en: "SLA targets consistently met" },
  },
];
