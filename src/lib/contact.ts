import { BUSINESS } from '../config/site';

/** tel: href for the primary number. */
export const telHref = (): string => `tel:${BUSINESS.phone.tel}`;
/** tel: href for the secondary number. */
export const telHref2 = (): string => `tel:${BUSINESS.phone2.tel}`;
/** mailto: href. */
export const mailHref = (subject?: string): string =>
  `mailto:${BUSINESS.email}` + (subject ? `?subject=${encodeURIComponent(subject)}` : '');

/**
 * wa.me click-to-chat. Digits only — no +, no 00, no spaces. A wa.me link to a
 * malformed number silently shows an "invalid phone number" page and kills the
 * lead, so the number is built from one constant and encoded exactly once.
 */
export const waHref = (message?: string): string => {
  const base = `https://wa.me/${BUSINESS.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
