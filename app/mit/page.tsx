'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { mitSystem } from '@/data/mit';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, FileText, Users, ChevronRight, Headset, AlertCircle, CalendarDays, Loader2, Ticket, CheckCircle, Package, ShoppingCart, Wrench, KeyRound, FileSignature, FolderOpen } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/components/providers/language-provider';
import ShapeGrid from '@/components/reactbits/ShapeGrid';

const Plasma = dynamic(() => import('@/components/reactbits/Plasma'), { ssr: false });
const AcidSquares = dynamic(() => import('@/components/reactbits/AcidSquares'), { ssr: false });

export default function MitPage() {
  const { tr } = useLanguage();
  const data = mitSystem;
  const [activeTab, setActiveTab] = useState<'all' | 'mit' | 'esign'>('all');

  const approvalStages = [
    { id: 'user', label: 'User / Pemohon', icon: Users },
    { id: 'manager', label: 'Atasan Langsung', icon: CheckCircle2 },
    { id: 'tech', label: 'IT Staff / Teknisi', icon: FileText },
    { id: 'spv', label: 'IT SPV / Lead', icon: CheckCircle2 },
    { id: 'itmanager', label: 'IT Manager', icon: AlertCircle },
    { id: 'hod', label: 'HOD User', icon: AlertCircle },
  ];

  const galleryCategories = [
    { key: 'all', label: 'Semua Galeri' },
    { key: 'mit', label: 'MIT System' },
    { key: 'esign', label: 'E-Sign & ISO' },
  ];

  const allScreenshots = [
    ...data.screenshots.mit.map(s => ({ ...s, cat: 'mit' })),
    ...data.screenshots.esign.map(s => ({ ...s, cat: 'esign' })),
  ];

  const filteredScreenshots = activeTab === 'all' 
    ? allScreenshots 
    : allScreenshots.filter(s => s.cat === activeTab);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-hidden">
      {/* Global Background Effect */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <Plasma color="#475569" speed={1.0} direction="forward" scale={1.4} opacity={0.5} mouseInteractive={false} renderScale={0.7} maxDpr={1.5} targetFps={60} iterations={60} />
      </div>
      
      <Navbar />
      
      {/* Hero section */}
      <section className="relative z-10 overflow-hidden py-32 sm:py-40 border-b border-slate-200/80 backdrop-blur-[2px]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-100 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Portfolio
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-300">
            Enterprise ITSM & Security Platform
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-slate-900">{tr(data.title)}</h1>
          <p className="text-xl text-slate-800 max-w-3xl leading-relaxed font-medium mb-6">{tr(data.subtitle)}</p>
          <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed mb-12">{tr(data.overview)}</p>

          {/* Impact Metrics */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Dampak & Metrik Kinerja</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.impact.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-5 text-center flex flex-col justify-between hover:shadow-md transition-shadow">
                  <span className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">{tr(m.label)}</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 my-1">{m.value}</span>
                  <span className="text-xs text-slate-400">{tr(m.detail)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* MIT Features Grid */}
        <div className="relative">
          <ShapeGrid />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-800">Fitur Utama MIT</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {data.modules.slice(0, 6).map((mod, idx) => (
                <div key={idx} className="h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-400">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-sm">
                      {idx === 0 && <Ticket className="h-5 w-5" />}
                      {idx === 1 && <CheckCircle2 className="h-5 w-5" />}
                      {idx === 2 && <Headset className="h-5 w-5" />}
                      {idx === 3 && <ShoppingCart className="h-5 w-5" />}
                      {idx === 4 && <Package className="h-5 w-5" />}
                      {idx === 5 && <Wrench className="h-5 w-5" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">0{idx + 1}</span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide bg-slate-100 text-slate-700 border border-slate-200 rounded px-1.5 py-0.5">
                          <CheckCircle2 className="h-3 w-3" /> Tersedia
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug mt-1">{tr(mod.name)}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{tr(mod.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Gallery */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 p-6 shadow-lg">
          <ShapeGrid />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Galeri Antarmuka & Modul</h2>
                <p className="text-xs text-slate-500 mt-0.5">Tampilan langsung modul MIT System & E-Signature Workflow</p>
              </div>

              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveTab(cat.key as any)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeTab === cat.key
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200/80 text-slate-700 font-bold">
                      {cat.key === 'all' 
                        ? allScreenshots.length 
                        : cat.key === 'mit' 
                          ? data.screenshots.mit.length 
                          : data.screenshots.esign.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Screenshot Cards */}
            <div className="min-h-[300px]">
              {filteredScreenshots.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                  <Loader2 className="w-8 h-8 animate-spin mb-3 text-slate-300" />
                  <span className="text-sm font-medium">Memuat galeri...</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 animate-fade-in">
                  {filteredScreenshots.map((shot, idx) => (
                    <div
                      key={idx}
                      className="group w-full rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden">
                        <Image
                          src={shot.path}
                          alt={tr(shot.label)}
                          fill
                          sizes="(max-width: 768px) 100vw, 1152px"
                          className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-slate-900/70 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm font-medium">
                          {shot.cat === 'mit' ? 'ITSM' : 'E-Sign'}
                        </div>
                      </div>
                      <div className="p-3.5 border-t border-slate-100 flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-800 truncate">{tr(shot.label)}</h4>
                        <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Approval Flow */}
        <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <ShapeGrid />
          <div className="relative z-10">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Alur Approval Pengajuan</h2>
              <p className="text-sm text-slate-500 mt-1">Diagram perjalanan pengajuan dari User hingga selesai</p>
            </div>
            <div className="p-6 bg-slate-50/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 flex-wrap">
                {approvalStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.id} className="flex items-center gap-2 w-full sm:w-auto">
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-slate-200 bg-white hover:border-slate-400 transition-all shadow-sm">
                        <Icon className="w-4 h-4 text-slate-700" />
                        <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{stage.label}</span>
                      </button>
                      {idx < approvalStages.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="relative">
          <ShapeGrid />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.stack.technologies.map((stack, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
