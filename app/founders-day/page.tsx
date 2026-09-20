'use client';

import React, { useState, useRef } from 'react';
import { EventHero } from '@/components/event/EventHero';
import { EventOverview } from '@/components/event/EventOverview';
import { EventTracks } from '@/components/event/EventTracks';
import { TypeformApplication } from '@/components/event/TypeformApplication';
import { EventFooter } from '@/components/event/EventFooter';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FoundersDayPage() {
  const [showApplication, setShowApplication] = useState<boolean>(false);
  const applicationRef = useRef<HTMLDivElement | null>(null);

  const handleStartApplication = () => {
    setShowApplication(true);
    setTimeout(() => {
      if (applicationRef.current) {
        applicationRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* 01 EVENT HERO */}
      <EventHero onStartApplication={handleStartApplication} />

      {/* 02 TYPEFORM APPLICATION CONTAINER (TRIGGERED OR DIRECT) */}
      <div ref={applicationRef} id="apply-section" className="scroll-mt-24">
        {showApplication ? (
          <div className="pt-6 pb-12">
            <TypeformApplication onClose={() => setShowApplication(false)} />
          </div>
        ) : (
          /* Subtle Invitation Banner Before Application */
          <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-mono text-xs uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LIMITED CAPACITY · FOUNDER COHORT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Ready to take part in 8i Founders&apos; Day?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                Applications are reviewed on a rolling basis. Bring one live problem to solve and prepare to share what you&apos;ve learned in the trenches.
              </p>
            </div>

            <button
              type="button"
              onClick={handleStartApplication}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-bg font-sans text-xs sm:text-sm font-semibold hover:bg-brand-green transition-all shadow-xs shrink-0"
            >
              <span>Apply to Attend →</span>
            </button>
          </div>
        )}
      </div>

      {/* 03 EVENT OVERVIEW */}
      <EventOverview />

      {/* 04 DISCUSSION TRACKS & GROUND RULES */}
      <EventTracks />

      {/* 05 BOTTOM EVENT FOOTER */}
      <EventFooter />
    </div>
  );
}
