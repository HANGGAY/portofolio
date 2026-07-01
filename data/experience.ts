import type { TimelineEntry } from "@/types";

export const experience: TimelineEntry[] = [
  {
    role: {
      id: "Staff IT Engineer / IT Operations & Solutions",
      en: "Staff IT Engineer / IT Operations & Solutions",
    },
    company: "Dinarsmu Group",
    type: {
      id: "Enterprise Multi-Site Environment (Manufacturing & Head Office)",
      en: "Enterprise Multi-Site Environment (Manufacturing & Head Office)",
    },
    date: "Jul 2025 – Present",
    description: {
      id: "Mengelola operasi IT, infrastruktur, dan keamanan jaringan di 5 site operasional dengan persyaratan SLA yang berbeda-beda. Bertindak sebagai titik pusat koordinasi lintas site untuk standardisasi sistem, eskalasi insiden, dan penerapan praktik IT terbaik. Mengimplementasikan operasi IT berbasis layanan untuk meningkatkan waktu respons, kualitas layanan, dan transparansi operasional.",
      en: "Managing IT operations, infrastructure, and network security across 5 operational sites with varying SLA requirements. Acting as the central IT coordination hub for cross-site system standardization, incident escalation, and IT best practice implementation.",
    },
    tags: ["Multi-Site IT Ops", "Network Security", "ITIL", "Linux Server", "Windows Server", "Mikrotik"],
    impact: {
      id: "Mengurangi downtime IT sebesar ±40% melalui MIT System & monitoring proaktif",
      en: "Reduced IT downtime by ±40% through MIT System & proactive monitoring",
    },
    impactIcon: "Trophy",
  },
  {
    role: { id: "Guru Teknologi Informasi", en: "Information Technology Teacher" },
    company: "SMK Wirasaba, Karawang",
    date: "Aug 2024 – Jul 2025",
    description: {
      id: "Memimpin pengaturan dan konfigurasi private cloud VPS untuk sistem akademik. Mengembangkan dan memelihara portal web akademik. Menyelenggarakan workshop AI dan pengembangan web. Membimbing proyek siswa berbasis industri.",
      en: "Led setup and configuration of private cloud VPS for academic systems. Developed and maintained academic web portal. Conducted AI and web development workshops. Supervised industry-based student projects.",
    },
    tags: ["Private Cloud", "Web Development", "AI Workshop", "Laravel"],
    impact: {
      id: "Mengimplementasikan infrastruktur cloud pertama untuk sistem akademik sekolah",
      en: "Implemented the first cloud infrastructure for the school's academic systems",
    },
    impactIcon: "GraduationCap",
  },
  {
    role: {
      id: "Technical Admin Material & Man Power",
      en: "Technical Admin Material & Man Power",
    },
    company: "PT Honda Prospect Motor, Karawang",
    date: "Jul 2021 – Jul 2024",
    description: {
      id: "Mengoptimalkan proses inventaris dan material menggunakan WMS dan alat analisis data. Menstandardisasi dokumentasi SOP untuk operasi produksi. Melakukan analisis akar masalah menggunakan Fishbone Diagram dan kerangka 5W1H.",
      en: "Optimized inventory and material processes using WMS and data analysis tools. Standardized SOP documentation for production operations. Conducted root-cause analysis using Fishbone Diagram and 5W1H framework.",
    },
    tags: ["WMS", "Data Analysis", "Process Improvement", "SOP Documentation"],
    impact: {
      id: "Mengurangi pemborosan material sebesar 20% melalui pelaporan berbasis data",
      en: "Reduced material waste by 20% through data-driven reporting",
    },
    impactIcon: "TrendingDown",
  },
];
