'use client';

import React from 'react';
import { Target, CalendarCheck, Database, HeartPulse } from 'lucide-react';

export const meridianPrinciples = [
  {
    title: 'Entitlement, Not a Target',
    description: '“21 days is what you’re allowed, not what you’re expected to use.” Taking less leave does not mean better performance, and taking your full entitlement is never viewed negatively.',
    icon: Target,
  },
  {
    title: 'Plan Ahead with Notice',
    description: 'Notice gives colleagues the runway needed to coordinate coverage (2 days for 1–2 days, 2 weeks for 3–5 days, 4 weeks for 6+ days).',
    icon: CalendarCheck,
  },
  {
    title: 'One Source of Truth',
    description: 'Telling a manager or Partner, or posting in WhatsApp, does not count as submitting leave. Leave that isn’t on the tool isn’t approved.',
    icon: Database,
  },
  {
    title: 'Protected Sick Leave',
    description: '10 working days per year, separate from annual leave and available from day one. Medical certificate required only from the 3rd consecutive day.',
    icon: HeartPulse,
  },
];

export const LeavePrinciples: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase block mb-1">
          CORE CULTURE
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Four Fundamental Principles
        </h3>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-xl">
          Non-negotiable operational tenets governing time away across our Chennai and Delhi offices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {meridianPrinciples.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-ink group-hover:text-brand-green group-hover:border-brand-green/30 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-ink-faint">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-ink mb-2 leading-snug">
                  “{item.title}”
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 font-mono text-[10px] uppercase text-ink-faint">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>Meridian Standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
