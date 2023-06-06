export default {
  global: {
    componenteFormativo: 'Supervisión de sistemas de recolección',
    descripcionCurso:
      'El manejo de residuos sólidos es una de las actividades elementales para la gestión de impactos asociados a la contaminación del suelo, del agua y del aire; el manejo de residuos debe hacerse en base a las características particulares de cada uno. En este componente se realizará un enfoque desde la identificación del residuo hasta la normatividad base de manejo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Residuos sólidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aforo de residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos claves',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'El aforo como mecanismo de medición en el servicio público de aseo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Componentes requeridos en el servicio de aseo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Lectura de planos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mapas y nomenclatura territorial',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reglamento técnico de agua y saneamiento básico: título F',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aspectos generales de los sistemas de aseo urbano',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Almacenamiento y presentación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Recomendaciones para el almacenamiento y presentación de residuos sólidos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Elementos de protección personal de los operarios del prestador del servicio',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Reglamento técnico de agua y saneamiento básico: título F',
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      tipo: 'Normatividad',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=65994',
    },
    {
      tema: 'Reglamento técnico de agua y saneamiento básico: título F',
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.',
      tipo: 'Normatividad',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62511',
    },
    {
      tema: 'Componentes requeridos en el servicio de aseo',
      referencia:
        'Decreto 1077 de 2015. [Ministerio de Vivienda, Ciudad y Territorio]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Mayo 26 de 2015.',
      tipo: 'Normatividad',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
    },
    {
      tema: 'Reglamento técnico de agua y saneamiento básico: título F',
      referencia:
        'Decreto 1713 de 2002. [Ministerio de Desarrollo Económico]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. Agosto 6 de 2002.',
      tipo: 'Normatividad',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2002decreto1713.pdf',
    },
    {
      tema: 'Residuos sólidos',
      referencia:
        'Decreto 4741 de 2005. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      tipo: 'Normatividad',
      link:
        'http://www.ideam.gov.co/documents/51310/526371/Decreto+4741+2005+PREVENCION+Y+MANEJO+DE+REIDUOS+PELIGROSOS+GENERADOS+EN+GESTION+INTEGRAL.pdf/491df435-061e-4d27-b40f-c8b3afe25705',
    },
    {
      tema: 'Residuos sólidos',
      referencia:
        'La Prensa Gráfica Noticias de El Salvador. (2020, 15 febrero). Residuos ahogan la paradisíaca isla colombiana de San Andrés [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9eGfoFpM_ws',
    },
    {
      tema: 'Aforo de residuos sólidos',
      referencia:
        'Resolución 442 de 2008. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se establecen las metodologías de aforos para pequeños y grandes productores de residuos sólidos del servicio de aseo. Julio 29 de 2008.',
      tipo: 'Normatividad',
      link:
        'https://normas.cra.gov.co/gestor/docs/resolucion_cra_0442_2008.htm',
    },
    {
      tema: 'Componentes requeridos en el servicio de aseo',
      referencia:
        'Ministerio de Transporte. (2015). Manuales de señalización vial. Ministerio de Transporte.',
      tipo: 'Documento',
      link:
        'https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/',
    },
  ],
  glosario: [
    {
      termino: 'Frecuencia del servicio',
      significado:
        '“es el número de veces, en un periodo definido, que se presta el servicio público de aseo en sus actividades de barrido, limpieza, recolección y transporte, corte de césped y poda de árboles” (Decreto 2981, 2013, p.3).',
    },
    {
      termino: 'Gestión integral de residuos sólidos',
      significado:
        'es el conjunto de actividades encaminadas a reducir la generación de residuos, a realizar el aprovechamiento teniendo en cuenta sus características, volumen, procedencia, costos, tratamiento con fines de valorización energética, posibilidades de aprovechamiento y comercialización. También incluye el tratamiento y disposición final de los residuos no aprovechables (Decreto 2981, 2013, p.3).',
    },
    {
      termino: 'Multiusuarios del servicio público de aseo',
      significado:
        'son todos aquellos suscriptores agrupados en unidades inmobiliarias, centros habitacionales, conjuntos residenciales, condominios o similares, bajo el régimen de propiedad horizontal vigente o concentrados en centros comerciales o similares, que se caracterizan porque presentan en forma conjunta sus residuos sólidos a la persona prestadora del servicio en los términos del presente decreto o las normas que lo modifiquen, sustituyan o adicionen y que hayan solicitado el aforo de sus residuos para que esta medición sea la base de la facturación del servicio público de aseo. La persona prestadora del servicio facturará a cada inmueble en forma individual, en un todo, de acuerdo con la regulación que se expida para este fin (Decreto 2981, 2013, p.4).',
    },
    {
      termino: 'Persona prestadora del servicio público de aseo',
      significado:
        '“es aquella encargada de una o varias actividades de la prestación del servicio público de aseo, en los términos del Artículo 15 de la Ley 142 de 1994 y demás que la modifiquen o complementen” (Decreto 2981, 2013, p.4).',
    },
    {
      termino: 'Plan de Gestión Integral de Residuos Sólidos (PGIRS)',
      significado:
        'es el instrumento de planeación municipal o regional que contiene un conjunto ordenado de objetivos, metas, programas, proyectos, actividades y recursos, definidos por uno o más entes territoriales, para el manejo de los residuos sólidos, basado en la política de gestión integral de los mismos, el cual se ejecutará durante un período determinado, basándose en un diagnóstico inicial, en su proyección hacia el futuro y en un plan financiero viable que permita garantizar el mejoramiento continuo del manejo de residuos y la prestación del servicio de aseo a nivel municipal o regional, evaluado a través de la medición de resultados. Corresponde a la entidad territorial la formulación, implementación, evaluación, seguimiento y control, y actualización del PGIRS (Decreto 2981, 2013, p.4).',
    },
    {
      termino: 'Presentación de los residuos sólidos',
      significado:
        'es la actividad del usuario de colocar los residuos sólidos, debidamente almacenados, para la recolección por parte de la persona prestadora del servicio público de aseo. La presentación debe hacerse en el lugar e infraestructura prevista para ello, bien sea en el área pública correspondiente o en el sitio de presentación conjunta, en el caso de multiusuarios y grandes productores (Decreto 2981, 2013, p.5).',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión de regulación de agua potable y saneamiento básico. (2012, 2 agosto). Concepto 43851 de 2012 CRA - Comisión de Regulación de Agua Potable y Saneamiento Básico - Colombia. www.redjurista.com.',
      link:
        'https://www.redjurista.com/Documents/concepto_43851_de_2012_cra_-_comision_de_regulacion_de_agua_potable_y_saneamiento_basico.aspx#/',
    },
    {
      referencia:
        'Comisión de regulación de agua potable y saneamiento básico. (s. f.). ¿Quiénes somos?',
      link: 'https://cra.gov.co/seccion/nuestra-entidad/quienes-somos.html',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Centro de Antioquia. (2000). Manual para el manejo de los residuos sólidos orgánicos e inorgánicos de la Plaza Minorista José María Villa del municipio de Medellín. Subdirección Ambiental.',
      link:
        'https://www.corantioquia.gov.co/ciadoc/GESTI%C3%93N%20AMBIENTAL/GA_CN_1904_1999.pdf',
    },
    {
      referencia:
        'Decreto 2676 de 2000. [Ministerios de Salud]. Por el cual se reglamenta la gestión integral de los residuos hospitalarios y similares. Diciembre 22 de 2000.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-2676-de-2000.pdf',
    },
    {
      referencia:
        'Decreto 1713 de 2002. [Ministerio de Desarrollo Económico]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. Agosto 6 de 2002.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1713_2002.htm',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      link:
        'http://www.ideam.gov.co/documents/51310/526371/Decreto+4741+2005+PREVENCION+Y+MANEJO+DE+REIDUOS+PELIGROSOS+GENERADOS+EN+GESTION+INTEGRAL.pdf/491df435-061e-4d27-b40f-c8b3afe25705',
    },
    {
      referencia:
        'Decreto 2981 de 2013. [Ministerio de Vivienda, Ciudad y Territorio]. Por el cual se reglamenta la prestación del servicio público de aseo. Diciembre 20 de 2013.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/2020-08/decreto-2981-de-2013-reglamentario-del-servicio-publico-de-aseo.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'Decreto 1077 de 2015. [Ministerio de Vivienda, Ciudad y Territorio]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Mayo 26 de 2015.',
      link:
        'https://minvivienda.gov.co/sites/default/files/normativa/1077%20-%202015.pdf',
    },
    {
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi. (2018). Formatos y escalas de mapas. Gov.co.',
      link:
        'https://www.igac.gov.co/es/contenido/areas-estrategicas/formatos-y-escalas-de-mapas',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi y Ministerio de Educación. (2018). Gráficos y mapas conceptuales sobre definición de nomenclatura urbana.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/10091/T7754A.pdf?sequence=11&isAllowed=y',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi. (2021). Especificaciones técnicas para la generación de cartografía básica. Gov.co.',
      link:
        'https://www.igac.gov.co/es/contenido/areas-estrategicas/especificaciones-tecnicas-para-la-generacion-de-cartografia-basica',
    },
    {
      referencia:
        'Instituto Geográfico Nacional. (s.f.). Conceptos cartográficos.',
      link:
        'https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto/descargas/Conceptos_Cartograficos_def.pdf',
    },
    {
      referencia:
        'La Prensa Gráfica Noticias de El Salvador. (2020, 15 febrero). Residuos ahogan la paradisíaca isla colombiana de San Andrés [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=9eGfoFpM_ws&feature=youtu.be',
    },
    {
      referencia:
        'Ley 142 de 1994. [Congreso de la República]. Por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones. Julio 11 de 1994. DO. Nº 41.433.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=2752',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2012a). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico – RAS. Título F Sistemas de Aseo Urbano. Viceministerio de Agua y Saneamiento Básico.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/titulo-f.pdf',
    },
    {
      referencia:
        'Resolución 236 de 2002. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se establece la metodología para la realización de aforos a multiusuarios y se modifica la Resolución 233 de 2002. Bogotá. Colombia. Diciembre 3 de 2002.',
      link:
        'http://www.avancejuridico.com/actualidad/documentosoficiales/2002/45019/r_cra_0236_2002.html#:~:text=RESOLUCION%20CRA%20236%20DE%202002&text=Por%20la%20cual%20se%20establece,la%20Resoluci%C3%B3n%20233%20de%202002.&text=CONSIDERANDO%3A,la%20finalidad%20social%20del%20Estado.',
    },
    {
      referencia:
        'Resolución 351 de 2005. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se establecen los regímenes de regulación tarifaria a los que deben someterse las personas prestadoras del servicio público de aseo y la metodología que deben utilizar para el cálculo de las tarifas del servicio de aseo de residuos ordinarios y se dictan otras disposiciones. Diciembre 20 de 2005.',
      link:
        'https://www.redjurista.com/Documents/resolucion_351_de_2005_cra_-_comision_de_regulacion_de_agua_potable_y_saneamiento_basico.aspx#/',
    },
    {
      referencia:
        'Resolución 352 de 2005. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se definen los parámetros para la estimación del consumo en el marco de la prestación del servicio público domiciliario de aseo y se dictan otras disposiciones. Diciembre 20 de 2005.',
      link: 'https://cra.gov.co/documents/Resoluciones_PDF20056000003524.pdf',
    },
    {
      referencia:
        'Resolución 442 de 2008. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se establecen las metodologías de aforos para pequeños y grandes productores de residuos sólidos del servicio de aseo. Julio 29 de 2008.',
      link:
        'https://normas.cra.gov.co/gestor/docs/resolucion_cra_0442_2008.htm',
    },
    {
      referencia:
        'Resolución 806 de 2017. [Comisión de regulación de agua potable y saneamiento básico]. Por la cual se presenta el proyecto de resolución "Por la cual se modifica y adiciona parcialmente la Resolución CRA 351 de 2005 y se modifican parcialmente las Resoluciones CRA 352 de 2005 y CRA 482 de 2009”. Agosto 29 de 2017.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=71224&dt=S',
    },
    {
      referencia:
        'Secretaría Distrital de Movilidad. (2017, 20 diciembre). Infraestructura de Datos Espaciales de Bogotá. Ideca.',
      link:
        'https://www.ideca.gov.co/recursos/mapas/malla-vial-integral-bogota-dc',
    },
    {
      referencia:
        'Ministerio de Transporte. (2015). Manual de señalización vial. Ministerio de Transporte.',
      link:
        'https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Catastro Distrital. (s. f.). Nomenclatura. Gov.co.',
      link:
        'https://www.catastrobogota.gov.co/recurso/nomenclatura#:%7E:text=La%20nomenclatura%20urbana%20es%20un,al%20contexto%20de%20la%20ciudad',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Servicios Públicos. (s. f.). Glosario. UAESP.',
      link:
        'https://www.uaesp.gov.co/transparencia/informacion-interes/glosario',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
