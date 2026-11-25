import type { ImpactStat } from "@/types";

export const impactStats: ImpactStat[] = [
  {
    prefix: "↓",
    value: 40,
    suffix: "%",
    label: { id: "Penurunan Downtime IT", en: "IT Downtime Reduction" },
    description: {
      id: "Melalui digitalisasi alur MIT System di 6 site",
      en: "Through digitized MIT System workflow across 6 sites",
    },
  },
  {
    value: 550,
    suffix: "",
    label: {
      id: "Temuan Kerentanan Terselesaikan",
      en: "Vulnerability Findings Resolved",
    },
    description: {
      id: "Wazuh · 243 endpoint (118 laptop, 125 PC) · termasuk 6 critical",
      en: "Wazuh · 243 endpoints (118 laptops, 125 PCs) · including 6 critical",
    },
  },
  {
    value: 503,
    suffix: "",
    label: { id: "Alert High Dibersihkan", en: "High-Severity Alerts Cleared" },
    description: { id: "Wazuh · brute-force & software rentan", en: "Wazuh · brute-force & vulnerable software" },
  },
  {
    value: 15732,
    suffix: "",
    label: { id: "Alert Medium Dibersihkan", en: "Medium-Severity Alerts Cleared" },
    description: {
      id: "Wazuh · software tidak resmi & tidak berlisensi",
      en: "Wazuh · unauthorized & unlicensed software",
    },
  },
  {
    value: 241,
    suffix: "",
    label: { id: "Endpoint Suricata IDS", en: "Suricata IDS Endpoints" },
    description: {
      id: "Dimonitor di 4 site · alert masuk ke MIT System",
      en: "Monitored across 4 sites · alerts flow into the MIT System",
    },
  },
  {
    value: 214,
    suffix: "",
    label: { id: "Tiket Terselesaikan", en: "Tickets Resolved" },
    description: {
      id: "Hardware, software, OS, jaringan · MIT System",
      en: "Hardware, software, OS, network · MIT System",
    },
  },
];
