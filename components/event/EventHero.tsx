'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Users,
} from 'lucide-react';
import { eventMeta } from '@/data/eventData';

interface EventHeroProps {
  onStartApplication: () => void;
}

export const EventHero: React.FC<EventHeroProps> = ({ onStartApplication }) => {
  const scrollToOverview = () => {
    const el = document.getElementById('event-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-16 border-b border-line relative overflow-hidden">
      <div className="max-w-4xl space-y-6">
        {/* Prototype & Cohort Tag */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>FOUNDER COMMUNITY GATHERING</span>
          </div>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface border border-line text-ink-muted">
            {eventMeta.prototypeLabel}
          </span>
        </div>

        {/* Headlines */}
        <div>
          <span className="font-mono text-xs tracking-[0.25em] text-brand-vermillion uppercase font-bold block mb-2">
            {eventMeta.theme.toUpperCase()}
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.02]">
            {eventMeta.title}
          </h1>
        </div>

        {/* Subtitle & Mission */}
        <p className="font-serif text-xl sm:text-2xl text-ink font-semibold leading-snug">
          “{eventMeta.tagline}”
        </p>

        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          {eventMeta.summary}
        </p>

        {/* Event Key Info Chips */}
        <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-ink">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-line shadow-xs">
            <Calendar className="w-4 h-4 text-brand-green" />
            <span>{eventMeta.date}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-line shadow-xs">
            <Clock className="w-4 h-4 text-brand-green" />
            <span>{eventMeta.time}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-line shadow-xs">
            <MapPin className="w-4 h-4 text-brand-vermillion" />
            <span>{eventMeta.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onStartApplication}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ink text-bg font-sans text-xs sm:text-sm font-semibold hover:bg-brand-green transition-all shadow-xs group"
          >
            <span>Apply to Attend</span>
            <ArrowRight className="w-4 h-4 text-bg group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={scrollToOverview}
            className="inline-flex items-center gap-1.5 px-5 py-4 rounded-full border border-line font-mono text-xs text-ink-muted hover:text-ink hover:bg-surface transition-colors"
          >
            <span>Learn about the event</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
