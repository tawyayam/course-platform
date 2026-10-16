import { levelMessages, type StudentLevel } from "@/data/level-messages";
import { formatArabicNumber } from "@/lib/format";

/**
 * Maps a student percentile (0-100) to a level (1-5) per Appendix A:
 * Level 1: 0–19
 * Level 2: 20–39
 * Level 3: 40–59
 * Level 4: 60–79
 * Level 5: 80–100
 */
export function getLevel(percentile: number): StudentLevel {
  if (percentile < 20) return 1;
  if (percentile < 40) return 2;
  if (percentile < 60) return 3;
  if (percentile < 80) return 4;
  return 5;
}

/**
 * Returns the instructor message for a given student percentile.
 * Deterministically selects variant = percentile % 2 (index 0 or 1).
 * Replaces `{percent}` with the localized Arabic-Indic number.
 */
export function getLevelMessage(percentile: number): string {
  const level = getLevel(percentile);
  const variantIndex = (percentile % 2) as 0 | 1;
  const rawTemplate = levelMessages[level][variantIndex];
  const formattedPercent = formatArabicNumber(percentile);

  return rawTemplate.replace("{percent}", formattedPercent);
}
