<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro1.pt-4
      .row
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/intro2.png" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-1
        .col-lg-7(style="place-self:center;")
          .p-4.p-lg-5.cont_arrow_1(style="background-color:#EAF4FB;")
            p(data-aos="fade-up") Le damos la bienvenida al componente formativo denominado #[strong “Supervisión de sistemas de recolección”], el cual, le permitirá identificar las normativas de manejo en los sistemas de recolección de residuos sólidos. Además, se abordarán elementos importantes según la clasificación de residuos, aforo de residuos, componentes requeridos en el servicio de aseo, reglamento técnico de agua y saneamiento básico. Lo invitamos a aprovechar el contenido y a explorar las actividades y recursos que se disponen para su aprendizaje.
            p.mt-4.fw-bold.mb-0(data-aos="fade-up") Éxitos


        
    
   
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
}
</script>
<style lang="sass">
.cont_intro1, .cont_intro1 *
  position: relative
.cont_intro1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/intro1.png)
  background-size: cover
  background-position: center
.cont_arrow_1, .cont_arrow_1 *
  position: relative
.cont_arrow_1:before
  content: ''
  position: absolute
  left: -75px
  width: 200px
  height: 200px
  top: 18%
  background-color: #EAF4FB
  transform: rotate(45deg)
</style>
