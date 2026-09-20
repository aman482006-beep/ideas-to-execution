'use client';

import React, { useState } from 'react';
import {
  CalendarDays,
  MapPin,
  Filter,
  Users,
  Calendar,
  Sparkles,
  Info,
} from 'lucide-react';
import { mockCalendarEvents } from '@/data/leaveMockData';
import { OfficeLocation } from '@/types/leave';

export const LeaveTeamCalendar: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<'All' | OfficeLocation>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredEvents = mockCalendarEvents.filter((ev) => {
    const matchOffice = selectedOffice === 'All' || ev.office === selectedOffice;
    const matchType = selectedType === 'All' || ev.type === selectedType;
    return matchOffice && matchType;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TEAM PRESENCE TELEMETRY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            Team Leave Calendar
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-2xl">
            Real-time visibility into scheduled absences across Chennai and Delhi to ensure sprint momentum, client deliverables, and coverage handovers.
          </p>
        </div>

        <div className="font-mono text-xs text-ink-muted bg-surface p-3 rounded-2xl border border-line">
          <span className="block font-bold text-ink">October – November 2026</span>
          <span>Chennai (14) · Delhi (12)</span>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-line flex flex-wrap items-center justify-between gap-4">
        {/* Office Filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-ink-muted uppercase mr-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Office:</span>
          </span>
          {(['All', 'Chennai', 'Delhi'] as const).map((off) => (
            <button
              key={off}
              type="button"
              onClick={() => setSelectedOffice(off)}
              className={`px-3 py-1 rounded-full text-xs font-sans transition-colors ${
                selectedOffice === off
                  ? 'bg-ink text-bg font-medium shadow-xs'
                  : 'bg-bg text-ink-muted hover:text-ink border border-line'
              }`}
            >
              {off}
            </button>
          ))}
        </div>

        {/* Leave Type Filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-ink-muted uppercase mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Type:</span>
          </span>
          {['All', 'Annual Leave', 'Sick Leave', 'Comp-off', 'Unpaid Leave'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1 rounded-full text-xs font-sans transition-colors ${
                selectedType === t
                  ? 'bg-ink text-bg font-medium shadow-xs'
                  : 'bg-bg text-ink-muted hover:text-ink border border-line'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Scheduled Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="p-5 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-bg border border-line font-mono text-[10px] text-ink-muted">
                  <MapPin className="w-3 h-3 text-ink-faint" />
                  {ev.office} Hub
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold ${
                    ev.type === 'Annual Leave'
                      ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                      : ev.type === 'Sick Leave'
                      ? 'bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20'
                      : 'bg-bg text-ink border border-line'
                  }`}
                >
                  {ev.type}
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-ink mb-1">
                {ev.name}
              </h4>
              <p className="font-mono text-xs text-ink-muted flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-ink-faint" />
                <span>{ev.dates} ({ev.days} {ev.days === 1 ? 'day' : 'days'})</span>
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-sans text-ink-muted">
              <span>Coverage Agreed</span>
              <span className="font-mono text-brand-green font-semibold">Confirmed</span>
            </div>
          </div>
        ))}
      </div>

      {/* Prototype Footer Disclaimer */}
      <div className="p-4 rounded-xl bg-bg border border-line flex items-center gap-2 text-xs font-sans text-ink-muted">
        <Info className="w-4 h-4 text-ink-faint shrink-0" />
        <span>
          <strong>Calendar Prototype Notice:</strong> Mock employee names and dates populated strictly for planning preview. No live internal calendar or Google Calendar sync is active yet.
        </span>
      </div>
    </div>
  );
};
