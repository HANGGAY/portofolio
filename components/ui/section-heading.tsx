import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fade-in-up mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-2" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className="h-px w-8 bg-cyan-500" />
        <span className={cn("text-xs font-bold uppercase tracking-[0.18em]", light ? "text-cyan-400" : "text-cyan-600")}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-slate-300" : "text-slate-600")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
