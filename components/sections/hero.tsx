"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { CountStat } from "@/components/motion/count-stat";
import { GooeyButton } from "@/components/reactbits/GooeyButton";

const Ferrofluid = dynamic(() => import("@/components/reactbits/Ferrofluid"), { ssr: false });
const Lanyard = dynamic(() => import("@/components/reactbits/Lanyard"), { ssr: false, loading: () => <div className="h-[420px] lg:h-[520px] w-full animate-pulse rounded-3xl bg-slate-100" /> });

function useTypingEffect(text: string, speed = 45) {
  const [state, setState] = useState({ source: text, text: "" });
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setState({ source: text, text: text.slice(0, i) });
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return state.source === text ? state.text : "";
}

export function Hero() {
  const { t, tr } = useLanguage();
  const role = tr(profile.role);
  const typed = useTypingEffect(role);
  const [visualsReady, setVisualsReady] = useState(false);

  useEffect(() => {
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(() => setVisualsReady(true), { timeout: 900 });
      return () => idleWindow.cancelIdleCallback?.(handle);
    }
    const handle = window.setTimeout(() => setVisualsReady(true), 250);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.55]">
          {visualsReady ? (
            <Ferrofluid
              colors={["#3f3f46", "#71717a", "#a1a1aa", "#e4e4e7"]}
              speed={0.28}
              scale={1.9}
              turbulence={0.85}
              fluidity={0.12}
              rimWidth={0.22}
              sharpness={2.2}
              shimmer={1.2}
              glow={1.7}
              opacity={0.95}
              flowDirection="down"
              mouseInteraction
              mouseStrength={0.9}
              mouseRadius={0.42}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />
          )}
        </div>
        <div className="absolute inset-0 bg-white/72 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 82%)" }} />
      </div>

      <Container className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_480px] lg:gap-6">
        <div className="order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
            {tr(profile.badge)}
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline font-medium text-slate-500">{profile.location}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-[2.2rem] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[0.98]">
            {profile.name}
          </motion.h1>

          <div className="mt-4 flex h-8 items-center text-[1.05rem] font-semibold text-blue-700 sm:text-xl">
            <span className="truncate">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-blue-600" />
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-6 max-w-[640px] text-[0.98rem] leading-relaxed text-slate-600 sm:text-[1.05rem]">
            {tr(profile.description)}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className="mt-9 flex flex-wrap items-center gap-3">
            <GooeyButton variant="primary" size="lg" onClick={() => { const a = document.createElement("a"); a.href = profile.resumeUrl; a.download = ""; document.body.appendChild(a); a.click(); a.remove(); }}>
              <ArrowDown className="h-4 w-4" />
              {t("hero.cta1")}
            </GooeyButton>
            <GooeyButton variant="secondary" size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              <MessageCircle className="h-4 w-4" />
              {t("hero.cta2")}
            </GooeyButton>
            <div className="ml-1 flex items-center gap-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-slate-900 hover:text-slate-900">
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-slate-900 hover:text-slate-900">
                <Github className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-200/70 pt-8 sm:grid-cols-4">
            {profile.metrics.map((m, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  <CountStat value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{tr(m.label)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="order-1 lg:order-2 relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent blur-2xl" />
          <div className="relative">
            {visualsReady ? (
              <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -40, 0]}
                frontImage="/images/hanggaylanyard.jpeg"
                backImage="/images/hanggaylanyard.jpeg"
                imageFit="cover"
                lanyardWidth={1}
                groupPosition={[-0.8, 2, 0]}
                cardScale={2.8}
              />
            ) : (
              <div className="h-[420px] w-full animate-pulse rounded-3xl bg-slate-100 lg:h-[520px]" />
            )}
            <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-white/90 backdrop-blur">DRAG · TARIK KARTU</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
