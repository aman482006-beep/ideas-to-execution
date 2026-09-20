'use client';

import React from 'react';
import { rolloutTimeline2026 } from '@/data/leavePolicy';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const LeaveRolloutTimeline: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-vermillion block mb-1">
            TRANSITION & ONBOARDING
          </span>
          <h3 className="font-serif text-2xl font-bold text-ink">
            2026 Rollout & Ledger Initialization
          </h3>
        </div>
        <div className="font-mono text-xs text-ink-muted px-3 py-1 rounded-full bg-bg border border-line self-start sm:self-auto">
          Phase 1 Active
        </div>
      </div>

      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
        To transition cleanly from informal communication to the Meridian leave tool, Partners Office is reconciling all 2026 historical records across Chennai and Delhi through this four-stage migration timeline:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative pt-2">
        {rolloutTimeline2026.map((item, idx) => (
          <div
            key={item.date}
            className="p-5 rounded-2xl bg-bg border border-line flex flex-col justify-between relative group hover:border-ink/30 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-brand-green">
                  {item.date}
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  0{idx + 1}
                </span>
              </div>
              <h4 className="font-serif text-sm font-bold text-ink mb-1.5 leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 font-mono text-[10px] text-ink-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Milestone</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
