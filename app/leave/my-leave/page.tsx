import React from 'react';
import type { Metadata } from 'next';
import { LeaveEmployeeDashboard } from '@/components/leave/LeaveEmployeeDashboard';

export const metadata: Metadata = {
  title: 'My Leave & Balances — Meridian Capital Leave Hub',
  description: 'Track your annual leave, sick leave, comp-off accruals, and Chennai & Delhi official holiday schedules.',
};

export default function MyLeavePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <LeaveEmployeeDashboard />
    </div>
  );
}
