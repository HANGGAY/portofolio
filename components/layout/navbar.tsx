"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { locale, setLocale, t, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#hero" className="whitespace-nowrap text-[1.05rem] font-bold tracking-tight text-slate-900">
            Hanggay<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[0.82rem] font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {tr(item.label)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center rounded-md border border-slate-200 p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLocale("id")}
                className={cn(
                  "rounded px-2.5 py-1 transition-colors",
                  locale === "id" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                )}
                aria-pressed={locale === "id"}
              >
                ID
              </button>
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "rounded px-2.5 py-1 transition-colors",
                  locale === "en" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                )}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
            <Button asChild variant="primary" size="sm">
              <a href="#contact">{t("nav.contact_cta")}</a>
            </Button>
          </div>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {tr(item.label)}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => setLocale("id")}
                  className={cn(
                    "flex-1 rounded-md border py-2 text-xs font-semibold",
                    locale === "id" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600"
                  )}
                >
                  Indonesia
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "flex-1 rounded-md border py-2 text-xs font-semibold",
                    locale === "en" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600"
                  )}
                >
                  English
                </button>
              </div>
              <Button asChild variant="primary" size="md" className="mt-2 w-full">
                <a href="#contact" onClick={() => setOpen(false)}>{t("nav.contact_cta")}</a>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
