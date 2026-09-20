import { ApplicationFormData, SubmittedApplication } from '@/types/event';

export interface SubmitApplicationResponse {
  success: boolean;
  message: string;
  data: SubmittedApplication;
  referenceId: string;
}

/**
 * Simulates event registration submission for the 8i Founders' Day prototype.
 *
 * // TODO:
 * // Connect registration submission to the final event
 * // registration database / Google Sheet / backend.
 */
export async function submitApplication(
  formData: ApplicationFormData
): Promise<SubmitApplicationResponse> {
  // Simulate network roundtrip latency
  await new Promise((resolve) => setTimeout(resolve, 450));

  const payload: SubmittedApplication = {
    ...formData,
    submittedAt: new Date().toISOString(),
    status: 'Prototype Captured',
  };

  const referenceId = 'FD-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('[Founders Day Prototype] Application Captured:', payload);
  }

  return {
    success: true,
    message: 'Prototype only — no application has been submitted to 8i.',
    data: payload,
    referenceId,
  };
}
