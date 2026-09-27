import type { Bi, ServicePageCopy } from './types';

export const ventilacion: Bi<ServicePageCopy> = {
  es: {
    navLabel: 'Ventilación',
    title: 'Instalación de conductos de ventilación en Madrid',
    description:
      'Instalación de conductos de ventilación en Madrid: fabricamos el conducto de chapa en nuestro taller, lo suministramos y lo montamos. Pide presupuesto.',
    eyebrow: '01 / Ventilación',
    h1: 'Instalación de conductos de ventilación en Madrid',
    lede:
      'Instalación de conductos de ventilación en Madrid: fabricamos el conducto en nuestro taller, lo suministramos y lo montamos en obra. Rectangular, helicoidal y panel preaislado, a la medida de cada local.',
    cardTitle: 'Conductos de ventilación',
    cardBody:
      'Fabricación, suministro y montaje de conductos metálicos de ventilación para locales, garajes y naves industriales.',
    waMessage: 'Hola, quería información sobre conductos de ventilación.',

    blocks: [
      {
        h2: 'Fabricación de conductos de chapa metálica en taller propio',
        p: [
          'La diferencia entre un montador y un chapista de conductos de ventilación se nota el día que las medidas no cuadran. Nosotros fabricamos: el despiece se anida sobre la chapa con software, se corta, se pliega y se engatilla en el taller, y a obra llega numerado.',
          'Por eso podemos trabajar con secciones que no existen en catálogo, resolver una transformación entre dos sectores con alturas distintas o rehacer un tramo en el día cuando aparece un imprevisto estructural.',
        ],
        photos: ['taller-piezas-acopio', 'taller-nesting-cadcam'],
      },
      {
        h2: 'Tipos de conducto que fabricamos e instalamos',
        subs: [
          {
            h3: 'Conducto rectangular de chapa galvanizada',
            p: 'El más habitual en falso techo y en garaje. Chapa galvanizada de 0,5 a 1,0 mm según el lado mayor, con refuerzos y junta transversal por brida metálica con junta de estanqueidad. Permite aprovechar al máximo la altura libre cuando hay poco espacio.',
          },
          {
            h3: 'Conducto circular y helicoidal (espiro)',
            p: 'Mejor comportamiento aerodinámico y menos pérdida de carga que el rectangular a igualdad de sección, y un montaje más rápido. Lo usamos en naves, en tiradas largas y siempre que el conducto queda visto y se quiere un acabado limpio. Unión por manguito con junta o por abrazadera.',
          },
          {
            h3: 'Conducto de panel preaislado',
            p: 'Panel de aluminio con núcleo aislante, autoportante: el conducto y su aislamiento son la misma pieza. Pesa mucho menos, se monta muy rápido y evita condensaciones en climatización. Es la solución cuando hay que aislar y además falta altura.',
          },
          {
            h3: 'Conducto flexible aislado y conexiones',
            p: 'Para los últimos tramos, la conexión a difusores y rejillas y la absorción de vibraciones. Lo usamos donde corresponde y en tramos cortos: un flexible largo y mal tendido arruina el caudal de toda la instalación.',
          },
        ],
        diagram: 'seccion',
        photos: ['taller-helicoidal-espiro', 'producto-panel-preaislado'],
      },
      {
        h2: 'Suministro y montaje de conductos de ventilación',
        p: [
          'Lo habitual es que hagamos las dos cosas: el suministro del conducto y el montaje completo, incluida la soportería, el sellado de juntas, las compuertas y las rejillas o difusores de impulsión y retorno.',
          'El montaje se hace con varilla roscada y perfilería, con antivibratorio donde hay equipo rotativo cerca, y con las juntas selladas para que el caudal que sale del ventilador sea el que llega al local. Si ya tienes el material comprado, montamos solo, pero conviene que le echemos un vistazo antes.',
        ],
        photos: ['obra-derivacion-y', 'sotano-conductos-suspendidos'],
      },
      {
        h2: 'Conductos de ventilación industrial para naves y garajes',
        p: [
          'El montaje de conductos industriales tiene sus propias reglas: secciones grandes, tiradas largas, soportería reforzada y un montaje que muchas veces hay que hacer en altura y sin parar la actividad del cliente.',
          'En garajes y aparcamientos trabajamos con la ventilación forzada que exige la normativa de incendios y de calidad de aire: conducto rectangular con rejillas repartidas por toda la planta, cajas de ventilación y descarga al exterior.',
        ],
        photos: ['garaje-conductos-rejillas', 'red-conductos-derivaciones'],
      },
      {
        h2: 'Conductos de aire acondicionado y climatización a medida',
        p: [
          'Buena parte de lo que montamos es la parte de aire de una instalación de climatización: los conductos que reparten el aire tratado desde la unidad hasta cada difusor. Si además necesitas los equipos, lo vemos en la página de climatización.',
        ],
      },
    ],

    spec: {
      caption: 'Ficha técnica: materiales y espesores',
      head: ['Elemento', 'Especificación'],
      rows: [
        ['Lado mayor hasta 300 mm', 'Chapa galvanizada 0,5 mm'],
        ['Lado mayor 301 – 750 mm', 'Chapa galvanizada 0,6 mm'],
        ['Lado mayor 751 – 1.200 mm', 'Chapa galvanizada 0,8 mm'],
        ['Lado mayor superior a 1.200 mm', 'Chapa galvanizada 1,0 mm con refuerzo'],
        ['Conducto helicoidal', 'Ø 100 – 1.250 mm, espesor según diámetro'],
        ['Junta transversal', 'Brida metálica con junta de estanqueidad'],
        ['Soportería', 'Varilla roscada M8/M10 y perfil, antivibratorio si procede'],
        ['Aislamiento', 'Manta o panel según uso, o conducto preaislado'],
      ],
    },

    stepsHeading: 'Cómo trabajamos: de la medición al montaje',
    steps: [
      {
        title: 'Medición',
        body: 'Visitamos el local, medimos y comprobamos altura libre, pasos y por dónde puede salir el conducto.',
      },
      {
        title: 'Cálculo y despiece',
        body: 'Dimensionamos la sección según el caudal necesario y hacemos el despiece de cada tramo.',
      },
      {
        title: 'Fabricación',
        body: 'Corte, plegado y engatillado en taller. Cada pieza sale numerada.',
      },
      {
        title: 'Montaje',
        body: 'Soportería, montaje de tramos, sellado de juntas y colocación de rejillas y difusores.',
      },
      {
        title: 'Puesta en marcha',
        body: 'Arranque, comprobación de caudales y entrega del local limpio.',
      },
    ],

    faq: [
      {
        q: '¿Cuánto cuesta instalar los conductos de ventilación de un local en Madrid?',
        a: 'Depende sobre todo de los metros de conducto, de la sección y de la dificultad del montaje: no es lo mismo un falso techo accesible que trabajar en altura sobre una cocina en marcha. Por eso no damos precios por teléfono sin ver el local. La visita y el presupuesto son gratuitos, y el presupuesto va detallado por partidas para que veas qué pagas.',
      },
      {
        q: '¿Fabricáis el conducto a medida o trabajáis con medidas estándar?',
        a: 'A medida. Tenemos taller propio con plegadora y despiece por CAD/CAM, así que la sección la fijamos nosotros según el caudal y el hueco disponible. Las piezas especiales (transformaciones, codos con ángulos raros, derivaciones) se fabrican igual que una pieza normal.',
      },
      {
        q: '¿Qué diferencia hay entre conducto rectangular, helicoidal y panel preaislado?',
        a: 'El rectangular aprovecha mejor la altura libre cuando hay poco hueco. El helicoidal pierde menos carga y queda mejor visto, pero necesita más espacio en altura. El preaislado ya lleva el aislamiento incorporado, pesa poco y se monta muy rápido, y es lo indicado en climatización para evitar condensaciones.',
      },
      {
        q: '¿Qué espesor de chapa galvanizada se usa en cada tramo?',
        a: 'Va en función del lado mayor del conducto: 0,5 mm hasta 300 mm, 0,6 mm hasta 750 mm, 0,8 mm hasta 1.200 mm y 1,0 mm con refuerzo por encima de eso. Tienes la tabla completa más arriba en la ficha técnica.',
      },
      {
        q: '¿Cuánto se tarda en montar los conductos de un local de 200 m²?',
        a: 'Como referencia, entre dos y cuatro días de montaje una vez fabricado el material, siempre que el local esté accesible y el falso techo abierto. Si hay que trabajar de noche o por fases para no cerrar el negocio, se alarga y lo indicamos en el presupuesto.',
      },
      {
        q: '¿Hacéis también el suministro del material o sólo el montaje?',
        a: 'Las dos cosas, y lo normal es que hagamos ambas porque fabricamos el conducto nosotros. También montamos material suministrado por el cliente, aunque preferimos revisarlo antes para no encontrarnos con secciones que no encajan.',
      },
      {
        q: '¿Trabajáis en garajes y naves industriales?',
        a: 'Sí, es buena parte de lo que hacemos. Garajes con ventilación forzada y rejillas repartidas, y naves con conducto de gran sección y tiradas largas, incluido el montaje en altura.',
      },
    ],

    ctaHeading: 'Pide presupuesto para tu instalación de conductos',
    ctaBody:
      'Vamos a ver el local, tomamos medidas y te pasamos un presupuesto cerrado y detallado en menos de 24 horas laborables.',

    schema: {
      name: 'Instalación de conductos de ventilación',
      description:
        'Fabricación, suministro y montaje de conductos metálicos de ventilación en Madrid: rectangular de chapa galvanizada, helicoidal y panel preaislado.',
      serviceType: 'Instalación de conductos de ventilación',
      offers: [
        'Instalación de conductos de ventilación',
        'Suministro de conductos de ventilación',
        'Montaje de conductos de ventilación',
        'Fabricación de conductos de chapa metálica',
        'Conductos de ventilación industrial',
        'Conductos de aire acondicionado',
        'Conductos de climatización a medida',
      ],
    },
  },

  en: {
    navLabel: 'Ventilation',
    title: 'Ventilation Ductwork Installation in Madrid',
    description:
      'Ventilation ductwork installation in Madrid: we fabricate the sheet metal duct in our own workshop, supply it and install it. Request a quote.',
    eyebrow: '01 / Ventilation',
    h1: 'Ventilation ductwork installation in Madrid',
    lede:
      'Ventilation ductwork installation in Madrid: we fabricate the duct in our own workshop, supply it and install it on site. Rectangular, spiral and pre-insulated panel, sized for each building.',
    cardTitle: 'Ventilation ductwork',
    cardBody:
      'Fabrication, supply and installation of metal ventilation ductwork for commercial units, car parks and industrial buildings.',
    waMessage: "Hello, I'd like information about ventilation ductwork.",

    blocks: [
      {
        h2: 'Sheet metal duct fabrication in our own workshop',
        p: [
          'The difference between an installer and a ductwork fabricator shows up the day the measurements do not fit. We fabricate: parts are nested on the sheet in software, cut, folded and lock-seamed in the workshop, and reach site numbered.',
          'That is why we can work with sections no catalogue carries, resolve a transition between two zones at different heights, or remake a run the same day when something structural turns up unexpectedly.',
        ],
        photos: ['taller-piezas-acopio', 'taller-nesting-cadcam'],
      },
      {
        h2: 'The types of duct we fabricate and install',
        subs: [
          {
            h3: 'Rectangular galvanised steel duct',
            p: 'The usual choice above a false ceiling and in car parks. Galvanised sheet from 0.5 to 1.0 mm by longest side, with stiffeners and a transverse gasketed metal flange joint. It makes the most of the available headroom when space is tight.',
          },
          {
            h3: 'Round and spiral (spiro) duct',
            p: 'Better aerodynamically and less pressure loss than rectangular at the same cross-section, and quicker to install. We use it in industrial buildings, on long runs, and wherever the duct is exposed and a clean finish matters. Jointed with gasketed couplers or band clamps.',
          },
          {
            h3: 'Pre-insulated panel duct',
            p: 'Aluminium panel with an insulating core, self-supporting: the duct and its insulation are the same part. It weighs far less, goes up very quickly, and prevents condensation on air conditioning work. It is the answer when you need insulation and headroom is short.',
          },
          {
            h3: 'Insulated flexible duct and connections',
            p: 'For final connections to diffusers and grilles, and to absorb vibration. We use it where it belongs and in short lengths: a long, badly run flexible ruins the airflow of the whole installation.',
          },
        ],
        diagram: 'seccion',
        photos: ['taller-helicoidal-espiro', 'producto-panel-preaislado'],
      },
      {
        h2: 'Supply and installation of ventilation ductwork',
        p: [
          'Normally we do both: supply the duct and carry out the whole installation, including supports, sealing the joints, dampers, and the supply and return grilles or diffusers.',
          'Installation is on threaded rod and channel, with anti-vibration mounts where rotating plant is close by, and with the joints sealed so the airflow leaving the fan is the airflow that reaches the room. If you have already bought the material we will install only, but it is worth us looking at it first.',
        ],
        photos: ['obra-derivacion-y', 'sotano-conductos-suspendidos'],
      },
      {
        h2: 'Industrial ventilation ductwork for warehouses and car parks',
        p: [
          'Industrial ductwork has its own rules: large sections, long runs, heavier supports, and an installation that often has to be done at height without stopping the client trading.',
          'In car parks we install the forced ventilation that fire and air-quality regulations require: rectangular duct with grilles distributed across the floor plate, fan boxes and discharge to the outside.',
        ],
        photos: ['garaje-conductos-rejillas', 'red-conductos-derivaciones'],
      },
      {
        h2: 'Air conditioning ductwork made to measure',
        p: [
          'A good part of what we install is the air side of an air conditioning system: the ducts that distribute treated air from the unit to each diffuser. If you also need the equipment itself, see the air conditioning page.',
        ],
      },
    ],

    spec: {
      caption: 'Technical data: materials and gauges',
      head: ['Item', 'Specification'],
      rows: [
        ['Longest side up to 300 mm', 'Galvanised sheet 0.5 mm'],
        ['Longest side 301 – 750 mm', 'Galvanised sheet 0.6 mm'],
        ['Longest side 751 – 1,200 mm', 'Galvanised sheet 0.8 mm'],
        ['Longest side over 1,200 mm', 'Galvanised sheet 1.0 mm with stiffening'],
        ['Spiral duct', 'Ø 100 – 1,250 mm, gauge by diameter'],
        ['Transverse joint', 'Metal flange with sealing gasket'],
        ['Supports', 'M8/M10 threaded rod and channel, anti-vibration where needed'],
        ['Insulation', 'Blanket or board by application, or pre-insulated duct'],
      ],
    },

    stepsHeading: 'How we work: from measuring up to installation',
    steps: [
      {
        title: 'Measuring up',
        body: 'We visit the premises, measure, and check headroom, penetrations and where the duct can discharge.',
      },
      {
        title: 'Sizing and nesting',
        body: 'We size the section for the airflow required and nest every run for fabrication.',
      },
      {
        title: 'Fabrication',
        body: 'Cutting, folding and lock-seaming in the workshop. Every part leaves numbered.',
      },
      {
        title: 'Installation',
        body: 'Supports, run assembly, joint sealing and fitting of grilles and diffusers.',
      },
      {
        title: 'Commissioning',
        body: 'Start-up, airflow checks and handover with the premises left clean.',
      },
    ],

    faq: [
      {
        q: 'How much does it cost to install ventilation ductwork in a unit in Madrid?',
        a: 'It depends mostly on the metres of duct, the cross-section and how hard the installation is: an accessible false ceiling is not the same as working at height over a kitchen that is still trading. That is why we do not quote over the phone without seeing the place. The visit and the quote are free, and the quote is itemised so you can see what you are paying for.',
      },
      {
        q: 'Do you make duct to measure, or work to standard sizes?',
        a: 'To measure. We have our own workshop with a press brake and CAD/CAM nesting, so we set the section ourselves from the airflow and the space available. Special parts — transitions, bends at awkward angles, branches — are made just like a standard one.',
      },
      {
        q: 'What is the difference between rectangular, spiral and pre-insulated panel duct?',
        a: 'Rectangular makes better use of headroom when space is tight. Spiral loses less pressure and looks better exposed, but needs more height. Pre-insulated already has the insulation built in, weighs little and goes up very fast, and it is the right choice on air conditioning work to avoid condensation.',
      },
      {
        q: 'What gauge of galvanised sheet is used on each run?',
        a: 'It follows the longest side of the duct: 0.5 mm up to 300 mm, 0.6 mm up to 750 mm, 0.8 mm up to 1,200 mm, and 1.0 mm with stiffening above that. The full table is in the technical data above.',
      },
      {
        q: 'How long does it take to install ductwork in a 200 m² unit?',
        a: 'As a guide, two to four days on site once the material is made, provided the unit is accessible and the ceiling is open. If we have to work at night or in phases so the business can keep trading it takes longer, and we say so in the quote.',
      },
      {
        q: 'Do you supply the material as well, or only install?',
        a: 'Both, and normally both, because we fabricate the duct ourselves. We will also install client-supplied material, though we prefer to check it first so we do not run into sections that do not fit.',
      },
      {
        q: 'Do you work in car parks and industrial buildings?',
        a: 'Yes, a good share of our work. Car parks with forced ventilation and distributed grilles, and industrial buildings with large-section duct and long runs, including installation at height.',
      },
    ],

    ctaHeading: 'Get a quote for your ductwork installation',
    ctaBody:
      'We come and see the premises, measure up, and send you a fixed, itemised quote within 24 working hours.',

    schema: {
      name: 'Ventilation ductwork installation',
      description:
        'Fabrication, supply and installation of metal ventilation ductwork in Madrid: rectangular galvanised, spiral and pre-insulated panel duct.',
      serviceType: 'Ventilation ductwork installation',
      offers: [
        'Ventilation ductwork installation',
        'Ventilation ductwork supply',
        'Ventilation ductwork assembly',
        'Sheet metal duct fabrication',
        'Industrial ventilation ductwork',
        'Air conditioning ductwork',
        'Made-to-measure HVAC ductwork',
      ],
    },
  },
};
