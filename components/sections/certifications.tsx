"use client";

import { getIcon } from "@/lib/icons";
import { certifications } from "@/data/certifications";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Certifications() {
  const { t, tr } = useLanguage();

  return (
    <section id="certifications" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("certs.label")} title={t("certs.title")} />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = getIcon(cert.icon);
            return (
              <FadeIn key={i} delay={(i % 2) * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/[0.05]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">{tr(cert.title)}</h3>
                    <div className="mt-1 text-xs font-semibold text-slate-500">{cert.organization}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{tr(cert.date)}</div>
                    {cert.description ? (
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{tr(cert.description)}</p>
                    ) : null}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
