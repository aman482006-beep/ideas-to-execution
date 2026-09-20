'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  HeartPulse,
  Clock,
  CheckCircle2,
  Users,
  Shield,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  FileText,
  AlertCircle,
  Table,
  Check,
  CalendarDays,
  FileCheck,
} from 'lucide-react';
import {
  leavePolicyMeta,
  policySummaryCards,
  proRatingTableData,
  noticeRequirementsTable,
  peakPeriodsInfo,
} from '@/data/leavePolicy';
import { LeaveFlowDiagram } from '@/components/leave/LeaveFlowDiagram';
import { LeaveResponsibilityMatrix } from '@/components/leave/LeaveResponsibilityMatrix';
import { LeaveRolloutTimeline } from '@/components/leave/LeaveRolloutTimeline';

export default function LeavePolicyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* 01 HEADER & POLICY METADATA */}
      <section className="pt-4 pb-8 border-b border-line">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            <span>OFFICIAL FIRM DOCUMENTATION</span>
          </div>

          <div>
            <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
              {leavePolicyMeta.organization}
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.05]">
              {leavePolicyMeta.title}
            </h1>
          </div>

          <p className="font-sans text-base sm:text-xl text-ink-muted leading-relaxed max-w-3xl">
            “{leavePolicyMeta.subtitle}”
          </p>

          {/* Policy Metadata Card */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono text-ink-muted">
            <div className="p-3.5 rounded-xl bg-surface border border-line">
              <span className="text-[10px] text-ink-faint block uppercase">Applies To</span>
              <strong className="text-ink font-sans text-xs">{leavePolicyMeta.appliesTo}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-line">
              <span className="text-[10px] text-ink-faint block uppercase">Effective From</span>
              <strong className="text-brand-green font-sans text-xs">{leavePolicyMeta.effectiveDate}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-line">
              <span className="text-[10px] text-ink-faint block uppercase">Owner & Review</span>
              <strong className="text-ink font-sans text-xs">{leavePolicyMeta.owner} (Every Dec)</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-line">
              <span className="text-[10px] text-ink-faint block uppercase">Questions</span>
              <strong className="text-ink font-sans text-xs">{leavePolicyMeta.questionsContact}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WHY WE'RE WRITING THIS DOWN */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">01</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            PURPOSE & CONTEXT
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Why We’re Writing This Down
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
            {leavePolicyMeta.teamContext} With the team growing, employees can no longer rely on informal communication or one person&apos;s memory to understand leave.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-bg border border-line flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
              <strong>Clear Entitlement:</strong> Make leave entitlement and the request process unambiguous for every team member.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg border border-line flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
              <strong>Encourage Rest:</strong> Prevent employees from taking too little leave simply because they are unsure of the rules.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg border border-line flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
              <strong>Predictable Coordination:</strong> Prevent leave from unexpectedly landing on teams without advance warning.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg border border-line flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
              <strong>Central Recording:</strong> Create one central, auditable place for recording all leave across Chennai and Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* 03 SHORT VERSION / POLICY SUMMARY (HIGH VISIBILITY) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface-card border-2 border-brand-green/20 shadow-xs space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-brand-vermillion">02</span>
            <span className="font-mono text-[10px] tracking-widest text-brand-green uppercase font-bold">
              AT-A-GLANCE SUMMARY
            </span>
          </div>
          <span className="font-mono text-xs text-ink-muted">The Core Directives</span>
        </div>

        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">
            Short Version / Policy Summary
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted">
            The fundamental rules you need to know before booking time away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {policySummaryCards.map((card) => (
            <div
              key={card.category}
              className="p-5 rounded-2xl bg-surface border border-line shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-brand-vermillion block mb-1">
                  {card.category}
                </span>
                <h4 className="font-serif text-base font-bold text-ink mb-1">
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

      {/* 04 SECTION 3: ANNUAL LEAVE */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">03</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            SECTION 3 — ANNUAL LEAVE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl bg-bg border border-line">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
              FULL-TIME ENTITLEMENT
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              3. Annual Leave: <span className="text-brand-green">21 working days</span> per calendar year
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ink-muted mt-2">
              On top of public holidays. Calendar year runs from January 1 to December 31.
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs text-ink-muted px-4 py-2 rounded-xl bg-surface border border-line">
            Mon – Fri Working Days
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg font-bold text-ink">
            Key Annual Leave Rules:
          </h4>
          <ul className="space-y-2 font-sans text-xs sm:text-sm text-ink-muted">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-2" />
              <span><strong>Weekends & Public Holidays:</strong> Weekends and public holidays are not charged as leave.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-2" />
              <span><strong>Separate City Holiday Lists:</strong> Chennai and Delhi have different official holiday lists based on regional observances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-2" />
              <span><strong>December Publication:</strong> Partners Office publishes both official holiday lists each December for the upcoming year.</span>
            </li>
          </ul>
        </div>

        {/* IMPORTANT PRINCIPLE CALLOUT (PROMPT MANDATE) */}
        <div className="p-5 rounded-2xl bg-surface-card border border-brand-green/30 text-xs font-sans text-ink leading-relaxed space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <strong className="font-serif text-sm font-bold text-ink">
              Important Principle: Entitlement, Not a Target
            </strong>
          </div>
          <p className="font-serif text-base text-brand-green font-semibold italic">
            “21 days is what you&apos;re allowed, not what you&apos;re expected to use.”
          </p>
          <p className="text-ink-muted leading-relaxed">
            Taking less leave does not mean better performance, and taking your full 21-day entitlement is never viewed negatively. Leave taken is strictly personal rest and should <strong className="text-ink">NOT</strong> be treated as a performance metric or evaluation criteria.
          </p>
        </div>
      </section>

      {/* 05 ANNUAL LEAVE BALANCE & CARRY FORWARD */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Balance */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
          <span className="font-mono text-xs font-bold text-brand-vermillion">04</span>
          <h3 className="font-serif text-2xl font-bold text-ink">
            Annual Leave Balance
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            The full annual leave balance (21 days) is placed into the Meridian leave tool on <strong>January 1</strong>.
          </p>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            Employees can therefore see their active balance, plan their leave throughout the year, and coordinate team calendars in advance.
          </p>
        </div>

        {/* Carry Forward */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
          <span className="font-mono text-xs font-bold text-brand-vermillion">05</span>
          <h3 className="font-serif text-2xl font-bold text-ink">
            Carry Forward & Departure
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
            Employees can carry forward up to <strong>5 unused annual-leave days</strong> into the next calendar year.
          </p>
          <div className="p-3 rounded-xl bg-bg border border-line text-xs font-sans text-brand-vermillion font-medium">
            Carried days must be used by March 31 or they lapse.
          </div>
          <p className="font-sans text-xs text-ink-muted leading-relaxed">
            Anything else unused when an employee leaves Meridian is settled according to the employment contract and applicable law.
          </p>
        </div>
      </section>

      {/* 06 MID-YEAR JOINING / PRO-RATING */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">06</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            CALCULATION FORMULA
          </span>
        </div>

        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">
            Mid-Year Joining / Pro-Rating
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted">
            For team members joining mid-year, annual leave is calculated via the official policy formula:
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-bg border border-line font-mono text-sm text-ink space-y-1">
          <div className="font-bold text-brand-green">
            Annual Leave = 21 × (months remaining ÷ 12)
          </div>
          <p className="font-sans text-xs text-ink-muted">
            Round <strong>UP</strong> to the nearest half day. The joining month is counted if the employee starts on or before the 15th.
          </p>
        </div>

        {/* Pro-rating Examples Table (Prompt Mandate) */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted font-bold block">
            Examples from the Official Policy:
          </span>
          <div className="rounded-2xl border border-line overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-bg font-mono text-[10px] uppercase tracking-wider text-ink-muted border-b border-line">
                <tr>
                  <th className="py-3 px-6 font-semibold">Joining Date</th>
                  <th className="py-3 px-6 font-semibold">Months Counted</th>
                  <th className="py-3 px-6 font-semibold text-right">Annual Leave Allocated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {proRatingTableData.map((row) => (
                  <tr key={row.joiningDate} className="hover:bg-bg/40">
                    <td className="py-3.5 px-6 font-mono font-bold text-ink">{row.joiningDate}</td>
                    <td className="py-3.5 px-6 font-mono text-ink-muted">{row.monthsCounted} months</td>
                    <td className="py-3.5 px-6 font-mono font-bold text-brand-green text-right">{row.annualLeaveDays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] font-sans text-ink-muted pt-1 italic">
            Note: Sick leave is not pro-rated; it is available in full (10 days) from day one.
          </p>
        </div>
      </section>

      {/* 07 HALF DAYS, EXTRA LEAVE, REST CHECK-INS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Half Days */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-3">
          <span className="font-mono text-xs font-bold text-brand-vermillion">07</span>
          <h4 className="font-serif text-xl font-bold text-ink">Half Days</h4>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            Half days are permitted for both annual leave and sick leave. They can be designated as morning or afternoon periods in the leave tool.
          </p>
        </div>

        {/* Extra Leave */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-3">
          <span className="font-mono text-xs font-bold text-brand-vermillion">08</span>
          <h4 className="font-serif text-xl font-bold text-ink">Extra Leave</h4>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            If an employee needs more than 21 days: <strong>Ask</strong>. It is not a breach of policy. Your manager discusses it, and either Partner can approve. Additional leave will usually be unpaid.
          </p>
        </div>

        {/* Rest Check-ins */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-3">
          <span className="font-mono text-xs font-bold text-brand-vermillion">09</span>
          <h4 className="font-serif text-xl font-bold text-ink">Rest Check-Ins</h4>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            In <strong>July and October</strong>, Partners Office sends each employee and manager a balance summary. If someone has taken very little leave or gone a long stretch without a break, managers will encourage booking time off.
          </p>
        </div>
      </section>

      {/* 08 WEEKENDS, PUBLIC HOLIDAYS & COMP-OFF */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">10</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            SPECIAL OPERATIONAL WORK
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
          Weekends, Public Holidays & Comp-Off
        </h3>

        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
          Employees are not expected to work weekends or public holidays. If a manager asks an employee to work on a weekend or public holiday due to exceptional deal pressure or audit closing:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-bg border border-line">
            <span className="font-mono text-xs font-bold text-ink block mb-1">01. Agree in Return</span>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">Agree on a replacement day off in return with your reporting manager.</p>
          </div>
          <div className="p-4 rounded-xl bg-bg border border-line">
            <span className="font-mono text-xs font-bold text-ink block mb-1">02. Record as Comp-Off</span>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">Record it formally in the Meridian leave tool as a designated “Comp-off”.</p>
          </div>
          <div className="p-4 rounded-xl bg-bg border border-line">
            <span className="font-mono text-xs font-bold text-brand-green block mb-1">03. 60-Day Window</span>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">Take the agreed comp-off within 60 days of the weekend or holiday worked.</p>
          </div>
        </div>
      </section>

      {/* 09 SICK LEAVE & MEDICAL CERTIFICATE */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border-2 border-brand-vermillion/20 shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">11</span>
          <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold">
            HEALTH & WELLNESS
          </span>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-vermillion/10 text-brand-vermillion flex items-center justify-center shrink-0">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-1">
              Sick Leave: 10 Working Days Per Year
            </h2>
            <p className="font-sans text-xs sm:text-sm text-ink-muted">
              Fully separate from annual leave. Available in full from your very first day at Meridian.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-bg border border-line space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-ink block">
              RULES & NOTICE
            </span>
            <ul className="space-y-2 font-sans text-xs text-ink-muted">
              <li>• Available from the employee&apos;s first day; does not carry forward.</li>
              <li>• Half days are permitted; can also be used for medical appointments.</li>
              <li>• <strong>No advance notice is required.</strong> Tell your manager or either Partner as early as possible that day, ideally before work begins.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-bg border border-line space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-brand-vermillion block">
              MEDICAL CERTIFICATE PROTOCOL
            </span>
            <ul className="space-y-2 font-sans text-xs text-ink-muted">
              <li>• <strong>1–2 consecutive sick days:</strong> No medical certificate required.</li>
              <li>• <strong>3rd consecutive day onward:</strong> Medical certificate required.</li>
              <li>• Upload the certificate to the leave tool within <strong>3 working days</strong> of returning to work.</li>
            </ul>
          </div>
        </div>

        {/* Running out of sick leave */}
        <div className="p-4 rounded-xl bg-surface-card border border-line text-xs font-sans text-ink-muted flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-ink">Running out of sick leave?</strong> If sick leave runs out or you face a prolonged illness, speak directly to a Partner. The situation will be worked out collaboratively, which may include utilizing available annual leave.
          </div>
        </div>
      </section>

      {/* 10 PLANNED LEAVE / NOTICE & EXAMPLES */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">12</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            PLANNED NOTICE
          </span>
        </div>

        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">
            Planned Leave & Notice Tiers
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted">
            Notice gives colleagues the runway needed to coordinate coverage and maintain deal velocity.
          </p>
        </div>

        {/* Graduated Notice Table */}
        <div className="rounded-2xl border border-line overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-bg font-mono text-[10px] uppercase tracking-wider text-ink-muted border-b border-line">
              <tr>
                <th className="py-3 px-6 font-semibold">Length of Leave</th>
                <th className="py-3 px-6 font-semibold">Minimum Notice Required</th>
                <th className="py-3 px-6 font-semibold">Practical Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {noticeRequirementsTable.map((tier) => (
                <tr key={tier.lengthOfLeave} className="hover:bg-bg/40">
                  <td className="py-4 px-6 font-mono font-bold text-ink">{tier.lengthOfLeave}</td>
                  <td className="py-4 px-6 font-mono font-bold text-brand-green">{tier.minimumNotice}</td>
                  <td className="py-4 px-6 font-sans text-ink-muted">{tier.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* If notice cannot be met (Prompt Mandate) */}
        <div className="p-4 rounded-xl bg-surface-card border border-line text-xs font-sans text-ink leading-relaxed flex items-start gap-3">
          <Shield className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block text-brand-green mb-0.5 font-mono text-[11px] uppercase tracking-wider">
              If Notice Requirement Cannot Be Met:
            </strong>
            The minimum notice periods are defaults, <strong className="text-ink">NOT an absolute wall</strong>. If you cannot meet the minimum notice due to personal circumstances: apply anyway, explain why in your note, and obtain manager agreement.
          </div>
        </div>
      </section>

      {/* 11 PEAK PERIODS & HANDOVER */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Peak Periods */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-brand-vermillion">13</span>
            <span className="font-mono text-[10px] font-bold text-brand-vermillion uppercase">
              PEAK OPERATIONAL PERIODS
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-ink">
            {peakPeriodsInfo.title}
          </h3>
          <p className="font-sans text-xs text-ink-muted leading-relaxed">
            {peakPeriodsInfo.description} Examples include: <strong>Fund closes, Investment Committee (IC) weeks, and quarter-end reporting</strong>.
          </p>
          <ul className="space-y-2 text-xs font-sans text-ink-muted pt-2 border-t border-line">
            {peakPeriodsInfo.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion shrink-0 mt-1.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Handover for >= 3 Days */}
        <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-brand-green">14</span>
            <span className="font-mono text-[10px] font-bold text-brand-green uppercase">
              COVERAGE REQUIREMENT
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-ink">
            Handover for 3+ Days
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
            For leave of <strong>3 days or more</strong>, employees must agree who is covering what before leaving.
          </p>
          <div className="p-4 rounded-xl bg-bg border border-line text-xs font-sans text-ink-muted space-y-2">
            <p>
              • Leave a concise handover note in the leave tool before departure.
            </p>
            <p>
              • Brief your designated coverage colleague on active founder diligence, client deliverables, or committee deadlines.
            </p>
          </div>
          <p className="text-xs font-sans text-ink-muted pt-1">
            This field is baked directly into the Request Leave form.
          </p>
        </div>
      </section>

      {/* 12 APPROVAL PROCESS & UNPLANNED LEAVE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">15</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            APPROVAL SLA & UNPLANNED ABSENCE
          </span>
        </div>

        {/* Visual Flow with 2-day SLA */}
        <LeaveFlowDiagram />

        {/* Unplanned Leave Protocol */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
          <span className="font-mono text-xs font-bold text-brand-vermillion">16</span>
          <h3 className="font-serif text-2xl font-bold text-ink">
            Unplanned Leave Protocol
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted">
            If an unexpected life event or emergency arises:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs font-sans">
            <div className="p-4 rounded-xl bg-bg border border-line">
              <strong className="text-ink font-mono text-xs block mb-1">Step 1: Tell Manager/Partner</strong>
              <span className="text-ink-muted">Notify your reporting manager or either Partner as soon as reasonably possible.</span>
            </div>
            <div className="p-4 rounded-xl bg-bg border border-line">
              <strong className="text-ink font-mono text-xs block mb-1">Step 2: Log on Tool</strong>
              <span className="text-ink-muted">Apply on the Meridian leave tool within <strong>2 working days</strong> of returning to work.</span>
            </div>
            <div className="p-4 rounded-xl bg-bg border border-line">
              <strong className="text-ink font-mono text-xs block mb-1">Step 3: Balance Deduction</strong>
              <span className="text-ink-muted">Unplanned leave is deducted from annual leave unless it qualifies as sick leave.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13 2026 ROLLOUT TIMELINE (SECTION 29) */}
      <section>
        <LeaveRolloutTimeline />
      </section>

      {/* 14 OTHER LEAVE & THE LAW (SECTION 30) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-brand-vermillion">17</span>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
            STATUTORY COMPLIANCE
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
          Other Leave & The Law
        </h3>

        <div className="p-5 rounded-2xl bg-bg border border-line space-y-3 text-xs sm:text-sm font-sans text-ink leading-relaxed">
          <p>
            Statutory leave, such as maternity leave, paternity leave, or compassionate leave, follows applicable law and the individual employment contract.
          </p>
          <p className="text-ink-muted">
            Employees should speak with Partners Office for guidance. Where the law provides a greater entitlement, the law always applies.
          </p>
        </div>
      </section>

      {/* 15 WHO DOES WHAT: RESPONSIBILITY MATRIX (SECTION 31) */}
      <section>
        <LeaveResponsibilityMatrix />
      </section>

      {/* 16 BOTTOM ACTIONS */}
      <section className="pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase text-ink-muted tracking-wider block">
            READY TO BOOK?
          </span>
          <h4 className="font-serif text-xl font-bold text-ink">
            Apply through the Meridian leave tool.
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/leave/my-leave"
            className="px-5 py-2.5 rounded-full border border-line font-sans text-xs text-ink hover:bg-surface transition-colors"
          >
            My Leave Balances
          </Link>
          <Link
            href="/leave/request"
            className="px-6 py-2.5 rounded-full bg-brand-green text-bg font-sans text-xs font-semibold hover:bg-brand-ink transition-colors shadow-xs"
          >
            Request Leave Now
          </Link>
        </div>
      </section>
    </div>
  );
}
