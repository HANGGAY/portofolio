"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { NetworkTopology } from "@/components/visuals/network-topology";
import { CloudInfrastructure } from "@/components/visuals/cloud-infrastructure";
import { AIWorkflow } from "@/components/visuals/ai-workflow";

export function Architecture() {
  const { t } = useLanguage();

  const panels = [
    { title: t("arch.network.title"), desc: t("arch.network.desc"), Visual: NetworkTopology },
    { title: t("arch.cloud.title"), desc: t("arch.cloud.desc"), Visual: CloudInfrastructure },
    { title: t("arch.ai.title"), desc: t("arch.ai.desc"), Visual: AIWorkflow },
  ];

  return (
    <section id="architecture" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("arch.label")} title={t("arch.title")} subtitle={t("arch.sub")} />

        <div className="grid gap-6 lg:grid-cols-3">
          {panels.map((panel, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="aspect-[5/3] w-full bg-white p-2">
                  <panel.Visual />
                </div>
                <div className="border-t border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900">{panel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{panel.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
