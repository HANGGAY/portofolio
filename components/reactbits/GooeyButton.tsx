"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import "./GooeyButton.css";

export function GooeyButton({
  children, className, variant = "primary", size = "md", onClick, ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost"; size?: "sm" | "md" | "lg" }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spawn = () => {
    const el = btnRef.current;
    if (!el) return;
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("span");
      p.className = "gooey-btn-particle";
      const angle = (360 / 6) * i + (Math.random() * 20 - 10);
      const dist = 18 + Math.random() * 22;
      const rad = (angle * Math.PI) / 180;
      p.style.setProperty("--tx", `${Math.cos(rad) * dist}px`);
      p.style.setProperty("--ty", `${Math.sin(rad) * dist}px`);
      p.style.setProperty("--d", `${420 + Math.random() * 220}ms`);
      p.style.setProperty("--s", `${0.6 + Math.random() * 0.5}`);
      el.appendChild(p);
      setTimeout(() => p.remove(), 700);
    }
  };
  return (
    <button
      ref={btnRef}
      className={cn(
        "gooey-btn relative inline-flex items-center justify-center gap-2 overflow-visible whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
        variant === "secondary" && "bg-white text-slate-900 border border-slate-200 hover:border-slate-900 hover:bg-slate-50",
        variant === "ghost" && "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
        size === "sm" && "h-9 px-3.5 text-xs rounded-lg",
        size === "md" && "h-11 px-5",
        size === "lg" && "h-[52px] px-7 text-[0.95rem] rounded-xl",
        className
      )}
      onMouseEnter={spawn}
      onClick={(e) => { spawn(); onClick?.(e); }}
      {...props}
    >
      {children}
    </button>
  );
}
