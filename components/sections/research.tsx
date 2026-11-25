"use client";

import { research, researchStatusPlaceholder } from "@/data/research";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Research() {
  const { t, tr } = useLanguage();

  return (
    <section id="research" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("research.label")} title={t("research.title")} />
        <div className="space-y-6">
          {research.map((item, i) => {
            const status = item.status ? tr(item.status) : "";
            const showStatus = Boolean(status) && status !== tr(researchStatusPlaceholder);
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="min-w-0 break-words text-lg font-bold tracking-tight text-slate-900">{tr(item.title)}</h3>
                    {showStatus ? (
                      <span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-slate-700">
                        {status}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-blue-700">
                    <span className="font-bold text-slate-500">{t("research.role")}: </span>
                    {tr(item.role)}
                  </div>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                        <span className="min-w-0 break-words">{tr(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        {tag}
                      </span>
                    ))}
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
