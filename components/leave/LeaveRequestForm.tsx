'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  Mail,
  FileText,
  Shield,
  Send,
  AlertCircle,
  Clock,
  Sparkles,
  Info,
  MapPin,
  CheckCircle2,
  HeartPulse,
} from 'lucide-react';
import { LeaveType, LeaveRequestData, OfficeLocation } from '@/types/leave';
import { leaveManagers } from '@/data/leaveMockData';
import {
  calculateWorkingDays,
  evaluateNoticeRequirement,
  submitLeaveRequest,
  NoticeCheckResult,
} from '@/lib/leaveService';
import { LeaveSuccessCard } from './LeaveSuccessCard';

interface FormState {
  employeeName: string;
  employeeEmail: string;
  office: OfficeLocation;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  isHalfDay: boolean;
  halfDayPeriod: 'morning' | 'afternoon';
  reason: string;
  handover: string;
  manager: string;
  confirmed: boolean;
}

interface FormErrors {
  employeeName?: string;
  employeeEmail?: string;
  startDate?: string;
  endDate?: string;
  manager?: string;
  handover?: string;
  confirmed?: string;
  general?: string;
}

const INITIAL_FORM: FormState = {
  employeeName: '',
  employeeEmail: '',
  office: 'Delhi',
  leaveType: 'Annual Leave',
  startDate: '',
  endDate: '',
  isHalfDay: false,
  halfDayPeriod: 'morning',
  reason: '',
  handover: '',
  manager: 'Rohan Sharma',
  confirmed: false,
};

export const LeaveRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [workingDays, setWorkingDays] = useState<number>(0);
  const [noticeResult, setNoticeResult] = useState<NoticeCheckResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<LeaveRequestData | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string>('');

  // Re-calculate working days excluding weekends & public holidays whenever inputs change
  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const days = calculateWorkingDays(
        formData.startDate,
        formData.endDate,
        formData.office,
        formData.isHalfDay
      );
      setWorkingDays(days);

      if (formData.leaveType === 'Annual Leave') {
        const evaluation = evaluateNoticeRequirement(days, formData.startDate);
        setNoticeResult(evaluation);
      } else {
        setNoticeResult(null);
      }
    } else {
      setWorkingDays(0);
      setNoticeResult(null);
    }
  }, [formData.startDate, formData.endDate, formData.office, formData.isHalfDay, formData.leaveType]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    // Name validation
    if (!formData.employeeName.trim()) {
      errs.employeeName = 'Employee name is required.';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.employeeEmail.trim()) {
      errs.employeeEmail = 'Email address is required.';
    } else if (!emailPattern.test(formData.employeeEmail.trim())) {
      errs.employeeEmail = 'Please provide a valid company email address.';
    }

    // Start Date
    if (!formData.startDate) {
      errs.startDate = 'Start date is required.';
    }

    // End Date
    if (!formData.endDate) {
      errs.endDate = 'End date is required.';
    } else if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end < start) {
        errs.endDate = 'End date cannot be prior to start date.';
      }
    }

    // Handover rule: required for leave of 3 days or more
    if (workingDays >= 3 && !formData.handover.trim()) {
      errs.handover = 'Policy requirement: Leave of 3 days or more requires an agreed handover / coverage note before departure.';
    }

    // Manager
    if (!formData.manager.trim()) {
      errs.manager = 'Please select your reporting manager or a Partner.';
    }

    // Confirmation Checkbox
    if (!formData.confirmed) {
      errs.confirmed = 'You must confirm that the information is accurate and handover has been considered.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await submitLeaveRequest({
        employeeName: formData.employeeName.trim(),
        employeeEmail: formData.employeeEmail.trim(),
        office: formData.office,
        leaveType: formData.leaveType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        isHalfDay: formData.isHalfDay,
        halfDayPeriod: formData.isHalfDay ? formData.halfDayPeriod : undefined,
        numberOfDays: workingDays,
        reason: formData.reason.trim(),
        handover: formData.handover.trim(),
        manager: formData.manager,
      });

      setSubmittedData(response.data);
      setSubmittedRef(response.referenceId);
    } catch {
      setErrors({ general: 'An error occurred during submission simulation. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setSubmittedRef('');
    setFormData(INITIAL_FORM);
    setErrors({});
    setWorkingDays(0);
    setNoticeResult(null);
  };

  if (submittedData) {
    return (
      <LeaveSuccessCard
        data={submittedData}
        referenceId={submittedRef}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs">
      {/* Prototype Status Callout */}
      <div className="mb-8 p-4 rounded-xl bg-surface-card border border-line flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <Info className="w-4 h-4 text-brand-vermillion shrink-0 mt-0.5" />
          <div className="text-xs font-sans text-ink leading-relaxed">
            <span className="font-mono text-[10px] uppercase font-bold text-brand-vermillion tracking-wider block">
              Meridian Leave Tool — Prototype State
            </span>
            Formal leave requests submitted here will be recorded into the firm&apos;s central data source once the backend integration is live.
          </div>
        </div>
        <span className="shrink-0 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-bold">
          FRONTEND ONLY
        </span>
      </div>

      {/* Form Title & Subtitle */}
      <div className="mb-8 pb-6 border-b border-line">
        <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase block mb-2">
          THE ONE SOURCE OF TRUTH
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
          Request Leave
        </h2>
        <p className="font-sans text-xs sm:text-sm text-ink-muted">
          Submit your request so your team can plan ahead. Telling a manager or posting in WhatsApp does not count as submitting leave.
        </p>
      </div>

      {errors.general && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Row 1: Name, Email & Office Location */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="employeeName"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
            >
              Employee Name <span className="text-brand-vermillion">*</span>
            </label>
            <div className="relative">
              <input
                id="employeeName"
                type="text"
                value={formData.employeeName}
                onChange={(e) => {
                  setFormData({ ...formData, employeeName: e.target.value });
                  if (errors.employeeName) setErrors({ ...errors, employeeName: undefined });
                }}
                placeholder="e.g. Aarav Mehta"
                aria-invalid={!!errors.employeeName}
                className={`w-full px-4 py-2.5 rounded-xl border font-sans text-xs text-ink bg-bg transition-colors focus:outline-none ${
                  errors.employeeName ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-ink'
                }`}
              />
              <User className="w-3.5 h-3.5 text-ink-faint absolute right-3.5 top-3 pointer-events-none" />
            </div>
            {errors.employeeName && (
              <p className="mt-1 text-[11px] font-sans text-red-500">{errors.employeeName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="employeeEmail"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
            >
              Employee Email <span className="text-brand-vermillion">*</span>
            </label>
            <div className="relative">
              <input
                id="employeeEmail"
                type="email"
                value={formData.employeeEmail}
                onChange={(e) => {
                  setFormData({ ...formData, employeeEmail: e.target.value });
                  if (errors.employeeEmail) setErrors({ ...errors, employeeEmail: undefined });
                }}
                placeholder="name@meridianvc.com"
                aria-invalid={!!errors.employeeEmail}
                className={`w-full px-4 py-2.5 rounded-xl border font-sans text-xs text-ink bg-bg transition-colors focus:outline-none ${
                  errors.employeeEmail ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-ink'
                }`}
              />
              <Mail className="w-3.5 h-3.5 text-ink-faint absolute right-3.5 top-3 pointer-events-none" />
            </div>
            {errors.employeeEmail && (
              <p className="mt-1 text-[11px] font-sans text-red-500">{errors.employeeEmail}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="office"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
            >
              Office Location <span className="text-brand-vermillion">*</span>
            </label>
            <div className="relative">
              <select
                id="office"
                value={formData.office}
                onChange={(e) => setFormData({ ...formData, office: e.target.value as OfficeLocation })}
                className="w-full px-4 py-2.5 rounded-xl border border-line font-sans text-xs text-ink bg-bg focus:outline-none focus:border-ink cursor-pointer"
              >
                <option value="Delhi">Delhi Office (12 team members)</option>
                <option value="Chennai">Chennai Office (14 team members)</option>
              </select>
              <MapPin className="w-3.5 h-3.5 text-ink-faint absolute right-8 top-3 pointer-events-none" />
            </div>
            <p className="mt-1 text-[10px] font-sans text-ink-muted">
              Applies official {formData.office} public holiday exclusions.
            </p>
          </div>
        </div>

        {/* Row 2: Leave Type & Reviewing Manager */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="leaveType"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
            >
              Leave Category <span className="text-brand-vermillion">*</span>
            </label>
            <select
              id="leaveType"
              value={formData.leaveType}
              onChange={(e) => {
                setFormData({ ...formData, leaveType: e.target.value as LeaveType });
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-line font-sans text-xs text-ink bg-bg focus:outline-none focus:border-ink cursor-pointer"
            >
              <option value="Annual Leave">Annual Leave (21 days annual entitlement)</option>
              <option value="Sick Leave">Sick Leave (10 days separate health quota)</option>
              <option value="Comp-off">Comp-off (Weekend / Holiday replacement)</option>
              <option value="Unpaid Leave">Unpaid Leave (Requires Partner approval)</option>
            </select>

            {/* DYNAMIC LEAVE TYPE NOTICES AS REQUIRED */}
            <div className="mt-2 p-3 rounded-xl bg-bg border border-line text-xs font-sans">
              {formData.leaveType === 'Sick Leave' && (
                <div className="text-brand-vermillion space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Medical Certificate Notice:</span>
                  </div>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    1–2 consecutive days: No certificate required.<br />
                    <strong>From 3rd consecutive day:</strong> Medical certificate required and must be uploaded within 3 working days of return.
                  </p>
                </div>
              )}

              {formData.leaveType === 'Annual Leave' && (
                <div className="text-ink-muted space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <Clock className="w-3.5 h-3.5 text-brand-green" />
                    <span>Notice Guidelines:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    1–2 days: <strong>2 working days’ notice</strong> · 3–5 days: <strong>2 weeks’ notice</strong> · 6+ days: <strong>4 weeks’ notice</strong>.
                  </p>
                </div>
              )}

              {formData.leaveType === 'Comp-off' && (
                <div className="text-ink-muted space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <Clock className="w-3.5 h-3.5 text-brand-green" />
                    <span>Comp-off Rule:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Comp-off must be taken within <strong>60 days</strong> of working on a weekend or public holiday. Agree on the replacement day with your manager.
                  </p>
                </div>
              )}

              {formData.leaveType === 'Unpaid Leave' && (
                <div className="text-ink-muted space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <Shield className="w-3.5 h-3.5 text-brand-vermillion" />
                    <span>Partner Approval Required:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    If an employee needs more than 21 days, it is not a breach of policy. Ask your manager, and either Partner can approve. Additional leave will usually be unpaid.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="manager"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
            >
              Reporting Manager / Partner <span className="text-brand-vermillion">*</span>
            </label>
            <div className="relative">
              <select
                id="manager"
                value={formData.manager}
                onChange={(e) => {
                  setFormData({ ...formData, manager: e.target.value });
                  if (errors.manager) setErrors({ ...errors, manager: undefined });
                }}
                className={`w-full px-4 py-2.5 rounded-xl border font-sans text-xs text-ink bg-bg focus:outline-none cursor-pointer ${
                  errors.manager ? 'border-red-400' : 'border-line focus:border-ink'
                }`}
              >
                {leaveManagers.map((mgr) => (
                  <option key={mgr.id} value={mgr.name}>
                    {mgr.name} — {mgr.role} ({mgr.office})
                  </option>
                ))}
              </select>
              <Shield className="w-3.5 h-3.5 text-ink-faint absolute right-8 top-3 pointer-events-none" />
            </div>
            {errors.manager && (
              <p className="mt-1 text-[11px] font-sans text-red-500">{errors.manager}</p>
            )}
            <p className="mt-2 text-[10px] font-sans text-ink-muted">
              Manager must respond within 2 working days. If no response occurs, requests escalate automatically to Partners.
            </p>
          </div>
        </div>

        {/* Row 3: Dates & Automatic Calculation */}
        <div className="p-5 rounded-2xl bg-bg border border-line space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-green" />
              <span>Leave Window & Automatic Working Days Calculation</span>
            </span>
            {workingDays > 0 && (
              <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-0.5 rounded-full">
                {workingDays} {workingDays === 1 ? 'Working Day' : 'Working Days'}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1"
              >
                Start Date <span className="text-brand-vermillion">*</span>
              </label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => {
                  setFormData({ ...formData, startDate: e.target.value });
                  if (errors.startDate) setErrors({ ...errors, startDate: undefined });
                  if (errors.endDate) setErrors({ ...errors, endDate: undefined });
                }}
                className={`w-full px-4 py-2.5 rounded-xl border font-mono text-xs text-ink bg-surface focus:outline-none ${
                  errors.startDate ? 'border-red-400' : 'border-line focus:border-ink'
                }`}
              />
              {errors.startDate && (
                <p className="mt-1 text-[11px] font-sans text-red-500">{errors.startDate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1"
              >
                End Date <span className="text-brand-vermillion">*</span>
              </label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => {
                  setFormData({ ...formData, endDate: e.target.value });
                  if (errors.endDate) setErrors({ ...errors, endDate: undefined });
                }}
                className={`w-full px-4 py-2.5 rounded-xl border font-mono text-xs text-ink bg-surface focus:outline-none ${
                  errors.endDate ? 'border-red-400' : 'border-line focus:border-ink'
                }`}
              />
              {errors.endDate && (
                <p className="mt-1 text-[11px] font-sans text-red-500">{errors.endDate}</p>
              )}
            </div>
          </div>

          {/* Half Day Option */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-line/60">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isHalfDay}
                onChange={(e) => setFormData({ ...formData, isHalfDay: e.target.checked })}
                className="w-4 h-4 rounded border-line text-brand-green focus:ring-brand-green"
              />
              <span className="font-sans text-xs text-ink">
                Half-day request (0.5 day)
              </span>
            </label>

            {formData.isHalfDay && (
              <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                <span>Period:</span>
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="halfDayPeriod"
                    value="morning"
                    checked={formData.halfDayPeriod === 'morning'}
                    onChange={() => setFormData({ ...formData, halfDayPeriod: 'morning' })}
                  />
                  <span>Morning</span>
                </label>
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="halfDayPeriod"
                    value="afternoon"
                    checked={formData.halfDayPeriod === 'afternoon'}
                    onChange={() => setFormData({ ...formData, halfDayPeriod: 'afternoon' })}
                  />
                  <span>Afternoon</span>
                </label>
              </div>
            )}
          </div>

          {/* Notice Compliance Feedback for Annual Leave */}
          {noticeResult && (
            <div
              className={`p-3 rounded-xl border text-xs font-sans ${
                noticeResult.isCompliant
                  ? 'bg-brand-green/5 border-brand-green/20 text-brand-green'
                  : 'bg-amber-500/10 border-amber-500/20 text-amber-900'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Notice Tier: {noticeResult.requiredNotice}</span>
              </div>
              {noticeResult.warningMessage ? (
                <p className="mt-1 text-[11px] leading-relaxed">
                  {noticeResult.warningMessage}
                </p>
              ) : (
                <p className="mt-1 text-[11px] leading-relaxed">
                  Notice requirement met ({noticeResult.actualNoticeDays} calendar days in advance).
                </p>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between text-[11px] font-sans text-ink-muted gap-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-ink-faint" />
              <span>Excludes weekends & {formData.office} official public holidays automatically.</span>
            </span>
          </div>
        </div>

        {/* Row 4: Reason / Note */}
        <div>
          <label
            htmlFor="reason"
            className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1.5"
          >
            Reason / Context Note
          </label>
          <textarea
            id="reason"
            rows={3}
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            placeholder="Provide context for your absence (e.g. personal rest, family event, medical recovery, or reason if notice requirement cannot be fully met)..."
            className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink resize-y"
          />
        </div>

        {/* Row 5: Handover / Coverage */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="handover"
              className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted"
            >
              Handover & Coverage Plan {workingDays >= 3 && <span className="text-brand-vermillion font-bold">* (Mandatory for ≥ 3 days)</span>}
            </label>
            <span className="font-mono text-[10px] text-ink-muted">Chennai / Delhi team coverage</span>
          </div>
          <textarea
            id="handover"
            rows={3}
            value={formData.handover}
            onChange={(e) => {
              setFormData({ ...formData, handover: e.target.value });
              if (errors.handover) setErrors({ ...errors, handover: undefined });
            }}
            placeholder="For leave of 3 days or more, specify who is covering active deals, LP deliverables, or meetings before leaving..."
            className={`w-full px-4 py-2.5 rounded-xl border font-sans text-xs text-ink bg-bg focus:outline-none resize-y ${
              errors.handover ? 'border-red-400' : 'border-line focus:border-ink'
            }`}
          />
          {errors.handover && (
            <p className="mt-1 text-[11px] font-sans text-red-500">{errors.handover}</p>
          )}
        </div>

        {/* Row 6: Confirmation Checkbox */}
        <div className="pt-2">
          <div className="p-4 rounded-xl bg-bg border border-line">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.confirmed}
                onChange={(e) => {
                  setFormData({ ...formData, confirmed: e.target.checked });
                  if (errors.confirmed) setErrors({ ...errors, confirmed: undefined });
                }}
                className="mt-0.5 w-4 h-4 rounded border-line text-brand-green focus:ring-brand-green cursor-pointer"
              />
              <span className="font-sans text-xs text-ink leading-relaxed">
                I confirm that the information provided is accurate and that I have considered the impact of this leave on my responsibilities.
              </span>
            </label>
          </div>
          {errors.confirmed && (
            <p className="mt-1.5 text-[11px] font-sans text-red-500">{errors.confirmed}</p>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-ink-muted flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-vermillion" />
            <span>Prototype state — no database writes executed.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-xs font-semibold text-bg transition-all ${
              isSubmitting
                ? 'bg-ink/60 cursor-wait'
                : 'bg-ink hover:bg-brand-green hover:shadow-sm'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Validating Request...' : 'Submit Leave Request'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
