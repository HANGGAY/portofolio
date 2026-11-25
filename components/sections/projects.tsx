"use client";
import dynamic from "next/dynamic";
import { CheckCircle2, Loader2 } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const Plasma = dynamic(() => import("@/components/reactbits/Plasma"), { ssr: false });

export function Projects() {
  const { t, tr } = useLanguage();
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Plasma color="#a3a3a3" speed={0.65} direction="forward" scale={1.35} opacity={0.95} mouseInteractive={false} renderScale={0.7} maxDpr={1.5} targetFps={60} iterations={60} lightMode />
        <div className="absolute inset-0 bg-white/45" />
      </div>
      <Container className="relative">
        <SectionHeading eyebrow={t("proj.label")} title={t("proj.title")} subtitle={t("proj.sub")} />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => {
            const ProjectContent = (
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-900/10 hover:shadow-xl">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white">{p.badge}</span>
                  {p.status ? (
                    <span className="inline-flex w-fit rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-amber-800">{tr(p.status)}</span>
                  ) : null}
                </div>
                <h3 className="text-[1.02rem] font-bold tracking-tight text-slate-900">{tr(p.title)}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400">{t("proj.challenge")}</div>
                    <p className="mt-1 leading-relaxed text-slate-600">{tr(p.challenge)}</p>
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400">{t("proj.solution")}</div>
                    <p className="mt-1 leading-relaxed text-slate-600">{tr(p.solution)}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.7rem] font-semibold text-slate-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-200/60 bg-emerald-50 px-3.5 py-3 text-[0.83rem] font-semibold text-emerald-800">
                  {p.status ? <Loader2 className="mt-0.5 h-4 w-4 shrink-0" /> : <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />}
                  <span>{tr(p.result)}</span>
                </div>
              </div>
            );

            return (
              <FadeIn key={i} delay={(i % 3) * 0.07}>
                {p.link ? (
                  <a href={p.link} className="block h-full">
                    {ProjectContent}
                  </a>
                ) : (
                  ProjectContent
                )}
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
