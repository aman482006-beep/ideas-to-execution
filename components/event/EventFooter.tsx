'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { eventMeta } from '@/data/eventData';

export const EventFooter: React.FC = () => {
  return (
    <footer className="pt-12 pb-16 text-center space-y-4 border-t border-line mt-16">
      <div className="space-y-1">
        <h4 className="font-serif text-2xl font-bold text-ink">
          {eventMeta.title}
        </h4>
        <p className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-semibold">
          {eventMeta.theme}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-ink-muted">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-brand-green" />
          <span>28 November 2026</span>
        </span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-green" />
          <span>9:30 AM – 8:30 PM</span>
        </span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-vermillion" />
          <span>Bengaluru</span>
        </span>
      </div>

      <div className="pt-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg border border-line font-mono text-[10px] text-ink-muted">
          <Sparkles className="w-3 h-3 text-brand-vermillion" />
          <span>{eventMeta.prototypeLabel}</span>
        </span>
      </div>
    </footer>
  );
};
