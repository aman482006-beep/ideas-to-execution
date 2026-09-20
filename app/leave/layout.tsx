import React from 'react';
import type { Metadata } from 'next';
import { LeaveSubnav } from '@/components/leave/LeaveSubnav';

export const metadata: Metadata = {
  title: 'Leave Hub — Meridian & 8i Ventures',
  description: 'Everything you need to understand, plan, and request leave across Mumbai and Bangalore.',
};

export default function LeaveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-bg">
      <LeaveSubnav />
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
