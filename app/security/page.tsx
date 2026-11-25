'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { securitySystem } from '@/data/security';
import { useLanguage } from '@/components/providers/language-provider';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/motion/fade-in';

const SecurityArchitectureFlow = dynamic(
  () => import('@/components/visuals/security-architecture-flow').then((m) => m.SecurityArchitectureFlow),
  { ssr: false }
);
const Radar = dynamic(() => import('@/components/reactbits/Radar'), { ssr: false });

export default function SecurityPage() {
  const { t, tr } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 top-10 hidden h-[520px] w-[520px] lg:block">
          <Radar
            color="#2563EB"
            mode="sweep"
            speed={0.8}
            trail={0.28}
            scale={0.92}
            ringCount={6}
            spokeCount={12}
            targets={6}
            clutter={0.25}
            glow={1.2}
            brightness={0.9}
            gridOpacity={0.9}
            fade={0.35}
            opacity={0.85}
            lightMode={true}
            mouseInteraction={true}
          />
        </div>
        <Container className="relative z-10">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('security.back')}
          </Link>
          <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {tr(securitySystem.badge)}
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
            {tr(securitySystem.title)}
          </h1>
          <p className="mt-4 text-base font-semibold text-blue-700 sm:text-lg">
            {tr(securitySystem.subtitle)}
          </p>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {tr(securitySystem.overview)}
          </p>

          <div className="mt-12">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {t('security.metrics')}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {securitySystem.metrics.map((metric, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-xs font-bold text-slate-700">{tr(metric.label)}</div>
                    <div className="mt-1 text-[11px] leading-relaxed text-slate-500">{tr(metric.detail)}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <main className="flex-1 py-10 sm:py-12">
        <Container>
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
              {t('security.flow.label')}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t('security.flow.title')}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t('security.flow.sub')}
            </p>
          </div>

          <FadeIn>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
              <div className="mx-auto h-[600px] w-[920px]">
                <div className="origin-top-left scale-[0.82]">
                  <SecurityArchitectureFlow />
                </div>
              </div>
            </div>
          </FadeIn>

          {securitySystem.screenshots.length ? (
            <div className="mt-20">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t('security.gallery')}</h2>
              <p className="mt-2 text-sm text-slate-600">{t('security.gallery.sub')}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {securitySystem.screenshots.map((shot, i) => (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <div className="relative aspect-[16/10] w-full bg-slate-100">
                        <Image
                          src={shot.path}
                          alt={tr(shot.label)}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="border-t border-slate-200 p-4 text-sm font-semibold text-slate-700">
                        {tr(shot.label)}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
