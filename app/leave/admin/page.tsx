'use client';

import React from 'react';
import { LeaveAdminOverview } from '@/components/leave/LeaveAdminOverview';

export default function LeaveAdminPage() {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-8 max-w-7xl mx-auto">
      <LeaveAdminOverview />
    </div>
  );
}
