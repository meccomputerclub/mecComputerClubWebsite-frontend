import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalUrl(url: string): boolean {
  // Check if URL starts with http/https and is not localhost:3000
  if (!/^https?:\/\//.test(url)) {
    return false;
  }

  try {
    const urlObj = new URL(url);
    return urlObj.hostname !== "localhost" || urlObj.port !== "3000";
  } catch {
    // If URL parsing fails, treat as external
    return true;
  }
}
