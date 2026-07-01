"use client";

import { getIcon } from "@/lib/icons";
import { about } from "@/data/about";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function About() {
  const { t, tr } = useLanguage();

  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("about.label")} title={t("about.title")} />

        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <p className="text-[1.02rem] leading-relaxed text-slate-600">{tr(p)}</p>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.values.map((v, i) => {
                const Icon = getIcon(v.icon);
                return (
                  <FadeIn key={i} delay={0.1 + i * 0.08}>
                    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-slate-900">{tr(v.title)}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{tr(v.description)}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("about.edu_label")}
              </div>
              <div className="font-bold text-slate-900">{about.education.institution}</div>
              <div className="mt-0.5 text-sm font-semibold text-blue-600">{tr(about.education.degree)}</div>
              <div className="mt-0.5 text-xs text-slate-500">{tr(about.education.detail)}</div>

              <div className="my-6 border-t border-slate-200" />

              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("about.area_label")}
              </div>
              <div className="flex flex-wrap gap-2">
                {about.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="my-6 border-t border-slate-200" />

              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("about.lang_label")}
              </div>
              <div className="flex flex-col gap-2">
                {about.languages.map((l, i) => (
                  <span key={i} className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                    {l.flag} {tr(l.label)}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
