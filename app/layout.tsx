import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://hanggay.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hanggay Prayoga — Cybersecurity Engineer (Blue Team / SOC) | ITSM Developer",
    template: "%s · Hanggay Prayoga",
  },
  description:
    "Cybersecurity Engineer (Blue Team / SOC) with hands-on Wazuh, Suricata IDS, Burp Suite, and OWASP ZAP experience across 6 sites, plus full-stack ITSM development.",
  keywords: [
    "Hanggay Prayoga",
    "Cybersecurity Engineer",
    "Blue Team",
    "SOC",
    "Security Engineer",
    "Wazuh",
    "Suricata IDS",
    "Burp Suite",
    "OWASP ZAP",
    "ITSM Developer",
    "Vulnerability Management",
    "Karawang Indonesia Cybersecurity",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hanggay Prayoga — Cybersecurity Engineer (Blue Team / SOC)",
    description:
      "Blue Team / SOC engineer with Wazuh, Suricata IDS, Burp Suite, OWASP ZAP, and full-stack ITSM experience across 6 sites.",
    siteName: "Hanggay Prayoga Portfolio",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hanggay Prayoga — Cybersecurity Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanggay Prayoga — Cybersecurity Engineer (Blue Team / SOC)",
    description:
      "Blue Team / SOC engineer with Wazuh, Suricata IDS, Burp Suite, OWASP ZAP, and full-stack ITSM experience across 6 sites.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Cybersecurity Engineer (Blue Team / SOC) | ITSM Developer",
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karawang",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  sameAs: [profile.linkedin, profile.github, profile.website],
  knowsAbout: [
    "Security Monitoring & Detection",
    "Wazuh",
    "Suricata IDS",
    "Vulnerability Management",
    "Incident Triage & Response",
    "OWASP Top 10",
    "MITRE ATT&CK",
    "IT Service Management",
    "Network Security",
    "Security Automation (SOAR)",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
