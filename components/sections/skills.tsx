"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { getIcon } from "@/lib/icons";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Skills() {
  const { t, tr } = useLanguage();
  const [active, setActive] = useState<SkillCategory | "all">("all");
  const filtered = useMemo(() => (active === "all" ? skills : skills.filter((s) => s.cat === active)), [active]);
  return (
    <section id="skills" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("skills.label")} title={t("skills.title")} />
        <div className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key as SkillCategory | "all")}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
                active === cat.key ? "border-slate-900 bg-slate-900 text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
              )}
            >
              {tr(cat.label)}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.88, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.24 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-slate-900/10 hover:shadow-lg hover:shadow-slate-900/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[0.8rem] font-semibold tracking-tight text-slate-800">{item.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.cat}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
