import type { ProfileData } from "@/types";

export const profile: ProfileData = {
  name: "Hanggay Prayoga",
  initials: "HP",
  role: {
    id: "Enterprise IT Engineer · IT Operations & Solutions",
    en: "Enterprise IT Engineer · IT Operations & Solutions",
  },
  badge: {
    id: "Terbuka untuk Peluang Enterprise",
    en: "Open to Enterprise Opportunities",
  },
  description: {
    id: "Membangun fondasi teknologi yang andal untuk organisasi skala menengah dan besar — dari infrastruktur multi-site, keamanan jaringan, hingga transformasi digital dan otomasi berbasis AI yang menghasilkan dampak bisnis nyata.",
    en: "Building reliable technology foundations for mid-to-large organizations — from multi-site infrastructure and network security to AI-driven digital transformation that delivers measurable business impact.",
  },
  location: "Karawang, Jawa Barat, Indonesia",
  email: "hanggay578@gmail.com",
  whatsapp: "https://wa.me/6289535308057",
  whatsappDisplay: "+62 895 3530 88057",
  linkedin: "https://linkedin.com/in/hanggay",
  linkedinDisplay: "linkedin.com/in/hanggay",
  github: "https://github.com",
  website: "https://hanggay.netlify.app",
  websiteDisplay: "hanggay.netlify.app",
  resumeUrl: "/resume/hanggay-prayoga-cv.pdf",
  avatarSrc: undefined,
  status: {
    id: "Aktif & Terbuka Peluang",
    en: "Active & Open to Opportunities",
  },
  cardTitle: {
    id: "IT Engineer · Karawang, Indonesia",
    en: "IT Engineer · Karawang, Indonesia",
  },
  metrics: [
    { value: 3, suffix: "+", label: { id: "Tahun Pengalaman", en: "Years Experience" } },
    { value: 5, suffix: "+", label: { id: "Site Enterprise", en: "Enterprise Sites" } },
    { value: 40, suffix: "%", label: { id: "Penurunan Downtime IT", en: "IT Downtime Reduced" } },
    { value: 100, suffix: "+", label: { id: "Solusi Teknis", en: "Technical Solutions" } },
  ],
  cardStats: [
    {
      label: { id: "Ketersediaan Infrastruktur", en: "Infrastructure Availability" },
      display: "99.5%",
      percent: 99.5,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      label: { id: "Penurunan Downtime", en: "Downtime Reduction" },
      display: "↓40%",
      percent: 40,
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      label: { id: "Site Dikelola", en: "Sites Managed" },
      display: "5 Sites",
      percent: 75,
      gradient: "from-cyan-500 to-blue-600",
    },
  ],
};
