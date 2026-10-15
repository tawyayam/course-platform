export type ClassValue = string | number | boolean | undefined | null;

/**
 * Combines CSS class names into a single string, filtering out falsy values.
 */
export function cx(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
