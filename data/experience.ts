import type { TimelineEntry } from '@/types';

export const experience: TimelineEntry[] = [
  {
    role: { id: 'Staff IT Helpdesk, Network Support & Development', en: 'Staff IT Helpdesk, Network Support & Development' },
    company: 'DINARSMU INDUSTRIES, Jakarta',
    type: {
      id: 'Enterprise Multi-Site · 6 Operational Sites (Karawang, Head Office, Sentul, Cikarang, Palmerah & Cimanggis)',
      en: 'Enterprise Multi-Site · 6 Operational Sites (Karawang, Head Office, Sentul, Cikarang, Palmerah & Cimanggis)',
    },
    date: 'July 2025 – Present',
    description: {
      id: 'Mengelola operasi IT lintas 6 site sebagai central coordination hub — ticketing, aset, dan layanan IT terpusat lewat MIT System sebagai single operational platform. Menekan downtime ~40% (Des 2025–Sep) dan mencapai 92% penyelesaian assessment & service request.',
      en: 'Managing IT operations across 6 sites as central coordination hub — ticketing, assets, and IT services centralized via the MIT System as the single operational platform. Cutting downtime ~40% (Dec 2025–Sep) and achieving 92% assessment & service request closure.',
    },
    responsibilities: [
      {
        id: 'Menyelesaikan 214 tiket hardware, software, OS, dan jaringan di 6 site (Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis) dengan membangun MIT System — platform in-house yang menggantikan spreadsheet/WhatsApp/email untuk ticketing, aset, service request, dan work order (SPK).',
        en: 'Resolved 214 hardware, software, OS, and network tickets across 6 sites (Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis) by building the MIT System — an in-house platform replacing spreadsheets/WhatsApp/email for ticketing, assets, service requests, and work orders (SPK).',
      },
      {
        id: 'Menangani insiden jaringan dan internet melalui sistem tiket MIT (40 tiket internet di site Karawang saja).',
        en: 'Handled network and internet incidents through the MIT ticketing system (40 internet tickets at the Karawang site alone).',
      },
      {
        id: 'Merancang dan men-deploy sistem deteksi intrusi berbasis Suricata yang terintegrasi langsung dengan MIT System (ITSM), memantau 241 endpoint Windows di 4 site (PT Dinar Makmur Karawang, PT Dinar Makmur Cikarang, PT Sari Multi Utama Sentul, Head Office Central Park). Alert muncul di halaman MIT alert real-time, dan alert tingkat tinggi memicu notifikasi WhatsApp (WAHA).',
        en: 'Designed and deployed a Suricata-based intrusion detection system integrated directly with the MIT System (ITSM), monitoring 241 Windows endpoints across 4 sites (PT Dinar Makmur Karawang, PT Dinar Makmur Cikarang, PT Sari Multi Utama Sentul, Head Office Central Park). Alerts appear in a real-time MIT alert page, and high-severity alerts trigger WhatsApp (WAHA) notifications.',
      },
      {
        id: 'Membangun agent endpoint yang mengumpulkan IP, MAC, spesifikasi hardware, software terinstal, dan ringkasan koneksi dari setiap PC dan laptop, plus packet capture header-only dengan Windows pktmon, di-upload ke server IDS saat dipicu. Di-deploy via installer script dengan uninstall script untuk rollback.',
        en: 'Built an endpoint agent that collects IP, MAC, hardware specs, installed software, and connection summaries from every PC and laptop, plus header-only packet capture with Windows pktmon, uploaded to the IDS server when triggered. Deployed via installer script with uninstall scripts for rollback.',
      },
      {
        id: 'Mengotomasi penegakan kebijakan IT preventif: membandingkan software terinstal dengan blocklist/allowlist yang dikelola di MIT, dan memunculkan alert untuk software tidak resmi dan koneksi mencurigakan.',
        en: 'Automated preventive IT policy enforcement: compared installed software against a blocklist/allowlist managed in MIT, and raised alerts for unauthorized software and suspicious connections.',
      },
      {
        id: 'Setup server IDS Linux (Suricata dengan rule suricata-update, gateway HTTPS dengan validasi token, Nginx reverse proxy dengan TLS, sinkronisasi NTP, retensi & rotasi pcap, alarm disk) dan API ingest terotentikasi ke backend MIT yang mencegah batch duplikat.',
        en: 'Set up the Linux IDS server (Suricata with suricata-update rules, HTTPS gateway with token validation, Nginx reverse proxy with TLS, NTP sync, pcap retention and rotation, disk alarms) and an authenticated ingest API to the MIT backend that prevents duplicate batches.',
      },
      {
        id: 'Menekan downtime layanan IT ~40% (Des 2025–Sep) dengan mendigitalisasi alur intake-to-resolution di seluruh site.',
        en: 'Cut IT service downtime ~40% (Dec 2025–Sep) by digitizing the ticket intake-to-resolution workflow across all 6 sites.',
      },
      {
        id: 'Mencapai 92% penyelesaian IT assessment (49 dari 53) dengan mengganti follow-up manual menjadi pipeline tracking Received → Completed.',
        en: 'Achieved a 92% completion rate on IT assessment requests (49 of 53) by replacing manual follow-ups with a Received → Completed tracking pipeline.',
      },
      {
        id: 'Mencapai 92% penyelesaian service request (47 dari 51) di 6 site — termasuk 100% di site sekitar Karawang dan Sentul — dengan memberi tiap site manager visibilitas real-time status open vs. completed.',
        en: 'Achieved a 92% completion rate on service requests (47 of 51) across 6 sites — including 100% at Karawang-adjacent sites and Sentul — by giving each site manager real-time visibility into open vs. completed work.',
      },
      {
        id: 'Menyelesaikan 550 masalah keamanan endpoint dan compliance di 243 perangkat (118 laptop, 125 PC) dengan memantau Wazuh Vulnerability Detection dan Threat Hunting, serta mengkoordinasikan update aplikasi, OS, dan sistem internal.',
        en: 'Resolved 550 endpoint security and compliance issues across 243 devices (118 laptops, 125 PCs) by monitoring Wazuh Vulnerability Detection and Threat Hunting, and coordinating application, OS, and internal-system updates.',
      },
      {
        id: 'Mendeteksi dan menghapus malware di 2 perangkat yang lolos scan Avast boot-time, dengan Wazuh Malware Detection untuk mengidentifikasi dan meremediasinya.',
        en: 'Detected and removed malware on 2 devices that had bypassed Avast boot-time scans, by using Wazuh Malware Detection to identify and remediate them.',
      },
      {
        id: 'Menjalankan preventive maintenance terjadwal di seluruh site operasional, mencakup kondisi hardware, legalitas lisensi software, status vulnerability, dan pengecekan malware, menggunakan Avast dan Wazuh agent.',
        en: 'Ran scheduled preventive maintenance across operational sites, covering hardware condition, software license legality, vulnerability status, and malware checks, using Avast and the Wazuh agent.',
      },
      {
        id: 'Menstandarisasi setup network/OS/backup di seluruh site memakai template terdokumentasi Mikrotik, VLAN, dan OS-deployment, memangkas setup site/perangkat baru dari hitungan hari ke jam.',
        en: 'Standardized network/OS/backup setup across sites with documented Mikrotik, VLAN, and OS-deployment templates, cutting new-site/new-device setup from days to hours.',
      },
    ],
    achievements: [
      {
        id: 'Merancang dan membangun MIT System dari nol — mencakup IT Asset Management, Ticketing & Incident Management, Assessment, Service Request, Work Order (SPK), dan Software License Management — kini jadi single operational platform untuk 6 site.',
        en: 'Designed and built the MIT System from scratch — covering IT Asset Management, Ticketing & Incident Management, Assessments, Service Requests, Work Orders (SPK), and Software License Management — now the single operational platform used by all 6 sites.',
      },
      {
        id: 'Implementasi sistem IDS Suricata terintegrasi dengan MIT System — memantau 241 endpoint Windows, real-time alerts di halaman MIT, dan WhatsApp notifications untuk alert high-severity.',
        en: 'Implemented Suricata-based IDS integrated with MIT System — monitoring 241 Windows endpoints, real-time alerts on MIT alert page, and WhatsApp notifications for high-severity alerts.',
      },
      {
        id: 'Implementasi Wazuh agent di 118 laptop dan 125 PC — memberi IT visibilitas terpusat atas vulnerability, threat, dan malware pada endpoint perusahaan.',
        en: 'Implemented Wazuh agent across 118 laptops and 125 PCs — giving IT centralized visibility into vulnerabilities, threats, and malware on company endpoints.',
      },
      {
        id: 'Mengurangi downtime layanan IT ~40% (Des 2025–Sep) lewat digitalisasi proses IT dan implementasi platform manajemen terpadu.',
        en: 'Reduced IT service downtime by approximately 40% through the digitalization of IT service processes and implementation of an integrated IT management platform.',
      },
      {
        id: 'Meningkatkan transparansi operasional, efisiensi layanan, dan tata kelola IT lewat MIT System dengan dokumentasi terpusat dan standar proses IT service.',
        en: 'Improved operational transparency, service efficiency, and IT governance by implementing the MIT System with centralized documentation and standardized IT service workflows.',
      },
      {
        id: 'Menutup 92% IT assessment (49/53) dan 92% service request (47/51) di 6 site, dengan Karawang dan Sentul mencapai near-full completion, lewat pipeline Received → Completed yang menggantikan pengecekan status manual per site.',
        en: 'Closed 92% of IT assessment requests (49/53) and 92% of service requests (47/51) across 6 sites, with Karawang and Sentul reaching near-full completion, via a centralized Received → Completed pipeline replacing manual per-site status checks.',
      },
      {
        id: 'Menangani 214 tiket lintas hardware, software, OS, dan internet dengan volume tertinggi di Karawang — diselesaikan tanpa engineer on-site di tiap lokasi.',
        en: 'Handled 214 tickets company-wide across hardware, software, OS, and internet categories, with Karawang carrying the highest volume — resolved without a dedicated on-site engineer at every location.',
      },
      {
        id: 'Diakui sebagai sole technical owner untuk standardisasi IT lintas site; MIT System kini jadi acuan untuk IT governance, SLA tracking, dan kepatuhan aset.',
        en: 'Recognized as the sole technical owner for cross-site IT standardization, with the MIT System now the reference platform for IT governance, SLA tracking, and asset compliance.',
      },
      {
        id: 'Menyelesaikan 550 issue keamanan endpoint dan compliance di 243 perangkat (118 laptop, 125 PC) melalui Wazuh Vulnerability Detection dan Threat Hunting.',
        en: 'Resolved 550 endpoint security and compliance issues across 243 devices (118 laptops, 125 PCs) by monitoring Wazuh Vulnerability Detection and Threat Hunting.',
      },
      {
        id: 'Mendeteksi dan menghapus malware di 2 device yang lolos Avast boot-time scan menggunakan Wazuh Malware Detection.',
        en: 'Detected and removed malware on 2 devices that bypassed Avast boot-time scans using Wazuh Malware Detection.',
      },
      {
        id: 'MIT System: In-house platform for IT management (Ticketing, Assets, Service Requests, SPK, License Mgt).',
        en: 'MIT System: In-house platform for IT management (Ticketing, Assets, Service Requests, SPK, License Mgt).',
      },
    ],
    tags: ['MIT System', 'ITSM', '6-Site Ops', 'Network Security', 'IDS', 'Suricata', 'Wazuh', 'Mikrotik', 'VLAN', 'Linux Server', 'Windows Server', 'ITIL', 'Asset Management', 'SLA Tracking', 'ISO 27001'],
    impact: { id: '214 tiket · 550 security issues · 92% SLA · Downtime ↓~40% · IDS & Wazuh Integrated', en: '214 tickets · 550 security issues · 92% SLA · Downtime ↓~40% · IDS & Wazuh Integrated' },
    impactIcon: 'Trophy',
    link: {
      href: '/mit',
      label: { id: 'Lihat MIT System', en: 'Explore the MIT System' },
      description: {
        id: 'Studi kasus lengkap: modul ITSM, alur approval, integrasi Suricata & Wazuh, dan galeri antarmuka.',
        en: 'Full case study: ITSM modules, approval flow, Suricata & Wazuh integration, and interface gallery.',
      },
    },
  },
  {
    role: { id: 'Guru Teknologi Informasi', en: 'Information Technology Teacher' },
    company: 'SMK Wirasaba, Karawang',
    type: { id: 'Karawang, Jawa Barat', en: 'Karawang, West Java' },
    date: 'July 2024 – July 2025',
    description: {
      id: 'Memimpin transformasi digital layanan akademik — private cloud VPS, portal akademik, dan AI chatbot — serta pengajaran TJKT (Merdeka Curriculum) untuk kelas X & XI.',
      en: 'Led digital transformation of academic services — private cloud VPS, academic portal, and AI chatbot — plus TJKT teaching (Merdeka Curriculum) for Grade X & XI.',
    },
    responsibilities: [
      {
        id: 'Menyusun modul ajar, materi praktik, dan asesmen siswa sesuai Kurikulum Merdeka untuk program Teknik Komputer & Jaringan (TJKT).',
        en: 'Developed teaching modules, practical materials, and student assessments in accordance with the Merdeka Curriculum for the Computer and Network Engineering (TJKT) program.',
      },
      {
        id: 'Memberikan pengajaran kelas dan sesi praktik laboratorium pada mata pelajaran Administrasi Infrastruktur Jaringan, Administrasi Sistem, Jaringan Komputer, Sistem Komputer, dan Pengembangan Aplikasi Web untuk kelas X & XI.',
        en: 'Delivered classroom instruction and hands-on laboratory sessions in Network Infrastructure Administration, System Administration, Computer Networks, Computer Systems, and Web Application Development for Grade X & XI students.',
      },
      {
        id: 'Merancang dan melaksanakan pelatihan praktik jaringan komputer, administrasi server, virtualisasi, dan pengembangan aplikasi web full-stack untuk memperkuat kompetensi teknis siswa.',
        en: 'Designed and conducted practical training in computer networking, server administration, virtualization, and full-stack web application development to strengthen students’ technical competencies.',
      },
      {
        id: 'Mengembangkan dan memelihara portal akademik sekolah serta infrastruktur Private Cloud VPS untuk mendukung pembelajaran digital dan layanan akademik.',
        en: 'Developed and maintained the school’s academic portal and Private Cloud VPS infrastructure to support digital learning and academic services.',
      },
      {
        id: 'Membimbing dan mendampingi siswa selama Praktik Kerja Lapangan (PKL) dan Uji Kompetensi Keahlian (UKK), memastikan capaian belajar selaras dengan standar industri.',
        en: 'Supervised and mentored students during Industrial Work Practice (PKL/Internship) and Vocational Competency Assessment (UKK), ensuring learning outcomes aligned with industry standards.',
      },
    ],
    achievements: [
      {
        id: 'Mengembangkan AI chatbot berbasis Flowise AI & Node.js untuk informasi profil sekolah & akademik, meningkatkan aksesibilitas dan kecepatan respons untuk siswa, orang tua, dan calon pendaftar.',
        en: 'Developed an AI-powered chatbot using Flowise AI and Node.js for school profile & academic information, improving accessibility and response time for students, parents, and prospective applicants.',
      },
      {
        id: 'Berhasil mengimplementasikan infrastruktur Private Cloud VPS untuk pembelajaran digital, penyimpanan data terpusat, dan akses aman ke sumber daya akademik internal.',
        en: 'Successfully implemented a Private Cloud VPS infrastructure to support digital learning, centralized data storage, and secure access to internal academic resources.',
      },
      {
        id: 'Berkontribusi pada transformasi digital layanan sekolah lewat portal akademik — meningkatkan efisiensi & aksesibilitas administrasi akademik.',
        en: 'Contributed to the digital transformation of school services by developing and maintaining the academic portal — improving efficiency and accessibility of academic administration.',
      },
    ],
    tags: ['Private Cloud', 'VPS', 'Flowise AI', 'Node.js', 'Laravel', 'Merdeka Curriculum', 'TJKT'],
    impact: { id: 'Private Cloud VPS pertama sekolah · Portal akademik & AI chatbot live', en: 'School’s first Private Cloud VPS · Academic portal & AI chatbot live' },
    impactIcon: 'GraduationCap',
  },
  {
    role: { id: 'Technical Admin Material & Man Power', en: 'Technical Admin Material & Man Power' },
    company: 'PT Honda Prospect Motor, Karawang',
    type: { id: 'Karawang, Jawa Barat · Manufacturing', en: 'Karawang, West Java · Manufacturing' },
    date: 'July 2021 – July 2024',
    description: {
      id: 'Mengelola material & man power operasi produksi — WMS, SOP, dan Continuous Improvement dengan Fishbone & 5W1H.',
      en: 'Managed material & manpower for production operations — WMS, SOPs, and Continuous Improvement via Fishbone & 5W1H.',
    },
    responsibilities: [
      {
        id: 'Mengelola proses inventaris & administrasi untuk chemical, industrial gas, material cat, office supplies, dan APD (PPE) agar operasi produksi berjalan sesuai standar perusahaan.',
        en: 'Managed inventory and administrative processes for chemicals, industrial gases, paint materials, office supplies, and PPE to ensure smooth production operations per company standards.',
      },
      {
        id: 'Memantau level inventaris via Warehouse Management System (WMS) untuk menjaga ketersediaan material dan kelancaran jadwal produksi.',
        en: 'Monitored inventory levels using the Warehouse Management System (WMS) to maintain material availability and support uninterrupted production schedules.',
      },
      {
        id: 'Menganalisis konsumsi material & proses operasional untuk mengidentifikasi peluang optimasi proses, pengurangan biaya, dan efisiensi operasional.',
        en: 'Analyzed material consumption and operational processes to identify opportunities for process optimization, cost reduction, and operational efficiency.',
      },
      {
        id: 'Menyusun & memelihara SOP serta dokumentasi operasional untuk mendukung standardisasi proses dan kepatuhan.',
        en: 'Developed and maintained Standard Operating Procedures (SOPs) and operational documentation to support process standardization and compliance.',
      },
      {
        id: 'Berkolaborasi dengan tim produksi lintas fungsi untuk root cause analysis dan inisiatif Continuous Improvement (CI) demi operational excellence.',
        en: 'Collaborated with cross-functional production teams to perform root cause analysis and implement Continuous Improvement (CI) initiatives for operational excellence.',
      },
    ],
    achievements: [
      {
        id: 'Menekan material waste 20% lewat analisis & pelaporan berbasis data — pengambilan keputusan operasional lebih efektif.',
        en: 'Reduced material waste by 20% through data-driven analysis and reporting, enabling more effective operational decision-making.',
      },
      {
        id: 'Menerapkan strategi cost reduction dengan framework 5W1H — meningkatkan efisiensi utilisasi material tanpa mengorbankan kualitas produksi.',
        en: 'Implemented a cost reduction strategy using the 5W1H framework, improving material utilization efficiency without compromising production quality.',
      },
      {
        id: 'Melakukan root cause analysis dengan Fishbone Diagram untuk memastikan kepatuhan kualitas material & standar produksi.',
        en: 'Conducted root cause analysis using the Fishbone Diagram methodology to ensure material quality compliance and adherence to production standards.',
      },
      { id: 'Mengoptimalkan proses Daily Order — efisiensi pemesanan & distribusi material meningkat.', en: 'Optimized the Daily Order process, improving efficiency of material ordering and distribution workflows.' },
      {
        id: 'Meraih penghargaan Best OHS/K3 Poster dari Departemen Painting 1 atas promosi praktik kesehatan & keselamatan kerja terbaik.',
        en: 'Received the Best OHS/K3 Poster Award from the Painting 1 Department for promoting workplace health and safety best practices.',
      },
    ],
    tags: ['WMS', 'Data Analysis', '5W1H', 'Fishbone Diagram', 'SOP Documentation', 'CI Initiatives', 'OHS/K3'],
    impact: { id: 'Waste ↓20% · Daily Order teroptimasi · Best OHS/K3 Poster Award (Painting 1)', en: 'Waste ↓20% · Daily Order optimized · Best OHS/K3 Poster Award (Painting 1)' },
    impactIcon: 'TrendingDown',
  },
];
