<template lang="pug">
nuxt-plotly(
  :data='pieChart.data',
  :layout='pieChart.layout',
  :config='pieChart.config',
  style='width: 100%',
  @on-ready="userGraphOnReady"
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

  const config0 = { 
    scrollZoom: true, // zoom
    displayModeBar: false, // menu bar
  }

  const layout0 = {
    title: 'title',
    showlegend: false,
  }

  const pieChart = reactive({
    changeDataNo: 1,
    // data: data0,
    changeConfigNo: 1,
    config: config0,
    changeLayoutNo: 1,
    layout: layout0,
  })

  const userGraphOnReady = (plotlyHTMLElement: any) => {
    // console.log({ plotlyHTMLElement });

    // plotlyHTMLElement.on?.("plotly_afterplot", function () {
    //   console.log("done plotting");
    // });

    // クリック時の挙動追加
    plotlyHTMLElement.on?.("plotly_click", function (d:any) {
      const point = d.points[0]
      const info = {
        label: point.label
      }
      console.log(point)
    });
  }
</script>
