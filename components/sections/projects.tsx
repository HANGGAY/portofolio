"use client";

import { CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Projects() {
  const { t, tr } = useLanguage();

  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("proj.label")} title={t("proj.title")} subtitle={t("proj.sub")} />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-900/[0.06]">
                <span className="mb-4 inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white">
                  {p.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900">{tr(p.title)}</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-[0.68rem] font-bold uppercase tracking-wide text-slate-400">
                      {t("proj.challenge")}
                    </div>
                    <p className="mt-1 leading-relaxed text-slate-600">{tr(p.challenge)}</p>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-bold uppercase tracking-wide text-slate-400">
                      {t("proj.solution")}
                    </div>
                    <p className="mt-1 leading-relaxed text-slate-600">{tr(p.solution)}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[0.7rem] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-xl bg-emerald-50 px-3.5 py-3 text-[0.83rem] font-medium text-emerald-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{tr(p.result)}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
