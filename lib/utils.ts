import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`;
}
