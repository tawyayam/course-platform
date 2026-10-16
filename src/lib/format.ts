/**
 * Formats an ISO date string into a consistent, timezone-safe format: "Oct 10, 2021".
 * Uses UTC to avoid timezone drift across different server/client environments.
 */
export function formatCommentDate(dateISO: string): string {
  const date = new Date(dateISO);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/**
 * Formats a number with Arabic-Indic digits (e.g. 60 -> "٦٠") using ar-EG locale.
 */
export function formatArabicNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}
