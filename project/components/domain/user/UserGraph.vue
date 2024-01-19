<template lang="pug">
nuxt-plotly(
  :data='pieChart.data',
  :layout='pieChart.layout',
  :config='pieChart.config',
  style='width: 100%'
)
</template>

<script setup lang="ts">
  // const { t } = useI18n()
  // const data0 = [
  //     {
  //         values: [19, 26, 55],
  //         labels: ["Residential", "Non-Residential", "Utility"],
  //         type: "pie",
  //     },
  // ];

  const config0 = { scrollZoom: true, displayModeBar: true }

  const layout0 = {
    title: '[layout0] Pie Chart on `PieChart.client.vue`',
  }

  const pieChart = reactive({
    changeDataNo: 1,
    // data: data0,
    changeConfigNo: 1,
    config: config0,
    changeLayoutNo: 1,
    layout: layout0,
  })
</script>
