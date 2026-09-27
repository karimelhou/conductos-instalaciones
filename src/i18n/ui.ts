import type { Lang } from './routes';

/** Every string in both languages. A missing one is a compile error. */
export interface UiStrings {
  navLabel: string;
  navHome: string;
  skipToContent: string;
  langSwitchLabel: string;
  otherLangName: string;
  callCta: string;
  callAria: string;
  whatsappCta: string;
  whatsappAria: string;
  emailCta: string;
  quoteCta: string;
  breadcrumbAria: string;
  breadcrumbHome: string;
  figAbbrev: string;
  servicesHeading: string;
  otherServices: string;
  readMore: string;
  areaHeading: string;
  areaLead: string;
  footerServices: string;
  footerContact: string;
  footerLegalLink: string;
  footerRights: string;
  footerTagline: string;
  phoneLabel: string;
  phone2Label: string;
  emailLabel: string;
  addressLabel: string;
  hoursLabel: string;
  hoursWeekdays: string;
  hoursSaturday: string;
  hoursSunday: string;
  notFoundTitle: string;
  notFoundBody: string;
  notFoundCta: string;
  ctaBandHeading: string;
  ctaBandBody: string;
  specHeading: string;
  faqHeading: string;
  processHeading: string;
}

export const UI: Record<Lang, UiStrings> = {
  es: {
    navLabel: 'Navegación principal',
    navHome: 'Inicio',
    skipToContent: 'Saltar al contenido',
    langSwitchLabel: 'Cambiar idioma',
    otherLangName: 'English',
    callCta: 'Llamar',
    callAria: 'Llamar por teléfono al',
    whatsappCta: 'WhatsApp',
    whatsappAria: 'Escribir por WhatsApp al',
    emailCta: 'Enviar un correo',
    quoteCta: 'Pedir presupuesto',
    breadcrumbAria: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    figAbbrev: 'FIG.',
    servicesHeading: 'Qué hacemos',
    otherServices: 'Otros servicios',
    readMore: 'Ver el servicio',
    areaHeading: 'Dónde trabajamos',
    areaLead:
      'Trabajamos en Madrid capital y en toda la Comunidad de Madrid. Si tu local está en otro municipio, pregúntanos: lo habitual es que lleguemos.',
    footerServices: 'Servicios',
    footerContact: 'Contacto',
    footerLegalLink: 'Aviso legal y privacidad',
    footerRights: 'Todos los derechos reservados.',
    footerTagline:
      'Fabricación e instalación de conductos de ventilación, extracción de humos de cocina y climatización en Madrid.',
    phoneLabel: 'Teléfono',
    phone2Label: 'Segundo teléfono',
    emailLabel: 'Correo',
    addressLabel: 'Taller',
    hoursLabel: 'Horario',
    hoursWeekdays: 'Lunes a viernes',
    hoursSaturday: 'Sábados',
    hoursSunday: 'Domingos, cerrado',
    notFoundTitle: 'Esta página no existe',
    notFoundBody:
      'El enlace que has seguido no lleva a ninguna parte. Puedes volver al inicio o llamarnos directamente.',
    notFoundCta: 'Volver al inicio',
    ctaBandHeading: '¿Necesitas presupuesto?',
    ctaBandBody:
      'Cuéntanos qué local tienes y qué necesitas. Vamos a verlo, tomamos medidas y te pasamos un presupuesto cerrado y sin compromiso.',
    specHeading: 'Ficha técnica',
    faqHeading: 'Preguntas frecuentes',
    processHeading: 'Cómo trabajamos',
  },
  en: {
    navLabel: 'Main navigation',
    navHome: 'Home',
    skipToContent: 'Skip to content',
    langSwitchLabel: 'Change language',
    otherLangName: 'Español',
    callCta: 'Call',
    callAria: 'Call us on',
    whatsappCta: 'WhatsApp',
    whatsappAria: 'Message us on WhatsApp at',
    emailCta: 'Send an email',
    quoteCta: 'Request a quote',
    breadcrumbAria: 'Breadcrumb',
    breadcrumbHome: 'Home',
    figAbbrev: 'FIG.',
    servicesHeading: 'What we do',
    otherServices: 'Other services',
    readMore: 'View this service',
    areaHeading: 'Where we work',
    areaLead:
      'We work in Madrid and across the whole Comunidad de Madrid. If your premises are in another municipality, ask us — we usually get there.',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerLegalLink: 'Legal notice and privacy',
    footerRights: 'All rights reserved.',
    footerTagline:
      'Ventilation ductwork, commercial kitchen extraction and air conditioning, fabricated and installed in Madrid.',
    phoneLabel: 'Phone',
    phone2Label: 'Second phone',
    emailLabel: 'Email',
    addressLabel: 'Workshop',
    hoursLabel: 'Opening hours',
    hoursWeekdays: 'Monday to Friday',
    hoursSaturday: 'Saturdays',
    hoursSunday: 'Closed on Sundays',
    notFoundTitle: 'This page does not exist',
    notFoundBody:
      'The link you followed does not lead anywhere. You can go back to the home page or call us directly.',
    notFoundCta: 'Back to the home page',
    ctaBandHeading: 'Need a quote?',
    ctaBandBody:
      'Tell us about your premises and what you need. We come and measure up, then send you a fixed quote with no obligation.',
    specHeading: 'Technical data',
    faqHeading: 'Frequently asked questions',
    processHeading: 'How we work',
  },
};
