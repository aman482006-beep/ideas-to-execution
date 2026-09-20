'use client';

import React from 'react';
import Link from 'next/link';
import { LeaveRequestForm } from '@/components/leave/LeaveRequestForm';
import { BookOpen, HelpCircle, Shield, ArrowUpRight, PhoneCall, Clock, CheckCircle2 } from 'lucide-react';

export default function RequestLeavePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form (8 cols) */}
        <div className="lg:col-span-8">
          <LeaveRequestForm />
        </div>

        {/* Right Column: Context & Guidelines (4 cols) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
          {/* Quick Notice Card */}
          <div className="p-6 rounded-3xl bg-surface border border-line shadow-xs space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block">
              BEFORE YOU SUBMIT
            </span>
            <h3 className="font-serif text-xl font-bold text-ink">
              Official Policy Reminders
            </h3>

            <ul className="space-y-3 font-sans text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                <span><strong>Graduated Notice:</strong> 1–2 days leave requires 2 working days notice; 3–5 days requires 2 weeks notice; 6+ days requires 4 weeks notice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                <span><strong>Sick Leave:</strong> 10 days per year, separate from annual leave. Medical certificate required only from the 3rd consecutive day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                <span><strong>Handover Note:</strong> Mandatory for absences of 3 working days or more before leaving.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                <span><strong>2-Day SLA:</strong> Managers must respond within 2 working days or the request escalates to Partners.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-line">
              <Link
                href="/leave/policy"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-green hover:underline"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Meridian Policy</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Urgent / Emergency Contact Card */}
          <div className="p-6 rounded-3xl bg-surface-card/70 border border-line text-xs font-sans text-ink-muted space-y-3">
            <div className="flex items-center gap-2 text-ink font-serif font-bold text-base">
              <PhoneCall className="w-4 h-4 text-brand-green" />
              <span>Unplanned Emergencies</span>
            </div>
            <p className="leading-relaxed">
              If an unexpected medical emergency arises, notify your reporting manager or either Partner as early as possible. You have up to <strong>2 working days</strong> after returning to log the formal request in this tool.
            </p>
            <div className="pt-2 font-mono text-[11px] text-ink flex items-center justify-between">
              <span>Chennai Hub · Delhi Hub</span>
              <span className="text-brand-green font-semibold">2-Day Window</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
