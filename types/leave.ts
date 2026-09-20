export type LeaveType = 'Annual Leave' | 'Sick Leave' | 'Comp-off' | 'Unpaid Leave';

export type LeaveStatus = 'Pending' | 'Approved' | 'Declined';

export type OfficeLocation = 'Chennai' | 'Delhi';

export type UserRole = 'employee' | 'manager' | 'partners_office' | 'partner';

export interface LeaveRequestData {
  employeeName: string;
  employeeEmail: string;
  office?: OfficeLocation;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  isHalfDay?: boolean;
  halfDayPeriod?: 'morning' | 'afternoon';
  numberOfDays: number;
  reason: string;
  handover: string;
  manager: string;
  submittedAt: string;
  status: LeaveStatus;
}

export interface LeaveOverviewRecord {
  id: string;
  employeeName: string;
  employeeEmail: string;
  role: string;
  location: OfficeLocation;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  numberOfDays: number;
  reason: string;
  handover: string;
  manager: string;
  submittedAt: string;
  status: LeaveStatus;
  medicalCertRequired?: boolean;
  medicalCertUploaded?: boolean;
  isPeakPeriod?: boolean;
}

export interface LeaveStatsSummary {
  pendingCount: number;
  onLeaveToday: number;
  annualLeaveTakenDays: number;
  sickLeaveTakenDays: number;
}

export interface PublicHoliday {
  date: string;
  name: string;
  office: 'Chennai' | 'Delhi' | 'Both';
  dayOfWeek: string;
}

export interface EmployeeBalance {
  annualTotal: number;
  annualTaken: number;
  annualRemaining: number;
  annualCarriedOver: number;
  carryOverExpiry: string;
  sickTotal: number;
  sickTaken: number;
  sickRemaining: number;
  compOffAvailable: number;
  compOffExpiryDays: number;
}
