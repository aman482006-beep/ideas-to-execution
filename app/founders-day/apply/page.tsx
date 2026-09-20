'use client';

import React from 'react';
import Link from 'next/link';
import { TypeformApplication } from '@/components/event/TypeformApplication';
import { EventFooter } from '@/components/event/EventFooter';
import { ArrowLeft } from 'lucide-react';

export default function FoundersDayApplyPage() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <Link
          href="/founders-day"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Event Overview</span>
        </Link>
      </div>

      <TypeformApplication />

      <EventFooter />
    </div>
  );
}
