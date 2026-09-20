'use client';

import React from 'react';
import {
  User,
  FileText,
  Database,
  UserCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  AlertTriangle,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { approvalWorkflowSteps } from '@/data/leavePolicy';

const WORKFLOW_NODES = [
  {
    step: '01',
    title: 'Employee Submits',
    desc: 'Formal intake via Meridian leave tool',
    icon: User,
  },
  {
    step: '02',
    title: 'Manager Review',
    desc: 'Workload & coverage check',
    icon: UserCheck,
  },
  {
    step: '03',
    title: '2-Day Decision SLA',
    desc: 'Manager approves/declines within 2 days',
    icon: Clock,
    highlight: true,
  },
  {
    step: '04',
    title: 'Auto-Escalation',
    desc: 'Escalates to Partners if unanswered',
    icon: ShieldAlert,
  },
  {
    step: '05',
    title: 'One Source of Truth',
    desc: 'Central ledger & calendar updated',
    icon: Database,
  },
];

export const LeaveFlowDiagram: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {/* Policy Callout: One Source of Truth */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border border-line flex flex-col md:flex-row items-start gap-5">
        <div className="w-12 h-12 rounded-2xl bg-brand-vermillion/10 text-brand-vermillion flex items-center justify-center shrink-0">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-vermillion font-bold block">
            CORE RECORDING PRINCIPLE — ONE SOURCE OF TRUTH
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink leading-snug">
            “Telling your manager or a Partner, or posting in a WhatsApp group, is a good courtesy, but it isn&apos;t applying.”
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            The Meridian leave tool is where all leave is recorded (Annual leave, Sick leave, Comp-off, Unpaid leave). <strong className="text-ink">Leave that isn&apos;t on the tool isn&apos;t approved.</strong> Central recording protects your entitlement, maintains visibility across Chennai and Delhi, and keeps team commitments transparent. Genuine emergencies are accommodated under the unplanned leave process.
          </p>
        </div>
      </div>

      {/* Visual Workflow Flowchart */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-brand-green uppercase font-bold block mb-1">
              FORMAL APPROVAL LIFECYCLE
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              End-to-End Request & Escalation Flow
            </h4>
          </div>
          <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-bg border border-line text-ink-muted self-start sm:self-auto">
            Strict 2-Working-Day Manager SLA
          </span>
        </div>

        {/* Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {WORKFLOW_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isLast = idx === WORKFLOW_NODES.length - 1;

            return (
              <div key={node.step} className="relative flex flex-col">
                <div
                  className={`p-5 rounded-2xl border transition-all h-full flex flex-col justify-between ${
                    node.highlight
                      ? 'bg-brand-green text-bg border-brand-green shadow-xs'
                      : 'bg-bg/70 border-line hover:border-ink/30 text-ink'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          node.highlight
                            ? 'bg-white/15 text-bg'
                            : 'bg-surface border border-line text-ink'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          node.highlight ? 'text-bg/80' : 'text-ink-faint'
                        }`}
                      >
                        STEP {node.step}
                      </span>
                    </div>

                    <h5
                      className={`font-serif text-sm font-bold mb-1.5 ${
                        node.highlight ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {node.title}
                    </h5>
                    <p
                      className={`font-sans text-[11px] leading-relaxed ${
                        node.highlight ? 'text-bg/85' : 'text-ink-muted'
                      }`}
                    >
                      {node.desc}
                    </p>
                  </div>

                  {node.highlight && (
                    <div className="mt-3 pt-2 border-t border-white/20 font-mono text-[9px] uppercase tracking-wider text-bg/90 font-semibold">
                      ★ Strict SLA Window
                    </div>
                  )}
                </div>

                {/* Connector Arrow for Desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center text-ink-muted">
                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                  </div>
                )}
                {/* Connector Arrow for Mobile */}
                {!isLast && (
                  <div className="md:hidden flex items-center justify-center py-1 text-ink-faint">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Travel Warning Banner */}
        <div className="mt-6 p-4 rounded-xl bg-bg border border-line flex items-center gap-2.5 text-xs font-sans text-ink-muted">
          <Clock className="w-4 h-4 text-brand-vermillion shrink-0" />
          <span>
            <strong className="text-ink">Travel Planning Precaution:</strong> Employees should avoid booking non-refundable travel until written approval is confirmed in the Meridian leave tool.
          </span>
        </div>
      </div>
    </div>
  );
};
