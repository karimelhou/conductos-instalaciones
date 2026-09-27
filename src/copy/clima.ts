import type { Bi, ServicePageCopy } from './types';

export const clima: Bi<ServicePageCopy> = {
  es: {
    navLabel: 'Climatización',
    title: 'Instalación de climatización y aire acondicionado en Madrid',
    description:
      'Empresa de climatización en Madrid: instalación de aire acondicionado, conductos, splits y VRV para locales comerciales e industria. Pide presupuesto.',
    eyebrow: '03 / Climatización',
    h1: 'Instalación de climatización en Madrid',
    lede:
      'Empresa de climatización en Madrid para locales comerciales, oficinas e industria. Instalamos el equipo y la red de conductos que reparte el aire, y nos ocupamos después del mantenimiento.',
    cardTitle: 'Climatización',
    cardBody:
      'Instalación y mantenimiento de aire acondicionado y climatización para locales comerciales e industria.',
    waMessage: 'Hola, quería información sobre climatización.',

    blocks: [
      {
        h2: 'Climatización y ventilación: por qué van juntas',
        p: [
          'Climatizar es tratar el aire; ventilar es renovarlo. Un local necesita las dos cosas, y el error más caro que vemos es resolverlas por separado, con dos empresas distintas que no hablan entre sí.',
          'Nosotros venimos del conducto, así que la parte que casi siempre se descuida — cómo llega el aire tratado hasta cada rincón del local y cómo vuelve — es precisamente la que mejor hacemos. Un equipo sobredimensionado con una red mal repartida climatiza peor que un equipo justo con los conductos bien calculados.',
        ],
        diagram: 'ventilacion',
      },
      {
        h2: 'Instalación de aire acondicionado',
        p: [
          'Suministramos e instalamos el equipo que corresponda a cada local, y nos encargamos de la instalación completa: unidad exterior, unidades interiores, línea frigorífica, desagües de condensados, conexión eléctrica y puesta en marcha.',
        ],
        subs: [
          {
            h3: 'Splits y multisplit',
            p: 'La solución para locales pequeños y oficinas: una o varias unidades interiores conectadas a una exterior. Rápido de montar y de mantener, y suficiente cuando el local está compartimentado.',
          },
          {
            h3: 'Sistemas VRV / VRF',
            p: 'Caudal de refrigerante variable para locales grandes y edificios con muchas estancias: una exterior alimenta muchas interiores, cada una con su control, y el consumo se ajusta a la demanda real de cada zona.',
          },
          {
            h3: 'Equipos de conductos y rooftop',
            p: 'Una sola máquina que trata el aire y lo reparte por una red de conductos con difusores. Es lo habitual en locales comerciales diáfanos y en naves, y es donde nuestro taller se nota: la red la fabricamos nosotros.',
          },
          {
            h3: 'Climatización industrial',
            p: 'Naves, talleres y espacios de gran volumen, donde el reto no es la potencia sino repartirla: secciones grandes, tiradas largas y difusión pensada para que no haya zonas muertas.',
          },
        ],
        photos: ['cubierta-red-conductos-uta', 'cubierta-panel-preaislado'],
      },
      {
        h2: 'Conductos de climatización a medida',
        p: [
          'La red de distribución es lo que convierte un equipo en una instalación. La calculamos para el caudal de cada zona y la fabricamos en nuestro taller, normalmente en panel preaislado cuando hay que evitar condensaciones y ganar altura libre, o en chapa galvanizada con aislamiento cuando el hueco lo permite.',
          'Incluye difusores, rejillas de impulsión y retorno, compuertas de regulación y el equilibrado final para que todas las zonas reciban lo que les toca.',
        ],
      },
      {
        h2: 'Climatización para locales comerciales',
        p: [
          'Tiendas, oficinas, clínicas y locales de hostelería tienen un problema común: la instalación tiene que ser silenciosa, quedar integrada en el falso techo y montarse sin cerrar el negocio más días de los imprescindibles. Trabajamos por fases y fuera de horario cuando hace falta.',
        ],
      },
      {
        h2: 'Mantenimiento de climatización',
        p: [
          'Una instalación de climatización sin mantenimiento pierde rendimiento y acaba averiándose en el peor momento del verano. Hacemos revisiones periódicas: limpieza y sustitución de filtros, limpieza de baterías y de la unidad exterior, comprobación de presiones y de estanqueidad del circuito, desagües de condensados y verificación de los controles.',
        ],
      },
    ],

    spec: {
      caption: 'Ficha técnica: qué incluye una instalación',
      head: ['Partida', 'Alcance'],
      rows: [
        ['Unidad exterior', 'Suministro, ubicación, bancada y montaje antivibratorio'],
        ['Unidades interiores', 'Split mural, cassette, conductos o fancoil según zona'],
        ['Línea frigorífica', 'Tubería de cobre aislada, vacío y carga del circuito'],
        ['Condensados', 'Desagüe por gravedad o bomba, con sifón'],
        ['Red de conductos', 'Panel preaislado o galvanizado aislado, fabricado a medida'],
        ['Difusión', 'Difusores y rejillas de impulsión y retorno'],
        ['Regulación', 'Compuertas, termostatos y equilibrado de caudales'],
        ['Puesta en marcha', 'Arranque, medición y entrega de documentación'],
      ],
    },

    stepsHeading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Visita y cargas',
        body: 'Vemos el local, medimos y estimamos la carga térmica real por zonas.',
      },
      {
        title: 'Propuesta de equipo',
        body: 'Te proponemos el sistema que encaja: split, VRV o conductos, con su potencia justificada.',
      },
      {
        title: 'Presupuesto',
        body: 'Presupuesto cerrado y detallado, equipo y obra separados, en 24 horas laborables.',
      },
      {
        title: 'Instalación',
        body: 'Montaje del equipo y de la red de conductos, fabricada en nuestro taller.',
      },
      {
        title: 'Puesta en marcha y mantenimiento',
        body: 'Arranque, equilibrado de caudales y plan de revisiones si lo quieres.',
      },
    ],

    faq: [
      {
        q: '¿Hacéis la instalación completa o sólo los conductos?',
        a: 'Las dos cosas. Podemos hacer la instalación completa de climatización, equipo incluido, o solo la parte de aire — conductos, difusión y equilibrado — si el equipo lo pone otro. Esa segunda opción es bastante habitual cuando trabajamos como industrial para una constructora o para otro instalador.',
      },
      {
        q: '¿Qué potencia necesito para mi local?',
        a: 'No se puede decir por metros cuadrados sin mentir. Depende de la orientación, del acristalamiento, de la altura libre, del aislamiento, de cuánta gente hay dentro y de la carga de la iluminación y de los equipos. Lo estimamos en la visita y te justificamos en el presupuesto por qué proponemos esa potencia y no otra.',
      },
      {
        q: '¿Qué diferencia hay entre un multisplit y un sistema VRV?',
        a: 'Un multisplit conecta unas pocas interiores a una exterior y todas trabajan prácticamente a la vez. Un VRV regula el caudal de refrigerante de cada interior por separado, admite muchas más unidades y consume según la demanda real de cada zona. Para un local pequeño el multisplit sobra; a partir de cierto tamaño o número de estancias, el VRV sale mejor.',
      },
      {
        q: '¿Por qué es mejor conducto preaislado en climatización?',
        a: 'Porque el conducto y el aislamiento son la misma pieza. Evita las condensaciones que aparecen cuando pasa aire frío por chapa sin aislar, pesa mucho menos, se monta más rápido y ocupa menos altura que un galvanizado con manta por fuera. En falsos techos bajos suele ser la única solución razonable.',
      },
      {
        q: '¿Cada cuánto hay que hacer el mantenimiento?',
        a: 'Lo razonable en un local comercial son dos revisiones al año, una antes del verano y otra antes del invierno, más la limpieza de filtros con más frecuencia si el ambiente es sucio o hay cocina cerca. Los filtros sucios son la causa número uno de que un equipo enfríe poco y consuma mucho.',
      },
      {
        q: '¿Podéis instalar sin cerrar el negocio?',
        a: 'En la mayoría de los casos sí, trabajando por fases o fuera del horario de apertura. Conviene decirlo antes de presupuestar porque afecta al plazo y al coste.',
      },
    ],

    ctaHeading: 'Pide presupuesto de climatización',
    ctaBody:
      'Vamos a ver el local, estimamos la carga real por zonas y te proponemos el sistema que encaja, con el presupuesto detallado.',

    schema: {
      name: 'Instalación de climatización y aire acondicionado',
      description:
        'Instalación y mantenimiento de climatización en Madrid: aire acondicionado split y VRV, equipos de conductos, red de distribución a medida y climatización industrial.',
      serviceType: 'Instalación de climatización',
      offers: [
        'Instalación de climatización',
        'Instalación de aire acondicionado',
        'Climatización industrial',
        'Climatización de local comercial',
        'Conductos de climatización a medida',
        'Mantenimiento de climatización',
        'Climatización y ventilación',
      ],
    },
  },

  en: {
    navLabel: 'Air conditioning',
    title: 'Air Conditioning Installation in Madrid | Commercial HVAC',
    description:
      'Air conditioning company in Madrid: installation of split and VRV systems, ducted units and distribution ductwork for commercial and industrial premises.',
    eyebrow: '03 / Air conditioning',
    h1: 'Air conditioning installation in Madrid',
    lede:
      'An air conditioning company in Madrid for commercial units, offices and industry. We install the equipment and the duct network that distributes the air, and we maintain it afterwards.',
    cardTitle: 'Air conditioning',
    cardBody:
      'Installation and maintenance of air conditioning for commercial units and industrial premises.',
    waMessage: "Hello, I'd like information about air conditioning.",

    blocks: [
      {
        h2: 'Air conditioning and ventilation: why they belong together',
        p: [
          'Air conditioning treats the air; ventilation replaces it. A building needs both, and the most expensive mistake we see is solving them separately, with two firms who never speak to each other.',
          'We come from the ductwork side, so the part that nearly always gets neglected — how treated air reaches every corner of the space and how it comes back — is exactly the part we do best. An oversized unit with a badly distributed network performs worse than a modest unit with properly sized ducts.',
        ],
        diagram: 'ventilacion',
      },
      {
        h2: 'Air conditioning installation',
        p: [
          'We supply and install the equipment each building calls for, and handle the whole installation: outdoor unit, indoor units, refrigerant pipework, condensate drains, electrical connection and commissioning.',
        ],
        subs: [
          {
            h3: 'Split and multi-split',
            p: 'The answer for small units and offices: one or several indoor units connected to one outdoor unit. Quick to install and maintain, and enough when the space is partitioned.',
          },
          {
            h3: 'VRV / VRF systems',
            p: 'Variable refrigerant flow for large premises and buildings with many rooms: one outdoor unit serves many indoor units, each with its own control, and consumption follows the real demand of each zone.',
          },
          {
            h3: 'Ducted and rooftop units',
            p: 'A single machine that treats the air and distributes it through a duct network with diffusers. It is the norm in open-plan commercial units and warehouses, and it is where our workshop shows: we fabricate the network ourselves.',
          },
          {
            h3: 'Industrial air conditioning',
            p: 'Warehouses, workshops and large-volume spaces, where the challenge is not capacity but distributing it: large sections, long runs, and diffusion planned so there are no dead zones.',
          },
        ],
        photos: ['cubierta-red-conductos-uta', 'cubierta-panel-preaislado'],
      },
      {
        h2: 'Made-to-measure HVAC ductwork',
        p: [
          'The distribution network is what turns a machine into an installation. We size it for the airflow of each zone and fabricate it in our workshop, usually in pre-insulated panel where condensation has to be avoided and headroom matters, or in insulated galvanised sheet where there is room.',
          'That includes diffusers, supply and return grilles, balancing dampers and the final commissioning so every zone gets its share.',
        ],
      },
      {
        h2: 'Air conditioning for commercial premises',
        p: [
          'Shops, offices, clinics and hospitality all share one problem: the installation has to be quiet, has to sit inside the false ceiling, and has to go in without closing the business for any longer than strictly necessary. We work in phases and outside opening hours where needed.',
        ],
      },
      {
        h2: 'Air conditioning maintenance',
        p: [
          'An air conditioning system without maintenance loses performance and eventually fails at the worst moment of the summer. We carry out periodic servicing: cleaning and replacing filters, cleaning coils and the outdoor unit, checking pressures and circuit tightness, condensate drains, and verifying the controls.',
        ],
      },
    ],

    spec: {
      caption: 'Technical data: what an installation covers',
      head: ['Item', 'Scope'],
      rows: [
        ['Outdoor unit', 'Supply, siting, base frame and anti-vibration mounting'],
        ['Indoor units', 'Wall split, cassette, ducted or fan coil by zone'],
        ['Refrigerant pipework', 'Insulated copper line, evacuation and charging'],
        ['Condensate', 'Gravity or pumped drain, with a trap'],
        ['Duct network', 'Pre-insulated panel or insulated galvanised, made to measure'],
        ['Air distribution', 'Supply and return diffusers and grilles'],
        ['Control', 'Dampers, thermostats and airflow balancing'],
        ['Commissioning', 'Start-up, measurement and handover documentation'],
      ],
    },

    stepsHeading: 'How we work',
    steps: [
      {
        title: 'Visit and loads',
        body: 'We see the premises, measure, and estimate the real heat load zone by zone.',
      },
      {
        title: 'Equipment proposal',
        body: 'We propose the system that fits: split, VRV or ducted, with the capacity justified.',
      },
      {
        title: 'Quote',
        body: 'A fixed, itemised quote with equipment and labour separated, within 24 working hours.',
      },
      {
        title: 'Installation',
        body: 'Equipment and duct network installed, the network fabricated in our workshop.',
      },
      {
        title: 'Commission and maintain',
        body: 'Start-up, airflow balancing and a service plan if you want one.',
      },
    ],

    faq: [
      {
        q: 'Do you do the whole installation, or only the ductwork?',
        a: 'Both. We can carry out a complete air conditioning installation including the equipment, or only the air side — ducts, diffusion and balancing — if someone else supplies the plant. That second option is common when we work as a subcontractor for a main contractor or another installer.',
      },
      {
        q: 'What capacity do I need for my premises?',
        a: 'Nobody can tell you from the floor area without guessing. It depends on orientation, glazing, headroom, insulation, how many people are inside, and the load from lighting and equipment. We estimate it on the visit and justify in the quote why we propose that capacity and not another.',
      },
      {
        q: 'What is the difference between a multi-split and a VRV system?',
        a: 'A multi-split connects a few indoor units to one outdoor unit and they all effectively run together. A VRV regulates the refrigerant flow to each indoor unit separately, takes many more units, and consumes according to the real demand of each zone. For a small unit a multi-split is plenty; above a certain size or number of rooms, VRV works out better.',
      },
      {
        q: 'Why is pre-insulated duct better for air conditioning?',
        a: 'Because the duct and the insulation are the same part. It avoids the condensation you get when cold air passes through uninsulated sheet, it weighs far less, it goes up faster, and it takes less height than galvanised duct wrapped on the outside. In shallow false ceilings it is often the only sensible option.',
      },
      {
        q: 'How often should it be serviced?',
        a: 'Two visits a year is sensible in a commercial unit, one before summer and one before winter, plus more frequent filter cleaning if the environment is dirty or there is a kitchen nearby. Dirty filters are the number one reason a unit cools poorly and costs a fortune to run.',
      },
      {
        q: 'Can you install without closing the business?',
        a: 'In most cases yes, working in phases or outside opening hours. It is worth saying before we quote, because it affects both the programme and the cost.',
      },
    ],

    ctaHeading: 'Get an air conditioning quote',
    ctaBody:
      'We come and see the premises, estimate the real load zone by zone, and propose the system that fits with an itemised quote.',

    schema: {
      name: 'Air conditioning installation',
      description:
        'Air conditioning installation and maintenance in Madrid: split and VRV systems, ducted units, made-to-measure distribution ductwork and industrial air conditioning.',
      serviceType: 'Air conditioning installation',
      offers: [
        'Air conditioning installation',
        'Split and VRV systems',
        'Industrial air conditioning',
        'Commercial air conditioning',
        'Made-to-measure HVAC ductwork',
        'Air conditioning maintenance',
        'Ventilation and air conditioning',
      ],
    },
  },
};
