'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, RotateCcw, Calendar, User, Shield, MapPin, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LeaveRequestData } from '@/types/leave';

interface LeaveSuccessCardProps {
  data: LeaveRequestData;
  referenceId: string;
  onReset: () => void;
}

export const LeaveSuccessCard: React.FC<LeaveSuccessCardProps> = ({
  data,
  referenceId,
  onReset,
}) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#143224', '#cf4322', '#1d4a38', '#34d399'],
      });
    } catch {
      // safe fallback if canvas is not available
    }
  }, []);

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Status */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-mono text-xs uppercase tracking-wider">
          <span>PROTOTYPE CONFIRMATION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Request captured in prototype
        </h2>
        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
          The leave tracker will be connected to the firm&apos;s central data source in the next implementation phase.
        </p>
      </div>

      {/* Captured Payload Overview Card */}
      <div className="p-6 rounded-2xl bg-bg border border-line space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block">
              CAPTURE REFERENCE
            </span>
            <span className="font-mono text-sm font-bold text-ink">{referenceId}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-ink-muted">Simulated Status:</span>
            <span className="px-2.5 py-1 rounded-full bg-surface border border-line text-ink font-mono text-xs font-semibold">
              {data.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-ink-muted font-mono text-[10px] uppercase mb-1">
              <User className="w-3 h-3" />
              <span>Employee</span>
            </div>
            <p className="font-sans font-semibold text-ink">{data.employeeName}</p>
            <p className="font-mono text-[11px] text-ink-muted">{data.employeeEmail}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-ink-muted font-mono text-[10px] uppercase mb-1">
              <MapPin className="w-3 h-3" />
              <span>Office Hub</span>
            </div>
            <p className="font-sans font-semibold text-ink">{data.office || 'Delhi'} Office</p>
            <p className="font-mono text-[11px] text-ink-muted">Official Holiday Calendar</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-ink-muted font-mono text-[10px] uppercase mb-1">
              <Calendar className="w-3 h-3" />
              <span>Leave Window</span>
            </div>
            <p className="font-sans font-semibold text-ink">
              {data.startDate} → {data.endDate}
            </p>
            <p className="font-mono text-[11px] text-brand-green font-semibold">
              {data.numberOfDays} {data.numberOfDays === 1 ? 'Working Day' : 'Working Days'} ({data.leaveType})
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-ink-muted font-mono text-[10px] uppercase mb-1">
              <Shield className="w-3 h-3" />
              <span>Reviewing Lead</span>
            </div>
            <p className="font-sans font-semibold text-ink">{data.manager}</p>
            <p className="font-mono text-[11px] text-ink-muted">2-Day Response SLA</p>
          </div>
        </div>

        {/* Handover & Reason Review */}
        <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
              Reason / Context
            </span>
            <p className="font-sans text-ink bg-surface p-3 rounded-xl border border-line leading-relaxed">
              {data.reason || 'None provided'}
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
              Handover & Coverage Plan
            </span>
            <p className="font-sans text-ink bg-surface p-3 rounded-xl border border-line leading-relaxed">
              {data.handover || 'No specific handover specified'}
            </p>
          </div>
        </div>
      </div>

      {/* Integration Notice */}
      <div className="p-4 rounded-xl bg-surface-card/60 border border-line text-xs font-sans text-ink-muted flex items-start gap-3">
        <FileText className="w-4 h-4 text-ink shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-ink font-semibold">One Source of Truth Notice:</strong> In this prototype, your submission was validated against the Meridian leave rules. Telling a manager or posting in WhatsApp does not replace central recording. No external emails or database records were created.
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-2 flex justify-center">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Submit Another Request</span>
        </button>
      </div>
    </div>
  );
};
