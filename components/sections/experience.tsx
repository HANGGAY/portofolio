"use client";

import { getIcon } from "@/lib/icons";
import { experience } from "@/data/experience";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Experience() {
  const { t, tr } = useLanguage();

  return (
    <section id="experience" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("exp.label")} title={t("exp.title")} />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 sm:block" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const ImpactIcon = getIcon(item.impactIcon);
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative sm:pl-10">
                    <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-[3px] border-blue-600 bg-white sm:block" />

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{tr(item.role)}</h3>
                          <div className="mt-0.5 text-sm font-semibold text-blue-600">{item.company}</div>
                          {item.type ? (
                            <div className="mt-0.5 text-xs text-slate-500">{tr(item.type)}</div>
                          ) : null}
                        </div>
                        <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {item.date}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{tr(item.description)}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                        <ImpactIcon className="h-4 w-4 shrink-0" />
                        <span>{tr(item.impact)}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
