'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { JourneyPath } from '@/components/visual/JourneyPath';
import { Terrain } from '@/components/visual/Terrain';
import { companies } from '@/data/companies';

export const HomeHero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background SVG World & Journey Path */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-85">
        <JourneyPath progress={loaded ? 1 : 0.15} variant="hero" className="scale-105" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none -z-20 opacity-30">
        <Terrain variant="subtle" />
      </div>

      {/* Top Metadata Marker */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-vermillion animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
            EST. 2019 · MUMBAI & BANGALORE
          </span>
        </div>
        <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
          CATEGORY II AIF · SEBI REGISTERED
        </span>
      </div>

      {/* Main Editorial Hero Typography */}
      <div className="my-auto py-12 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-surface/80 text-ink-muted font-mono text-[11px] tracking-wider uppercase mb-6 backdrop-blur-xs">
          <Sparkles className="w-3 h-3 text-brand-vermillion" />
          <span>Conviction at Day Zero</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-6xl lg:text-[84px] font-bold tracking-tight text-ink leading-[1.06] sm:leading-[1.04] text-balance">
          We Are Early Believers in Founders Building Enduring Companies.
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-xl text-ink-muted max-w-2xl font-normal leading-relaxed">
          Backing exceptional builders from inception to national and global scale. We commit capital with speed, partner with empathy, and stay useful long after the cheque clears.
        </p>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/companies"
            className="inline-flex items-center gap-3 bg-brand-green text-bg font-sans font-medium text-sm sm:text-base px-7 py-3.5 rounded-full hover:bg-brand-ink transition-all duration-200 group shadow-sm hover:shadow-md"
          >
            <span>Meet our companies</span>
            <ArrowRight className="w-4 h-4 text-bg group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/origami"
            className="inline-flex items-center gap-2.5 bg-surface text-ink font-sans font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-line hover:border-ink transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-brand-vermillion" />
            <span>Explore Origami</span>
            <span className="font-mono text-xs text-ink-muted group-hover:text-ink">7·14·30</span>
          </Link>
        </div>
      </div>

      {/* Bottom Hero Metric Rail */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line font-mono text-xs text-ink-muted">
        <div>
          <span className="text-[10px] tracking-widest uppercase block text-ink-muted/70">PORTFOLIO</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-ink block mt-0.5">{companies.length} Companies</span>
          <span className="text-[11px]">Day-zero to category leaders</span>
        </div>
        <div>
          <span className="text-[10px] tracking-widest uppercase block text-ink-muted/70">SPEED CADENCE</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-ink block mt-0.5">7 · 14 · 30</span>
          <span className="text-[11px]">Origami pre-seed framework</span>
        </div>
        <div>
          <span className="text-[10px] tracking-widest uppercase block text-ink-muted/70">OPERATOR DEPTH</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-ink block mt-0.5">Built & Exited</span>
          <span className="text-[11px]">US & India venture veterans</span>
        </div>
        <div>
          <span className="text-[10px] tracking-widest uppercase block text-ink-muted/70">SIGNATURE BETS</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-ink block mt-0.5">Slice · M2P · Tokai</span>
          <span className="text-[11px]">Compounding market benchmarks</span>
        </div>
      </div>
    </section>
  );
};
