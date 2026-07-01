"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CountStat } from "@/components/motion/count-stat";

function useTypingEffect(text: string, speed = 45) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resets the typewriter when the source text (locale) changes
    setDisplay("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}

export function Hero() {
  const { t, tr } = useLanguage();
  const role = tr(profile.role);
  const typed = useTypingEffect(role);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-14 pb-24 sm:pt-20 sm:pb-32"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef2ff_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 right-[-10%] h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[120px]" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_440px] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {tr(profile.badge)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-4 flex h-8 items-center text-lg font-semibold text-blue-700 sm:text-xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-blue-600" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {tr(profile.description)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="primary" size="lg">
              <a href={profile.resumeUrl} download>
                <ArrowDown className="h-4 w-4" />
                {t("hero.cta1")}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <MessageCircle className="h-4 w-4" />
                {t("hero.cta2")}
              </a>
            </Button>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4"
          >
            {profile.metrics.map((m, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  <CountStat value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{tr(m.label)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* executive glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] lg:mx-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-600/25 via-cyan-400/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6),transparent_60%)]" />
            <div className="relative">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-2xl font-bold text-white shadow-lg shadow-slate-900/20">
                {profile.avatarSrc ? (
                  <Image
                    src={profile.avatarSrc}
                    alt={profile.name}
                    width={96}
                    height={96}
                    className="h-full w-full rounded-2xl object-cover"
                    priority
                  />
                ) : (
                  profile.initials
                )}
              </div>
              <h3 className="mt-5 text-center text-lg font-bold text-slate-900">{profile.name}</h3>
              <p className="text-center text-sm text-slate-500">{tr(profile.cardTitle)}</p>

              <div className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {tr(profile.status)}
              </div>

              <div className="mt-7 space-y-4 border-t border-slate-200/70 pt-6">
                {profile.cardStats.map((stat, i) => (
                  <div key={i}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-600">{tr(stat.label)}</span>
                      <span className="font-bold text-slate-900">{stat.display}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/70">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${stat.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(stat.percent, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
