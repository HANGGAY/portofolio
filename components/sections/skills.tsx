"use client";

import { getIcon } from "@/lib/icons";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Skills() {
  const { t, tr } = useLanguage();
  return (
    <section id="skills" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("skills.label")} title={t("skills.title")} />
        <div className="space-y-6">
          {skillGroups.map((group, i) => {
            const Icon = getIcon(group.icon);
            return (
              <FadeIn key={group.key} delay={i * 0.04}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-900 text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">{tr(group.label)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {item}
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
