'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CalendarPlus,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Shield,
  HeartPulse,
  Database,
  LayoutDashboard,
  UserCheck,
  CalendarDays,
  Clock,
  Sparkles,
  MapPin,
  FileSpreadsheet,
} from 'lucide-react';
import { LeaveRoleSelector } from '@/components/leave/LeaveRoleSelector';
import { LeaveRolloutTimeline } from '@/components/leave/LeaveRolloutTimeline';
import { leavePolicyMeta, policySummaryCards } from '@/data/leavePolicy';
import { mockLeaveStats } from '@/data/leaveMockData';

export default function LeaveHubPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* 01 HEADER */}
      <section className="pt-4 pb-8 border-b border-line">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>MERIDIAN CAPITAL INTERNAL OPERATIONS · CHENNAI & DELHI</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
            Leave Hub
          </h1>

          <p className="font-sans text-base sm:text-xl text-ink-muted leading-relaxed">
            {leavePolicyMeta.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted">
            <span className="px-3 py-1 rounded-full bg-surface border border-line">
              26 Team Members across Chennai (14) & Delhi (12)
            </span>
            <span className="px-3 py-1 rounded-full bg-surface border border-line">
              Effective: {leavePolicyMeta.effectiveDate}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-bold">
              Final Official Policy
            </span>
          </div>
        </div>
      </section>

      {/* 02 TWO PROMINENT ACTION CARDS (CORE REQUIREMENT) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* CARD 1: Leave Policy */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs hover:border-ink/30 transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-bg border border-line flex items-center justify-center text-ink group-hover:text-brand-green group-hover:border-brand-green/40 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase block mb-1">
                MERIDIAN CAPITAL FRAMEWORK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
                Leave Policy
              </h2>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                Understand your annual leave, sick leave, notice requirements, and how leave is recorded.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-3 text-xs font-sans text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>21 days annual leave</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>10 days sick leave</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>2 days / 2 wks / 4 wks notice</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>One Source of Truth</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-line/60">
            <Link
              href="/leave/policy"
              className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-bg border border-line text-ink font-sans text-xs font-bold hover:bg-ink hover:text-bg hover:border-ink transition-all group/btn"
            >
              <span>View Policy</span>
              <ArrowRight className="w-4 h-4 text-ink-muted group-hover/btn:text-bg group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CARD 2: Request Leave */}
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-green text-bg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <CalendarPlus className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-widest text-bg/70 uppercase block mb-1">
                DIGITAL INTAKE PORTAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                Request Leave
              </h2>
              <p className="font-sans text-sm text-bg/85 leading-relaxed">
                Submit a planned leave or sick leave request through the leave tracker.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-3 text-xs font-sans text-bg/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion" />
                <span>Chennai & Delhi calendars</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion" />
                <span>Comp-off & half-day support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion" />
                <span>2-day manager review SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion" />
                <span>Prototype state</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-white/15">
            <Link
              href="/leave/request"
              className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-white text-brand-green font-sans text-xs font-bold hover:bg-bg transition-colors group/btn"
            >
              <span>Submit Request</span>
              <ArrowRight className="w-4 h-4 text-brand-green group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 03 AT-A-GLANCE POLICY SUMMARY CARDS */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
            KEY POLICY DIRECTIVES
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Policy at a Glance
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {policySummaryCards.map((card) => (
            <div
              key={card.category}
              className="p-6 rounded-2xl bg-surface border border-line shadow-xs flex flex-col justify-between hover:border-ink/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-brand-green">
                    {card.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-bg border border-line text-ink-muted">
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-ink mb-1.5 leading-snug">
                  {card.headline}
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 INTERACTIVE LEVEL-2 SECTIONS (MY LEAVE & TEAM CALENDAR) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Leave Card */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-ink">
                <UserCheck className="w-5 h-5 text-brand-green" />
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-bg border border-line text-ink-muted font-bold">
                Employee Dashboard
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink">
              My Leave & Balances
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              Inspect your active annual leave allocation (21 days), sick leave quota (10 days), comp-off accruals, and official Chennai & Delhi public holiday lists.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-line">
            <Link
              href="/leave/my-leave"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-green hover:underline"
            >
              <span>Open My Leave Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Team Calendar Card */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-ink">
                <CalendarDays className="w-5 h-5 text-brand-green" />
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-bg border border-line text-ink-muted font-bold">
                Two-City Visibility
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink">
              Team Leave Calendar
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              Explore scheduled team absences across both the Chennai and Delhi offices to coordinate sprint handovers and avoid deal pipeline overlaps.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-line">
            <Link
              href="/leave/calendar"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-green hover:underline"
            >
              <span>View Team Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 2026 ROLLOUT TIMELINE (SECTION 29) */}
      <section>
        <LeaveRolloutTimeline />
      </section>

      {/* 06 FUTURE ROLE ARCHITECTURE (SECTION 28) */}
      <section>
        <LeaveRoleSelector />
      </section>

      {/* 07 PARTNERS OFFICE PREVIEW CALLOUT (SECTION 27) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface-card/70 border border-line flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-line font-mono text-xs uppercase text-ink-muted">
            <LayoutDashboard className="w-3.5 h-3.5 text-brand-green" />
            <span>EXECUTIVE & PARTNER TELEMETRY</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Partners Office — Leave Overview
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            Administrative overview previewing pending approval queues ({mockLeaveStats.pendingCount} pending), active leaves across Chennai and Delhi, and firm-wide ledger compliance.
          </p>
        </div>

        <Link
          href="/leave/admin"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors shrink-0 shadow-xs"
        >
          <span>Open Partners Office Preview</span>
          <ArrowUpRight className="w-4 h-4 text-brand-vermillion" />
        </Link>
      </section>
    </div>
  );
}
