"use client";
import dynamic from "next/dynamic";
import { getIcon } from "@/lib/icons";
import { experience } from "@/data/experience";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const Plasma = dynamic(() => import("@/components/reactbits/Plasma"), { ssr: false });

export function Experience() {
  const { t, tr } = useLanguage();
  return (
    <section id="experience" className="relative isolate overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Plasma color="#a3a3a3" speed={0.7} direction="forward" scale={1.2} opacity={0.85} mouseInteractive={false} renderScale={0.55} maxDpr={1.5} targetFps={60} iterations={60} lightMode />
        <div className="absolute inset-0 bg-slate-50/62" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>
      <Container className="relative z-10">
        <SectionHeading eyebrow={t("exp.label")} title={t("exp.title")} />
        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-300 sm:block" />
          <div className="space-y-8">
            {experience.map((item, i) => {
              const ImpactIcon = getIcon(item.impactIcon);
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="relative sm:pl-10">
                    <span className="absolute left-0 top-3 hidden h-3.5 w-3.5 rounded-full border-[3px] border-slate-900 bg-white shadow-sm sm:block" />
                    <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-md sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-slate-900">{tr(item.role)}</h3>
                          <div className="mt-0.5 text-sm font-semibold text-blue-700">{item.company}</div>
                          {item.type ? <div className="mt-1 text-xs font-medium text-slate-500">{tr(item.type)}</div> : null}
                        </div>
                        <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-900 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white">{item.date}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{tr(item.description)}</p>
                      {item.responsibilities?.length ? (
                        <div className="mt-6">
                          <div className="mb-2 text-[11px] font-extrabold uppercase tracking-widest text-slate-500">{t("exp.responsibilities")}</div>
                          <ul className="space-y-2">
                            {item.responsibilities.map((r, idx) => (
                              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                                <span>{tr(r)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {item.achievements?.length ? (
                        <div className="mt-6">
                          <div className="mb-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">{t("exp.achievements")}</div>
                          <ul className="space-y-2">
                            {item.achievements.map((a, idx) => (
                              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                                <span>{tr(a)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-200/60 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                        <ImpactIcon className="h-4 w-4 shrink-0 mt-0.5" />
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
