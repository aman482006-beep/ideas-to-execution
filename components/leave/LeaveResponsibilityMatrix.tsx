'use client';

import React from 'react';
import { responsibilityMatrix } from '@/data/leavePolicy';
import { Users, UserCheck, Briefcase, ShieldAlert, Check } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  EVERYONE: Users,
  MANAGERS: UserCheck,
  'PARTNERS OFFICE': Briefcase,
  PARTNERS: ShieldAlert,
};

export const LeaveResponsibilityMatrix: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mb-2">
        <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
          ORGANIZATIONAL ACCOUNTABILITY
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Who Does What
        </h3>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-2xl leading-relaxed">
          Clear division of responsibilities ensures leave runs smoothly across Chennai and Delhi without operational ambiguity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {responsibilityMatrix.map((item) => {
          const Icon = ICON_MAP[item.role] || Users;
          return (
            <div
              key={item.role}
              className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between hover:border-ink/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-line">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-brand-green">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-brand-vermillion block">
                        {item.role}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-ink">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-ink leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
