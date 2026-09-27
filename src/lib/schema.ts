import { BUSINESS, SERVICE_AREAS, SITE_URL, hasAddress } from '../config/site';
import { type Lang, type PageKey, urlFor } from '../i18n/routes';

export const ORG_ID = `${SITE_URL}/#empresa`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The business node.
 *
 * Typed HVACBusiness WITH a real PostalAddress once the address is supplied;
 * plain Organization until then. Google's Local Business rich-result spec
 * requires both name AND address, so emitting LocalBusiness without one would
 * produce a "missing field address" error for no benefit. Organization has no
 * required properties and stays clean. What we never do is fabricate an
 * addressLocality to silence the validator while the page itself shows nothing.
 */
export function businessNode(lang: Lang) {
  const withAddress = hasAddress();
  const node: Record<string, unknown> = {
    '@type': withAddress ? 'HVACBusiness' : 'Organization',
    '@id': ORG_ID, // byte-identical across locales so Google merges the entity
    name: BUSINESS.name,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: [BUSINESS.phone.tel, BUSINESS.phone2.tel],
    image: `${SITE_URL}/og/home-es.png`,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      lang === 'es'
        ? 'Fabricación e instalación de conductos de ventilación, extracción de humos de cocina y climatización en Madrid. Taller propio de chapa.'
        : 'Ventilation ductwork, commercial kitchen extraction and air conditioning, fabricated and installed in Madrid. Our own sheet metal workshop.',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
      ...SERVICE_AREAS.map((name) => ({
        '@type': 'City',
        name,
      })),
    ],
    knowsLanguage: ['es', 'en'],
  };

  if (withAddress) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      postalCode: BUSINESS.address.postalCode,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    };
    node.openingHoursSpecification = [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: BUSINESS.hours.weekdays.open,
        closes: BUSINESS.hours.weekdays.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: BUSINESS.hours.saturday.open,
        closes: BUSINESS.hours.saturday.close,
      },
    ];
  }
  if (BUSINESS.foundedYear > 0) node.foundingDate = String(BUSINESS.foundedYear);
  if (BUSINESS.social.length > 0) node.sameAs = BUSINESS.social;

  return node;
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { '@id': ORG_ID },
    inLanguage: lang === 'es' ? 'es-ES' : 'en-GB',
  };
}

export interface ServiceInput {
  name: string;
  description: string;
  serviceType: string;
  offers: string[];
}

export function serviceNode(key: PageKey, lang: Lang, s: ServiceInput) {
  return {
    '@type': 'Service',
    '@id': `${urlFor(key, lang)}#servicio`,
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    url: urlFor(key, lang),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: s.name,
      itemListElement: s.offers.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o },
      })),
    },
  };
}

export interface Crumb {
  name: string;
  url: string;
}

/** Fed by the SAME array that Breadcrumbs.astro renders, so they cannot diverge. */
export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Fed by the SAME array that Faq.astro renders as <details>. */
export function faqNode(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function graph(nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}

/**
 * JSON.stringify does not escape "<". One FAQ answer containing "</script>"
 * would silently break the page, so every graph goes through this.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
