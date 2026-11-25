import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
}: FadeInProps) {
  const style = {
    "--fade-delay": `${delay}s`,
    "--fade-duration": `${duration}s`,
    "--fade-y": `${y}px`,
  } as CSSProperties;

  return (
    <div className={cn("fade-in-up", className)} style={style}>
      {children}
    </div>
  );
}
