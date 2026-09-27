import type { PhotoId } from '../lib/photos';

/** Spanish and English side by side in one file. A forgotten English field is
 *  a compile error, not a blank space on the page. */
export interface Bi<T> {
  es: T;
  en: T;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface SubBlock {
  h3: string;
  p: string;
}

export interface Block {
  h2: string;
  /** Paragraphs. */
  p?: string[];
  bullets?: string[];
  subs?: SubBlock[];
  /** Photographs to show under this block. */
  photos?: readonly PhotoId[];
  /** Which inline diagram, if any, belongs to this block. */
  diagram?: 'extraccion' | 'ventilacion' | 'seccion' | 'plegado';
}

export interface SpecTable {
  caption: string;
  head: [string, string];
  rows: readonly (readonly [string, string])[];
}

/** Every page shares this head. */
export interface PageHead {
  /** Text used in the header nav and the footer. */
  navLabel: string;
  /** <title>. Aim for 60 characters or fewer, primary keyword first. */
  title: string;
  /** <meta name="description">. 140-160 characters, ends in a call to action. */
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** Used by ServiceCards on other pages. */
  cardTitle: string;
  cardBody: string;
  /** Prefilled WhatsApp text for this page. */
  waMessage: string;
}

export interface ServiceSchema {
  name: string;
  description: string;
  serviceType: string;
  offers: string[];
}

export interface ServicePageCopy extends PageHead {
  blocks: Block[];
  spec: SpecTable;
  stepsHeading: string;
  steps: Step[];
  faq: Faq[];
  ctaHeading: string;
  ctaBody: string;
  schema: ServiceSchema;
}

export interface HomeCopy extends PageHead {
  blocks: Block[];
  spec: SpecTable;
  stepsHeading: string;
  steps: Step[];
  faq: Faq[];
  ctaHeading: string;
  ctaBody: string;
}

export interface ContactCopy extends PageHead {
  intro: string[];
  whyHeading: string;
  why: string[];
  hoursHeading: string;
  areaHeading: string;
}

export interface LegalSection {
  h2: string;
  p: string[];
  bullets?: string[];
}

export interface LegalCopy extends PageHead {
  sections: LegalSection[];
  /** Shown in place of the identity block until site.ts is filled in. */
  pendingNotice: string;
}
