<template>
  <div class="input-pie-chart" :style="{ height: clientHeight }">
    <i class="el-icon-arrow-right"></i
    ><span class="chart-title">疫情比例：</span>
    <div id="input-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPieFun from "./optionPie.js";
import optionPublicFun from "../../../utils/optionPublic.js";
// const colors = ["#3893E5", "#F6D54A"];
export default {
  name: "input-pie-chart",
  data() {
    return {
      myChart: {},
      clientHeight: "100%",
      datas: [
        { value: 5, name: "已录" },
        { value: 16, name: "未录" }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.inputPieCharts(this.datas);
    });
  },
  methods: {
    // pie 数据渲染
    inputPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("input-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend(),
        // color: colors,
        series: opPieFnc.pieSeries(data)
      });
      // 饼图重新渲染
      this.myChart.on("click", params => {
        console.log(params);
        /* this.$router.push({
          path: "/whole/uninputInfo/" + that.time
        }); */
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.input-pie-chart {
  width: 100%;
  height: 100%;
  #input-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
