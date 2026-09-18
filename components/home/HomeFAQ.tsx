'use client';

import React, { useState } from 'react';
import { generalFAQs } from '@/data/faqs';
import { Plus } from 'lucide-react';

export const HomeFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(generalFAQs[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 sm:px-8 max-w-5xl mx-auto border-t border-line">
      <div className="mb-14 text-center">
        <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-2 font-semibold">
          FREQUENT INQUIRIES
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
          Frequently Asked Questions.
        </h2>
        <p className="mt-3 font-sans text-xs sm:text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
          Direct clarity on our investment scope, submission channels, and evaluation cadence.
        </p>
      </div>

      <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions">
        {generalFAQs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'bg-white border-brand-green/30 shadow-xs'
                  : 'bg-white/60 border-line hover:border-ink/30 hover:bg-white/80'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green transition-colors select-none"
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
              >
                <span className={`font-serif text-lg sm:text-xl font-bold transition-colors pr-6 ${
                  isOpen ? 'text-ink' : 'text-ink/90'
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${
                    isOpen
                      ? 'bg-brand-green text-white border-brand-green rotate-45'
                      : 'bg-surface border-line text-ink rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                </span>
              </button>

              {/* Smooth Natural Grid Height Expansion */}
              <div
                id={`answer-${faq.id}`}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-1 text-sm font-sans text-ink-muted leading-relaxed border-t border-line/40">
                    {faq.answer ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <p className="italic text-ink-muted/80 font-mono text-xs bg-bg p-3 rounded-xl border border-line">
                        Official policy guidance for this query is published selectively during active mandate cycles. Please contact hello@8ivc.com directly for specific evaluation questions.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
