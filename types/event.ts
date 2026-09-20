export type ConnectionTo8i =
  | '8i Portfolio Founder'
  | 'Origami'
  | 'External Founder'
  | 'Other';

export type StartupStage = 'Pre-seed' | 'Seed' | 'Series A' | 'Other';

export interface ApplicationFormData {
  connectionTo8i: ConnectionTo8i | '';
  name: string;
  email: string;
  company: string;
  stage: StartupStage | '';
  stageOther?: string;
  sector: string;
  liveProblem: string;
  offerToCommunity: string;
}

export interface SubmittedApplication extends ApplicationFormData {
  submittedAt: string;
  status: 'Prototype Captured';
}
