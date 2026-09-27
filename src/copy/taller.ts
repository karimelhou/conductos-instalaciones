import type { Bi, ServicePageCopy } from './types';

export const taller: Bi<ServicePageCopy> = {
  es: {
    navLabel: 'Taller',
    title: 'Taller de chapa y trabajos realizados | Conductos Madrid',
    description:
      'Nuestro taller de chapa en Madrid: despiece CAD/CAM, plegadora y fabricación de conductos a medida. Mira algunos de los trabajos que hemos montado.',
    eyebrow: '04 / Taller',
    h1: 'Nuestro taller de chapa y trabajos realizados',
    lede:
      'Somos chapistas de conductos de ventilación, no solo montadores. El despiece se hace con software sobre la chapa, se corta, se pliega en nuestra plegadora y sale a obra numerado. Esto es lo que eso significa en la práctica.',
    cardTitle: 'Taller y trabajos',
    cardBody:
      'Fabricación de conductos de chapa metálica a medida y galería de instalaciones realizadas.',
    waMessage: 'Hola, quería consultar un trabajo de taller a medida.',

    blocks: [
      {
        h2: 'Despiece y anidado por CAD/CAM',
        p: [
          'Cada pieza de conducto se dibuja desarrollada en plano y se anida sobre la chapa con software antes de cortar. La pantalla de la foto es un despiece real de nuestro taller: piezas numeradas repartidas sobre una chapa de 2.587 × 1.495 mm de 0,8 mm de espesor, con el recorrido de corte marcado en rojo.',
          'Anidar bien tiene dos efectos. Se aprovecha la chapa, que es coste directo, y las piezas salen identificadas, de modo que el montador en obra sabe qué tramo es cada una sin tener que medir.',
        ],
        photos: ['taller-nesting-cadcam'],
        diagram: 'plegado',
      },
      {
        h2: 'Corte, plegado y engatillado',
        p: [
          'De la chapa cortada a la pieza montada: plegado en la plegadora, engatillado de la junta longitudinal y montaje de bridas y refuerzos. Las piezas especiales — transformaciones entre secciones distintas, codos con ángulos que no son 90°, derivaciones en Y, campanas cónicas — se hacen aquí igual que una pieza estándar.',
          'Es la razón por la que un imprevisto en obra no se convierte en una semana de retraso: se vuelve a medir, se rehace la pieza y al día siguiente está montada.',
        ],
        photos: ['taller-campana-plegadora', 'taller-piezas-acopio'],
      },
      {
        h2: 'Fabricación de conductos de chapa metálica a medida',
        p: [
          'Fabricamos en chapa galvanizada, en acero inoxidable AISI 304 para extracción de cocina, y montamos conducto helicoidal de gran diámetro. Si necesitas solo la fabricación, sin montaje, también trabajamos así para otros instaladores y constructoras.',
        ],
        photos: ['taller-helicoidal-espiro'],
      },
      {
        h2: 'Trabajos realizados',
        p: [
          'Una selección de instalaciones montadas: redes de conducto en sótano y aparcamiento, salas de máquinas en cubierta, montantes de extracción en inoxidable y recepción de equipos en obra nueva.',
        ],
        photos: [
          'garaje-conductos-rejillas',
          'sotano-conductos-suspendidos',
          'cubierta-red-conductos-uta',
          'cubierta-panel-preaislado',
          'obra-derivacion-y',
          'red-conductos-derivaciones',
          'cubierta-extractores-sombreretes',
          'montante-inox-patio',
          'obra-equipos-sodeca',
        ],
      },
    ],

    spec: {
      caption: 'Qué podemos fabricar',
      head: ['Pieza', 'Detalle'],
      rows: [
        ['Tramo recto rectangular', 'Cualquier sección, engatillado y con brida'],
        ['Codos y curvas', 'A 90°, 45° o al ángulo que pida la obra, con álabes si procede'],
        ['Transformaciones', 'Entre secciones y entre rectangular y circular'],
        ['Derivaciones', 'En T, en Y e injertos con collarín'],
        ['Plenums', 'Cajas de reparto y conexión a equipo'],
        ['Campanas', 'Murales, centrales, cónicas y de captación, en inox AISI 304'],
        ['Conducto helicoidal', 'Suministro y montaje, Ø 100 – 1.250 mm'],
        ['Soportería', 'Bastidores y bancadas metálicas a medida'],
      ],
    },

    stepsHeading: 'Del plano a la obra',
    steps: [
      { title: 'Medición', body: 'Medidas reales tomadas en el local, no sobre plano.' },
      { title: 'Despiece', body: 'Desarrollo de cada pieza y anidado sobre la chapa.' },
      { title: 'Corte', body: 'Corte de la chapa siguiendo el recorrido calculado.' },
      { title: 'Plegado', body: 'Plegado, engatillado y montaje de bridas y refuerzos.' },
      { title: 'Expedición', body: 'Piezas numeradas y cargadas por orden de montaje.' },
    ],

    faq: [
      {
        q: '¿Fabricáis para otros instaladores y constructoras?',
        a: 'Sí. Trabajamos como industrial de chapa para otros instaladores, constructoras y empresas de mantenimiento, fabricando el conducto y las piezas especiales con o sin montaje.',
      },
      {
        q: '¿Podéis hacer una pieza suelta a medida?',
        a: 'Sí, y es bastante habitual: una transformación que no encaja, un codo con un ángulo raro o una campana para un hueco concreto. Mándanos las medidas o una foto por WhatsApp y te decimos si podemos y cuánto cuesta.',
      },
      {
        q: '¿Qué materiales trabajáis?',
        a: 'Chapa galvanizada en los espesores habituales de conducto, acero inoxidable AISI 304 para extracción de cocina y elementos vistos, y suministramos conducto helicoidal y panel preaislado.',
      },
      {
        q: '¿Cuánto tardáis en fabricar?',
        a: 'Depende de la carga de taller y de la complejidad, y te lo decimos al presupuestar. Una pieza suelta suele estar en pocos días; una instalación completa se programa junto con el montaje.',
      },
    ],

    ctaHeading: '¿Necesitas una pieza a medida?',
    ctaBody:
      'Mándanos las medidas o una foto por WhatsApp y te decimos si podemos fabricarlo, en cuánto tiempo y por cuánto.',

    schema: {
      name: 'Fabricación de conductos de chapa metálica',
      description:
        'Taller de chapa en Madrid con despiece CAD/CAM y plegadora: fabricación de conductos de ventilación, piezas especiales y campanas de acero inoxidable a medida.',
      serviceType: 'Fabricación de conductos de chapa metálica',
      offers: [
        'Fabricación de conductos de chapa metálica',
        'Conductos metálicos de ventilación a medida',
        'Piezas especiales: transformaciones, codos y derivaciones',
        'Campanas de acero inoxidable a medida',
        'Bastidores y bancadas metálicas',
      ],
    },
  },

  en: {
    navLabel: 'Workshop',
    title: 'Sheet Metal Workshop and Completed Projects | Madrid',
    description:
      'Our sheet metal workshop in Madrid: CAD/CAM nesting, press brake and made-to-measure duct fabrication. See some of the installations we have completed.',
    eyebrow: '04 / Workshop',
    h1: 'Our sheet metal workshop and completed projects',
    lede:
      'We are ductwork fabricators, not only installers. Parts are nested on the sheet in software, cut, folded on our own press brake, and leave for site numbered. Here is what that means in practice.',
    cardTitle: 'Workshop and projects',
    cardBody:
      'Made-to-measure sheet metal duct fabrication and a gallery of completed installations.',
    waMessage: "Hello, I'd like to ask about a bespoke workshop job.",

    blocks: [
      {
        h2: 'CAD/CAM nesting',
        p: [
          'Every duct part is drawn as a flat pattern and nested on the sheet in software before anything is cut. The screen in the photograph is a real nesting job from our workshop: numbered parts laid out on a 2,587 × 1,495 mm sheet of 0.8 mm material, with the cut path marked in red.',
          'Nesting well does two things. It uses the sheet efficiently, which is a direct cost, and the parts come out identified, so the fitter on site knows which run each one belongs to without measuring.',
        ],
        photos: ['taller-nesting-cadcam'],
        diagram: 'plegado',
      },
      {
        h2: 'Cutting, folding and lock-seaming',
        p: [
          'From cut sheet to finished part: folding on the press brake, lock-seaming the longitudinal joint, and fitting flanges and stiffeners. Special parts — transitions between different sections, bends at angles that are not 90°, Y-branches, conical hoods — are made here just like a standard one.',
          'It is the reason a surprise on site does not turn into a week of delay: we measure again, remake the part, and it is installed the next day.',
        ],
        photos: ['taller-campana-plegadora', 'taller-piezas-acopio'],
      },
      {
        h2: 'Made-to-measure sheet metal duct fabrication',
        p: [
          'We fabricate in galvanised sheet, in AISI 304 stainless for kitchen extraction, and we supply and install large-diameter spiral duct. If you need fabrication only, without installation, we work that way for other installers and contractors too.',
        ],
        photos: ['taller-helicoidal-espiro'],
      },
      {
        h2: 'Completed work',
        p: [
          'A selection of installations we have completed: duct networks in basements and car parks, rooftop plant, stainless extraction risers, and equipment received on new-build sites.',
        ],
        photos: [
          'garaje-conductos-rejillas',
          'sotano-conductos-suspendidos',
          'cubierta-red-conductos-uta',
          'cubierta-panel-preaislado',
          'obra-derivacion-y',
          'red-conductos-derivaciones',
          'cubierta-extractores-sombreretes',
          'montante-inox-patio',
          'obra-equipos-sodeca',
        ],
      },
    ],

    spec: {
      caption: 'What we can fabricate',
      head: ['Part', 'Detail'],
      rows: [
        ['Straight rectangular run', 'Any section, lock-seamed and flanged'],
        ['Bends', 'At 90°, 45° or whatever the job needs, with turning vanes if required'],
        ['Transitions', 'Between sections, and rectangular to round'],
        ['Branches', 'T-pieces, Y-branches and spigot take-offs'],
        ['Plenums', 'Distribution boxes and plant connections'],
        ['Hoods', 'Wall, island, conical and capture hoods in AISI 304 stainless'],
        ['Spiral duct', 'Supply and installation, Ø 100 – 1,250 mm'],
        ['Steelwork', 'Made-to-measure frames and base frames'],
      ],
    },

    stepsHeading: 'From drawing to site',
    steps: [
      { title: 'Measuring', body: 'Real measurements taken on site, not off a drawing.' },
      { title: 'Nesting', body: 'Each part developed flat and nested on the sheet.' },
      { title: 'Cutting', body: 'The sheet cut along the calculated path.' },
      { title: 'Folding', body: 'Folding, lock-seaming, and fitting flanges and stiffeners.' },
      { title: 'Dispatch', body: 'Parts numbered and loaded in installation order.' },
    ],

    faq: [
      {
        q: 'Do you fabricate for other installers and contractors?',
        a: 'Yes. We work as a sheet metal subcontractor for other installers, main contractors and maintenance firms, fabricating ductwork and special parts with or without installation.',
      },
      {
        q: 'Can you make a one-off part to measure?',
        a: 'Yes, and it is fairly common: a transition that does not fit, a bend at an awkward angle, or a hood for a specific opening. Send us the measurements or a photo on WhatsApp and we will tell you whether we can and what it costs.',
      },
      {
        q: 'What materials do you work in?',
        a: 'Galvanised sheet in the usual duct gauges, AISI 304 stainless for kitchen extraction and exposed work, and we supply spiral duct and pre-insulated panel.',
      },
      {
        q: 'How long does fabrication take?',
        a: 'It depends on the workshop load and the complexity, and we tell you when we quote. A one-off part is usually a few days; a complete installation is scheduled together with the site work.',
      },
    ],

    ctaHeading: 'Need a part made to measure?',
    ctaBody:
      'Send us the measurements or a photo on WhatsApp and we will tell you whether we can make it, how long it will take and what it costs.',

    schema: {
      name: 'Sheet metal duct fabrication',
      description:
        'Sheet metal workshop in Madrid with CAD/CAM nesting and a press brake: fabrication of ventilation ductwork, special parts and bespoke stainless steel hoods.',
      serviceType: 'Sheet metal duct fabrication',
      offers: [
        'Sheet metal duct fabrication',
        'Made-to-measure metal ventilation ductwork',
        'Special parts: transitions, bends and branches',
        'Bespoke stainless steel hoods',
        'Steel frames and base frames',
      ],
    },
  },
};
