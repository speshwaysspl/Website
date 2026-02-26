import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOptimizedImageUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  
  // Check if it's a Cloudinary URL
  if (url.includes('res.cloudinary.com') && url.includes('/upload/')) {
    // If it already has transformations, don't break it, but we assume simple case here
    // or just inject f_auto,q_auto if not present
    if (!url.includes('f_auto') && !url.includes('q_auto')) {
      return url.replace('/upload/', '/upload/f_auto,q_auto/');
    }
  }
  
  return url;
}
