import type { ProfileData } from '@/types';

export const profile: ProfileData = {
  name: 'Hanggay Prayoga',
  initials: 'HP',
  role: {
    id: 'Cybersecurity (Blue Team / SOC) | Wazuh · Suricata · Burp Suite · OWASP ZAP | ITSM Developer',
    en: 'Cybersecurity (Blue Team / SOC) | Wazuh · Suricata · Burp Suite · OWASP ZAP | ITSM Developer',
  },
  badge: {
    id: 'Terbuka untuk kerja onsite',
    en: 'Open to onsite work',
  },
  description: {
    id: 'Cybersecurity Engineer yang beralih dari operasi IT ke Blue Team / SOC / Security Engineering di grup manufaktur dan kantor 6 site (Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah, Cimanggis). Mengimplementasikan Wazuh di 243 endpoint (118 laptop, 125 PC) dengan 550 temuan kerentanan terselesaikan dan 2 infeksi malware dihapus, serta membangun IDS berbasis Suricata yang memantau 4 site dan terintegrasi dengan MIT System — platform ITSM full-stack yang saya kembangkan dan jalankan di 6 site. Berpengalaman dengan Burp Suite dan OWASP ZAP untuk assessment aplikasi web, serta memahami OWASP Top 10 dan MITRE ATT&CK. Saat ini merancang layer SOAR berbasis AI untuk menyaring alert false positive.',
    en: 'Cybersecurity-focused IT engineer moving from IT operations into Blue Team / SOC / Security Engineering across a 6-site manufacturing and office group (Karawang, Head Office Jakarta, Sentul, Cikarang, Palmerah, Cimanggis). Implemented Wazuh on 243 endpoints (118 laptops, 125 PCs) with 550 vulnerability findings resolved and 2 malware infections removed, and built a Suricata-based IDS monitoring 4 sites, integrated with the MIT System — an in-house full-stack ITSM platform I developed and run across all 6 sites. Hands-on with Burp Suite and OWASP ZAP for web application assessment, with working knowledge of OWASP Top 10 and MITRE ATT&CK. Currently designing an AI-assisted SOAR layer to cut false-positive alerts.',
  },
  location: 'Karawang, Jawa Barat, Indonesia',
  email: 'hanggay578@gmail.com',
  whatsapp: 'https://wa.me/6289535308057',
  whatsappDisplay: '+62 895 3530 88057',
  linkedin: 'https://linkedin.com/in/hanggay',
  linkedinDisplay: 'linkedin.com/in/hanggay',
  github: 'https://github.com',
  website: 'https://hanggay.netlify.app',
  websiteDisplay: 'hanggay.netlify.app',
  resumeUrl: '/resume/hanggay-prayoga-cv.pdf',
  avatarSrc: undefined,
  status: {
    id: 'Aktif & Terbuka Peluang',
    en: 'Active & Open to Opportunities',
  },
  cardTitle: {
    id: 'Cybersecurity Engineer · Karawang, Indonesia',
    en: 'Cybersecurity Engineer · Karawang, Indonesia',
  },
  metrics: [
    {
      value: 243,
      suffix: '',
      label: { id: 'Endpoint Wazuh', en: 'Wazuh Endpoints' },
    },
    {
      value: 550,
      suffix: '',
      label: { id: 'Kerentanan Terselesaikan', en: 'Vulnerabilities Resolved' },
    },
    {
      value: 241,
      suffix: '',
      label: { id: 'Endpoint Suricata IDS', en: 'Suricata IDS Endpoints' },
    },
    {
      value: 214,
      suffix: '',
      label: { id: 'Tiket Terselesaikan', en: 'Tickets Resolved' },
    },
  ],
  cardStats: [
    {
      label: { id: 'Endpoint Wazuh', en: 'Wazuh Endpoints' },
      display: '243 endpoints',
      percent: 100,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      label: { id: 'Cakupan Suricata IDS', en: 'Suricata IDS Coverage' },
      display: '241 endpoints · 4 site',
      percent: 100,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      label: { id: 'Site Operasional', en: 'Operational Sites' },
      display: '6 sites',
      percent: 100,
      gradient: 'from-cyan-500 to-blue-600',
    },
  ],
};
