import type { Bi, HomeCopy } from './types';

export const home: Bi<HomeCopy> = {
  es: {
    navLabel: 'Inicio',
    title: 'Conductos de ventilación y climatización en Madrid',
    description:
      'Fabricamos e instalamos conductos de ventilación, extracción de humos de cocina y climatización en Madrid. Taller propio de chapa. Pide presupuesto.',
    eyebrow: 'Madrid y Comunidad de Madrid',
    h1: 'Empresa de ventilación y climatización en Madrid',
    lede:
      'Instalamos conductos de ventilación, extracción de humos de cocina y climatización en Madrid y toda la Comunidad. Con taller propio de chapa: cortamos, plegamos y montamos nosotros, así que las piezas especiales no son un retraso.',
    cardTitle: 'Inicio',
    cardBody: 'Conductos, extracción y climatización en Madrid.',
    waMessage: 'Hola, me gustaría pedir un presupuesto.',

    blocks: [
      {
        h2: 'Qué hacemos',
        p: [
          'Tres servicios que casi siempre van juntos en el mismo local: mover el aire, sacar los humos y climatizar. Al hacerlo todo nosotros hay un solo interlocutor, un solo presupuesto y nadie se pasa la pelota cuando algo hay que ajustar en obra.',
        ],
      },
      {
        h2: 'Fabricación propia: taller de chapa con plegadora y CAD/CAM',
        p: [
          'No somos solo montadores. Tenemos taller: el despiece se hace con software de anidado sobre la chapa, se corta, se pliega en nuestra plegadora y sale a obra ya montado en tramos.',
          'Eso cambia dos cosas que se notan en el plazo y en el resultado. La primera, que una transformación rara, un codo con un ángulo que no existe en catálogo o una campana a una medida concreta se fabrican igual de rápido que una pieza estándar. La segunda, que cuando en obra aparece una viga donde no tocaba, se resuelve rehaciendo la pieza, no improvisando con tramos flexibles.',
        ],
        photos: ['taller-nesting-cadcam', 'taller-campana-plegadora'],
        diagram: 'plegado',
      },
      {
        h2: 'Tipos de local en los que montamos',
        p: [
          'Trabajamos tanto en local acabado como en obra nueva, coordinándonos con el resto de gremios.',
        ],
        bullets: [
          'Restaurantes, bares y hostelería: extracción de humos completa y ventilación de sala.',
          'Locales comerciales: renovación de aire, climatización y conductos vistos u ocultos en falso techo.',
          'Garajes y aparcamientos: ventilación forzada con conducto rectangular y rejillas.',
          'Naves y locales industriales: conducto de gran sección, helicoidal y extracción de proceso.',
          'Obra nueva: montaje coordinado con la dirección facultativa y el resto de instaladores.',
        ],
        photos: [
          'garaje-conductos-rejillas',
          'sotano-conductos-suspendidos',
          'cubierta-red-conductos-uta',
        ],
      },
      {
        h2: 'Materiales que usamos',
        p: [
          'Trabajamos con lo que pide cada instalación, no con lo que tenemos en el almacén. Para extracción de cocina, inoxidable. Para ventilación general, chapa galvanizada. Donde hay que aislar y ganar altura libre, panel preaislado.',
        ],
        diagram: 'seccion',
      },
    ],

    spec: {
      caption: 'Materiales y espesores habituales',
      head: ['Elemento', 'Especificación'],
      rows: [
        ['Conducto rectangular', 'Chapa galvanizada 0,5 – 1,0 mm según lado mayor'],
        ['Conducto circular', 'Helicoidal (espiro) galvanizado, Ø 100 – 1.250 mm'],
        ['Conducto preaislado', 'Panel de aluminio con núcleo aislante, autoportante'],
        ['Extracción de cocina', 'Acero inoxidable AISI 304, soldado o engatillado'],
        ['Uniones', 'Brida metálica con junta, manguito o engatillado transversal'],
        ['Soportería', 'Varilla roscada y perfil, con antivibratorio donde procede'],
      ],
    },

    stepsHeading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Nos llamas',
        body: 'Por teléfono o WhatsApp. Nos cuentas qué local es y qué necesitas, y te decimos de entrada si es algo que hacemos y por dónde van los tiros.',
      },
      {
        title: 'Vamos a verlo',
        body: 'Visita al local para tomar medidas y ver los condicionantes reales: altura libre, por dónde sale el conducto, qué instalaciones hay ya.',
      },
      {
        title: 'Presupuesto cerrado',
        body: 'Te pasamos un presupuesto por escrito, detallado por partidas y sin compromiso. Respondemos en menos de 24 horas laborables.',
      },
      {
        title: 'Fabricamos',
        body: 'Despiece, corte y plegado en nuestro taller. Las piezas salen numeradas para que el montaje en obra sea rápido y limpio.',
      },
      {
        title: 'Montamos y probamos',
        body: 'Montaje, sellado y puesta en marcha. Dejamos la instalación funcionando y el local recogido.',
      },
    ],

    faq: [
      {
        q: '¿Trabajáis en toda la Comunidad de Madrid?',
        a: 'Sí. Madrid capital y toda la Comunidad: Getafe, Leganés, Alcorcón, Móstoles, Fuenlabrada, Alcalá de Henares, Torrejón, Alcobendas y el resto de municipios. Si tu local está algo más lejos, pregúntanos igualmente: lo habitual es que lleguemos.',
      },
      {
        q: '¿El presupuesto y la visita tienen coste?',
        a: 'No. La visita para tomar medidas y el presupuesto por escrito son gratuitos y sin compromiso. Solo se factura cuando aceptas el trabajo.',
      },
      {
        q: '¿Hacéis solo el montaje o también suministráis el material?',
        a: 'Las dos cosas. Lo normal es que suministremos y montemos, porque fabricamos el conducto nosotros. Si ya tienes el material comprado también montamos solo, pero conviene revisarlo antes para evitar sorpresas de medidas.',
      },
      {
        q: '¿Cuánto tardáis en empezar?',
        a: 'Depende de la carga de taller en ese momento, y te lo decimos con el presupuesto. Como referencia, un local pequeño suele empezarse en una o dos semanas desde que se acepta.',
      },
    ],

    ctaHeading: 'Pide presupuesto sin compromiso',
    ctaBody:
      'Cuéntanos qué local tienes y qué necesitas. Vamos a verlo, tomamos medidas y te pasamos un presupuesto cerrado en menos de 24 horas laborables.',
  },

  en: {
    navLabel: 'Home',
    title: 'Ventilation Ductwork and Air Conditioning in Madrid',
    description:
      'We fabricate and install ventilation ductwork, commercial kitchen extraction and air conditioning in Madrid. Our own sheet metal workshop. Get a quote.',
    eyebrow: 'Madrid and the Comunidad de Madrid',
    h1: 'Ventilation and air conditioning company in Madrid',
    lede:
      'We install ventilation ductwork, commercial kitchen extraction and air conditioning across Madrid and the whole Comunidad. With our own sheet metal workshop: we cut, fold and fit it ourselves, so a one-off part is not a delay.',
    cardTitle: 'Home',
    cardBody: 'Ductwork, extraction and air conditioning in Madrid.',
    waMessage: "Hello, I'd like to request a quote.",

    blocks: [
      {
        h2: 'What we do',
        p: [
          'Three services that nearly always land in the same building: moving the air, getting the fumes out, and heating or cooling it. Doing all three ourselves means one point of contact, one quote, and nobody passing the blame when something has to be adjusted on site.',
        ],
      },
      {
        h2: 'We fabricate in house: sheet metal workshop with a press brake and CAD/CAM',
        p: [
          'We are not only installers. We have a workshop: parts are nested on the sheet in software, cut, folded on our own press brake, and leave for site already assembled into sections.',
          'That changes two things you feel in the programme and in the result. First, an awkward transition, a bend at an angle no catalogue carries, or a hood at one specific size are made as quickly as a standard part. Second, when a beam turns up on site where it should not be, we solve it by remaking the part rather than improvising with flexible duct.',
        ],
        photos: ['taller-nesting-cadcam', 'taller-campana-plegadora'],
        diagram: 'plegado',
      },
      {
        h2: 'The kinds of premises we work in',
        p: [
          'We work both in finished premises and on new build, coordinating with the other trades.',
        ],
        bullets: [
          'Restaurants, bars and hospitality: complete kitchen extraction and dining room ventilation.',
          'Retail and commercial units: air renewal, air conditioning, exposed or concealed ductwork.',
          'Car parks: forced ventilation with rectangular duct and grilles.',
          'Industrial units and warehouses: large-section duct, spiral duct and process extraction.',
          'New build: installation coordinated with the project team and the other trades.',
        ],
        photos: [
          'garaje-conductos-rejillas',
          'sotano-conductos-suspendidos',
          'cubierta-red-conductos-uta',
        ],
      },
      {
        h2: 'The materials we use',
        p: [
          'We work with what each installation calls for, not with whatever is in the store. Stainless for kitchen extraction. Galvanised sheet for general ventilation. Pre-insulated panel where it has to be insulated and headroom is tight.',
        ],
        diagram: 'seccion',
      },
    ],

    spec: {
      caption: 'Usual materials and gauges',
      head: ['Item', 'Specification'],
      rows: [
        ['Rectangular duct', 'Galvanised sheet 0.5 – 1.0 mm by longest side'],
        ['Round duct', 'Galvanised spiral (spiro), Ø 100 – 1,250 mm'],
        ['Pre-insulated duct', 'Aluminium panel with insulating core, self-supporting'],
        ['Kitchen extraction', 'AISI 304 stainless steel, welded or lock-seamed'],
        ['Joints', 'Gasketed metal flange, coupler or transverse lock seam'],
        ['Supports', 'Threaded rod and channel, anti-vibration mounts where required'],
      ],
    },

    stepsHeading: 'How we work',
    steps: [
      {
        title: 'You call us',
        body: 'By phone or WhatsApp. Tell us what the premises are and what you need, and we will say straight away whether it is something we do and roughly how it would work.',
      },
      {
        title: 'We come and look',
        body: 'A site visit to measure up and see the real constraints: headroom, where the duct can discharge, what services are already there.',
      },
      {
        title: 'A fixed quote',
        body: 'A written quote, itemised and with no obligation. We reply within 24 working hours.',
      },
      {
        title: 'We fabricate',
        body: 'Nesting, cutting and folding in our workshop. Parts leave numbered so the installation on site is quick and clean.',
      },
      {
        title: 'We install and commission',
        body: 'Installation, sealing and commissioning. We leave it running and the premises tidy.',
      },
    ],

    faq: [
      {
        q: 'Do you work across the whole Comunidad de Madrid?',
        a: 'Yes. Madrid itself and the whole region: Getafe, Leganés, Alcorcón, Móstoles, Fuenlabrada, Alcalá de Henares, Torrejón, Alcobendas and the rest. If your premises are a little further out, ask anyway — we usually get there.',
      },
      {
        q: 'Do the visit and the quote cost anything?',
        a: 'No. The measuring visit and the written quote are free and carry no obligation. You are only invoiced once you accept the work.',
      },
      {
        q: 'Do you only install, or do you supply the material too?',
        a: 'Both. Normally we supply and install, because we fabricate the ductwork ourselves. If you have already bought the material we will install only, though it is worth us checking it first to avoid surprises over sizes.',
      },
      {
        q: 'How soon can you start?',
        a: 'It depends on the workshop load at the time, and we tell you with the quote. As a guide, a small unit usually starts one to two weeks after the quote is accepted.',
      },
    ],

    ctaHeading: 'Get a quote, no obligation',
    ctaBody:
      'Tell us about your premises and what you need. We come and measure up, then send you a fixed quote within 24 working hours.',
  },
};
