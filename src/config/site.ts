/**
 * ============================================================================
 *  EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA CAMBIAR LOS DATOS DE LA EMPRESA
 *  THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE COMPANY DETAILS
 * ============================================================================
 *
 *  Todo lo que aparece aquí se usa a la vez en: la cabecera, el pie de página,
 *  la página de contacto, el aviso legal y los datos estructurados de Google.
 *  Cambia un dato aquí y cambia en toda la web.
 *
 *  Los campos marcados con  // TODO  están pendientes de que los facilites.
 *  Mientras estén vacíos la web funciona igual: simplemente no muestra esa
 *  información en ningún sitio (nunca deja un hueco en blanco).
 */

/** Dominio definitivo, SIN barra final. Cambiar al contratar el dominio. */
export const SITE_URL = 'https://conductosinstalaciones.es';

export const BUSINESS = {
  /** Nombre comercial, tal y como aparece en el logotipo. */
  name: 'Conductos Instalaciones',
  /** Nombre en mayúsculas para el logotipo de la cabecera. */
  wordmark: { first: 'CONDUCTOS', second: 'INSTALACIONES' },

  /** Teléfono principal. El que aparece en la cabecera y en WhatsApp. */
  phone: { display: '602 12 83 02', tel: '+34602128302', whatsapp: '34602128302' },
  /** Segundo teléfono. Solo llamada, no WhatsApp. */
  phone2: { display: '632 07 39 64', tel: '+34632073964' },

  email: 'instalacionesdeconductosyassin@gmail.com',

  /**
   * TODO — DIRECCIÓN DEL TALLER.
   * Obligatoria por el artículo 10 de la LSSI para cualquier web comercial
   * en España, y es además lo que más ayuda a aparecer en Google Maps.
   * En cuanto la rellenes aparece automáticamente en el pie, en contacto,
   * en el aviso legal y en los datos estructurados.
   *
   * Ejemplo:
   *   street: 'Calle Ejemplo 12, Nave 3',
   *   postalCode: '28914',
   *   locality: 'Leganés',
   *   region: 'Comunidad de Madrid',
   */
  address: {
    street: '',
    postalCode: '',
    locality: '',
    region: 'Comunidad de Madrid',
    country: 'ES',
  },

  /** TODO — Identificación fiscal y legal (obligatorio en el aviso legal). */
  legal: {
    /** Nombre y apellidos si eres autónomo, o denominación social si es S.L. */
    holder: '',
    /** NIF (autónomo) o CIF (sociedad). */
    taxId: '',
    /** Solo si es sociedad: 'Registro Mercantil de Madrid, Tomo … Folio … Hoja …' */
    registry: '',
    /** Nº de empresa instaladora habilitada RITE, si lo tienes. */
    riteNumber: '',
  },

  /** TODO — Año de fundación. Deja 0 si prefieres no indicarlo. */
  foundedYear: 0,

  /** Horario de atención. */
  hours: {
    weekdays: { open: '08:00', close: '18:00' },
    saturday: { open: '09:00', close: '14:00' },
  },

  /** TODO — Perfiles públicos (Google Business, Facebook, Instagram…). */
  social: [] as string[],

  /** Compromiso de respuesta que aparece en la página de contacto. */
  responseHours: 24,
} as const;

/** Municipios donde se trabaja. Alimentan a la vez el texto y el schema. */
export const SERVICE_AREAS = [
  'Madrid',
  'Alcalá de Henares',
  'Alcobendas',
  'Alcorcón',
  'Coslada',
  'Fuenlabrada',
  'Getafe',
  'Leganés',
  'Móstoles',
  'Parla',
  'Pozuelo de Alarcón',
  'Rivas-Vaciamadrid',
  'San Fernando de Henares',
  'San Sebastián de los Reyes',
  'Torrejón de Ardoz',
] as const;

/** ¿Tenemos dirección postal completa? Decide el tipo de datos estructurados. */
export const hasAddress = (): boolean =>
  BUSINESS.address.street.trim() !== '' &&
  BUSINESS.address.locality.trim() !== '' &&
  BUSINESS.address.postalCode.trim() !== '';

/** ¿Tenemos los datos legales mínimos para el aviso legal? */
export const hasLegalIdentity = (): boolean =>
  BUSINESS.legal.holder.trim() !== '' && BUSINESS.legal.taxId.trim() !== '';

/** Dirección en una línea, o cadena vacía si aún no se ha facilitado. */
export const addressOneLine = (): string => {
  if (!hasAddress()) return '';
  const a = BUSINESS.address;
  return `${a.street}, ${a.postalCode} ${a.locality}`;
};
