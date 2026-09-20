'use client';

import React from 'react';
import { Users, CheckCircle2, Compass, Sparkles } from 'lucide-react';
import { eventMeta, audienceCohorts } from '@/data/eventData';

export const EventOverview: React.FC = () => {
  return (
    <section id="event-overview" className="py-16 border-b border-line space-y-12">
      {/* Editorial Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block">
            INTENTIONAL COMMUNITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
            Why we&apos;re bringing founders together
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <p className="font-sans text-base sm:text-lg text-ink leading-relaxed font-medium">
            {eventMeta.whyText}
          </p>

          <div className="p-5 rounded-2xl bg-surface border border-line flex items-start gap-3 text-xs font-sans text-ink-muted">
            <Sparkles className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-ink font-semibold">The Day&apos;s Core Commitment:</strong> {eventMeta.outcomeGoal}
            </p>
          </div>
        </div>
      </div>

      {/* The 4 Room Cohorts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted font-bold block">
            WHO WILL BE IN THE ROOM
          </span>
          <span className="font-mono text-[11px] text-brand-green font-semibold">
            Invite-Only & Curated Cohort
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceCohorts.map((cohort) => (
            <div
              key={cohort.label}
              className="p-5 rounded-2xl bg-surface border border-line shadow-xs flex flex-col justify-between hover:border-ink/20 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 font-serif text-base font-bold text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <h4>{cohort.label}</h4>
                </div>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  {cohort.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
