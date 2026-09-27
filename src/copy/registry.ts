/**
 * The only import surface for page copy. Importing this file runs the ES/EN
 * parity walk at module scope, so a structural drift between the two languages
 * fails the build rather than silently producing a shorter English page.
 */
import type { PageKey } from '../i18n/routes';
import { assertParity } from './assert-parity';
import type { Bi, ContactCopy, HomeCopy, LegalCopy, ServicePageCopy } from './types';

import { home } from './home';
import { ventilacion } from './ventilacion';
import { humos } from './humos';
import { clima } from './clima';
import { taller } from './taller';
import { contacto } from './contacto';
import { legal } from './legal';

export const COPY = {
  home,
  ventilacion,
  humos,
  clima,
  taller,
  contacto,
  legal,
} satisfies Record<PageKey, Bi<{ navLabel: string; cardTitle: string; cardBody: string }>>;

assertParity(COPY as unknown as Record<string, Bi<unknown>>);

export type { HomeCopy, ServicePageCopy, ContactCopy, LegalCopy };
export { home, ventilacion, humos, clima, taller, contacto, legal };
