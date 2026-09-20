'use client';

import React from 'react';
import { ShieldCheck, TrendingUp, Users, AlertCircle, Ban, CheckCircle2 } from 'lucide-react';
import { eventTracks, eventRules } from '@/data/eventData';

const TRACK_ICONS: Record<string, React.ElementType> = {
  'money-compliance': ShieldCheck,
  'growth-payback': TrendingUp,
  'first-25-hires': Users,
};

export const EventTracks: React.FC = () => {
  return (
    <section className="py-16 border-b border-line space-y-16">
      {/* 01 THREE DISCUSSION TRACKS */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
            WHAT THE DAY LOOKS LIKE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Three Operator-Led Tracks
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-xl">
            Each track is facilitated by founders who have navigated these exact operational inflection points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventTracks.map((track) => {
            const Icon = TRACK_ICONS[track.id] || ShieldCheck;
            return (
              <div
                key={track.id}
                className="p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between hover:border-ink/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-ink group-hover:text-brand-green group-hover:border-brand-green/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-ink-muted px-2.5 py-1 rounded-full bg-bg border border-line">
                      {track.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-ink mb-2">
                    {track.title}
                  </h4>

                  <p className="font-serif text-sm font-semibold text-brand-green italic mb-3">
                    “{track.subtitle}”
                  </p>

                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 02 THREE EVENT RULES */}
      <div className="p-8 sm:p-10 rounded-3xl bg-surface-card/60 border border-line space-y-6">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
            ROOM GROUND RULES
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Three Non-Negotiable Rules
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1">
            Setting the tone for an environment where honest operator vulnerability replaces vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {eventRules.map((rule, idx) => (
            <div
              key={rule.title}
              className="p-6 rounded-2xl bg-surface border border-line shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-brand-vermillion">
                    RULE 0{idx + 1}
                  </span>
                  {idx < 2 ? (
                    <Ban className="w-4 h-4 text-brand-vermillion/70" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  )}
                </div>

                <h4 className="font-mono text-sm font-bold tracking-wider text-ink mb-2">
                  {rule.title}
                </h4>

                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  {rule.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
