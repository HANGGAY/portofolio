"use client";

import { impactStats } from "@/data/impact";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { CountStat } from "@/components/motion/count-stat";

export function Impact() {
  const { t, tr } = useLanguage();

  return (
    <section id="impact" className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      <Container className="relative">
        <FadeIn>
          <div className="mb-14 flex items-center gap-2">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">{t("impact.label")}</span>
          </div>
          <h2 className="mb-14 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("impact.title")}
          </h2>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="h-full bg-slate-950 p-8 transition-colors hover:bg-slate-900">
                <div className="text-4xl font-extrabold text-white">
                  <CountStat prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-200">{tr(stat.label)}</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-500">{tr(stat.description)}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
