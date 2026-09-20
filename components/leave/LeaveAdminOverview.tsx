'use client';

import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  Users,
  Calendar,
  Search,
  Filter,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
  HeartPulse,
} from 'lucide-react';
import { mockLeaveRecords, mockLeaveStats } from '@/data/leaveMockData';
import { LeaveOverviewRecord, LeaveStatus, OfficeLocation } from '@/types/leave';

export const LeaveAdminOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | LeaveStatus>('All');
  const [officeFilter, setOfficeFilter] = useState<'All' | OfficeLocation>('All');
  const [selectedRecord, setSelectedRecord] = useState<LeaveOverviewRecord | null>(null);

  const filteredRecords = mockLeaveRecords.filter((record) => {
    const matchesSearch =
      record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.leaveType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || record.status === statusFilter;
    const matchesOffice = officeFilter === 'All' || record.location === officeFilter;

    return matchesSearch && matchesStatus && matchesOffice;
  });

  const getStatusBadge = (status: LeaveStatus) => {
    switch (status) {
      case 'Approved':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            Approved
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion" />
            Pending
          </span>
        );
      case 'Declined':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-line/60 text-ink-muted border border-line">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-muted" />
            Declined
          </span>
        );
    }
  };

  return (
    <div className="space-y-10">
      {/* Title & Prototype Badge (Section 27 Exact Title) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADMIN PREVIEW — PROTOTYPE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            Partners Office — Leave Overview
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-2 max-w-2xl leading-relaxed">
            Consolidated administrative ledger managing leave records, team absences, public holidays, and balance check-ins across Chennai (14) and Delhi (12).
          </p>
        </div>

        <div className="text-left sm:text-right font-mono text-xs text-ink-muted bg-surface p-3 rounded-2xl border border-line">
          <span className="block text-ink font-semibold">26 Total Team Members</span>
          <span>Version 1.0 Effective Oct 2026</span>
        </div>
      </div>

      {/* 4 Summary Stat Cards (Section 27 Exact Metrics) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Pending Requests */}
        <div className="p-6 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/20 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold">
              PENDING REQUESTS
            </span>
            <div className="w-8 h-8 rounded-lg bg-brand-vermillion/10 text-brand-vermillion flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            {mockLeaveStats.pendingCount}
          </div>
          <p className="font-sans text-xs text-ink-muted mt-1">
            Awaiting 2-day manager or Partner review
          </p>
        </div>

        {/* Metric 2: People on Leave Today */}
        <div className="p-6 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/20 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase font-bold">
              PEOPLE ON LEAVE TODAY
            </span>
            <div className="w-8 h-8 rounded-lg bg-bg border border-line text-ink flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            {mockLeaveStats.onLeaveToday}
          </div>
          <p className="font-sans text-xs text-ink-muted mt-1">
            Active team members away across Chennai & Delhi
          </p>
        </div>

        {/* Metric 3: Annual Leave Taken */}
        <div className="p-6 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/20 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] tracking-widest text-brand-green uppercase font-bold">
              ANNUAL LEAVE TAKEN
            </span>
            <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            {mockLeaveStats.annualLeaveTakenDays} <span className="text-sm font-sans text-ink-muted">days</span>
          </div>
          <p className="font-sans text-xs text-ink-muted mt-1">
            Recorded in central ledger for 2026 calendar year
          </p>
        </div>

        {/* Metric 4: Sick Leave Taken */}
        <div className="p-6 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/20 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold">
              SICK LEAVE TAKEN
            </span>
            <div className="w-8 h-8 rounded-lg bg-brand-vermillion/10 text-brand-vermillion flex items-center justify-center">
              <HeartPulse className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            {mockLeaveStats.sickLeaveTakenDays} <span className="text-sm font-sans text-ink-muted">days</span>
          </div>
          <p className="font-sans text-xs text-ink-muted mt-1">
            Tracked separately from annual rest entitlement
          </p>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search employee, manager, role, or category..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
          />
        </div>

        {/* Office & Status Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Office Filter */}
          <div className="flex items-center gap-1">
            {(['All', 'Chennai', 'Delhi'] as const).map((off) => (
              <button
                key={off}
                type="button"
                onClick={() => setOfficeFilter(off)}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-colors ${
                  officeFilter === off
                    ? 'bg-ink text-bg font-medium'
                    : 'bg-bg text-ink-muted hover:text-ink border border-line'
                }`}
              >
                {off}
              </button>
            ))}
          </div>

          <span className="text-line">|</span>

          {/* Status Filter */}
          <div className="flex items-center gap-1">
            {(['All', 'Pending', 'Approved', 'Declined'] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-colors ${
                  statusFilter === status
                    ? 'bg-ink text-bg font-medium'
                    : 'bg-bg text-ink-muted hover:text-ink border border-line'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Leave Records Table (Section 27 Exact Schema) */}
      <div className="rounded-3xl border border-line bg-surface overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-bg/80 border-b border-line font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Employee</th>
                <th className="py-3.5 px-4 font-semibold">Office</th>
                <th className="py-3.5 px-4 font-semibold">Leave Type</th>
                <th className="py-3.5 px-4 font-semibold">Dates</th>
                <th className="py-3.5 px-4 font-semibold">Days</th>
                <th className="py-3.5 px-4 font-semibold">Manager</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-ink-muted font-sans">
                    No sample leave records found matching your query.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((item) => {
                  const isExpanded = selectedRecord?.id === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <tr className="hover:bg-bg/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-sans font-bold text-ink">{item.employeeName}</div>
                          <div className="text-[11px] text-ink-muted">{item.role}</div>
                        </td>
                        <td className="py-4 px-4 font-mono text-[11px] text-ink-muted">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-ink-faint" />
                            {item.location}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-sans text-ink">
                          <span className="px-2 py-0.5 rounded-md bg-bg border border-line text-[11px]">
                            {item.leaveType}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-mono text-[11px] text-ink">
                          {item.startDate} → {item.endDate}
                        </td>
                        <td className="py-4 px-4 font-mono font-bold text-ink">
                          {item.numberOfDays} {item.numberOfDays === 1 ? 'day' : 'days'}
                        </td>
                        <td className="py-4 px-4 font-sans text-ink-muted">
                          {item.manager}
                        </td>
                        <td className="py-4 px-6">{getStatusBadge(item.status)}</td>
                        <td className="py-4 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedRecord(isExpanded ? null : item)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-line text-[11px] font-mono text-ink-muted hover:text-ink hover:bg-bg transition-colors"
                          >
                            <span>{isExpanded ? 'Hide' : 'Inspect'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>
                        </td>
                      </tr>

                      {/* Expandable row with reason, handover, and medical certificate status */}
                      {isExpanded && (
                        <tr className="bg-bg/70 animate-in fade-in duration-200">
                          <td colSpan={8} className="py-4 px-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                              <div className="p-4 rounded-xl bg-surface border border-line">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                                  Request Context & Reason
                                </span>
                                <p className="text-ink leading-relaxed">{item.reason}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-surface border border-line">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                                  Coverage & Handover Note
                                </span>
                                <p className="text-ink leading-relaxed">{item.handover}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-surface border border-line space-y-2">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                                  Policy Compliance Checks
                                </span>
                                <div className="text-[11px] text-ink-muted space-y-1">
                                  <div>Medical Cert: {item.medicalCertRequired ? (item.medicalCertUploaded ? 'Uploaded (Verified)' : 'Required (Pending)') : 'Not Required'}</div>
                                  <div>Peak Period: {item.isPeakPeriod ? 'Yes (Requires special manager review)' : 'No conflict'}</div>
                                  <div>2-Day SLA: Responded within SLA</div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Prototype Footer Disclaimer */}
        <div className="p-4 bg-bg border-t border-line text-[11px] font-mono text-ink-muted flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span>Fictional sample datasets generated strictly for UI testing & Partners Office review.</span>
          </span>
          <span>Showing {filteredRecords.length} of {mockLeaveRecords.length} records</span>
        </div>
      </div>
    </div>
  );
};
