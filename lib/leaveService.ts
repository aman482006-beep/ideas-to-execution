import { LeaveRequestData, OfficeLocation } from '@/types/leave';
import { publicHolidaysChennai, publicHolidaysDelhi } from '@/data/leaveMockData';

export interface SubmitLeaveResponse {
  success: boolean;
  message: string;
  data: LeaveRequestData;
  referenceId: string;
}

export interface NoticeCheckResult {
  requiredNotice: string;
  requiredNoticeDays: number;
  actualNoticeDays: number;
  isCompliant: boolean;
  warningMessage?: string;
}

/**
 * Calculates working days between two dates (inclusive) for a specific office.
 * Automatically excludes Saturdays, Sundays, and official public holidays for that office.
 */
export function calculateWorkingDays(
  startDateStr: string,
  endDateStr: string,
  office: OfficeLocation = 'Delhi',
  isHalfDay: boolean = false
): number {
  if (!startDateStr || !endDateStr) return 0;

  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
    return 0;
  }

  // Get office holiday dates
  const holidayList = office === 'Chennai' ? publicHolidaysChennai : publicHolidaysDelhi;
  const holidayDateStrings = new Set(holidayList.map((h) => h.date));

  let count = 0;
  const current = new Date(start);

  while (current <= end) {
    const dayOfWeek = current.getDay();
    // 0 = Sunday, 6 = Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isoDateString = current.toISOString().split('T')[0];
    const isHoliday = holidayDateStrings.has(isoDateString);

    if (!isWeekend && !isHoliday) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }

  if (isHalfDay && count === 1) {
    return 0.5;
  }

  return count;
}

/**
 * Evaluates whether a planned annual leave request meets the graduated notice requirements:
 * - 1–2 working days: 2 working days' notice
 * - 3–5 working days: 2 weeks' notice (14 calendar days)
 * - 6+ working days: 4 weeks' notice (28 calendar days)
 */
export function evaluateNoticeRequirement(
  workingDays: number,
  startDateStr: string
): NoticeCheckResult {
  if (!startDateStr || workingDays <= 0) {
    return {
      requiredNotice: 'Standard notice',
      requiredNoticeDays: 2,
      actualNoticeDays: 0,
      isCompliant: true,
    };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(startDateStr);
  start.setHours(0, 0, 0, 0);

  const diffTime = start.getTime() - today.getTime();
  const calendarDaysNotice = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  if (workingDays <= 2) {
    const isCompliant = calendarDaysNotice >= 2;
    return {
      requiredNotice: '2 working days’ notice',
      requiredNoticeDays: 2,
      actualNoticeDays: calendarDaysNotice,
      isCompliant,
      warningMessage: !isCompliant
        ? 'Policy guideline: 1–2 days of planned leave requires 2 working days notice. Please provide context in your reason for manager agreement.'
        : undefined,
    };
  } else if (workingDays <= 5) {
    const isCompliant = calendarDaysNotice >= 14;
    return {
      requiredNotice: '2 weeks’ notice (14 days)',
      requiredNoticeDays: 14,
      actualNoticeDays: calendarDaysNotice,
      isCompliant,
      warningMessage: !isCompliant
        ? 'Policy guideline: 3–5 days of planned leave normally requires 2 weeks advance notice. Ensure you discuss coverage with your manager.'
        : undefined,
    };
  } else {
    const isCompliant = calendarDaysNotice >= 28;
    return {
      requiredNotice: '4 weeks’ notice (28 days)',
      requiredNoticeDays: 28,
      actualNoticeDays: calendarDaysNotice,
      isCompliant,
      warningMessage: !isCompliant
        ? 'Policy guideline: 6+ days of leave normally requires 4 weeks advance notice to coordinate project and sprint coverage.'
        : undefined,
    };
  }
}

/**
 * Calculates pro-rated annual leave for a new joiner based on joining date:
 * Formula: Annual leave = 21 * (months remaining / 12), rounded UP to nearest half day.
 * If joining on or before 15th, that month is counted.
 */
export function calculateProRatedAnnualLeave(joiningDateStr: string): {
  monthsCounted: number;
  allocatedDays: number;
} {
  const date = new Date(joiningDateStr);
  if (isNaN(date.getTime())) return { monthsCounted: 12, allocatedDays: 21.0 };

  const day = date.getDate();
  const month = date.getMonth(); // 0 to 11

  // If joining on or before 15th, current month is counted
  const monthsRemaining = day <= 15 ? 12 - month : 11 - month;
  const rawDays = 21 * (monthsRemaining / 12);

  // Round UP to nearest half day
  const roundedDays = Math.ceil(rawDays * 2) / 2;

  return {
    monthsCounted: Math.max(0, Math.min(12, monthsRemaining)),
    allocatedDays: Math.max(0, Math.min(21, roundedDays)),
  };
}

/**
 * Future submission handler for the Meridian leave request intake.
 * Currently simulates a successful frontend prototype submission.
 *
 * // TODO:
 * // Connect leave request submission to the firm's central
 * // leave-tracking database / Google Sheets / Supabase backend.
 */
export async function submitLeaveRequest(
  requestInput: Omit<LeaveRequestData, 'submittedAt' | 'status'>
): Promise<SubmitLeaveResponse> {
  // Realistic client-side prototype latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  const payload: LeaveRequestData = {
    ...requestInput,
    submittedAt: new Date().toISOString(),
    status: 'Pending',
  };

  const randomRef = 'MERIDIAN-LR-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('[Meridian LeaveHub Prototype] Request captured:', payload);
  }

  return {
    success: true,
    message: 'The leave tracker will be connected to the firm’s central data source in the next implementation phase.',
    data: payload,
    referenceId: randomRef,
  };
}
