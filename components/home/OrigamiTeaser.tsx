'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, FileCheck2, Handshake, Sparkles, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    week: 'WEEK 1',
    day: 'DAY 07',
    icon: Clock,
    title: 'Response in 1 Week',
    description:
      'Every pitch received is thoroughly reviewed directly by our general partners. Expect substantive, qualitative feedback within 7 calendar days.',
    badge: 'Zero Ghosting Guaranteed'
  },
  {
    num: '02',
    week: 'WEEK 2',
    day: 'DAY 14',
    icon: FileCheck2,
    title: 'Decision in 2 Weeks',
    description:
      'If conviction aligns, an institutional term sheet is delivered within 14 days with standard NVCA founder-friendly terms and zero hidden clauses.',
    badge: '1x Non-Participating NVCA'
  },
  {
    num: '03',
    week: 'WEEK 4',
    day: 'DAY 30',
    icon: Handshake,
    title: 'Deal Done in 4 Weeks',
    description:
      'Confirmatory diligence is completed and 100% capital is wired via RTGS within 30 days. No dragged timelines. Get straight back to building.',
    badge: 'Capital in Company Account'
  }
];

export const OrigamiTeaser: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 bg-[#12291d] text-[#fbf9f5] border-t border-line relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-vermillion/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/10 gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-vermillion font-mono text-xs uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE 8i ORIGAMI FRAMEWORK</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Fundraising without the usual delays.
            </h2>
          </div>

          <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed">
            Our primary promise to you is clear: a swift fundraise without the usual months of distraction. Expect a response within 7 days, a term sheet within 14, and the deal closed in 30 days.
          </p>
        </div>

        {/* 3 Steps Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xs relative group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-bold tabular-nums text-white/30 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-bold">
                      {step.week}
                    </span>
                    <span className="text-white/30 text-xs">•</span>
                    <span className="font-mono text-[11px] font-bold tabular-nums text-white/90 bg-white/10 px-2.5 py-0.5 rounded-md inline-flex items-center justify-center text-center">
                      {step.day}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-[11px] text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-vermillion shrink-0" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="font-mono text-xs text-white/70 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-vermillion animate-pulse" />
            <span>
              Fixed SLA: <strong className="text-white">DEAL CLOSURE IN 4 WEEKS (30 DAYS).</strong>
            </span>
          </div>

          <Link
            href="/origami"
            className="inline-flex items-center gap-3 bg-bg text-[#12291d] font-sans font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-md group"
          >
            <span>Explore the Full 30-Day Journey</span>
            <ArrowRight className="w-4 h-4 text-[#12291d] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
