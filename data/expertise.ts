import type { ExpertiseItem } from "@/types";

export const expertise: ExpertiseItem[] = [
  {
    icon: "ShieldCheck",
    title: {
      id: "Security Monitoring & Detection (SIEM/IDS)",
      en: "Security Monitoring & Detection (SIEM/IDS)",
    },
    description: {
      id: "Wazuh dan Suricata IDS untuk monitoring endpoint, deteksi ancaman, dan triage alert lintas site.",
      en: "Wazuh and Suricata IDS for endpoint monitoring, threat detection, and cross-site alert triage.",
    },
  },
  {
    icon: "Target",
    title: {
      id: "Vulnerability Management & Assessment",
      en: "Vulnerability Management & Assessment",
    },
    description: {
      id: "Prioritas temuan berdasarkan severity, koordinasi patching, dan assessment aplikasi web dengan Burp Suite serta OWASP ZAP.",
      en: "Severity-based finding prioritization, patch coordination, and web application assessment with Burp Suite and OWASP ZAP.",
    },
  },
  {
    icon: "BarChart3",
    title: { id: "Incident Triage & Response", en: "Incident Triage & Response" },
    description: {
      id: "Penanganan alert high-severity, malware, dan insiden jaringan melalui alur tiket MIT System.",
      en: "Handling high-severity alerts, malware, and network incidents through the MIT System ticketing workflow.",
    },
  },
  {
    icon: "Globe2",
    title: {
      id: "Web Application Security (OWASP)",
      en: "Web Application Security (OWASP)",
    },
    description: {
      id: "Mapping temuan ke OWASP Top 10 dan perbaikan pada aplikasi internal.",
      en: "Mapping findings to OWASP Top 10 and remediating issues in internal applications.",
    },
  },
  {
    icon: "Workflow",
    title: { id: "Security Automation (SOAR)", en: "Security Automation (SOAR)" },
    description: {
      id: "Desain layer SOAR berbasis Shuffle untuk enrichment alert, verdict LLM, dan routing aksi dengan guardrail.",
      en: "Designing a Shuffle-based SOAR layer for alert enrichment, LLM verdicts, and guarded action routing.",
    },
  },
  {
    icon: "Bot",
    title: {
      id: "Threat Detection Research (AI/ML)",
      en: "Threat Detection Research (AI/ML)",
    },
    description: {
      id: "Co-author risiko adversarial pada detector intrusi berbasis explanation.",
      en: "Co-author research on adversarial robustness of explanation-based intrusion detectors.",
    },
  },
  {
    icon: "Building2",
    title: {
      id: "IT Infrastructure & Operations",
      en: "IT Infrastructure & Operations",
    },
    description: {
      id: "Operasi IT multi-site, preventive maintenance, dan pengelolaan aset serta lisensi software.",
      en: "Multi-site IT operations, preventive maintenance, and asset and software license management.",
    },
  },
  {
    icon: "Network",
    title: { id: "Network Security", en: "Network Security" },
    description: {
      id: "TCP/IP, VLAN, routing & NAT, L2TP VPN, firewall, dan Mikrotik untuk lingkungan multi-site.",
      en: "TCP/IP, VLAN, routing & NAT, L2TP VPN, firewall, and Mikrotik for multi-site environments.",
    },
  },
  {
    icon: "ClipboardCheck",
    title: {
      id: "Risk & Compliance (ISO 27001)",
      en: "Risk & Compliance (ISO 27001)",
    },
    description: {
      id: "Dasar ISO 27001, GRC, quantitative risk analysis, dan kepatuhan lisensi software.",
      en: "ISO 27001 fundamentals, GRC, quantitative risk analysis, and software license compliance.",
    },
  },
];
