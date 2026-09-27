import type { Bi, LegalCopy } from './types';

/**
 * Article 10 LSSI-CE requires the holder's name, address and tax number on any
 * commercial website. The identity block is rendered from src/config/site.ts,
 * so it fills itself in as soon as those fields are supplied; until then the
 * page states plainly that it is pending rather than inventing anything.
 */
export const legal: Bi<LegalCopy> = {
  es: {
    navLabel: 'Aviso legal',
    title: 'Aviso legal, privacidad y cookies | Conductos Instalaciones',
    description:
      'Aviso legal, política de privacidad y política de cookies de Conductos Instalaciones, conforme a la LSSI-CE y al Reglamento General de Protección de Datos.',
    eyebrow: 'Información legal',
    h1: 'Aviso legal, privacidad y cookies',
    lede:
      'Información exigida por el artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y por el Reglamento (UE) 2016/679 de Protección de Datos.',
    cardTitle: 'Aviso legal',
    cardBody: 'Aviso legal, privacidad y cookies.',
    waMessage: 'Hola, tengo una consulta.',

    pendingNotice:
      'Los datos identificativos del titular están pendientes de incorporación y deben completarse antes de publicar la web. Mientras tanto puedes contactar por teléfono o correo electrónico en los datos que aparecen en el pie de página.',

    sections: [
      {
        h2: 'Titular del sitio web',
        p: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se facilitan los siguientes datos identificativos del titular de este sitio web.',
        ],
      },
      {
        h2: 'Objeto y condiciones de uso',
        p: [
          'Este sitio web tiene carácter informativo y describe los servicios de instalación de conductos de ventilación, extracción de humos de cocina y climatización que presta el titular. No se realizan ventas ni contrataciones en línea a través de él.',
          'El acceso al sitio es gratuito y no requiere registro. El usuario se compromete a hacer un uso adecuado de sus contenidos y a no emplearlos con fines ilícitos o lesivos para terceros.',
          'Los precios y plazos que puedan mencionarse tienen carácter orientativo. Cualquier importe en firme se comunica exclusivamente mediante presupuesto por escrito, con los impuestos aplicables indicados de forma expresa.',
        ],
      },
      {
        h2: 'Propiedad intelectual e industrial',
        p: [
          'Los textos, fotografías, ilustraciones técnicas y demás elementos de este sitio son titularidad del responsable o se utilizan con la autorización correspondiente, y están protegidos por la normativa de propiedad intelectual e industrial.',
          'Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa y por escrito.',
        ],
      },
      {
        h2: 'Protección de datos personales',
        p: [
          'Este sitio web no incorpora formularios de contacto ni recoge datos personales de forma automatizada. No se utilizan sistemas de analítica ni de seguimiento del comportamiento de los visitantes.',
          'Si te pones en contacto por teléfono, WhatsApp o correo electrónico, los datos que nos facilites se tratarán con la única finalidad de atender tu consulta y, en su caso, elaborar y remitir el presupuesto solicitado.',
          'La base jurídica del tratamiento es la aplicación de medidas precontractuales adoptadas a petición del interesado (artículo 6.1.b del RGPD) y el interés legítimo en responder a las consultas recibidas (artículo 6.1.f del RGPD). Los datos se conservarán durante el tiempo necesario para atender la solicitud y, después, durante los plazos legalmente exigibles.',
          'No se ceden datos a terceros salvo obligación legal. El proveedor de correo electrónico actúa como encargado del tratamiento. Si el contacto se produce por WhatsApp, la comunicación se rige además por las condiciones de ese servicio.',
          'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a la dirección de correo electrónico que figura en el pie de página. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
      {
        h2: 'Cookies',
        p: [
          'Este sitio web no utiliza cookies de analítica, de publicidad ni de personalización, y no instala ningún identificador en tu dispositivo con fines de seguimiento.',
          'Tampoco incorpora contenidos embebidos de terceros: no hay mapas interactivos, ni vídeos incrustados, ni fuentes tipográficas servidas desde servidores externos. Las tipografías se sirven desde este mismo dominio.',
          'Por ese motivo no se solicita consentimiento de cookies: no se realiza ningún almacenamiento ni acceso a información en tu equipo más allá del estrictamente necesario para servir las páginas. El proveedor de alojamiento puede registrar datos técnicos de conexión con fines de seguridad y estadística agregada.',
        ],
      },
      {
        h2: 'Enlaces a otros sitios',
        p: [
          'Este sitio puede contener enlaces a servicios de terceros, como la aplicación WhatsApp. El titular no se responsabiliza de los contenidos ni de las políticas de privacidad de esos servicios.',
        ],
      },
      {
        h2: 'Legislación aplicable',
        p: [
          'Las presentes condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa vigente en materia de consumidores y usuarios.',
        ],
      },
    ],
  },

  en: {
    navLabel: 'Legal notice',
    title: 'Legal Notice, Privacy and Cookies | Conductos Instalaciones',
    description:
      'Legal notice, privacy policy and cookie policy for Conductos Instalaciones, under Spanish LSSI-CE law and the General Data Protection Regulation.',
    eyebrow: 'Legal information',
    h1: 'Legal notice, privacy and cookies',
    lede:
      'Information required by article 10 of Spanish Law 34/2002 on Information Society Services and by Regulation (EU) 2016/679 on Data Protection.',
    cardTitle: 'Legal notice',
    cardBody: 'Legal notice, privacy and cookies.',
    waMessage: 'Hello, I have a question.',

    pendingNotice:
      'The owner identification details are still to be added and must be completed before the site goes live. In the meantime you can get in touch by phone or email using the details in the footer.',

    sections: [
      {
        h2: 'Website owner',
        p: [
          'In accordance with article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce, the following identification details of the owner of this website are provided.',
        ],
      },
      {
        h2: 'Purpose and terms of use',
        p: [
          'This website is informational and describes the ventilation ductwork, commercial kitchen extraction and air conditioning services provided by the owner. No sales or contracts are concluded online through it.',
          'Access is free and requires no registration. Users undertake to make proper use of the content and not to use it for unlawful purposes or in ways harmful to third parties.',
          'Any prices or timescales mentioned are indicative. Firm figures are given solely by written quotation, with applicable taxes stated expressly.',
        ],
      },
      {
        h2: 'Intellectual and industrial property',
        p: [
          'The text, photographs, technical illustrations and other elements of this site belong to the owner or are used with the relevant permission, and are protected by intellectual and industrial property law.',
          'Their reproduction, distribution or public communication without express written permission is prohibited.',
        ],
      },
      {
        h2: 'Personal data protection',
        p: [
          'This website contains no contact forms and collects no personal data automatically. No analytics or visitor-tracking systems are used.',
          'If you contact us by phone, WhatsApp or email, the details you give us are processed solely to deal with your enquiry and, where applicable, to prepare and send the quotation requested.',
          'The legal basis is the taking of pre-contractual steps at the data subject request (article 6.1.b GDPR) and the legitimate interest in responding to enquiries received (article 6.1.f GDPR). Data is kept for as long as needed to deal with the request and thereafter for any legally required periods.',
          'No data is passed to third parties except where legally required. The email provider acts as a data processor. Where contact is made via WhatsApp, the communication is additionally governed by that service terms.',
          'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to the email address shown in the footer. You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
        ],
      },
      {
        h2: 'Cookies',
        p: [
          'This website uses no analytics, advertising or personalisation cookies, and installs no identifier on your device for tracking purposes.',
          'It also embeds no third-party content: there are no interactive maps, no embedded videos, and no typefaces served from external servers. The fonts are served from this domain.',
          'For that reason no cookie consent is requested: nothing is stored on or read from your device beyond what is strictly necessary to serve the pages. The hosting provider may log technical connection data for security and aggregate statistics.',
        ],
      },
      {
        h2: 'Links to other sites',
        p: [
          'This site may contain links to third-party services such as the WhatsApp application. The owner is not responsible for the content or privacy policies of those services.',
        ],
      },
      {
        h2: 'Applicable law',
        p: [
          'These terms are governed by Spanish law. Any dispute shall be heard by the courts having jurisdiction under the consumer protection legislation in force.',
        ],
      },
    ],
  },
};
