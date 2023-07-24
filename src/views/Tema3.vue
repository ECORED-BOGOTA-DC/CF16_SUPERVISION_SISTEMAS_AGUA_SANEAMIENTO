<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Componentes requeridos en el servicio de aseo
    
    figure.mb-md-0.mt-5.mb-4
      img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") Supervisar sistemas de recolección implica también un seguimiento a las rutas y movimientos que se deben realizar por diferentes territorios, con el fin de garantizar la gestión adecuada de los residuos que disponen los distintos tipos de generadores y de las diferentes actividades de limpieza que conforman un sistema de aseo y saneamiento.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Lectura de planos

    p(data-aos="fade-up") Teniendo en cuenta el Decreto 1077 (2015) en su Artículo 2.3.2.2.1.10., se especifica de suma importancia: 

    .cajon.color-acento-contenido.p-4.mt-4(style="background-color:#E0F4FE;")
      p.mb-0(data-aos="fade-up") Las personas prestadoras del servicio público de aseo deberán formular e implementar el programa para la prestación del servicio acorde con el plan de gestión integral de residuos sólidos del municipio o distrito y/o regional, según el caso, la regulación vigente y lo establecido en este capítulo. 
    
    p.mt-5(data-aos="zoom-in") Para efectos de la formulación de este programa, las personas prestadoras definirán:

    .cont_3_1.mt-4.pt-4
      .row
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #FFA031 solid;position:relative;background-color:#FFA031;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(231,141,36,1) 0%, rgba(245,170,81,1) 50%, rgba(255,160,49,1) 100%);font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 1
              h4.mb-0(data-aos="fade-up") Objetivos
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #3076B6 solid;position:relative;background-color:#3076B6;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(42,106,164,1) 0%, rgba(55,135,208,1) 50%, rgba(48,118,182,1) 100%);;font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 2
              h4.mb-0(data-aos="fade-up") Metas
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #4DB1F0 solid;position:relative;background-color:#4DB1F0;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(63,149,204,1) 0%, rgba(111,198,252,1) 50%, rgba(77,177,240,1) 100%);font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 3
              h4.mb-0(data-aos="fade-up") Estrategias
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #3076B6 solid;position:relative;background-color:#3076B6;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(42,106,164,1) 0%, rgba(55,135,208,1) 50%, rgba(48,118,182,1) 100%);;font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 4
              h4.mb-0(data-aos="fade-up") Campañas educativas
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #3076B6 solid;position:relative;background-color:#3076B6;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(42,106,164,1) 0%, rgba(55,135,208,1) 50%, rgba(48,118,182,1) 100%);;font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 5
              h4.mb-0(data-aos="fade-up") Actividades
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #4DB1F0 solid;position:relative;background-color:#4DB1F0;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(63,149,204,1) 0%, rgba(111,198,252,1) 50%, rgba(77,177,240,1) 100%);font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 6
              h4.mb-0(data-aos="fade-up") Cronogramas
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #FFA031 solid;position:relative;background-color:#FFA031;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(231,141,36,1) 0%, rgba(245,170,81,1) 50%, rgba(255,160,49,1) 100%);font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 7
              h4.mb-0(data-aos="fade-up") Costos
        .col-lg-3.mb-4.col-md-6
          .h-100.text-center.cont_figura1(style="border-radius:10px;border:8px #3076B6 solid;position:relative;background-color:#3076B6;")
            .pt-5.pb-5.p-2.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(180deg, rgba(223,227,225,1) 0%, rgba(255,255,255,1) 100%);border-top:3px white solid;border-radius:10px;box-shadow:0px 0px 20px rgba(0,0,0,.35);")
              .cont_banderin
              .banderin.text-white.p-3.pb-2.pt-2.fw-bold(style="background: linear-gradient(180deg, rgba(42,106,164,1) 0%, rgba(55,135,208,1) 50%, rgba(48,118,182,1) 100%);;font-size:22px;position:absolute;top: -7px;right:20px;text-shadow:0px 0px 4px black;z-index:2;") 8
              h4.mb-0(data-aos="fade-up") Fuentes de financiación
    
    p.mt-5(data-aos="fade-up") De acuerdo con los lineamientos definidos por el Ministerio de Vivienda, Ciudad y Territorio, este programa igualmente deberá definir todos los aspectos operativos de los diferentes componentes del servicio que atienda el prestador, el cual deberá ser objeto de seguimiento y control por parte de la Superintendencia de Servicios Públicos.

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.ps-4.ps-md-5.pe-4.pe-md-5.d-flex.align-items-center(style="background-color:#C1E4FA;border-radius:15px;")
          p.mb-0(data-aos="fade-up") Desde esta perspectiva, se debe garantizar y mantener bajo supervisión cada una de las actividades que se encuentran inmersas dentro de un servicio público de aseo, las cuales son descritas en el Decreto 1077 (2015), en su Artículo 2.3.2.2.2.1.13, como: 
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.ps-4.ps-md-5.pe-4.pe-md-5.d-flex.align-items-center(style="background-color:#FFE7CB;border-radius:15px;")
          ol.lista-ol.mb-0
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 1. 
              | Recolección.
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 2. 
              | Transporte.
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 3. 
              | Barrido, limpieza de vías y áreas públicas. 
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 4. 
              | Corte de césped, poda de árboles en las vías y áreas públicas. 
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 5. 
              | Transferencia.
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 6. 
              | Tratamiento.
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 7. 
              | Aprovechamiento.
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 8. 
              | Disposición final. 
            li.mb-0.d-flex(data-aos="fade-up") 
              span.text-bold(style="color:#FFA031;") 9. 
              | Lavado de áreas públicas.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.ps-4.ps-md-5.pe-4.pe-md-5.d-flex.align-items-center(style="background-color:#C1E4FA;border-radius:15px;")
          p.mb-0(data-aos="fade-up") En el desarrollo de las actividades descritas anteriormente, se implica el uso de elementos de georreferenciación territorial con el fin de facilitar el recorrido, recolección de residuos o de limpieza y aseo, de tal forma que se reduzcan tiempos innecesarios o gastos no sostenibles.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Mapas y nomenclatura territorial  
      
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4.pt-5.pb-5
        p.mb-0 Uno de los principales elementos es el uso de mapas, los cuales son la representación gráfica convencional de una porción de la tierra u otro cuerpo celeste que muestra el tamaño y la posición de elementos del paisaje de acuerdo con la escala y la proyección seleccionadas (Instituto Geográfico Agustín Codazzi, 2018).

    h3.subtitulo_cf(data-aos="fade-up") Escalas y usos

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La escala del mapa se define como la relación de proporcionalidad que existe entre una distancia medida en el terreno y su correspondiente medida en el mapa. Los usos para los cuales está designado un mapa, determinan directamente la escala de este, puesto que, determina la cantidad de detalle que debe mostrarse (Instituto Geográfico Agustín Codazzi, 2018).
        .cajon.color-acento-botones.p-4.mt-4(style="background-color:#E5F3F3;")
          p.mb-0(data-aos="fade-up") Bajo la siguiente suposición, donde se entrega un mapa y se logra visualizar la información que indica que se encuentra a escala 1:500, esto supondría que por cada (1) centímetro que encuentra en el mapa, este en realidad refleja cinco (5) metros. 
        p.mt-4(data-aos="fade-up") De acuerdo con el Instituto geográfico español, en su documento conceptos cartográficos, la escala puede expresarse de tres formas distintas: numérica, gráfica, y textual o literal. Se invita a revisar el siguiente recurso:
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/4.png" data-aos="fade-left" alt="Imagen decorativa")
    
    .row.mt-5
      .col-xl.mb-4.mb-xl-0.col-lg-8.m-auto
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/5.svg" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(77,177,240,.95);")
            p.fw-bold.text-center Escala numérica
            p.mb-0 Se expresa mediante una fracción que indica la relación entre la distancia medida de dos puntos en el mapa (numerador) y la correspondiente en el terreno (denominador) de modo directo, como el ejemplo visto.
      .col-xl.mb-4.mb-xl-0.col-lg-8.m-auto
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .indicador--hover(v-if="indicadorTarjetaHover")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/6.svg" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(255,160,49,.95);")
            p.fw-bold.text-center Escala gráfica
            p.mb-0 La escala gráfica es una línea situada en el mapa, a menudo en el margen de la hoja, que se ha subdividido en segmentos para indicar las longitudes sobre el mapa de las unidades terrestres de distancia. Gracias a este elemento es posible medir la distancia real directamente sobre el mapa con la ayuda de una regla o un compás. 
      .col-xl.mb-4.mb-xl-0.col-lg-8.m-auto
        .crd_hover_txt(@mouseover="indicadorTarjetaHover = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/7.svg" alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:rgba(77,177,240,.95);")
            p.fw-bold.text-center Escala textual o literal
            p.mb-0 Se expresa, claramente, mediante una relación escrita y literal. Por ejemplo, en el caso específico sería una anotación debajo del plano con una indicación textual, ejemplo: un centímetro representa cien metros en el terreno.
    
    h3.subtitulo_cf(data-aos="fade-up") Tipos de mapas

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/8.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DBEFFC;")
          p.mb-0(data-aos="fade-up") Para iniciar la explicación sobre los tipos de mapas, es necesario definir qué es cartografía. Teniendo en cuenta la definición aportada por el #[strong.cont_popover(style="color:#3076B6;cursor:pointer;position:relative;") #[span IGAC]] (2016), es una disciplina que estudia los diferentes métodos, sistemas, operaciones científicas y técnicas que #[span(style="color:#3076B6;") permiten representar en un plano la superficie terrestre] y los fenómenos o hechos que se desarrollan sobre ella. El producto de la representación recibe el nombre de #[span(style="color:#3076B6;") cartografía, mapa o carta] (p.14).
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") Dentro de la clasificación de mapas se pueden encontrar, según el IGAC (2018), los siguientes:

    TabsC.color-primario.mt-5
      .p-4.ps-lg-0.pe-lg-0.pt-5.pb-5(titulo="Mapas de imagen")
        .row.col-lg-11.m-auto
          p.mb-0 Foto mapas que se componen de fotografías aéreas corregidas como fondo, a las que se agregan nombres, símbolos, sistemas de coordenadas, leyendas, etc.
      .p-4.ps-lg-0.pe-lg-0.pt-5.pb-5(titulo="Fotos mosaicas")
        .row.col-lg-11.m-auto
          p.mb-0 Son un ensamble sistemático de varias fotografías, que permite a los especialistas una visión de conjunto para facilitar el entendimiento de las interrelaciones entre los diferentes elementos o fenómenos de la superficie terrestre.
      .p-4.ps-lg-0.pe-lg-0.pt-5.pb-5(titulo="Mapa topográfico")
        .row.col-lg-11.m-auto
          p.mb-0 Es una representación gráfica convencional de un área geográfica que contiene los detalles planimétricos (rasgos de los objetos en su posición geográfica correcta en un plano de dos dimensiones (x, y)), altimétricos (expresados a través de las curvas de nivel) y un sistema de coordenadas. Estos mapas son de propósito múltiple (estatal, militar, turismo, planeación, catastro, etc.), y se subdividen según su uso y escala.
      .p-4.ps-lg-0.pe-lg-0.pt-5.pb-5(titulo="Mapas temáticos")
        .row.col-lg-11.m-auto
          p.mb-0 Elaborados con un propósito especial. Según su contenido se pueden clasificar en: geológicos, catastrales, turísticos, de suelos, entre otros. Los mapas temáticos requieren para su elaboración de un mapa topográfico como base.
      .p-4.ps-lg-0.pe-lg-0.pt-5.pb-5(titulo="Mapas de rutas y cartas")
        .row.col-lg-11.m-auto
          p.mb-0 Comprende los mapas y cartas elaborados como ayuda para la navegación y orientación terrestre, marítima y aérea (IGAC, 2018).
    
    p.mt-5(data-aos="fade-up") Aunque existen otros tipos de mapas, es importante aclarar que, por los avances tecnológicos, también se encuentran aplicaciones móviles y páginas web que se pueden consultar sobre diferentes temáticas en un mapa a escala real y con actualización constante, mapas que son usados para la movilidad y ubicación, como para la identificación de elementos ecosistémicos, entre otros.

    h3.subtitulo_cf(data-aos="fade-up") Nomenclatura vial y domiciliaria

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La nomenclatura urbana es un elemento fundamental de orden y planeación de la ciudad que facilita la ubicación de los predios y vías urbanas a partir de la aplicación del modelo de ejes estructurantes de nomenclatura vial al contexto de la ciudad (Catastro de Bogotá, s.f.). Su utilidad en sistemas de recolección de residuos es elemental, no solo para la ubicación espacial en planos sino para la programación de la recolección acorde a la organización de las ciudades.
        p.mt-4(data-aos="fade-up") Dentro de los usos de la nomenclatura vial se pueden identificar los siguientes:
        ul.lista-ul.ps-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 Orientación espacial.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 Registro de predios.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/9.png" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Básicamente, la nomenclatura vial es un conjunto de caracteres alfanuméricos que se usan para denominar vías en una ciudad, municipio, etc. Dentro de los elementos que tiene la nomenclatura es necesario diferenciar, de acuerdo con Catastro (s.f.). La nomenclatura domiciliaria es el sistema a través del cual se identifica en una malla vial urbana o rural las vías vehiculares, peatonales, los predios y construcciones:

    .row.col-lg-10.m-auto.mt-5
      .col-lg.mb-4.mb-lg-0.p-lg-0
        .h-100.d-flex(style="background-color:#4DB1F0;border-radius:25px 0px 0px 25px;")
          .d-flex.align-items-center(style="min-width: 20%;max-width: 20%;position: relative;margin-left:-10%;")
            img(src="@/assets/curso/tema3/10.svg" data-aos="fade-right" alt="Imagen decorativa")
          .d-flex.w-100(style="margin-left: -10%;padding-left: 10%;")
            .p-4.pt-5.pb-5
              h5(data-aos="fade-up") Nomenclatura vial
              ul.lista-ul.ps-2.mb-0
                li.d-flex(data-aos="fade-up")
                  i.fas.fa-check-circle.icon1(style="color:#FFA031;")
                  p.mb-0 #[strong Vía principal:] hace referencia a la vía sobre la cual está ubicado el acceso principal del predio.
                li.d-flex(data-aos="fade-up")
                  i.fas.fa-check-circle.icon1(style="color:#FFA031;")
                  p.mb-0 #[strong Vía generadora:] eje vial de menor denominación numérica que tiene intersección con la vía principal.
      .col-lg.p-lg-0
        .h-100.d-flex(style="background-color:#FFA031;border-radius:0px 25px 25px 0px;")
          .d-flex.w-100(style="margin-right: -10%;padding-right: 10%;")
            .p-4.pt-5.pb-5
              h5(data-aos="fade-up") Nomenclatura domiciliaria
              ul.lista-ul.ps-2.mb-0
                li.d-flex(data-aos="fade-up")
                  i.fas.fa-check-circle.icon1(style="color:#4DB1F0;")
                  p.mb-0 #[strong Principal:] acceso principal al predio.
                li.d-flex(data-aos="fade-up")
                  i.fas.fa-check-circle.icon1(style="color:#4DB1F0;")
                  p.mb-0 #[strong Secundaria:] accesos secundarios localizados sobre la vía de acceso principal e Incluye accesos localizados en vías diferentes a la nomenclatura principal y se compone de vía principal - vía generadora.
          .d-flex.align-items-center(style="min-width: 20%;max-width: 20%;position: relative;margin-right:-10%;")
            img(src="@/assets/curso/tema3/11.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") A partir de las definiciones vistas con la nomenclatura vial y nomenclatura domiciliaria, también se puede conocer la definición y estructura de una nomenclatura urbana. Ver figura 1.

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Figura 1
        span Mapa conceptual de nomenclatura
      .p-3.ps-lg-5.pe-lg-5(style="background-color:#F3F9FF;")
        figure.mt-4
          img(src="@/assets/curso/tema3/12.png" data-aos="zoom-in-up" alt="Mapa conceptual de nomenclatura")
      figcaption.fw-normal.p-4.text-center.mt-3(style="background-color:#D2E1F1;") Fuente. IGAC y Ministerio de Educación. (s.f.). 
    
    p.mt-5(data-aos="fade-up") Por consiguiente, de acuerdo con la Secretaría de Movilidad de Bogotá (2017), en la página de Infraestructura Integrada de Datos Espaciales para el Distrito Capital (IDECA), se describe la malla vial como:
    p.mt-4(data-aos="fade-up") Conjunto de líneas que definen los ejes viales de cada una de las vías de la ciudad. Estas líneas tienen estructurada, como atributo, la información de nomenclatura vial, el sentido del tránsito vehicular y su clasificación de acuerdo con el tipo de tráfico que soporta. Ver figura 2.

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 2
        span Mapa conceptual sobre la vía
      .p-3.ps-lg-5.pe-lg-5(style="background-color:#F3F9FF;")
        figure.mt-4.col-lg-8.m-auto
          img(src="@/assets/curso/tema3/13.png" data-aos="zoom-in-up" alt="Mapa conceptual sobre la vía")
      figcaption.fw-normal.p-4.text-center.mt-3(style="background-color:#D2E1F1;") Fuente. IGAC y Ministerio de Educación (s.f.). 
    
    p.mt-5(data-aos="fade-up") Este objeto está categorizado con base en el tipo de clasificación de la sección vial según el #[span(style="color:#3076B6;") Plan de Ordenamiento Territorial (POT)] de cada ciudad. Dentro de los elementos que lo componen, es necesario aclarar los siguientes términos de acuerdo con la Secretaría de Movilidad de Bogotá (2017):

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Figura 3
      span Malla Vial Integral. Bogotá D.C
    
    .row.mt-4
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/14.png" data-aos="fade-right" alt="Malla Vial Integral. Bogotá D.C")
      .col-lg(style="place-self:center;")
        ul.lista-ul.ps-2.mb-0
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 #[strong Malla vial arterial complementaria:] red de vías que articula operacionalmente los subsistemas de la malla vial principal, facilita la movilidad de mediana y larga distancia como elemento articulador a escala urbana. 
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 #[strong Malla vial arterial principal:] vía principal, destinada al servicio de tráficos de larga y media distancia.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 #[strong Malla vial intermedia:] red constituida por una serie de tramos viales que permean la retícula que conforma la Malla arterial principal y arterial complementaria, sirviendo como alternativa de circulación a estas. Permite el acceso y fluidez de la ciudad a escala zonal.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 #[strong Malla vial local:] vía cuya función primordial es la de brindar accesibilidad a predios y soportar tráficos de corta distancia. Establece el acceso a las unidades de vivienda. 
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            p.mb-0 #[strong Malla vial peatonal:] vía cuya función principal es el tránsito de peatones. En ella no se permite el acceso vehicular. 
    
    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
      .col.ps-1(style="place-self:center;")
        h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;") ¿Cómo se lee una nomenclatura o dirección?
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5.bloqueg1
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/16.png')})`}"
      )
      .bloque-texto-g__texto1.p-4.pt-5.pb-5(style="position: relative;width: 60%;background-color: rgba(255, 255, 255, 0.95);")
        p.mb-0.text-center.fw-bold.d-block Usualmente las direcciones están compuestas por los siguientes elementos:
        .row.mt-4
          .col-md.mb-4.mb-md-0
            ul.lista-ul.mb-0
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Tipo de vía.
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Número de la vía.
          .col-md.mb-4.mb-md-0
            ul.lista-ul.mb-0
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Prefijo de la vía (si lo tiene).
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Número de la vía generadora.
          .col-md.mb-4.mb-md-0
            ul.lista-ul.mb-0
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Prefijo de la vía generadora.
              li.d-flex.mb-1(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#FFA031;")
                p.mb-0 Número de la placa.
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background-color:#F3F9FF;display: flex;flex-wrap: wrap;align-content: space-between;")
          .bg-white.pb-2.w-100
            .titulo-sexto.color-acento-botones
              h5.d-block Figura 4
              span Ejemplo de dirección
          .p-3.ps-lg-5.pe-lg-5.w-100
            figure.mt-4
              img(src="@/assets/curso/tema3/17.svg" data-aos="zoom-in-up" alt="Ejemplo de dirección")
            p.mt-5.text-center(data-aos="fade-up" style="margin-bottom:5rem;") La visualización espacial de esta dirección se ve en la figura 5.
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background-color:#F3F9FF;display: flex;flex-wrap: wrap;align-content: space-between;")
          .bg-white.pb-2.w-100
            .titulo-sexto.color-acento-botones
              h5.d-block Figura 5
              span Ubicación de la dirección
          .p-3.ps-lg-5.pe-lg-5.w-100
            figure.mt-4.col-lg-8.m-auto
              img(src="@/assets/curso/tema3/18.svg" data-aos="zoom-in-up" alt="Ubicación de la dirección")
    
    figcaption.fw-normal.p-4.text-center.mt-3(style="background-color:#D2E1F1;") #[strong Nota.] Tomadas de IGAC y Ministerio de Educación (s.f.).

    h3.subtitulo_cf(data-aos="fade-up") Señalización y demarcación en las vías y áreas públicas

    p.mt-4(data-aos="fade-up") La señalización y demarcación en las vías es un sistema para brindar información necesaria de manera visual. Existen señales verticales y horizontales y, a manera general, la señalización debe cumplir con las siguientes características de acuerdo con la (Secretaría de Movilidad, 2015. p.9), en su manual de señalización vial:

    .row.mt-4
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/19.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-10(style="place-self:center;")
        .row
          .col-lg-4.mb-5.pe-4(style="position:relative;")
            .container_arrow1
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#C1E4FA;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe ser necesaria.
          .col-lg-4.mb-5.pe-4(style="position:relative;")
            .container_arrow2
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#FFE7CB;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe ser visible y llamar la atención.
          .col-lg-4.mb-5(style="position:relative;")
            .container_arrow3
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#C1E4FA;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe ser legible y fácil de entender. 
          .col-lg-4.mb-5.pe-4(style="position:relative;")
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#FFE7CB;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe ser creíble. 
          .col-lg-4.mb-5.pe-4(style="position:relative;")
            .container_arrow4
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#C1E4FA;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe infundir respeto. 
          .col-lg-4.mb-5.pe-4(style="position:relative;")
            .container_arrow5
            .h-100.p-4.pt-5.pb-5.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#FFE7CB;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.15);position:relative;")
              p.mb-0.text-center.w-100(style="font-size:18px;" data-aos="fade-up") Debe dar tiempo suficiente al actor del tránsito para responder adecuadamente. 
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") En cuanto a diseño, se debe garantizar: 

    .row.mt-5(style="position:relative;")
      .col-lg-11
        .p-4(style="background: linear-gradient(180deg, rgba(225,236,246,1) 50%, rgba(207,224,240,1) 50%);border-radius:25px;")
          .row
            .col-lg.mb-4.mb-lg-0
              .h-100.p-4.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#3076B6;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.24);position:relative;")
                p.text-white.mb-0(data-aos="fade-up") Su tamaño, contraste, colores, forma, composición y retrorreflexión e iluminación se combinan de tal manera que atraigan la atención de todos los actores.
            .col-lg.mb-4.mb-lg-0
              .h-100.p-4.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#FFA031;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.24);position:relative;")
                p.mb-0(data-aos="fade-up") Su legibilidad y tamaño corresponden a la distancia de ubicación, de manera que permita un tiempo adecuado de reacción.
            .col-lg.mb-4.mb-lg-0
              .h-100.p-4.d-flex.align-content-center.align-items-center.flex-wrap(style="background-color:#3076B6;border-radius:10px;border:5px #fff solid;box-shadow:0px 0px 7px rgba(0,0,0,.24);position:relative;")
                p.text-white.mb-0(data-aos="fade-up") Sus características de color y tamaño se aprecian de igual manera durante el día, la noche y períodos de visibilidad limitada (Secretaría de Movilidad, 2015).
            .col-lg-1
      .col-lg-1.d-none.d-lg-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/20.svg" style="position:relative;right: 150px;width: 250px;max-width:none; top: -15px;filter:drop-shadow(-23px 0px 0px #CFE0F0)" alt="Imagen decorativa")
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") Teniendo en cuenta la señalización y demarcación en las vías y áreas públicas, se pueden observar algunos elementos que hacen parte de estas:

    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .row.mt-5(data-aos="fade-right")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
          .col.ps-1(style="place-self:center;")
            h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;") Simbología
        
        p.mt-4(data-aos="fade-up") En el contexto internacional existe la tendencia a preferir señales con mensajes simbólicos en lugar de escritos, porque el uso de símbolos facilita una rápida comprensión del mensaje, contribuyendo así a una mayor seguridad del tránsito (Secretaría de Movilidad, 2015).
        figure.mt-4
          img(src="@/assets/curso/tema3/21.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
      .col-lg
        .row.mt-5(data-aos="fade-right")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
          .col.ps-1(style="place-self:center;")
            h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;") Señales verticales
        
        .titulo-sexto.color-acento-botones.mt-4
          h5.d-block Figura 6
          span Muestra un paso peatonal regulado por semáforo ubicado en un tramo de vía.
        figure.mt-4
          img(src="@/assets/curso/tema3/22.svg" data-aos="zoom-in-up" alt="Muestra un paso peatonal regulado por semáforo ubicado en un tramo de vía")
          figcaption.fw-normal.p-4.text-center.mt-3(style="background-color:#DEE4F0;") Fuente: Manual de señalización vial (2015).
    
    .col-lg-10.mt-5.m-auto
      p(data-aos="fade-up") Este tipo de señales alertan limitaciones, prohibiciones o restricciones, advertir de peligros, informar acerca de rutas, direcciones, destinos y sitios de interés. De acuerdo con la Secretaría de Movilidad (2015)  se pueden clasificar en 4 grupos:
    
      TabsB.color-primario.mt-5
        .py-4.py-md-5.p-4(titulo="Señales <br> reglamentarias" :icono="require('@/assets/curso/tema3/23.svg')")
          .row.col-lg-11.m-auto
            p.text-center Tienen por finalidad notificar a los usuarios de las vías las prioridades en el uso de estas y autorizaciones existentes.          
            figure.col-lg-10.m-auto.mt-4
              img(src='@/assets/curso/tema3/27.svg' alt="Imagen decorativa")
            p.text-center.fw-bold.mt-4 Tomada de Mintransporte
        .py-4.py-md-5.p-4(titulo="Señales <br> preventivas" :icono="require('@/assets/curso/tema3/24.svg')")
          .row.col-lg-11.m-auto
            p.text-center Su propósito es advertir a los usuarios sobre la existencia y naturaleza de riesgos y/o situaciones imprevistas presentes en la vía o en sus zonas adyacentes.  
            figure.col-lg-10.m-auto.mt-4
              img(src='@/assets/curso/tema3/28.svg' alt="Imagen decorativa")
            p.text-center.fw-bold.mt-4 Tomada de Mintransporte
        .py-4.py-md-5.p-4(titulo="Señales <br> informativas" :icono="require('@/assets/curso/tema3/25.svg')")
          .row.col-lg-11.m-auto
            p.text-center Tienen como propósito guiar a los usuarios y entregarles la información necesaria para que puedan llegar a sus destinos de la forma más segura, simple y directa posible. 
            figure.col-lg-10.m-auto.mt-4
              img(src='@/assets/curso/tema3/29.svg' alt="Imagen decorativa")
            p.text-center.fw-bold.mt-4 Tomada de Mintransporte
        .py-4.py-md-5.p-4(titulo="Señales <br> transitorias" :icono="require('@/assets/curso/tema3/26.svg')")
          .row.col-lg-11.m-auto
            p.text-center Modifican transitoriamente el régimen normal de utilización de la vía. 
            figure.col-lg-10.m-auto.mt-4
              img(src='@/assets/curso/tema3/30.svg' alt="Imagen decorativa")
            p.text-center.fw-bold.mt-4 Tomada de Mintransporte
    
    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
      .col.ps-1(style="place-self:center;")
        h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;") Características básicas 
    
    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.p-5.h-100.d-flex.align-content-center.flex-wrap
          .tarjeta-numerada__numero
            .h2 1
          .text-start 
            p.mb-0(data-aos="fade-up") #[strong Mensaje:] deben tener un mensaje claro e inequívoco al usuario del sistema vial, lo que se logra a través símbolos y/o leyendas.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100.d-flex.align-content-center.flex-wrap
          .tarjeta-numerada__numero
            .h2 2
          .text-start 
            p.mb-0(data-aos="fade-up") #[strong Forma y color:] dependiendo del tipo de señal, la normativa de tránsito y movilidad especifica colores y formas apropiadas para su uso.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.p-5.h-100.d-flex.align-content-center.flex-wrap
          .tarjeta-numerada__numero
            .h2 3
          .text-start 
            p.mb-0(data-aos="fade-up") #[strong Tamaño:] se determina en función de la velocidad máxima permitida, ya que esta identifica las distancias mínimas a las que la señal debe ser vista y leída, siempre bajo lo dispuesto por la normatividad aplicable.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100.d-flex.align-content-center.flex-wrap
          .tarjeta-numerada__numero
            .h2 4
          .text-start 
            p.mb-0(data-aos="fade-up") #[strong Visibilidad y retrorreflexión:] deben ser visibles en cualquier período del día y bajo toda condición climática; por ello se construyen o elaboran con materiales apropiados y se someten a procedimientos que aseguran su retrorreflexión. (Secretaría de Movilidad, 2015).
    
    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
      .col.ps-1(style="place-self:center;")
        h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;")  Ubicación
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Su localización debe considerar distancia entre la señal y la situación a la cual ella se refiere, o ubicación longitudinal, distancia entre la señal y la calzada, o ubicación lateral, altura de la señal y orientación del tablero (Secretaría de Movilidad, 2015).
        .tarjeta.color-primario.p-4.mt-4(style="background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/17.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.text-white Manual de señalización vial
                  p.text-small.text-white Para ampliar la información sobre la señalización y sus características técnicas se invita a consultar el documento de la Secretaría de Movilidad de Bogotá, 2015, #[em.text-white Manual de señalización vial], Capítulo 2, el cual se encuentra en el material complementario o descargar el documento del siguiente enlace. 
                .col-sm-auto
                  a.boton.color-primario(href="https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/" target="_blank")
                    span(style="color:#12263F !important;") Descargar
                    i.fas.fa-file-download(style="color:#12263F !important;")
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/31.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    .row.mt-5(data-aos="fade-right")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img.mt-2(src="@/assets/curso/tema3/15.svg" alt="Imagen decorativa")
      .col.ps-1(style="place-self:center;")
        h4.mb-0.pb-1.ps-1.pe-3(style="border-bottom:2px #193651 solid;width:fit-content;") Demarcaciones
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/32.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") La señalización horizontal corresponde a la aplicación de marcas viales conformadas por líneas, flechas, símbolos y letras que se adhieren sobre el pavimento, bordillos o sardineles y estructuras de las vías de circulación o adyacentes a ellas, así como a los dispositivos que se colocan sobre la superficie de rodadura, con el fin de regular, canalizar el tránsito o indicar la presencia de obstáculos. Éstas se conocen como demarcaciones (Secretaría de Movilidad, 2015).
        p.mt-4(Data-aos="fade-up") La ubicación de la demarcación debe ser tal que garantice al usuario que viaja a la velocidad máxima de circulación que permite la vía, ver y comprender su mensaje con suficiente tiempo para reaccionar y ejecutar la maniobra adecuada, de modo que satisfaga uno de los siguientes objetivos: 
    
    .cont_3_2.mt-5.pt-5.pb-5
      .col-lg-10.m-auto
        .row(style="position:relative;")
          .col-lg-4.mb-4.mb-lg-0.pe-0(style="place-self:end;")
            figure
              img(src="@/assets/curso/tema3/34.svg" data-aos="fade-right" alt="Imagen decorativa")
          .col-lg-8.ps-0
            figure
              img(src="@/assets/curso/tema3/35.svg" data-aos="fade-left" alt="Imagen decorativa")
        .tarjeta-avatar-b.mt-5(style="position:relative;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/24.svg' style="max-width:100px;" alt="Imagen decorativa")
          .tarjeta.tarjeta--azul(style="background-color:#F6F6F6;border-radius:10px;box-shadow: 0px 3px 10px 0px rgba(0,0,0,.2);")
            .p-4
              h4(data-aos="fade-up") Importante
              p.mb-0(data-aos="fade-up") Para ampliar la información sobre la señalización y sus características técnicas se invita a consultar el documento de la Secretaría de Movilidad de Bogotá 2015, Manual de señalización vial, Capítulo 3, el cual se encuentra en el material complementario.

          



 
    



</template>

<script>
export default {
  name: 'Tema3',
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
.cont_banderin:before
  content: ''
  position: absolute
  width: 33px
  height: 33px
  top: 0px
  right: 38px
  background-color: #C2C5C3
  transform: skew(133deg, 31deg) rotate(-7deg)
  filter: blur(3.3px)
.cont_3_1
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/2.png)
  background-size: cover
  background-position: center
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
.cont_popover:before
  content: 'Instituto Geográfico Agustín Codazzi'
  color: white
  font-weight: 400
  width: 320px
  text-align: center
  padding: .8rem 1.5rem
  background-color: #12263F
  border-radius: 10px
  position: absolute
  transform: translateX(-50%)
  top: -65px
  transition: all .2s ease-in
  opacity: 0
.cont_popover:after
  content: ''
  position: absolute
  width: 0
  height: 0
  transform: translateX(-100%)
  top: -20px
  border-left: 20px solid transparent
  border-right: 20px solid transparent
  border-top: 20px solid #12263F
  transition: all .2s ease-in
  opacity: 0
.cont_popover:hover:after, .cont_popover:hover:before
  opacity: 1
.tabs-c__header
  margin-bottom: 0px
.tabs-c__content-item
  background-color: #FFF0DF
.tabs-c__tab--active span
  font-weight: bold
.icon1:before
  background-color: #fff
  border-radius: 100%
@media (max-width: 992px)
  .bloque-texto-g__texto1
    width: 100% !important
  .container_arrow1, .container_arrow2, .container_arrow3, .container_arrow4, .container_arrow5
    display: none
.container_arrow1:before
  content: ''
  position: absolute
  width: 35px
  height: 35px
  right: 8px
  z-index: 0
  background-color: #fff
  border: 12px #3076B6 solid
  transform: rotate(45deg)
  top: 38%
.container_arrow2:before
  content: ''
  position: absolute
  width: 35px
  height: 35px
  right: 8px
  z-index: 0
  background-color: #fff
  border: 12px #FFA031 solid
  transform: rotate(45deg)
  top: 38%
.container_arrow3:before
  content: ''
  position: absolute
  width: 35px
  height: 35px
  right: 43%
  bottom: -15px
  z-index: 0
  background-color: #fff
  border: 12px #3076B6 solid
  transform: rotate(45deg)
.container_arrow4:before
  content: ''
  position: absolute
  width: 35px
  height: 35px
  left: -3px
  z-index: 0
  background-color: #fff
  border: 12px #3076B6 solid
  transform: rotate(45deg)
  top: 38%
.container_arrow5:before
  content: ''
  position: absolute
  width: 35px
  height: 35px
  left: -3px
  z-index: 0
  background-color: #fff
  border: 12px #FFA031 solid
  transform: rotate(45deg)
  top: 38%
.tabs-b__content-item
  background-color: #FFF0DF
.tabs-b.color-primario .tabs-b__tab--active
  border-top-color: #FFA031 !important
  background-color: #FFF0DF
.tabs-b__tab
  border-bottom: 0
.tarjeta-numerada
  border: solid 3px
  box-shadow: 0px 0px 15px rgba(0,0,0,.1)
.cont_3_2
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/33.png)
  background-size: cover
  background-position: top
.tarjeta-avatar-b__img
  min-width: 15%
.tarjeta-avatar-b .tarjeta
  padding-left: 5%
</style>
