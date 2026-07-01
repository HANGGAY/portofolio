"use client";

import { getIcon } from "@/lib/icons";
import { expertise } from "@/data/expertise";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Expertise() {
  const { t, tr } = useLanguage();

  return (
    <section id="expertise" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("expertise.label")} title={t("expertise.title")} subtitle={t("expertise.sub")} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <FadeIn key={i} delay={(i % 4) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-900/[0.06]">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors duration-300 group-hover:bg-blue-600">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="relative mt-5 font-bold text-slate-900">{tr(item.title)}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{tr(item.description)}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
