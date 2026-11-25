import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    key: "security-operations",
    icon: "ShieldCheck",
    label: {
      id: "Security Operations (hands-on)",
      en: "Security Operations (hands-on)",
    },
    items: [
      "Wazuh (Vulnerability Detection, Threat Hunting, Malware Detection)",
      "Suricata IDS (suricata-update rules)",
      "Avast",
      "pktmon packet capture",
      "Endpoint software policy monitoring",
    ],
  },
  {
    key: "application-security",
    icon: "Shield",
    label: {
      id: "Application Security (hands-on)",
      en: "Application Security (hands-on)",
    },
    items: ["Burp Suite", "OWASP ZAP", "Vulnerability assessment"],
  },
  {
    key: "frameworks",
    icon: "BarChart3",
    label: {
      id: "Frameworks & References",
      en: "Frameworks & References",
    },
    items: [
      "OWASP Top 10",
      "MITRE ATT&CK",
      "Cyber Kill Chain",
      "Sigma rules",
      "ISO 27001 fundamentals",
      "Risk & Compliance",
    ],
  },
  {
    key: "security-knowledge",
    icon: "Brain",
    label: { id: "Security Knowledge", en: "Security Knowledge" },
    items: [
      "CIA triad",
      "Zero Trust Architecture",
      "IAM & PAM",
      "PKI",
      "Threat Actor TTPs",
      "Threat Intelligence",
      "GRC & Quantitative Risk Analysis",
      "Cloud & Container Security",
      "AI for Cyber Defense",
    ],
  },
  {
    key: "networking",
    icon: "Network",
    label: { id: "Networking", en: "Networking" },
    items: [
      "TCP/IP",
      "Subnetting",
      "VLAN",
      "Routing & NAT",
      "DNS",
      "DHCP",
      "VPN (L2TP)",
      "Firewall",
      "Mikrotik",
      "Nginx TLS",
    ],
  },
  {
    key: "itsm",
    icon: "ClipboardCheck",
    label: {
      id: "IT Service Management",
      en: "IT Service Management",
    },
    items: [
      "Incident & Problem Management",
      "Asset Management",
      "SLA Management",
      "Preventive & Corrective Maintenance",
      "ITIL practices",
    ],
  },
  {
    key: "systems-development",
    icon: "ServerCog",
    label: {
      id: "Systems & Development",
      en: "Systems & Development",
    },
    items: [
      "Ubuntu Server",
      "Windows Server",
      "Docker",
      "Git",
      "PHP/Laravel",
      "JavaScript/TypeScript",
      "Node.js",
      "React.js",
      "Next.js",
      "REST API",
      "MySQL",
      "Python (Pandas)",
    ],
  },
  {
    key: "automation-analytics",
    icon: "Workflow",
    label: {
      id: "Automation & Analytics",
      en: "Automation & Analytics",
    },
    items: ["n8n", "Flowise AI", "Postman", "Excel (Advanced)", "Power BI"],
  },
];
