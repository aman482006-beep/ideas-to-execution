export interface ProRatingExample {
  joiningDate: string;
  monthsCounted: number;
  annualLeaveDays: string;
}

export interface NoticeRequirement {
  lengthOfLeave: string;
  minimumNotice: string;
  example: string;
}

export interface RoleResponsibility {
  role: string;
  title: string;
  responsibilities: string[];
}

export const leavePolicyMeta = {
  organization: 'Meridian Capital',
  title: 'Leave Policy',
  subtitle: 'How much leave you have, how to ask for it, and where it gets recorded.',
  appliesTo: 'Everyone at Meridian, in both the Chennai and Delhi offices',
  teamContext: 'Meridian has grown from six people to twenty-six across Chennai and Delhi.',
  effectiveDate: '1 October 2026 (Version 1.0)',
  owner: 'Partners Office',
  reviewSchedule: 'Every December',
  questionsContact: 'Partners Office or reporting manager',
};

export const policySummaryCards = [
  {
    category: 'ANNUAL LEAVE',
    headline: '21 working days per calendar year',
    detail: 'On top of official public holidays. Entitlement, not a performance target.',
    tag: 'Jan 1 – Dec 31',
    badgeColor: 'brand-green',
  },
  {
    category: 'SICK LEAVE',
    headline: '10 working days per calendar year',
    detail: 'Fully separate from annual leave. Available in full from your first working day.',
    tag: 'Day 1 Full Access',
    badgeColor: 'brand-vermillion',
  },
  {
    category: 'MID-YEAR JOINING',
    headline: 'Pro-rated by start date',
    detail: 'Annual leave = 21 × (months remaining ÷ 12), rounded up to the nearest half day. Sick leave available in full.',
    tag: 'Formula Based',
    badgeColor: 'ink',
  },
  {
    category: 'PLANNED NOTICE',
    headline: '2 days / 2 weeks / 4 weeks',
    detail: '1–2 days leave: 2 working days notice. 3–5 days leave: 2 weeks notice. 6+ days leave: 4 weeks notice.',
    tag: 'Graduated Notice',
    badgeColor: 'brand-green',
  },
  {
    category: 'MEDICAL CERTIFICATE',
    headline: 'From 3rd consecutive day',
    detail: 'Not required for 1 or 2 sick days. Upload to leave tool within 3 working days of returning.',
    tag: '3+ Days Only',
    badgeColor: 'brand-vermillion',
  },
  {
    category: 'WHERE RECORDED',
    headline: 'The Meridian leave tool',
    detail: 'Telling a manager/Partner or posting in WhatsApp does NOT count as submitting leave.',
    tag: 'One Source of Truth',
    badgeColor: 'brand-green',
  },
];

export const proRatingTableData: ProRatingExample[] = [
  { joiningDate: '1–15 January', monthsCounted: 12, annualLeaveDays: '21 days' },
  { joiningDate: '1 March', monthsCounted: 10, annualLeaveDays: '17.5 days' },
  { joiningDate: '20 June', monthsCounted: 6, annualLeaveDays: '10.5 days' },
  { joiningDate: '10 October', monthsCounted: 3, annualLeaveDays: '5.5 days' },
];

export const noticeRequirementsTable: NoticeRequirement[] = [
  {
    lengthOfLeave: '1–2 working days',
    minimumNotice: '2 working days’ notice',
    example: 'Taking Friday off? Apply by Wednesday morning.',
  },
  {
    lengthOfLeave: '3–5 working days',
    minimumNotice: '2 weeks’ notice',
    example: 'A week away starting on the 19th? Apply by the 5th.',
  },
  {
    lengthOfLeave: '6+ working days',
    minimumNotice: '4 weeks’ notice',
    example: 'A 9-day international trip? Apply at least 4 weeks before departure.',
  },
];

export const peakPeriodsInfo = {
  title: 'Peak Operational Periods',
  description: 'Certain high-intensity periods require coordinated planning so client and fund deliverables are never compromised.',
  examples: [
    'Major Fund Closes & LP capital calls',
    'Investment Committee (IC) milestone review weeks',
    'Quarter-end financial and LP statutory reporting',
  ],
  rules: [
    'Partners Office publishes these designated peak periods at the beginning of each quarter.',
    'If your planned leave touches one of these periods, speak with your manager before booking non-refundable travel.',
    'Leave may be refused or shifted based on team coverage. If so, your manager must explain the reason and propose the nearest applicable alternative dates.',
    'Peak periods are NOT automatic black-out dates; they require collaborative, advance planning.',
  ],
};

export const approvalWorkflowSteps = [
  {
    step: '01',
    title: 'Employee Submits Request',
    actor: 'Employee',
    description: 'Submits formal dates, leave category, and coverage handover note in the Meridian leave tool.',
  },
  {
    step: '02',
    title: 'Reporting Manager Reviews',
    actor: 'Reporting Manager',
    description: 'Evaluates sprint deliverables, team presence across Chennai/Delhi, and coverage viability.',
  },
  {
    step: '03',
    title: 'Decision Within 2 Working Days',
    actor: 'Manager / Partner',
    description: 'Manager approves or declines with clear written feedback within 2 working days.',
  },
  {
    step: '04',
    title: 'Auto-Escalation If Unanswered',
    actor: 'Partners Office',
    description: 'If no response occurs within 2 working days, request escalates automatically to either Partner.',
  },
  {
    step: '05',
    title: 'Status & Balances Updated',
    actor: 'System Ledger',
    description: 'Employee notified instantly; team leave calendar and balance ledger reflect approved absence.',
  },
];

export const responsibilityMatrix: RoleResponsibility[] = [
  {
    role: 'EVERYONE',
    title: 'All Employees & Associates',
    responsibilities: [
      'Know your available leave balance before planning time off.',
      'Apply through the Meridian leave tool with the required advance notice.',
      'Plan a thorough coverage handover with designated teammates for any leave of 3 days or more.',
      'Upload medical certificates within 3 working days of returning if ill for 3+ consecutive days.',
    ],
  },
  {
    role: 'MANAGERS',
    title: 'Reporting Managers & Leads',
    responsibilities: [
      'Respond to all submitted leave requests within 2 working days.',
      'Provide clear, written business explanations if a request must be declined.',
      'Proactively offer nearest alternative dates if peak periods or team overlaps require rescheduling.',
      'Encourage team members to take their full annual entitlement and recharge.',
    ],
  },
  {
    role: 'PARTNERS OFFICE',
    title: 'Operations & Governance',
    responsibilities: [
      'Maintain and administer the central Meridian leave tool.',
      'Publish Chennai and Delhi official public holiday lists every December.',
      'Publish quarterly peak operational periods at the start of each quarter.',
      'Send biannual leave balance summaries to every employee and manager in July and October.',
      'Answer questions and correct ledger entries when needed.',
    ],
  },
  {
    role: 'PARTNERS',
    title: 'Firm Partners',
    responsibilities: [
      'Approve requests for extra or unpaid leave beyond the standard 21-day entitlement.',
      'Review requests from team members who do not yet have a designated reporting manager.',
      'Resolve requests escalated after 2 working days without manager response.',
      'Maintain ultimate ownership of the Meridian Leave Policy.',
    ],
  },
];

export const rolloutTimeline2026 = [
  {
    date: '1 October 2026',
    title: 'Policy Version 1.0 Effective',
    description: 'Official Meridian Capital Leave Policy takes effect across Chennai and Delhi offices.',
  },
  {
    date: '15 October 2026',
    title: 'Historical Leave Data Entered',
    description: 'Partners Office enters everyone’s 2026 leave taken to date using manager notes and WhatsApp history.',
  },
  {
    date: '31 October 2026',
    title: 'Employee Ledger Confirmation',
    description: 'All 26 team members review their recorded 2026 balances and confirm their ledger in the tool.',
  },
  {
    date: 'December 2026',
    title: 'Annual Review & 2027 Calendars',
    description: 'Partners Office reviews policy feedback and publishes 2027 Chennai & Delhi public holiday lists.',
  },
];
