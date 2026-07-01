"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Linkedin, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t, tr } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const links = [
    { icon: MessageCircle, label: { id: "WhatsApp", en: "WhatsApp" }, value: profile.whatsappDisplay, href: profile.whatsapp },
    { icon: Mail, label: { id: "Email", en: "Email" }, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: { id: "LinkedIn", en: "LinkedIn" }, value: profile.linkedinDisplay, href: profile.linkedin },
    { icon: Globe, label: { id: "Portfolio", en: "Portfolio" }, value: profile.websiteDisplay, href: profile.website },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("contact.label")} title={t("contact.title")} subtitle={t("contact.sub")} />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="space-y-3">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                {t("contact.reach")}
              </h3>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{tr(link.label)}</div>
                    <div className="text-sm text-slate-500">{link.value}</div>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t("contact.location")}</div>
                  <div className="text-sm text-slate-500">{profile.location}</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <h3 className="mb-6 text-base font-bold text-slate-900">{t("contact.form.title")}</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-600">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-600">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-slate-600">
                  {t("contact.form.subject")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enterprise IT Consultation"
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-600">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your organization's IT needs..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "sending"}
                className="mt-6 w-full"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    {t("contact.form.success")}
                  </>
                ) : status === "sending" ? (
                  t("contact.form.sending")
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t("contact.form.send")}
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
