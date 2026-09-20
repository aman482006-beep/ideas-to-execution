'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  HeartPulse,
  Clock,
  CheckCircle2,
  CalendarDays,
  Plus,
  ArrowRight,
  Sparkles,
  MapPin,
  FileText,
  AlertCircle,
} from 'lucide-react';
import {
  mockCurrentUserBalance,
  publicHolidaysChennai,
  publicHolidaysDelhi,
} from '@/data/leaveMockData';
import { OfficeLocation } from '@/types/leave';

export const LeaveEmployeeDashboard: React.FC = () => {
  const [activeHolidayTab, setActiveHolidayTab] = useState<OfficeLocation>('Delhi');

  const holidays = activeHolidayTab === 'Chennai' ? publicHolidaysChennai : publicHolidaysDelhi;

  return (
    <div className="space-y-10">
      {/* Top Banner & Prototype Indicator */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-green">
                EMPLOYEE VIEW PREVIEW
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-bold">
                PROTOTYPE
              </span>
            </div>
            <p className="font-sans text-xs text-ink-muted mt-1 leading-relaxed">
              This interactive dashboard illustrates how individual employees across Chennai and Delhi will track their personal leave allocations, carry-over expirations, and holiday schedules once authenticated.
            </p>
          </div>
        </div>

        <Link
          href="/leave/request"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors shrink-0 shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Leave Request</span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
            PERSONAL LEAVE LEDGER
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            My Leave
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1">
            Sample Employee Profile: <strong className="text-ink">Aarav Mehta</strong> (Investment Analyst, Delhi Office)
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
          <MapPin className="w-3.5 h-3.5 text-brand-green" />
          <span>Office: Delhi Hub</span>
          <span className="text-ink-faint">·</span>
          <span>Joined: 15 Jan 2024</span>
        </div>
      </div>

      {/* 3 Summary Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Annual Leave */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-green font-bold">
                ANNUAL LEAVE (2026)
              </span>
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-ink">
                  {mockCurrentUserBalance.annualRemaining}
                </span>
                <span className="font-sans text-xs text-ink-muted">
                  days remaining
                </span>
              </div>
              <p className="font-mono text-xs text-ink-muted">
                {mockCurrentUserBalance.annualTaken} days taken of {mockCurrentUserBalance.annualTotal} days entitlement
              </p>
            </div>

            {/* Carry-over Note */}
            <div className="mt-4 p-3 rounded-xl bg-bg border border-line text-xs font-sans space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted">
                <span>Carried Forward (Max 5):</span>
                <strong className="text-ink">{mockCurrentUserBalance.annualCarriedOver} days</strong>
              </div>
              <p className="text-[11px] text-brand-vermillion font-medium">
                Must be used by {mockCurrentUserBalance.carryOverExpiry} or they lapse.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-line text-[11px] font-sans text-ink-muted">
            <span className="font-semibold text-ink">Principle:</span> “21 days is what you’re allowed, not what you’re expected to use.”
          </div>
        </div>

        {/* Card 2: Sick Leave */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-vermillion font-bold">
                SICK LEAVE (2026)
              </span>
              <div className="w-8 h-8 rounded-lg bg-brand-vermillion/10 text-brand-vermillion flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-ink">
                  {mockCurrentUserBalance.sickRemaining}
                </span>
                <span className="font-sans text-xs text-ink-muted">
                  days remaining
                </span>
              </div>
              <p className="font-mono text-xs text-ink-muted">
                {mockCurrentUserBalance.sickTaken} days used of {mockCurrentUserBalance.sickTotal} days quota
              </p>
            </div>

            {/* Policy Reminder */}
            <div className="mt-4 p-3 rounded-xl bg-bg border border-line text-xs font-sans space-y-1">
              <span className="font-mono text-[10px] text-ink-muted block uppercase">
                Protected Health Allocation:
              </span>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Available in full from day one. Does not carry forward. Medical certificate required from 3rd consecutive day.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-line text-[11px] font-sans text-ink-muted">
            Separate from annual leave. Can be used for medical appointments.
          </div>
        </div>

        {/* Card 3: Comp-Off */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-bold">
                COMP-OFF ACCRUAL
              </span>
              <div className="w-8 h-8 rounded-lg bg-bg border border-line text-ink flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-ink">
                  {mockCurrentUserBalance.compOffAvailable}
                </span>
                <span className="font-sans text-xs text-ink-muted">
                  day available
                </span>
              </div>
              <p className="font-mono text-xs text-brand-green font-semibold">
                Accrued from approved weekend / public holiday work
              </p>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-bg border border-line text-xs font-sans space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted">
                <span>60-Day Utilization SLA:</span>
                <strong className="text-ink">{mockCurrentUserBalance.compOffExpiryDays} days left</strong>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Must be redeemed within 60 days of the weekend worked with manager agreement.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-line text-[11px] font-sans text-ink-muted">
            Logged into central ledger as designated Comp-off.
          </div>
        </div>
      </div>

      {/* My Upcoming & Recent Requests */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-vermillion font-bold block mb-1">
              REQUEST LOG
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              My Recent & Pending Requests
            </h3>
          </div>
          <span className="font-mono text-xs text-ink-muted">Showing 2 Sample Records</span>
        </div>

        <div className="divide-y divide-line border border-line rounded-2xl overflow-hidden">
          <div className="p-4 sm:p-5 bg-bg/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-ink">Annual Leave (5 days)</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-mono text-[10px] font-bold">
                  Pending Manager Review
                </span>
              </div>
              <p className="font-mono text-[11px] text-ink-muted mt-0.5">
                Dates: 19 Oct 2026 → 23 Oct 2026 · Reviewer: Rohan Sharma
              </p>
              <p className="font-sans text-[11px] text-ink mt-1">
                Reason: Family trip to Himachal · Handover: Rishi N. covering fintech diligence.
              </p>
            </div>
            <div className="font-mono text-[11px] text-ink-muted shrink-0 text-left sm:text-right">
              Applied: 28 Sep 2026<br />
              <span className="text-brand-green">SLA: Due in 1 working day</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-bg/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-ink">Annual Leave (2 days)</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-[10px] font-bold">
                  Approved
                </span>
              </div>
              <p className="font-mono text-[11px] text-ink-muted mt-0.5">
                Dates: 13 Aug 2026 → 14 Aug 2026 · Approved by: Vikram Chachra
              </p>
              <p className="font-sans text-[11px] text-ink mt-1">
                Reason: Extended weekend break · Handover completed.
              </p>
            </div>
            <div className="font-mono text-[11px] text-ink-muted shrink-0 text-left sm:text-right">
              Deducted: 2.0 days<br />
              <span className="text-ink">Archived in Ledger</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Public Holiday List: Chennai & Delhi */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-green font-bold block mb-1">
              OFFICIAL FIRM CALENDARS
            </span>
            <h3 className="font-serif text-2xl font-bold text-ink">
              Official Public Holiday Lists
            </h3>
            <p className="font-sans text-xs text-ink-muted mt-1">
              Published annually by Partners Office every December. Public holidays are not charged as leave.
            </p>
          </div>

          {/* Office Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-bg border border-line self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveHolidayTab('Chennai')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition-colors ${
                activeHolidayTab === 'Chennai'
                  ? 'bg-ink text-white font-semibold shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Chennai Office (9 Days)
            </button>
            <button
              type="button"
              onClick={() => setActiveHolidayTab('Delhi')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition-colors ${
                activeHolidayTab === 'Delhi'
                  ? 'bg-ink text-white font-semibold shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Delhi Office (9 Days)
            </button>
          </div>
        </div>

        {/* Holiday Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-bg font-mono text-[10px] uppercase tracking-wider text-ink-muted border-b border-line">
              <tr>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold">Day</th>
                <th className="py-3 px-4 font-semibold">Holiday Occasion</th>
                <th className="py-3 px-4 font-semibold text-right">Applicability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {holidays.map((h) => (
                <tr key={h.name} className="hover:bg-bg/50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-ink">{h.date}</td>
                  <td className="py-3.5 px-4 font-mono text-ink-muted">{h.dayOfWeek}</td>
                  <td className="py-3.5 px-4 font-sans font-semibold text-ink">{h.name}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="px-2.5 py-0.5 rounded-full bg-bg border border-line text-[11px] font-mono text-ink-muted">
                      {h.office === 'Both' ? 'Both Offices' : `${h.office} Only`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
