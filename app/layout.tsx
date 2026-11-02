import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ConsoleFilter } from "@/components/providers/console-filter";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://hanggay.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hanggay Prayoga — Enterprise IT Engineer",
    template: "%s · Hanggay Prayoga",
  },
  description:
    "Enterprise IT Engineer specializing in multi-site infrastructure, network security, cloud solutions, and AI-driven IT operations for mid-to-large organizations.",
  keywords: [
    "Hanggay Prayoga",
    "Enterprise IT Engineer",
    "Infrastructure Engineer",
    "IT Operations",
    "System Administrator",
    "Network Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Full Stack Developer",
    "Karawang Indonesia IT",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hanggay Prayoga — Enterprise IT Engineer",
    description:
      "Building reliable technology foundations for mid-to-large organizations — infrastructure, network security, and AI-driven digital transformation.",
    siteName: "Hanggay Prayoga Portfolio",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hanggay Prayoga — Enterprise IT Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanggay Prayoga — Enterprise IT Engineer",
    description:
      "Building reliable technology foundations for mid-to-large organizations — infrastructure, network security, and AI-driven digital transformation.",
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
  jobTitle: "Enterprise IT Engineer",
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
    "IT Infrastructure",
    "Network Security",
    "Cloud Computing",
    "IT Operations",
    "AI Automation",
    "Full Stack Development",
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
        <ConsoleFilter />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
