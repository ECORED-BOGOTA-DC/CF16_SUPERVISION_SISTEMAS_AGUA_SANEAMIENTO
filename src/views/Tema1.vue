<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Residuos sólidos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para realizar una correcta supervisión de los sistemas de recolección de residuos, se deben tener claras las características particulares de los residuos sólidos, pues son estas las que dan la directriz de cómo se pueden manipular y qué tratamiento o disposición debe realizarse. De acuerdo con el Decreto 1077 (2015), denominado el decreto único reglamentario del sector vivienda, ciudad y territorio en su Título 2 Servicio público de aseo, Capítulo 1 Definiciones, se definen: 
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        .cajon.color-primario.cajon1.p-4(style="background-color:#F7F8FB;")
          p(data-aos="fade-up") #[strong Residuo sólido:] cualquier objeto, material, sustancia o elemento, principalmente sólido, resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales o de servicios, que el generador presenta para su recolección por parte de la persona prestadora del servicio público de aseo. Igualmente, se considera como residuo sólido, aquel proveniente del barrido y limpieza de áreas y vías públicas, corte de césped y poda de árboles. Los residuos sólidos que no tienen características de peligrosidad se dividen en #[span(style="color:#3076B6;") aprovechables] y #[span(style="color:#3076B6;") no aprovechables].
          p.mt-4(data-aos="fade-up") Luego, es importante también aclarar un segundo término clave:
          p.mt-4.mb-0(data-aos="fade-up") #[strong Generador o productor:] toda persona que produce y presenta sus residuos sólidos a la prestadora del servicio público de aseo para su recolección y, por tanto, es usuario del servicio público de aseo (Decreto 1077, 2015).

    p.mt-5.fw-bold.text-center(data-aos="fade-up") Existen diferentes tipos de clasificación de residuos sólidos, los cuales se explicarán en el siguiente video animado:

    .cont_gradiente1
      .mt-4.col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/7RFoVdV1Mxk" title="Tipos de residuos sólidos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.subtitulo_cf(data-aos="fade-up") Según sus características particulares

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Esta clasificación se enfoca en características propias de ciertos residuos que generan condiciones especiales de transporte o que por su composición pueden ser gestionados de manera diferente. Revise las características a continuación:
        figure.mt-4
          img(src="@/assets/curso/tema1/4.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Residuos de Construcción y Demolición (RCD)")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Es todo residuo sólido resultante de las actividades de construcción, reparación o demolición de las obras civiles o de otras actividades conexas, complementarias o análogas (Decreto 2981, 2013).
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/5.png" alt="Imagen decorativa")
          div(numero="2" titulo="Residuo sólido especial")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Es todo residuo que, por su naturaleza, composición, tamaño, volumen y peso, necesidades de transporte, condiciones de almacenaje y compactación, no puede ser recolectado, manejado, tratado o dispuesto normalmente por la persona prestadora del servicio público de aseo (Decreto 2981, 2013).
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/6.png" alt="Imagen decorativa")
          div(numero="3" titulo="Residuos de barrido de áreas públicas")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Son los residuos sólidos acumulados en el desarrollo del barrido y limpieza de estas (Unidad Administrativa Especial de Servicios Públicos, s.f.).
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/7.png" alt="Imagen decorativa")
          div(numero="4" titulo="Residuos de limpieza de parques y jardines")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Son los residuos sólidos provenientes de la limpieza o arreglo de jardines y parques, corte de césped y poda de árboles o arbustos ubicados en zonas públicas (Unidad Administrativa Especial de Servicios Públicos, s.f.).
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/8.png" alt="Imagen decorativa")
          div(numero="5" titulo="Residuo sólido ordinario")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Es todo residuo sólido de características no peligrosas, manejado, tratado o dispuesto normalmente por la persona prestadora del servicio público de aseo provenientes de las actividades de barrido y limpieza de vías y áreas públicas, corte de césped y poda de árboles ubicados en vías y áreas públicas serán considerados como residuos ordinarios para efectos tarifarios (Decreto 2981, 2013, p.6).
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/9.png" alt="Imagen decorativa")
          div(numero="6" titulo="Residuos de Aparatos Eléctricos y Electrónicos (RAEE)")
            .row
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Son los aparatos eléctricos o electrónicos en el momento en que se desechan o descartan. Este término comprende todos aquellos componentes, consumibles y subconjuntos que forman parte del producto cuando se descarta, salvo que individualmente sean considerados peligrosos, caso en el cual recibirán el tratamiento previsto para tales residuos.
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1/10.png" alt="Imagen decorativa")
    
    h3.subtitulo_cf(data-aos="fade-up") De acuerdo con su peligrosidad

    p.mt-4(data-aos="fade-up") Partiendo de su tipología principal, esta clasificación es una de las más usadas a nivel hospitalario, debido a que fue aportada en su momento por el Decreto 2676 (2000); residuos no peligrosos y residuos peligrosos.
  
    ol.lista-ol.mt-4
      li 
        span.text-bold a. 
        | #[strong Residuos no peligrosos que se pueden subclasificar en:]
    p A continuación, se presentan los tipos de residuos no peligrosos, usados a nivel hospitalario.

    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/11.svg" alt="Imagen decorativa")
      .col.ps-0(style="place-self:center;")
        h4.mb-0.pb-1.ps-2(style="border-bottom:2px #3076B6 dotted;width:fit-content;") Clasificación de residuos no peligrosos
    
    .row.mt-4
      .col-xl.col-lg-6.mb-4.mb-xl-0.col-md-6
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/12.png" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(77,177,240,.95);")
            p.fw-bold.text-center Biodegradables
            p.mb-0.text-small Son aquellos restos químicos o naturales que se descomponen fácilmente en el ambiente. En estos restos se encuentran los vegetales, residuos alimenticios, papeles no aptos para reciclaje, jabones y detergentes biodegradables, madera y otros residuos que puedan ser transformados fácilmente.
      .col-xl.col-lg-6.mb-4.mb-xl-0.col-md-6
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .indicador--hover(v-if="indicadorTarjetaHover")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/13.png" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(255,160,49,.95);")
            p.fw-bold.text-center Reciclables
            p.mb-0.text-small Son aquellos que no se descomponen fácilmente y pueden volver a ser utilizados en procesos productivos como materia prima. Entre estos se encuentran: papel, plástico, chatarra, telas y radiografías.
      .col-xl.col-lg-6.mb-4.mb-xl-0.col-md-6
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/14.png" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(77,177,240,.95);")
            p.fw-bold.text-center Inertes
            p.mb-0.text-small Son aquellos que no permiten su descomposición, ni su transformación en materia prima y su degradación natural requiere grandes períodos de tiempo. Entre estos se encuentran: el icopor, papel, carbón y los plásticos.
      .col-xl.col-lg-6.col-.mb-xl-0md-6
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/15.png" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(255,160,49,.95);")
            p.fw-bold.text-center Ordinarios o comunes
            p.mb-0.text-small Son aquellos generados en el desempeño normal de las actividades. Estos restos se producen en oficinas, pasillos, áreas comunes, cafeterías y en general en todos los sitios del establecimiento del generador.
    
    .col-lg-10.m-auto.mt-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema1/16.svg' style="max-width:100px;" alt="Imagen decorativa")
        .tarjeta.tarjeta--azul(style="background-color:#F6F6F6;border-radius:10px;box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);")
          .p-4
            h4(data-aos="fade-up") Nota
            p.mb-0(data-aos="fade-up") Aunque el decreto en mención ha tenido modificaciones y actualmente se cuenta con el Decreto 2981 (2013), que fue compilado en el Decreto 1077 (2015), Sector vivienda, ciudad y territorio, Título 2 Servicio público de aseo, esta clasificación sigue siendo usada a nivel industrial y empresarial por algunas organizaciones, por lo cual se debe tener en cuenta, haciendo la salvedad de que se debe garantizar que su gestión sea acorde con las bases normativas vigentes.
      
      .tarjeta.color-primario.p-4.mt-5(style="background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/17.svg" alt="Imagen decorativa")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Decreto 1077 (2015)
                p.text-small.text-white Para ampliar la información sobre la clasificación de los residuos sólidos, se invita a consultar el Decreto 1077 (2015) Sector vivienda, ciudad y territorio, Título 2 Servicio público de aseo, el cual se encuentra en el material complementario o en el siguiente enlace.  
              .col-sm-auto
                a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")

    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/11.svg" alt="Imagen decorativa")
      .col.ps-0(style="place-self:center;")
        h4.mb-0.pb-1.ps-2(style="border-bottom:2px #3076B6 dotted;width:fit-content;") Residuos peligrosos
    
    p.mt-4(data-aos="fade-up") Clasificados e identificados de acuerdo con las siglas CRETIIR que me determina el análisis de la #[span(style="color:#3076B6;") Corrosividad, Reactividad, Explosividad, Toxicidad, Inflamabilidad, Riesgo Infeccioso y Radiactividad]. Por las iniciales de cada una de las características que puede contener un residuo que le aporta un grado de peligrosidad, expuestas en el Decreto 1076 (2015), las cuales compila el Decreto 4741 (2005). Revise en la siguiente infografía este análisis:

    .row.mt-5
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#3076B6;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/18.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Reactivo
          p.mt-3.mb-0(data-aos="fade-up") Es aquella característica que presenta un residuo o desecho cuando al mezclarse o ponerse en contacto con otros elementos, compuestos, sustancias o residuos puede generar gases o vapores, poseer sustancias como cianuros, sulfuros, peróxidos, generar una reacción explosiva, entre otros.
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5(style="background-color:#4DB1F0;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Explosivo
          p.mt-3.mb-0(data-aos="fade-up") Se considera que un residuo (o mezcla de residuos) es explosivo cuando en estado sólido o líquido de manera espontánea, por reacción química, puede desprender gases a una temperatura, presión y velocidad tales que puedan ocasionar daño a la salud humana y/o al ambiente.
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#3076B6;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/20.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Tóxico
          p.mt-3.mb-0(data-aos="fade-up") Se considera residuo o desecho tóxico aquel que en virtud de su capacidad de provocar efectos biológicos indeseables o adversos puede causar daño a la salud humana y/o al ambiente. Para este efecto se consideran tóxicos los residuos o desechos que se clasifican de acuerdo con los criterios de toxicidad (efectos agudos, retardados o crónicos y ecotóxicos). 
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5(style="background-color:#4DB1F0;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Inflamable
          p.mt-3.mb-0(data-aos="fade-up") Característica que presenta un residuo o desecho cuando, en presencia de una fuente de ignición, puede arder bajo ciertas condiciones de presión y temperatura.
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#3076B6;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/20.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Infeccioso
          p.mt-3.mb-0(data-aos="fade-up") Un residuo o desecho con características infecciosas se considera peligroso cuando contiene agentes patógenos; estos son microorganismos (tales como bacterias, parásitos, virus, rickettsias y hongos) y otros agentes tales como priones, con suficiente virulencia y concentración como para causar enfermedades en los seres humanos o en los animales.
      .col-lg-4.mb-4.col-md-6
        .h-100.p-4.pt-5.pb-5(style="background-color:#4DB1F0;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;" alt="Imagen decorativa")
          h4.mt-4.text-center(data-aos="fade-up") Radiactivo
          p.mt-3.mb-0(data-aos="fade-up") Se entiende por residuo radiactivo, cualquier material que contenga compuestos, elementos o isótopos, con una actividad radiactiva por unidad de masa superior a 70 KBq/Kg (setenta kilos becquerelios por kilogramo) o 2 nCi/g (dos nano curios por gramo), capaces de emitir, de forma directa o indirecta, radiaciones ionizantes de naturaleza corpuscular o electromagnética que en su interacción con la materia produce ionización en niveles superiores a las radiaciones naturales de fondo.
    
    .cajon.color-primario.cajon1.p-4.mt-5(style="background-color:#F7F8FB;")
      p.mb-0(data-aos="fade-up") Nota: la mezcla de un residuo o desecho peligroso con uno que no lo es, confiere a este último características de peligrosidad y debe ser manejado como residuo o desecho peligroso.
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/17.svg" alt="Imagen decorativa")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Decreto 1076 (2015)
                p.text-small.text-white Para ampliar la información sobre las características de los residuos peligrosos o los componentes que pueden tener y los convierten en peligrosos, se invita a consultar el decreto único reglamentario del sector ambiente, denominado Decreto 1076 (2015), leer la Sección 2 Clasificación, caracterización, identificación y presentación de los residuos o desechos peligrosos, el cual se encuentra en el material complementario. 
              .col-sm-auto
                a.boton.color-primario(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62511" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
      
      p.mt-5(data-aos="fade-up") De los residuos mencionados anteriormente es importante ampliar la información referente a los residuos con características infecciosas. A continuación, se presenta residuos o desechos peligrosos con riesgo biológico o infeccioso:

      .cont_gradiente1.mt-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pBmZiEaTf_w" title="Residuos o desechos peligrosos con riesgo biológico o infeccioso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#E4F3FD;")
        p.mb-0(data-aos="fade-up") #[strong Nota:] todo residuo generado en la atención en salud y otras actividades, que haya estado en contacto o mezclado con residuos o desechos con riesgo biológico o infeccioso que genere dudas en su clasificación, incluyendo restos de alimentos parcialmente consumidos o sin consumir, material desechable, entre otros, que han tenido contacto con pacientes considerados potencialmente infectantes o generados en áreas de aislamiento deberán ser gestionados como residuos peligrosos (Decreto 780, 2016, Artículo 2.8.10.5).
    
    .col-lg-8.m-auto.mt-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema1/24.svg' style="max-width:100px;" alt="Imagen decorativa")
        .tarjeta.tarjeta--azul(style="background-color:#F6F6F6;border-radius:10px;box-shadow:  0px 3px 5px 0px rgba(0,0,0,.1);")
          .p-4
            p.mb-0(data-aos="fade-up") Para ampliar la información sobre las características de los desechos peligrosos con     riesgo biológico o infeccioso, al igual que las obligaciones del generador y de los diferentes actores involucrados, se invita a consultar el Decreto Único Reglamentario del Sector Salud y Protección Social, reconocido como Decreto 780 (2016), en sus artículos 2.8.10.5. hasta el 2.8.10.12, el cual se encuentra en el material complementario.
    .col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#E4F3FD;")
        p.mb-0(data-aos="fade-up") #[strong Nota:]  se hace la salvedad que las normas descritas pueden sufrir actualizaciones, modificaciones o derogaciones, se debe consultar su vigencia y su pertinencia al iniciar actividades de supervisión de residuos y apropiarse de los nuevos conceptos jurídicos que puedan salir en materia ambiental.


    







      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaHover: true,
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
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #3076B6
  color: #fff
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  border-radius: 10px
.crd_hover_txt .crd_hover_txt--body
  position: absolute
  padding: 1.2rem
  bottom: 0
  transition: all .5s ease-in-out
  transform: translateY(calc(100% - 3.85rem))
  background-color: #fff7e6
.crd_hover_txt:hover .crd_hover_txt--body
  transition: all .5s ease-in-out
  transform: translateY(0)
.tarjeta-avatar-b__img
  min-width: 15%
.tarjeta-avatar-b .tarjeta
  padding-left: 5%
</style>
