import { type ClassValue, clsx } from "clsx";

/**
 * Merges Tailwind class names safely.
 * Requires: npm install clsx
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats an ISO date string into a readable Spanish date.
 */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Truncates a string to the specified length and appends "...".
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
