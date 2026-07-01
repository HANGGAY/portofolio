"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Skills() {
  const { t, tr } = useLanguage();
  const [active, setActive] = useState<SkillCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? skills : skills.filter((s) => s.cat === active)),
    [active]
  );

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
                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                active === cat.key
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
              )}
            >
              {tr(cat.label)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <span className="text-xs font-semibold text-slate-700">{item.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
