"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/nav";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { GooeyButton } from "@/components/reactbits/GooeyButton";
import GooeyNav from "@/components/reactbits/GooeyNav";

export function Navbar() {
  const { locale, setLocale, t, tr } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [spyActive, setSpyActive] = useState<number>(-1);
  const homeHref = useCallback(
    (href: string) => (href.startsWith("/") ? href : isHome ? href : `/${href}`),
    [isHome]
  );
  const gooeyItems = useMemo(() => navItems.map((n) => ({ label: tr(n.label), href: homeHref(n.href) })), [tr, homeHref]);
  const manualRef = useRef<number | null>(null);
  const suppressRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace(/^#/, ""));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const onHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const idx = ids.indexOf(hash);
      if (idx !== -1) setSpyActive(idx);
    };
    onHash();
    window.addEventListener("hashchange", onHash);

    let current = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (suppressRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible.length) {
          const id = visible[0].target.id;
          const idx = ids.indexOf(id);
          if (idx !== -1) {
            current = idx;
            setSpyActive(idx);
          }
        } else {
          const y = window.scrollY + 88;
          let active = 0;
          for (let i = 0; i < els.length; i++) {
            if (els[i].offsetTop <= y) active = i;
            else break;
          }
          if (window.scrollY < 40) active = 0;
          const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
          if (atBottom) active = els.length - 1;
          if (active !== current) {
            current = active;
            setSpyActive(active);
          }
        }
      },
      { root: null, rootMargin: "-72px 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("hashchange", onHash);
      io.disconnect();
    };
  }, []);

  const handleNavSelect = (idx: number) => {
    if (manualRef.current) window.clearTimeout(manualRef.current);
    suppressRef.current = true;
    setSpyActive(idx);
    const href = navItems[idx]?.href;
    if (href) {
      if (href.startsWith("/")) {
        router.push(href);
        return;
      }
      if (!isHome) {
        router.push(`/${href}`);
        return;
      }
      history.replaceState(null, "", href);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    manualRef.current = window.setTimeout(() => {
      manualRef.current = null;
      suppressRef.current = false;
    }, 950);
  };

  const goContact = () => {
    if (!isHome) {
      router.push("/#contact");
      return;
    }
    setSpyActive(navItems.length - 1);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b transition-all duration-300", scrolled ? "border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm" : "border-transparent bg-white/70 backdrop-blur-md")}>
      <Container>
        <div className="flex h-[64px] items-center justify-between gap-4">
          <a href={isHome ? "#hero" : "/"} onClick={() => setSpyActive(-1)} className="shrink-0 whitespace-nowrap text-[1.05rem] font-extrabold tracking-tight text-slate-900">
            Hanggay<span className="text-blue-600">.</span>
          </a>

          <div className="hidden lg:flex lg:items-center">
            <GooeyNav items={gooeyItems} activeIndex={Math.max(0, spyActive)} initialActiveIndex={0} onActiveChange={handleNavSelect} particleCount={10} particleDistances={[70, 10]} particleR={70} animationTime={520} timeVariance={260} colors={[1, 2, 3, 1, 2, 3, 1, 4]} />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold shadow-sm">
              <button onClick={() => setLocale("id")} className={cn("rounded-full px-3 py-1.5 transition-colors", locale === "id" ? "bg-slate-900 text-white shadow" : "text-slate-500 hover:text-slate-900")} aria-pressed={locale === "id"}>
                ID
              </button>
              <button onClick={() => setLocale("en")} className={cn("rounded-full px-3 py-1.5 transition-colors", locale === "en" ? "bg-slate-900 text-white shadow" : "text-slate-500 hover:text-slate-900")} aria-pressed={locale === "en"}>
                EN
              </button>
            </div>
            <GooeyButton variant="primary" size="sm" onClick={goContact}>
              {t("nav.contact_cta")}
            </GooeyButton>
          </div>

          <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-slate-200 bg-white lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={homeHref(item.href)}
                  onClick={() => {
                    setOpen(false);
                    if (isHome) handleNavSelect(idx);
                  }}
                  className={cn("rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", spyActive === idx ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100")}
                >
                  {tr(item.label)}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => setLocale("id")} className={cn("flex-1 rounded-xl border py-2.5 text-xs font-semibold", locale === "id" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600 bg-white")}>
                  Indonesia
                </button>
                <button onClick={() => setLocale("en")} className={cn("flex-1 rounded-xl border py-2.5 text-xs font-semibold", locale === "en" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600 bg-white")}>
                  English
                </button>
              </div>
              <GooeyButton variant="primary" size="md" className="mt-2 w-full" onClick={() => { setOpen(false); goContact(); }}>
                {t("nav.contact_cta")}
              </GooeyButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
