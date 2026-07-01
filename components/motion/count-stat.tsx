"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function CountStat({
  value,
  prefix,
  suffix,
  className,
  decimals = 0,
  duration = 2.2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {inView ? (
        <CountUp end={value} duration={duration} decimals={decimals} />
      ) : (
        <span>0</span>
      )}
      {suffix}
    </span>
  );
}
