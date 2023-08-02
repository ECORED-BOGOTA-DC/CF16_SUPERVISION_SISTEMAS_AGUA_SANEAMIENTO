<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aforo de residuos sólidos
    
    figure.mb-md-0.mt-5.mb-4
      img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") Realizar actividades de cuantificación de residuos en algunos puntos es una parte estratégica de los sistemas de recolección de residuos, pues permite, por un lado, establecer tarifas justas por el transporte y disposición, como la organización de la logística para vehículos de carga de los residuos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Conceptos claves
    
    p(data-aos="fade-up") Para iniciar la explicación de este tema, es importante primero aclarar algunos conceptos que son elementales, de acuerdo con el Decreto 1077, 2015. pp. 388-390, en su Título 2, Capítulo I, Artículo 2.3.2.1.1. Definiciones. Revíselas a continuación:

    .cont_2_1.mt-4.pt-5.pb-5
      .col-lg-10.m-auto
        SlyderB(:datos="datosSlyder")
  
    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 El aforo como mecanismo de medición en el servicio público de aseo
    
    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-primario.cajon1.p-4(style="background-color:#E0F4FE;")
          p.mb-0(data-aos="fade-up") El aforo es un mecanismo de regulación del costo que deben pagar los generadores por la cantidad de residuos que entregan al servicio público de aseo para su disposición o tratamiento.
        p.mt-4(data-aos="fade-up") Es importante aclarar que este mecanismo no es una obligación de las empresas prestadoras del servicio, conforme a lo establecido desde la #[strong Ley 142 (1994)], en su Artículo 9, sino que fue establecido como un derecho para las partes involucradas y busca que la tarifa reflejada para pago sea justa dependiendo de los residuos sólidos presentados para la recolección por un usuario determinado.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/11.png" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") De acuerdo con la Comisión de Regulación de Agua Potable y Saneamiento Básico [CRA] (2012), en el Concepto 43851, especifica que el aforo de residuos sólidos se clasifica en tres (3):

    .row.mt-4
      .col-lg.pe-0
        .h-100.p-4(style="background-color:#B6CFE5;border-radius:20px 0px 0px 20px;")
          figure.text-center
            img(src="@/assets/curso/tema2/12.svg" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Aforo ordinario
          p.mt-3.mb-0(data-aos="fade-up") Se realiza por la persona prestadora para incorporar nuevos usuarios o para actualizar el aforo anterior.
      .col-lg.ps-0.pe-0
        .h-100.p-4(style="background-color:#FFE7CB;")
          figure.text-center
            img(src="@/assets/curso/tema2/13.svg" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Aforo permanente
          p.mt-3.mb-0(data-aos="fade-up") Es cuando se decide realizar cada vez que se le preste el servicio de recolección a usuarios grandes productores; usualmente, es decidido por la empresa o persona prestadora del servicio.
      .col-lg.ps-0
        .h-100.p-4(style="background-color:#C1E4FA;border-radius:0px 20px 20px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema2/14.svg" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Aforo extraordinario
          p.mt-3.mb-0(data-aos="fade-up") Realizado por petición del usuario o por la persona prestadora del servicio, cuando se encuentra evidencia que ha variado la cantidad de residuos producidos durante la vigencia del aforo ordinario o dentro de algún proceso de reclamación.
    
    h3.subtitulo_cf(data-aos="fade-up") Metodología de aforo

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Las metodologías para realizar los aforos a los diferentes usuarios del sistema de recolección es siempre normada bajo resolución expedida por la Comisión de Regulación de Agua Potable y Saneamiento Básico [CRA], la cual es una entidad del orden nacional, creada mediante el Artículo 69 de la Ley 142 (1994), como unidad administrativa especial con autonomía administrativa, técnica y patrimonial, regida por la Constitución Política y por la ley, sin personería jurídica, adscrita al Ministerio de Vivienda, Ciudad y Territorio (MVCT), mediante el Decreto 1524 (1994). Le fueron delegadas las funciones relativas al señalamiento de las políticas generales de administración y control de eficiencia de los servicios públicos domiciliarios (CRA, s.f.).
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/15.svg" data-aos="fade-left" alt="muestra logo de la Comisión e Regulación de Agua Potable y Saneamiento Básico")

    p.mt-5(data-aos="fade-up") La Resolución 236 (2002) de la CRA  estableció en su momento, en el Artículo 7, la metodología para la realización de aforos. Aunque esta norma ha tenido modificaciones, la base metodológica sigue siendo la misma, la cual se ratifica bajo la Resolución 442 (2008) de la CRA, que se describe a continuación.

    .col-lg-10.m-auto.mt-5
      PasosA.color-primario(tipo="n")
        .row
          .col-lg-8.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            h5 Requerimiento
            p Dependiendo de quien realiza el requerimiento del aforo, se deben definir el tipo de usuario y la clase de aforo a realizar.
          .col-lg-4.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/16.png' data-aos="fade-left" alt="Imagen decorativa")
        .row
          .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/17.png' data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6.text-start(style="place-self:center;")
            h5 Programación de la visita
            p Es responsabilidad de la persona o empresa prestadora del servicio de recolección programar la visita; para ello debe tener en cuenta lo anteriormente descrito. Las visitas se programarán en los horarios habituales de recolección.
        .row
          .col-lg-8.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            h5 Periodicidad
            p Se deberán programar aforos puntuales durante el periodo de facturación y la medición deberá corresponder a registros semanales o en los tiempos definidos por el ente regulador.
          .col-lg-4.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/18.png' data-aos="fade-left" alt="Imagen decorativa")
        .row
          .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/19.png' data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6.text-start(style="place-self:center;")
            h5 Datos para tomar
            p El resultado del aforo base para la determinación de la cantidad de residuos sólidos para la facturación deberá calcularse a partir de la medición (peso y volumen) de los residuos generados y presentados durante, por lo menos, dos (2) semanas en un mismo periodo de facturación.
        .row
          .col-lg-8.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            h5 Instrumentos de medida
            p La persona prestadora deberá contar, para la realización de los aforos, con instrumentos de medida, debidamente calibrados y certificados por la entidad competente, acorde con las normas vigentes que regulan la materia. 
          .col-lg-4.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/20.png' data-aos="fade-left" alt="Imagen decorativa")
        .row
          .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/21.png' data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6.text-start(style="place-self:center;")
            h5 Determinar densidad media
            p En cada una de las visitas, el aforador pesará los residuos sólidos presentados por el multiusuario, contará los recipientes (bolsas, canecas, contenedores o cajas estacionarias), medirá el volumen de estos y calculará la densidad media de los residuos aforados en cada una de ellas. 
        .row
          .col-lg-8.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            h5 Determinar el promedio
            p  Con base en la información consignada en el formato de aforo diligenciado en cada visita, la persona prestadora, al finalizar el número de semanas fijadas para la realización de los aforos, determinará el promedio simple semanal de los residuos presentados por el multiusuario para recolección y su densidad media.
          .col-lg-4.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/22.png' data-aos="fade-left" alt="Imagen decorativa")
        .row
          .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/23.png' data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6.text-start(style="place-self:center;")
            h5 Determinar la producción mensual
            p Se multiplicará el valor del promedio simple de producción semanal por el número de semanas del mes (4.34 semanas/mes).
        .row
          .col-lg-8.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            h5 Testigos de la medición
            p Las mediciones base del nuevo aforo deberán estar suscritas por la persona designada por el multiusuario para tal fin o por dos testigos cuando este no se encuentra disponible o se niega a firmar el formato de aforo. 
          .col-lg-4.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/24.png' data-aos="fade-left" alt="Imagen decorativa")
        .row
          .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/25.png' data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6.text-start(style="place-self:center;")
            h5 Acta final
            p El acta de aforo deberá ser suscrita por el aforador y el representante del multiusuario, o por las personas que obren como testigos de acuerdo con lo establecido en el literal anterior, en dos originales, uno de los cuales lo conservará la empresa y el otro el multiusuario.
    
    h3.subtitulo_cf(data-aos="fade-up") Plazo máximo y número de semanas para realizar aforo

    p.mt-4(data-aos="fade-up") De acuerdo con la Resolución 236 (2002):

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        ul.lista-ul--separador
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            div
              p.mb-0.fw-bold En el caso de aforos ordinarios
              p.mb-0 La determinación de la cantidad de residuos sólidos presentados por cada multiusuario deberá efectuarse mediante la medición del peso y volumen de los residuos presentados en forma conjunta, durante por lo menos dos (2) semanas, en un plazo máximo de (2) dos meses.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            div
              p.mb-0.fw-bold En el caso de aforos extraordinarios
              p.mb-0 La determinación de la cantidad de residuos sólidos generados por cada multiusuario deberá efectuarse mediante la medición del peso y volumen de los residuos presentados en forma conjunta, durante por lo menos dos (2) semanas, en un plazo máximo de dos (2) meses. 
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            div
              p.mb-0.fw-bold La realización de aforos ordinarios y extraordinarios
              p.mb-0 El número de visitas a realizar en cada semana deberá ser igual a la frecuencia semanal de recolección pactada con el multiusuario.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/26.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/17.svg" alt="Imagen decorativa")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Resolución 442 (2008) de la CRA
                p.text-small.text-white Para ampliar la información sobre los aforos, fórmulas y anexos referentes a esta actividad se invita a consultar la Resolución 442 (2008) de la CRA, desde el Artículo 3, el cual se encuentra en el material complementario o se invita a descargar el documento del siguiente enlace.
              .col-sm-auto
                a.boton.color-primario(href="https://normas.cra.gov.co/gestor/docs/resolucion_cra_0442_2008.htm" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")

    

    
  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Aforo',
        texto:
          'Es el resultado de las mediciones puntuales que realiza un aforador debidamente autorizado por la persona prestadora respecto de la cantidad de residuos sólidos que produce y presenta un usuario de manera individual o conjunta al prestador del servicio de aseo.',
        imagen: require('@/assets/curso/tema2/2.png'),
      },
      {
        titulo: 'Aforo extraordinario de aseo para multiusuarios',
        texto:
          'Es el resultado de las mediciones puntuales realizadas por la persona prestadora del servicio público de aseo, de oficio o a petición del multiusuario, cuando alguno de ellos considere que ha variado la cantidad de residuos producidos con respecto al aforo vigente.',
        imagen: require('@/assets/curso/tema2/3.png'),
      },
      {
        titulo: 'Aforo ordinario de aseo para multiusuarios',
        texto:
          'Es el resultado de las mediciones puntuales realizadas por la persona prestadora del servicio público de aseo para categorizar y cobrar como multiusuarios a aquellos suscriptores que optaron por esta opción tarifaria.',
        imagen: require('@/assets/curso/tema2/4.png'),
      },
      {
        titulo: 'Aforo permanente de aseo',
        texto:
          'Es el que realiza la persona prestadora del servicio público de aseo a los suscriptores grandes productores o pequeños productores de residuos sólidos, cuando efectúa la recolección de los residuos presentados por el usuario.',
        imagen: require('@/assets/curso/tema2/5.png'),
      },
      {
        titulo: 'Generador o productor',
        texto:
          'Persona que produce y presenta sus residuos sólidos a la persona prestadora del servicio público de aseo para su recolección y por tanto, es usuario del servicio público de aseo.',
        imagen: require('@/assets/curso/tema2/6.png'),
      },
      {
        titulo: 'Multiusuarios del servicio público de aseo',
        texto:
          'Son suscriptores agrupados en unidades inmobiliarias, centros habitacionales, conjuntos residenciales, condominios o similares, bajo régimen de propiedad horizontal vigente, que se caracterizan porque presentan en forma conjunta sus residuos sólidos a la persona prestadora del servicio.',
        imagen: require('@/assets/curso/tema2/7.png'),
      },
      {
        titulo: 'Pequeños generadores o productores',
        texto:
          'Son los suscriptores y/o usuarios no residenciales que generan y presentan para la recolección residuos sólidos en volumen menor a un (1) metro cúbico mensual.',
        imagen: require('@/assets/curso/tema2/8.png'),
      },
      {
        titulo: 'Grandes generadores o productores',
        texto:
          'Son los suscriptores y/o usuarios no residenciales que generan y presentan para la recolección residuos sólidos en volumen igual o superior a un metro cúbico mensual.',
        imagen: require('@/assets/curso/tema2/9.png'),
      },
      {
        titulo: 'Persona prestadora del servicio público de aseo',
        texto:
          'Es aquella encargada de una o varias actividades de la prestación del servicio público de aseo, en los términos del Artículo 15 de la Ley 142 de 1994 y demás que la modifiquen o complementen.',
        imagen: require('@/assets/curso/tema2/10.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #EDF7FE
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #3076B6
  border-radius: 0px
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #3076B6
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #3076B6
.lista-ol--separador li, .lista-ul--separador li
  border-bottom-color: #12263F
</style>
