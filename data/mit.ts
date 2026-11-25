import type { ProjectDetail } from '@/types';

export const mitSystem: ProjectDetail = {
  id: 'mit-system',
  title: { id: 'MIT System — ITSM Enterprise', en: 'MIT System — Enterprise ITSM' },
  subtitle: {
    id: 'Platform Manajemen IT Terpadu untuk 6 Site Operasional',
    en: 'Unified IT Management Platform for 6 Operational Sites',
  },
  overview: {
    id: 'MIT System adalah platform ITSM (IT Service Management) yang dikembangkan khusus untuk DINARSMU Group. Dirancang sebagai single operational platform menggantikan spreadsheet, WhatsApp, dan email dalam pengelolaan infrastruktur IT lintas 6 site (Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah, Cimanggis). Terintegrasi dengan IDS Suricata untuk monitoring jaringan real-time dan Wazuh untuk keamanan endpoint.',
    en: 'MIT System is an enterprise ITSM (IT Service Management) platform developed specifically for DINARSMU Group. Designed as a single operational platform replacing spreadsheets, WhatsApp, and email for managing IT infrastructure across 6 sites (Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah, Cimanggis). Integrated with Suricata IDS for real-time network monitoring and Wazuh for endpoint security.',
  },
  modules: [
    {
      name: { id: 'Ticketing & Incident Management', en: 'Ticketing & Incident Management' },
      description: {
        id: 'Sistem tiket terpusat untuk intake, tracking, dan resolusi insiden IT lintas site. 214 tiket hardware, software, OS, dan jaringan diselesaikan melalui alur MIT System di 6 site.',
        en: 'Centralized ticketing system for intake, tracking, and resolution of IT incidents across sites. 214 hardware, software, OS, and network tickets were resolved through the MIT System workflow across 6 sites.',
      },
      icon: 'Ticket',
      metrics: { id: '214 tiket · 6 site', en: '214 tickets · 6 sites' },
    },
    {
      name: { id: 'IT Assessment', en: 'IT Assessment' },
      description: {
        id: 'Pipeline assessment untuk compliance, vulnerability, dan readiness IT di seluruh site. Received → Completed tracking menggantikan follow-up manual. 100% assessment selesai di Karawang (27/27) dan Sentul (11/11).',
        en: 'Assessment pipeline for compliance, vulnerability, and IT readiness across all sites. Received → Completed tracking replaces manual follow-ups. 100% of assessments closed at Karawang (27/27) and Sentul (11/11).',
      },
      icon: 'CheckCircle',
      metrics: {
        id: '100% Karawang (27/27) · 100% Sentul (11/11)',
        en: '100% Karawang (27/27) · 100% Sentul (11/11)',
      },
    },
    {
      name: { id: 'IT Service Requests', en: 'IT Service Requests' },
      description: {
        id: 'Portal self-service untuk pengajuan layanan IT (setup user, provisioning, instalasi software, dst). Real-time visibility untuk site manager. 94% service request di Karawang (32/34) terselesaikan.',
        en: 'Self-service portal for IT service requests (user setup, provisioning, software installation, etc.). Real-time visibility for site managers. 94% of service requests at Karawang (32/34) were closed.',
      },
      icon: 'Headset',
      metrics: {
        id: '94% Karawang (32/34)',
        en: '94% Karawang (32/34)',
      },
    },
    {
      name: { id: 'Asset Management', en: 'Asset Management' },
      description: {
        id: 'Inventory terpusat untuk hardware, software licenses, endpoint, dan aset IT lainnya. Automated tracking untuk audit compliance dan lifecycle management.',
        en: 'Centralized inventory for hardware, software licenses, endpoints, and other IT assets. Automated tracking for compliance audits and lifecycle management.',
      },
      icon: 'Package',
      metrics: { id: 'Aset & lisensi · 6 site', en: 'Assets & licenses · 6 sites' },
    },
    {
      name: { id: 'Software Procurement & License Management', en: 'Software Procurement & License Management' },
      description: {
        id: 'Manajemen permintaan software, approval workflow, dan tracking lisensi untuk kepatuhan ISO 27001 dan cost optimization.',
        en: 'Software request management, approval workflows, and license tracking for ISO 27001 compliance and cost optimization.',
      },
      icon: 'ShoppingCart',
      metrics: { id: 'Automated compliance tracking', en: 'Automated compliance tracking' },
    },
    {
      name: { id: 'Preventive Maintenance & Scheduling', en: 'Preventive Maintenance & Scheduling' },
      description: {
        id: 'Penjadwalan preventive maintenance (hardware check, patch management, malware scan) di seluruh site dengan automated alerts dan reporting.',
        en: 'Scheduled preventive maintenance (hardware checks, patch management, malware scans) across all sites with automated alerts and reporting.',
      },
      icon: 'Wrench',
      metrics: { id: 'Scheduled across 6 sites', en: 'Scheduled across 6 sites' },
    },
    {
      name: { id: 'Access Request & Approval', en: 'Access Request & Approval' },
      description: {
        id: 'Workflow untuk pengajuan akses IT (sistem internal, aplikasi, jaringan) dengan approval chain dan audit trail compliance.',
        en: 'Workflow for IT access requests (internal systems, applications, network) with approval chains and compliance audit trails.',
      },
      icon: 'Lock',
      metrics: { id: 'Audit trail · Approval workflow', en: 'Audit trail · Approval workflow' },
    },
    {
      name: { id: 'e-Signature & Document Management', en: 'e-Signature & Document Management' },
      description: {
        id: 'Integrasi e-sign untuk approval dokumen IT, policy, dan compliance. Terintegrasi dengan ISO documentation dan audit trail lengkap.',
        en: 'e-Signature integration for IT document approvals, policies, and compliance. Integrated with ISO documentation and full audit trails.',
      },
      icon: 'Signature',
      metrics: { id: 'ISO compliant · Audit ready', en: 'ISO compliant · Audit ready' },
    },
    {
      name: { id: 'Preventive Security & Policy Enforcement', en: 'Preventive Security & Policy Enforcement' },
      description: {
        id: 'Automated policy enforcement: blocklist/allowlist management untuk software, suspicious connection detection, dan unauthorized user alerts. 550 temuan kerentanan terselesaikan di 243 endpoint dengan Wazuh.',
        en: 'Automated policy enforcement: software blocklist/allowlist management, suspicious connection detection, and unauthorized user alerts. 550 vulnerability findings resolved across 243 endpoints with Wazuh.',
      },
      icon: 'Shield',
      metrics: {
        id: '550 temuan terselesaikan · 243 endpoint',
        en: '550 findings resolved · 243 endpoints',
      },
    },
    {
      name: { id: 'IDS Integration (Suricata)', en: 'IDS Integration (Suricata)' },
      description: {
        id: 'Real-time network traffic monitoring via Suricata IDS. Alert muncul di dashboard MIT, high-severity alerts trigger WhatsApp notification. Memantau 241 Windows endpoint di 4 site.',
        en: 'Real-time network traffic monitoring via Suricata IDS. Alerts displayed on MIT dashboard; high-severity alerts trigger WhatsApp notifications. Monitors 241 Windows endpoints across 4 sites.',
      },
      icon: 'Radio',
      metrics: { id: '241 endpoint · 4 site · Real-time alerts', en: '241 endpoints · 4 sites · Real-time alerts' },
    },
  ],
  integration: {
    title: { id: 'Integrasi & Infrastruktur', en: 'Integration & Infrastructure' },
    items: [
      {
        name: 'Suricata IDS',
        description: {
          id: 'Network intrusion detection system dengan rule updates otomatis, packet capture, dan alert real-time ke MIT.',
          en: 'Network intrusion detection system with automatic rule updates, packet capture, and real-time alerts to MIT.',
        },
      },
      {
        name: 'Wazuh Security Monitoring',
        description: {
          id: 'Vulnerability Detection, Threat Hunting, dan Malware Detection di 118 laptop + 125 PC.',
          en: 'Vulnerability Detection, Threat Hunting, and Malware Detection on 118 laptops + 125 PCs.',
        },
      },
      {
        name: 'Endpoint Software Policy Monitoring',
        description: {
          id: 'Pemantauan software terinstal terhadap blocklist/allowlist di MIT, dengan alert untuk software tidak resmi dan koneksi mencurigakan.',
          en: 'Monitoring of installed software against MIT blocklist/allowlist, with alerts for unauthorized software and suspicious connections.',
        },
      },
      {
        name: 'Linux IDS Server',
        description: {
          id: 'Dedicated server running Suricata, HTTPS gateway dengan token validation, Nginx reverse proxy TLS, NTP sync, pcap retention & rotation, disk alarms.',
          en: 'Dedicated server running Suricata, HTTPS gateway with token validation, Nginx reverse proxy TLS, NTP sync, pcap retention & rotation, disk alarms.',
        },
      },
      {
        name: 'Node.js/Express Backend + MySQL',
        description: {
          id: 'REST API backend menggunakan Node.js & Express untuk all modules. Authenticated ingest API mencegah duplicate batches dari endpoint/IDS.',
          en: 'REST API backend using Node.js & Express for all modules. Authenticated ingest API prevents duplicate batches from endpoints/IDS.',
        },
      },
    ],
  },
  impact: {
    title: { id: 'Dampak Bisnis', en: 'Business Impact' },
    metrics: [
      { label: { id: 'Downtime IT', en: 'IT Downtime' }, value: '↓~40%', detail: { id: 'MIT System · 6 site', en: 'MIT System · 6 sites' } },
      { label: { id: 'Tiket Terselesaikan', en: 'Tickets Closed' }, value: '214', detail: { id: 'Hardware, software, OS, jaringan', en: 'Hardware, software, OS, network' } },
      { label: { id: 'Temuan Kerentanan', en: 'Vulnerability Findings' }, value: '550', detail: { id: '243 endpoint · termasuk 6 critical', en: '243 endpoints · including 6 critical' } },
      { label: { id: 'Alert High', en: 'High-Severity Alerts' }, value: '503', detail: { id: 'Dibersihkan dengan Wazuh', en: 'Cleared with Wazuh' } },
      { label: { id: 'Alert Medium', en: 'Medium-Severity Alerts' }, value: '15,732', detail: { id: 'Dibersihkan dengan Wazuh', en: 'Cleared with Wazuh' } },
      { label: { id: 'Endpoint Suricata IDS', en: 'Suricata IDS Endpoints' }, value: '241', detail: { id: 'Windows endpoint di 4 site', en: 'Windows endpoints across 4 sites' } },
    ],
  },
  stack: {
    title: { id: 'Technology Stack', en: 'Technology Stack' },
    technologies: [
      { category: 'Backend', items: ['Node.js', 'Express.ts', 'REST API', 'MySQL'] },
      { category: 'Frontend', items: ['React.ts', 'Next.js', 'Tailwind CSS'] },
      { category: 'Security & Monitoring', items: ['Suricata IDS', 'Wazuh', 'Nginx (Reverse Proxy)', 'HTTPS/TLS'] },
      { category: 'Infrastructure', items: ['Linux Server', 'Windows Endpoints', 'Mikrotik (Network)', 'VPN'] },
      { category: 'Compliance', items: ['ISO 27001', 'ITIL', 'Audit Trail', 'e-Signature'] },
    ],
  },
  screenshots: {
    mit: [
      { path: '/images/mit/landing page login.png', label: { id: 'Landing Page & Login', en: 'Landing Page & Login' } },
      { path: '/images/mit/dashboard.png', label: { id: 'Dashboard Operasional', en: 'Operational Dashboard' } },
      { path: '/images/mit/menu .png', label: { id: 'Menu Modul', en: 'Module Menu' } },
      { path: '/images/mit/data.png', label: { id: 'Data Management', en: 'Data Management' } },
      { path: '/images/mit/assessment daftar.png', label: { id: 'Assessment List', en: 'Assessment List' } },
      { path: '/images/mit/Create Assessment.png', label: { id: 'Create Assessment', en: 'Create Assessment' } },
      { path: '/images/mit/assessment masuk.png', label: { id: 'Assessment Intake', en: 'Assessment Intake' } },
      { path: '/images/mit/asessment penugasan.png', label: { id: 'Assessment Assignment', en: 'Assessment Assignment' } },
      { path: '/images/mit/Assessment view.png', label: { id: 'Assessment View', en: 'Assessment View' } },
      { path: '/images/mit/Approval assessment.png', label: { id: 'Approval Assessment', en: 'Approval Assessment' } },
      { path: '/images/mit/Print Assessment.png', label: { id: 'Print Assessment', en: 'Print Assessment' } },
    ],
    esign: [
      { path: '/images/esign/Esign masuk.png', label: { id: 'e-Sign Portal', en: 'e-Sign Portal' } },
      { path: '/images/esign/pengajuan Tanda tangan.png', label: { id: 'Signature Request', en: 'Signature Request' } },
      { path: '/images/esign/Esign page.png', label: { id: 'e-Sign Page', en: 'e-Sign Page' } },
    ],
  },
};
