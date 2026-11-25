import type { TimelineEntry } from '@/types';

export const experience: TimelineEntry[] = [
  {
    role: {
      id: 'Staff IT Helpdesk, Support Network & Development',
      en: 'Staff IT Helpdesk, Support Network & Development',
    },
    company: 'DINARSMU INDUSTRIES, Jakarta',
    type: {
      id: 'Enterprise Multi-Site · 6 site operasional (Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis)',
      en: 'Enterprise Multi-Site · 6 operational sites (Karawang, Head Office, Sentul, Cikarang, Palmerah, Cimanggis)',
    },
    date: 'July 2025 – Present',
    description: {
      id: 'Beralih dari operasi IT ke Blue Team / SOC / Security Engineering di grup manufaktur dan kantor 6 site. 550 temuan kerentanan terselesaikan · 503 alert high + 15,732 alert medium dibersihkan · Suricata IDS terintegrasi dengan ITSM internal · downtime turun ~40%.',
      en: 'Moving from IT operations into Blue Team / SOC / Security Engineering across a 6-site manufacturing and office group. 550 vulnerability findings resolved · 503 high + 15,732 medium alerts cleared · Suricata IDS integrated with in-house ITSM · downtime down ~40%.',
    },
    bullets: [
      {
        heading: {
          id: 'Security Engineering & Monitoring',
          en: 'Security Engineering & Monitoring',
        },
        items: [
          {
            id: 'Mengimplementasikan Wazuh di 243 endpoint (118 laptop, 125 PC) dan menyelesaikan 550 temuan kerentanan, termasuk seluruh 6 temuan critical yang disebabkan software rentan, dengan memprioritaskan berdasarkan severity dan mengoordinasikan update aplikasi, OS, dan sistem internal.',
            en: 'Implemented Wazuh across 243 endpoints (118 laptops, 125 PCs) and resolved 550 vulnerability findings, including all 6 critical-severity findings caused by vulnerable software, by prioritizing by severity and coordinating application, OS, and internal-system updates.',
          },
          {
            id: 'Membersihkan 503 alert Wazuh berseveritas high dan 15,732 berseveritas medium dengan memblokir IP sumber brute-force, menambal software rentan, dan menghapus software tidak resmi serta tidak berlisensi.',
            en: 'Cleared 503 high-severity and 15,732 medium-severity Wazuh alerts by blocking source IPs of brute-force attempts, patching vulnerable software, and removing unauthorized and unlicensed software.',
          },
          {
            id: 'Mendeteksi dan menghapus malware pada 2 perangkat yang lolos dari Avast boot-time scan, serta memblokir IP terkait, menggunakan Wazuh Malware Detection.',
            en: 'Detected and removed malware on 2 devices that had bypassed Avast boot-time scans, and blocked the related IP, using Wazuh Malware Detection.',
          },
          {
            id: 'Merancang dan men-deploy IDS berbasis Suricata yang terintegrasi langsung dengan MIT System, memantau 241 endpoint Windows di 4 site (Dinar Makmur Karawang, Dinar Makmur Cikarang, Sari Multi Utama Sentul, Head Office Central Park). Alert tampil di halaman MIT alert real-time, dan alert high-severity memicu notifikasi WhatsApp (WAHA).',
            en: 'Designed and deployed a Suricata-based IDS integrated directly with the MIT System, monitoring 241 Windows endpoints across 4 sites (Dinar Makmur Karawang, Dinar Makmur Cikarang, Sari Multi Utama Sentul, Head Office Central Park). Alerts appear in a real-time MIT alert page, and high-severity alerts trigger WhatsApp (WAHA) notifications.',
          },
          {
            id: 'Mengotomasi penegakan kebijakan IT preventif dengan membandingkan software terinstal terhadap blocklist/allowlist yang dikelola di MIT, lalu memunculkan alert untuk software tidak resmi dan koneksi mencurigakan.',
            en: 'Automated preventive IT policy enforcement by comparing installed software against a blocklist/allowlist managed in MIT, raising alerts for unauthorized software and suspicious connections.',
          },
          {
            id: 'Menyiapkan server IDS Linux (Suricata dengan suricata-update rules, gateway HTTPS dengan validasi token, Nginx reverse proxy dengan TLS, sinkronisasi NTP, retensi & rotasi pcap, alarm disk) dan API ingest terotentikasi ke backend MIT yang mencegah batch duplikat.',
            en: 'Set up the Linux IDS server (Suricata with suricata-update rules, HTTPS gateway with token validation, Nginx reverse proxy with TLS, NTP sync, pcap retention and rotation, disk alarms) and an authenticated ingest API to the MIT backend that prevents duplicate batches.',
          },
          {
            id: 'Menjalankan preventive security maintenance terjadwal di site operasional (kondisi hardware, legalitas lisensi software, status kerentanan, dan pengecekan malware) dengan Avast dan Wazuh agent.',
            en: 'Ran scheduled preventive security maintenance across operational sites (hardware condition, software license legality, vulnerability status, and malware checks) with Avast and the Wazuh agent.',
          },
          {
            id: 'Melakukan vulnerability assessment aplikasi web dengan Burp Suite dan OWASP ZAP pada MIT System, ERP SMU, dan HR DINARSMU, memetakan temuan ke OWASP Top 10 serta memperbaikinya.',
            en: 'Performed web application vulnerability assessments with Burp Suite and OWASP ZAP on the MIT System, ERP SMU, and HR DINARSMU, mapping findings to OWASP Top 10 and fixing issues.',
          },
        ],
      },
      {
        heading: {
          id: 'ITSM Development & IT Operations (6 site)',
          en: 'ITSM Development & IT Operations (6 sites)',
        },
        items: [
          {
            id: 'Membangun MIT System dari nol — platform ITSM full-stack (ticketing & incident management, asset management, assessment, service request, work order/SPK, dan software license management) yang menggantikan spreadsheet, WhatsApp, dan email di 6 site; melalui platform ini, 214 tiket hardware, software, OS, dan jaringan terselesaikan.',
            en: 'Developed the MIT System from scratch, a full-stack ITSM platform (ticketing and incident management, asset management, assessments, service requests, work orders/SPK, software license management) replacing spreadsheets, WhatsApp, and email across 6 sites, through which 214 hardware, software, OS, and network tickets were resolved.',
          },
          {
            id: 'Menurunkan downtime layanan IT ~40% dengan mendigitalisasi alur intake-to-resolution di seluruh 6 site.',
            en: 'Cut IT service downtime ~40% by digitizing the ticket intake-to-resolution workflow across all 6 sites.',
          },
          {
            id: 'Menutup 100% IT assessment di Karawang (27/27) dan Sentul (11/11), serta 94% service request di Karawang (32/34), melalui pipeline Received → Completed yang memberi setiap site manager visibilitas real-time atas pekerjaan open vs. completed.',
            en: 'Closed 100% of IT assessments at Karawang (27/27) and Sentul (11/11), and 94% of service requests at Karawang (32/34), through a Received → Completed tracking pipeline that gives each site manager real-time visibility into open vs. completed work.',
          },
          {
            id: 'Menangani insiden jaringan dan internet melalui sistem tiket MIT, termasuk 40 tiket internet di site Karawang saja.',
            en: 'Handled network and internet incidents through the MIT ticketing system, including 40 internet tickets at the Karawang site alone.',
          },
        ],
      },
    ],
    tags: [
      'Wazuh',
      'Suricata IDS',
      'Vulnerability Management',
      'Burp Suite',
      'OWASP ZAP',
      'MIT System',
      'ITSM',
      'Mikrotik',
      'VLAN',
      'L2TP VPN',
      'SOAR (in development)',
    ],
    impact: {
      id: '550 kerentanan terselesaikan · 503 high + 15,732 medium alert dibersihkan · Suricata IDS terintegrasi dengan ITSM internal · downtime turun ~40%',
      en: '550 vulnerabilities resolved · 503 high + 15,732 medium alerts cleared · Suricata IDS integrated with in-house ITSM · downtime down ~40%',
    },
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
