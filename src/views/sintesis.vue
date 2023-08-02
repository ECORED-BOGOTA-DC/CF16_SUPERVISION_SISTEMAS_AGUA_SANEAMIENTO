<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Ya vistos los diferentes temas de este componente formativo es preciso revisar a través del siguiente mapa conceptual la síntesis al respecto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra mapa conceptual de supervisión de sistemas de recolección que incluye sus cuatro etapas: 1. Residuos Sólidos (características, peligrosidad, riego biológico, fuente productora ya aprovechamiento. 2. Aforo de residuos solidos ( tiene mecanismos de medición y se clasifican en peligrosos y no peligrosos) 3. Componentes requeridos en el servicio de aseo (utiliza mapas y nomenclatura) 4. Reglamento técnico de agua y saneamiento básico ( basados en RAS, PGIRS basados en el decreto 1076 de 2015)")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
