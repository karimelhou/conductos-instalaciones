import type { Bi, ServicePageCopy } from './types';

export const humos: Bi<ServicePageCopy> = {
  es: {
    navLabel: 'Extracción de humos',
    title: 'Extracción de humos de cocina en Madrid | Hostelería',
    description:
      'Extracción de humos de cocina en Madrid llave en mano: campana a medida, plenum, filtros, conducto, ventilador y salida a cubierta. Pide presupuesto.',
    eyebrow: '02 / Extracción',
    h1: 'Extracción de humos de cocina en Madrid',
    lede:
      'Extracción de humos de cocina en Madrid llave en mano: campana a medida, plenum, filtros, conducto, ventilador y salida a cubierta. Un solo interlocutor para toda la instalación.',
    cardTitle: 'Extracción de cocinas',
    cardBody:
      'Instalación completa de extracción de humos para restaurantes y hostelería, de la campana a la descarga en cubierta.',
    waMessage: 'Hola, necesito presupuesto para extracción de humos de cocina.',

    blocks: [
      {
        h2: 'Instalación completa de extracción de humos, de la campana a la cubierta',
        p: [
          'Una extracción de cocina no es una campana: es una cadena en la que cada eslabón depende del anterior. Si la campana no capta, da igual el ventilador que pongas. Si el conducto está mal dimensionado, el ventilador va forzado y suena. Si la descarga está mal resuelta, tendrás quejas de los vecinos por mucho que dentro funcione.',
          'Por eso lo hacemos entero: medimos la línea de cocción, fabricamos la campana, dimensionamos el conducto y el ventilador para el caudal que de verdad hace falta y resolvemos la salida al exterior.',
        ],
        diagram: 'extraccion',
      },
      {
        h2: 'Cada elemento de la instalación',
        subs: [
          {
            h3: 'Campana extractora industrial a medida',
            p: 'La fabricamos en nuestro taller en acero inoxidable AISI 304, a la medida exacta de tu línea de cocción y con el vuelo necesario para captar bien. Mural, central o de tipo caja, con iluminación estanca y canal perimetral de recogida de grasas.',
          },
          {
            h3: 'Plenum y filtros de lamas',
            p: 'Los filtros de lamas (deflectores) separan la grasa del aire por inercia antes de que entre en el conducto. Van inclinados y son desmontables para poder lavarlos en el lavavajillas, que es lo que de verdad hace que una instalación se mantenga limpia.',
          },
          {
            h3: 'Conductos de extracción de cocina',
            p: 'En inoxidable o galvanizado según el tramo y la normativa que aplique, con las juntas selladas y registros para poder limpiarlos por dentro. La sección se calcula para mantener la velocidad de arrastre: demasiado lenta y la grasa se deposita, demasiado rápida y la instalación ruge.',
          },
          {
            h3: 'Ventilador centrífugo y caja de ventilación',
            p: 'Ventilador dimensionado para el caudal y la pérdida de carga reales de tu instalación, no para el catálogo. Montado sobre antivibratorios y, cuando hay vecinos cerca, en caja insonorizada.',
          },
          {
            h3: 'Salida y descarga en cubierta',
            p: 'Montante por patio o fachada y descarga por encima de la cubierta con sombrerete. Es la parte que más problemas de licencia y de vecindad genera, y la que conviene resolver bien desde el principio.',
          },
        ],
        photos: [
          'cocina-campana-inox',
          'montante-inox-patio',
          'cubierta-extractores-sombreretes',
        ],
      },
      {
        h2: 'Sistemas de extracción para restaurantes y hostelería',
        p: [
          'La mayoría de nuestros trabajos de extracción son para restaurantes, bares, hoteles y cocinas centrales. Son instalaciones que se hacen contrarreloj, muchas veces en un local que tiene fecha de apertura, y casi siempre con el resto de gremios trabajando a la vez.',
          'También montamos la compensación de aire: si sacas aire y no metes, la cocina se queda en depresión, las puertas cuestan de abrir y la campana deja de captar. Es un detalle que se olvida a menudo y que se nota desde el primer día.',
        ],
      },
      {
        h2: 'Instalación de conductos para cocinas industriales',
        p: [
          'Si ya tienes campana y lo que necesitas es el conducto, el montante y la descarga, también lo hacemos como trabajo independiente. Es frecuente en traspasos de local: la cocina está, pero la extracción no cumple o no da caudal.',
        ],
      },
      {
        h2: 'Fabricación de campanas de acero inoxidable a medida',
        p: [
          'Esto es lo que nos diferencia de quien solo instala: la campana la hacemos nosotros. Plegamos la chapa en el taller, así que la medida es la que necesita tu cocina y no la que había en catálogo, y una campana en un rincón con una columna en medio deja de ser un problema.',
        ],
        photos: ['taller-campana-plegadora'],
      },
      {
        h2: 'Limpieza de conductos de extracción de cocina',
        p: [
          'La grasa que se deposita dentro del conducto es el principal riesgo de incendio de una cocina profesional, y es también la razón por la que una campana que captaba bien deja de hacerlo. Hacemos limpiezas periódicas con desengrasado del conducto, de la campana y de los filtros, y dejamos registros de limpieza para que la instalación se pueda mantener.',
        ],
      },
    ],

    spec: {
      caption: 'Ficha técnica: materiales y elementos',
      head: ['Elemento', 'Especificación'],
      rows: [
        ['Campana', 'Acero inoxidable AISI 304, fabricada a medida en taller'],
        ['Filtros', 'Lamas inox desmontables, lavables en lavavajillas'],
        ['Recogida de grasas', 'Canal perimetral con recipiente extraíble'],
        ['Conducto', 'Inoxidable o galvanizado según tramo, juntas selladas'],
        ['Registros', 'Registros de limpieza en cambios de dirección'],
        ['Ventilador', 'Centrífugo, dimensionado a caudal y pérdida de carga reales'],
        ['Antivibratorios', 'Montaje elástico y caja insonorizada si hay vecinos'],
        ['Descarga', 'Por encima de cubierta, con sombrerete'],
      ],
    },

    stepsHeading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Visita',
        body: 'Vemos la cocina, medimos la línea de cocción y estudiamos por dónde puede salir el conducto.',
      },
      {
        title: 'Cálculo',
        body: 'Calculamos el caudal necesario y con él dimensionamos campana, conducto y ventilador.',
      },
      {
        title: 'Presupuesto',
        body: 'Presupuesto cerrado y detallado por partidas, en menos de 24 horas laborables.',
      },
      {
        title: 'Fabricación',
        body: 'Campana y conductos fabricados a medida en nuestro taller.',
      },
      {
        title: 'Montaje y puesta en marcha',
        body: 'Montaje, sellado, arranque y comprobación de que la campana capta de verdad.',
      },
    ],

    faq: [
      {
        q: '¿A qué altura tiene que salir la chimenea de extracción de una cocina?',
        a: 'La regla general es descargar por encima de la cubierta del edificio y separado de ventanas y de tomas de aire de los vecinos, para que los humos no vuelvan a entrar. La altura y la distancia concretas dependen de la ordenanza municipal de tu ayuntamiento y de la altura de los edificios colindantes, así que es de las primeras cosas que miramos en la visita. Es la parte que más problemas de licencia genera.',
      },
      {
        q: '¿Hace falta licencia para instalar la extracción de humos de un restaurante?',
        a: 'Normalmente sí: la extracción forma parte de la licencia de actividad del local, y si el conducto sube por fachada o patio suele hacer falta además autorización de la comunidad de propietarios. Nosotros ejecutamos la instalación conforme a lo proyectado y te damos la documentación de lo instalado; la tramitación de la licencia la lleva el técnico que firma el proyecto de actividad.',
      },
      {
        q: '¿Cuánto cuesta la extracción de humos de un restaurante en Madrid?',
        a: 'El rango es muy amplio porque lo que manda es el recorrido del conducto, no la cocina. Una cocina pequeña en planta baja con salida directa a patio no tiene nada que ver con un local en un edificio de seis alturas donde hay que subir el montante por fachada. Por eso vamos a verlo antes: la visita y el presupuesto detallado son gratuitos.',
      },
      {
        q: '¿Fabricáis campanas de acero inoxidable a medida?',
        a: 'Sí, es una de las cosas que hacemos en nuestro propio taller. Plegamos la chapa inoxidable a la medida exacta de tu línea de cocción, con el vuelo, la iluminación y el canal de recogida de grasas que necesites. Eso permite resolver cocinas con columnas, rincones o techos irregulares donde una campana de catálogo no encaja.',
      },
      {
        q: '¿Podéis sacar el conducto por el patio de luces o sólo por la fachada?',
        a: 'Se puede por patio y por fachada, y hemos hecho las dos. Lo que decide no es tanto lo técnico como los permisos: el patio suele ser elemento común y necesita acuerdo de la comunidad, y la fachada puede tener condicionantes estéticos del ayuntamiento. Lo miramos en la visita antes de presupuestar.',
      },
      {
        q: '¿Cada cuánto hay que limpiar los conductos de extracción?',
        a: 'Depende del tipo de cocina y de las horas de servicio: una freiduría o una parrilla ensucian muchísimo más que una cocina de horno. Como orientación, entre dos y cuatro veces al año en hostelería con servicio diario. Si al abrir un registro el conducto tiene una capa de grasa apreciable, vas tarde.',
      },
      {
        q: '¿Podéis trabajar de noche para no cerrar el restaurante?',
        a: 'Sí. Buena parte de las reformas de extracción las hacemos fuera del horario de servicio o por fases, justamente para que el local no pare. Hay que decirlo antes de presupuestar porque cambia el coste y el plazo.',
      },
    ],

    ctaHeading: 'Pide presupuesto para tu extracción de cocina',
    ctaBody:
      'Vamos a ver la cocina, medimos la línea de cocción y estudiamos la salida de humos. Presupuesto cerrado en menos de 24 horas laborables.',

    schema: {
      name: 'Extracción de humos de cocina',
      description:
        'Instalación completa de extracción de humos para cocinas industriales y hostelería en Madrid: campana a medida, filtros, conducto, ventilador y descarga en cubierta.',
      serviceType: 'Extracción de humos de cocina',
      offers: [
        'Extracción de humos de cocina',
        'Instalación de campanas extractoras industriales',
        'Fabricación de campanas de acero inoxidable a medida',
        'Conductos de extracción de cocina',
        'Sistemas de extracción para restaurantes',
        'Montaje de extracción de humos',
        'Limpieza de conductos de extracción',
      ],
    },
  },

  en: {
    navLabel: 'Kitchen extraction',
    title: 'Commercial Kitchen Extraction in Madrid | Hospitality',
    description:
      'Turnkey commercial kitchen extraction in Madrid: bespoke hood, plenum, filters, ductwork, fan and roof discharge. Request a quote.',
    eyebrow: '02 / Extraction',
    h1: 'Commercial kitchen extraction in Madrid',
    lede:
      'Turnkey commercial kitchen extraction in Madrid: bespoke hood, plenum, filters, ductwork, fan and roof discharge. One point of contact for the whole installation.',
    cardTitle: 'Kitchen extraction',
    cardBody:
      'Complete kitchen extraction for restaurants and hospitality, from the hood through to the roof discharge.',
    waMessage: "Hello, I need a quote for commercial kitchen extraction.",

    blocks: [
      {
        h2: 'Complete kitchen extraction, from the hood to the roof',
        p: [
          'Kitchen extraction is not a hood: it is a chain in which every link depends on the one before it. If the hood does not capture, the fan you fit makes no difference. If the duct is badly sized, the fan is forced and it roars. If the discharge is poorly resolved you will get complaints from the neighbours however well it works inside.',
          'So we do all of it: measure the cooking line, fabricate the hood, size the duct and the fan for the airflow actually required, and resolve the discharge to the outside.',
        ],
        diagram: 'extraccion',
      },
      {
        h2: 'Each part of the installation',
        subs: [
          {
            h3: 'Bespoke commercial extraction hood',
            p: 'We make it in our own workshop in AISI 304 stainless, to the exact size of your cooking line and with the overhang it needs to capture properly. Wall, island or box type, with sealed lighting and a perimeter grease channel.',
          },
          {
            h3: 'Plenum and baffle filters',
            p: 'Baffle filters separate grease from the air by inertia before it reaches the duct. They sit at an angle and lift out so they can go through the dishwasher, which is what actually keeps an installation clean.',
          },
          {
            h3: 'Kitchen extraction ductwork',
            p: 'Stainless or galvanised depending on the run and the regulations that apply, with sealed joints and access panels so it can be cleaned internally. The section is sized to hold the transport velocity: too slow and grease settles, too fast and the installation roars.',
          },
          {
            h3: 'Centrifugal fan and fan box',
            p: 'A fan sized for the real airflow and pressure loss of your installation, not for the catalogue. Mounted on anti-vibration mounts and, where there are neighbours close by, in an acoustic box.',
          },
          {
            h3: 'Riser and roof discharge',
            p: 'A riser up a lightwell or facade and discharge above roof level with a cowl. This is the part that causes most of the licensing and neighbour problems, and the part worth getting right from the start.',
          },
        ],
        photos: [
          'cocina-campana-inox',
          'montante-inox-patio',
          'cubierta-extractores-sombreretes',
        ],
      },
      {
        h2: 'Extraction systems for restaurants and hospitality',
        p: [
          'Most of our extraction work is for restaurants, bars, hotels and production kitchens. These jobs run against the clock, usually in premises that already have an opening date, and nearly always with every other trade on site at the same time.',
          'We also install make-up air: if you take air out and put none back, the kitchen goes into depression, the doors become hard to open and the hood stops capturing. It is a detail that gets forgotten often and shows from day one.',
        ],
      },
      {
        h2: 'Ductwork for commercial kitchens',
        p: [
          'If you already have the hood and what you need is the duct, the riser and the discharge, we do that as a standalone job too. It is common on a change of tenancy: the kitchen is there, but the extraction does not comply or does not move enough air.',
        ],
      },
      {
        h2: 'Bespoke stainless steel hood fabrication',
        p: [
          'This is what separates us from an installer: we make the hood. We fold the stainless in our own workshop, so the size is the one your kitchen needs rather than the one in the catalogue, and a hood in a corner with a column in the middle of it stops being a problem.',
        ],
        photos: ['taller-campana-plegadora'],
      },
      {
        h2: 'Kitchen extraction duct cleaning',
        p: [
          'Grease deposited inside the duct is the single biggest fire risk in a professional kitchen, and it is also why a hood that used to capture well stops doing so. We carry out periodic cleaning, degreasing the duct, the hood and the filters, and we fit access panels so the installation can actually be maintained.',
        ],
      },
    ],

    spec: {
      caption: 'Technical data: materials and components',
      head: ['Item', 'Specification'],
      rows: [
        ['Hood', 'AISI 304 stainless steel, made to measure in our workshop'],
        ['Filters', 'Removable stainless baffles, dishwasher safe'],
        ['Grease collection', 'Perimeter channel with removable cup'],
        ['Ductwork', 'Stainless or galvanised by run, sealed joints'],
        ['Access panels', 'Cleaning access at every change of direction'],
        ['Fan', 'Centrifugal, sized to real airflow and pressure loss'],
        ['Vibration', 'Resilient mounting, acoustic box where there are neighbours'],
        ['Discharge', 'Above roof level, with a cowl'],
      ],
    },

    stepsHeading: 'How we work',
    steps: [
      {
        title: 'Site visit',
        body: 'We see the kitchen, measure the cooking line and work out where the duct can run.',
      },
      {
        title: 'Calculation',
        body: 'We calculate the airflow needed and size the hood, duct and fan from it.',
      },
      {
        title: 'Quote',
        body: 'A fixed, itemised quote within 24 working hours.',
      },
      {
        title: 'Fabrication',
        body: 'Hood and ductwork made to measure in our workshop.',
      },
      {
        title: 'Install and commission',
        body: 'Installation, sealing, start-up and a check that the hood really captures.',
      },
    ],

    faq: [
      {
        q: 'How high does a kitchen extraction flue have to discharge?',
        a: 'The general rule is to discharge above the roof of the building and away from windows and neighbours air intakes, so the fumes do not come back in. The exact height and distance depend on your local council byelaw and the height of the adjoining buildings, so it is one of the first things we look at on the visit. It is the part that causes most licensing problems.',
      },
      {
        q: 'Do you need a licence to install kitchen extraction in a restaurant?',
        a: 'Usually yes: the extraction forms part of the premises activity licence, and if the duct rises up a facade or lightwell you generally also need the consent of the building owners association. We carry out the installation as designed and hand over the as-built documentation; the licence application itself is handled by the technician who signs the activity project.',
      },
      {
        q: 'How much does restaurant kitchen extraction cost in Madrid?',
        a: 'The range is wide because what drives it is the duct route, not the kitchen. A small ground-floor kitchen discharging straight into a yard is nothing like a unit in a six-storey building where the riser has to go up the facade. That is why we come and look first: the visit and the itemised quote are free.',
      },
      {
        q: 'Do you make stainless steel hoods to measure?',
        a: 'Yes, it is one of the things we do in our own workshop. We fold stainless sheet to the exact size of your cooking line, with the overhang, lighting and grease channel you need. That lets us solve kitchens with columns, corners or uneven ceilings where a catalogue hood simply will not fit.',
      },
      {
        q: 'Can the duct go up a lightwell, or only up the facade?',
        a: 'Either, and we have done both. What decides it is usually consent rather than engineering: a lightwell is normally common property and needs the owners association to agree, and a facade can carry planning constraints from the council. We check this on the visit before quoting.',
      },
      {
        q: 'How often should extraction ductwork be cleaned?',
        a: 'It depends on the type of kitchen and the service hours: a fryer or a charcoal grill soils a duct far faster than an oven kitchen. As a guide, two to four times a year in hospitality with daily service. If you open an access panel and there is a noticeable layer of grease, you have left it too long.',
      },
      {
        q: 'Can you work at night so the restaurant does not have to close?',
        a: 'Yes. We do a good share of extraction refurbishments outside service hours or in phases, precisely so the business does not stop. It needs saying before we quote, because it changes both the cost and the programme.',
      },
    ],

    ctaHeading: 'Get a quote for your kitchen extraction',
    ctaBody:
      'We come and see the kitchen, measure the cooking line and work out the flue route. Fixed quote within 24 working hours.',

    schema: {
      name: 'Commercial kitchen extraction',
      description:
        'Complete kitchen extraction installation for commercial kitchens and hospitality in Madrid: bespoke hood, filters, ductwork, fan and roof discharge.',
      serviceType: 'Commercial kitchen extraction',
      offers: [
        'Commercial kitchen extraction',
        'Industrial extraction hood installation',
        'Bespoke stainless steel hood fabrication',
        'Kitchen extraction ductwork',
        'Extraction systems for restaurants',
        'Fume extraction installation',
        'Extraction duct cleaning',
      ],
    },
  },
};
