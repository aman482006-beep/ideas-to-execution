'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Compass, Zap } from 'lucide-react';

interface Pillar {
  tag: string;
  num: string;
  headline: string;
  detail: string;
  principle: string;
  highlight: string;
  stats: { label: string; value: string };
  icon: React.ElementType;
  themeColor: string;
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    tag: 'EARLY CONVICTION',
    headline: 'We engage when conviction matters more than certainty.',
    detail:
      'Before market consensus forms and before spreadsheets are clean, belief is the scarce resource. We evaluate founders on clarity of thought, customer obsession, and execution velocity—not rear-view metrics.',
    principle: 'Consensus is for later rounds. Day Zero belongs to independent conviction.',
    highlight: 'Sole-lead commitments before the round forms.',
    stats: { label: 'First Check Lead', value: '100% Direct' },
    icon: Sparkles,
    themeColor: '#143224',
  },
  {
    num: '02',
    tag: 'OPERATOR DNA',
    headline: 'We understand the trenches because we have built businesses ourselves.',
    detail:
      'Having navigated hard pivots, zero-revenue days, and multi-hundred-million exits across Silicon Valley and India, our partners give tactical counsel rooted in operating reality—not textbook theories.',
    principle: 'No junior gatekeepers. Direct guidance from partners who have run payroll.',
    highlight: 'Direct GP access on WhatsApp, zero middle management.',
    stats: { label: 'Partner Experience', value: '25+ Years' },
    icon: Shield,
    themeColor: '#1d4a38',
  },
  {
    num: '03',
    tag: 'DECADE PARTNERSHIP',
    headline: 'Capital is the beginning of our relationship, not the finish line.',
    detail:
      'Wiring the cheque takes days; building an enduring institution takes a decade. We stand shoulder-to-shoulder with our founders to recruit key executives, unlock enterprise distribution, and syndicate subsequent financing rounds.',
    principle: 'From pre-seed incorporation through public listing, we stay relentlessly useful.',
    highlight: 'Full access to the 8i Operator Guild (Slice, Blue Tokai, EaseMyTrip).',
    stats: { label: 'Follow-On Syndication', value: '$500M+' },
    icon: Compass,
    themeColor: '#143224',
  },
  {
    num: '04',
    tag: 'DECISION VELOCITY',
    headline: 'Exceptional founders deserve quick decisions and zero runaround.',
    detail:
      'Fundraising drag stalls product momentum and burns founder energy. Our investment framework delivers a definitive response in 1 week, a term sheet in 2 weeks, and capital wired in 30 days.',
    principle: 'Spend your creative genius building category-defining products, not pitching committees.',
    highlight: 'Origami 30-day SLA guarantee from pitch to bank wire.',
    stats: { label: 'Pitch to Wire', value: '30 Days' },
    icon: Zap,
    themeColor: '#cf4322',
  },
];

export const Why8i: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeIdxRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Butter-smooth scroll-driven focus via requestAnimationFrame (prevents layout thrashing)
  useEffect(() => {
    let ticking = false;

    const updateActivePillar = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let idx = 0; idx < cardRefs.current.length; idx++) {
        const ref = cardRefs.current[idx];
        if (!ref) continue;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      }

      const activeCard = cardRefs.current[closestIdx];
      if (activeCard) {
        const rect = activeCard.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15) {
          if (closestIdx !== activeIdxRef.current) {
            activeIdxRef.current = closestIdx;
            setActiveIdx(closestIdx);
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActivePillar);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActivePillar(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPillar = (idx: number) => {
    setActiveIdx(idx);
    const target = cardRefs.current[idx];
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.25);
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-mono text-xs uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>THE 8i THESIS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            How we partner from Day Zero.
          </h2>
        </div>
        <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
          A deliberate investment posture built for founders who move fast. Scroll to explore the four pillars that anchor every partnership we enter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left Side: Sticky Progress Stepper (Desktop) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-32 space-y-4">
          <div className="p-6 rounded-2xl bg-surface border border-line">
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase block mb-4">
              FOUR CORE PILLARS
            </span>
            <div className="space-y-3">
              {PILLARS.map((p, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={p.num}
                    type="button"
                    onClick={() => scrollToPillar(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      isActive
                        ? 'bg-ink text-white shadow-md'
                        : 'text-ink-muted hover:text-ink hover:bg-bg'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-surface-card text-ink-muted'
                      }`}
                    >
                      {p.num}
                    </span>
                    <div className="overflow-hidden">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider block truncate">
                        {p.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-line text-[11px] font-sans text-ink-muted leading-relaxed">
              <span className="text-ink font-semibold">Live Focus:</span> As you scroll down the page, each pillar activates smoothly.
            </div>
          </div>
        </div>

        {/* Right Side: Dynamically Growing Pillars */}
        <div className="lg:col-span-9 space-y-6">
          {PILLARS.map((pillar, idx) => {
            const isActive = activeIdx === idx;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.num}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-3xl cursor-pointer transition-all duration-500 ease-out border ${
                  isActive
                    ? 'p-8 sm:p-12 bg-surface shadow-xl border-ink/40 ring-1 ring-ink/10 scale-100 z-10'
                    : 'p-6 sm:p-8 bg-surface-card/70 hover:bg-surface border-line/90 opacity-75 hover:opacity-95 scale-[0.985]'
                }`}
              >
                {/* Subtle active accent indicator on left edge */}
                {isActive && (
                  <div
                    className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full transition-all"
                    style={{ backgroundColor: pillar.themeColor }}
                  />
                )}

                <div className="flex flex-col space-y-5">
                  {/* Top Bar: Pillar Tag & Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'text-white shadow-md'
                            : 'bg-surface border border-line text-ink-muted'
                        }`}
                        style={{
                          backgroundColor: isActive ? pillar.themeColor : undefined,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
                            PILLAR {pillar.num}
                          </span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                              Active Focus
                            </span>
                          )}
                        </div>
                        <h4
                          className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase mt-0.5"
                          style={{ color: isActive ? pillar.themeColor : '#4a5568' }}
                        >
                          {pillar.tag}
                        </h4>
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-ink-muted uppercase block">
                        {pillar.stats.label}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-ink">
                        {pillar.stats.value}
                      </span>
                    </div>
                  </div>

                  {/* Core Headline */}
                  <h3
                    className={`font-serif font-bold text-ink leading-tight transition-all duration-300 ${
                      isActive ? 'text-2xl sm:text-4xl text-ink' : 'text-xl sm:text-2xl text-ink/80'
                    }`}
                  >
                    {pillar.headline}
                  </h3>

                  {/* Expanded Content (Fluidly expanded when active) */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="overflow-hidden space-y-5">
                      <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
                        {pillar.detail}
                      </p>

                      {/* Tactical Principle & Highlight Grid */}
                      <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-bg/80 border border-line flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-1">
                              Guiding Principle
                            </span>
                            <p className="font-sans text-xs text-ink font-medium leading-snug">
                              {pillar.principle}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-bg/80 border border-line flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-brand-vermillion shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-1">
                              Founder Advantage
                            </span>
                            <p className="font-sans text-xs text-ink font-medium leading-snug">
                              {pillar.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inactive Collapsed Teaser Line */}
                  {!isActive && (
                    <div className="flex items-center justify-between pt-2 border-t border-line/60 font-sans text-xs text-ink-muted">
                      <span className="line-clamp-1">{pillar.principle}</span>
                      <span className="font-mono text-[11px] text-brand-green font-semibold shrink-0 ml-4">
                        Click or scroll to expand ↓
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
