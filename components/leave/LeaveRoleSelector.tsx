'use client';

import React, { useState } from 'react';
import { UserRole } from '@/types/leave';
import { User, Users, Briefcase, ShieldAlert, Check } from 'lucide-react';

interface RoleCapability {
  title: string;
  role: UserRole;
  badge: string;
  icon: React.ElementType;
  capabilities: string[];
}

const ROLE_PREVIEWS: RoleCapability[] = [
  {
    role: 'employee',
    title: 'Employee View',
    badge: 'Standard Access',
    icon: User,
    capabilities: [
      'View individual annual (21d) & sick (10d) leave balances',
      'Read official Meridian Leave Policy & Chennai/Delhi holiday lists',
      'Submit planned leave, sick leave, and comp-off requests',
      'View own past requests, approval status, and handover notes',
    ],
  },
  {
    role: 'manager',
    title: 'Reporting Manager View',
    badge: '2-Day SLA Review',
    icon: Users,
    capabilities: [
      'Review direct report leave requests across Chennai & Delhi',
      'Approve or decline with written explanation within 2 working days',
      'View team leave calendar to prevent coverage bottlenecks',
      'Encourage team members to take full annual leave allocation',
    ],
  },
  {
    role: 'partners_office',
    title: 'Partners Office View',
    badge: 'Operations & Ledger',
    icon: Briefcase,
    capabilities: [
      'Administer the central Meridian leave tracker and audit ledger',
      'Publish Chennai & Delhi annual public holiday lists each December',
      'Publish quarterly peak periods (Fund closes, IC weeks, LP reporting)',
      'Send biannual balance summaries to all employees in July & October',
      'Manage 2026 historical leave migration and ledger corrections',
    ],
  },
  {
    role: 'partner',
    title: 'Partners View',
    badge: 'Executive & Policy Owners',
    icon: ShieldAlert,
    capabilities: [
      'Approve additional or unpaid leave requests beyond 21 days',
      'Review requests from employees without a designated manager',
      'Resolve automatically escalated requests (unanswered after 2 days)',
      'Full statutory governance and policy ownership across offices',
    ],
  },
];

export const LeaveRoleSelector: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('employee');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const activeRole = ROLE_PREVIEWS.find((r) => r.role === selectedRole) || ROLE_PREVIEWS[0];

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-line">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold">
              FUTURE ROLE ARCHITECTURE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-line/40 text-ink-muted">
              UI Prototype Only
            </span>
          </div>
          <h4 className="font-serif text-2xl font-bold text-ink">
            Role-Based Access Preparation
          </h4>
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            Prepared to integrate authentication seamlessly across four distinct operational roles without altering the visual hierarchy.
          </p>
        </div>

        {/* Role Toggle Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-bg border border-line">
          {ROLE_PREVIEWS.map((r) => {
            const isCurrent = selectedRole === r.role;
            const Icon = r.icon;
            return (
              <button
                key={r.role}
                type="button"
                onClick={() => {
                  setSelectedRole(r.role);
                  setIsExpanded(true);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-sans transition-all ${
                  isCurrent
                    ? 'bg-ink text-white font-medium shadow-xs'
                    : 'text-ink-muted hover:text-ink hover:bg-surface'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{r.title.replace(' View', '')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Capabilities List for Selected Role */}
      <div className="mt-6">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <activeRole.icon className="w-4 h-4 text-brand-green" />
            <span className="font-sans text-sm font-bold text-ink">
              {activeRole.title} Scope & Responsibilities
            </span>
            <span className="font-mono text-[10px] text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full font-semibold">
              {activeRole.badge}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-mono text-ink-muted hover:text-ink underline"
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-in fade-in duration-200">
            {activeRole.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-4 rounded-xl bg-bg border border-line text-xs font-sans text-ink leading-relaxed"
              >
                <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
