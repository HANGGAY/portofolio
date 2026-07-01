"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";

export function Footer() {
  const { t, tr } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="text-lg font-bold text-white">{profile.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {tr(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-slate-400 transition-colors hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">
                  {profile.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">{t("footer.copy")}</p>
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-500"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-500"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-slate-600">{t("footer.built")}</p>
      </Container>
    </footer>
  );
}
