<template>
  <div class="trend-chart">
    <div>
      <i class="el-icon-arrow-right" style="color: #E6A23C;font-weight: bold;"></i
      ><span class="title">当天出入趋势图：</span>
    </div>
    <div id="trend-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/line")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/grid")
import optionPublicFun from "../../../utils/optionPublic.js";
import optionTrendFun from "./optionTrend.js";
export default {
  name: "echarts",
  data() {
    return {
      myChart: {},
      date: ["11/1", "11/2", "11/3", "11/4", "11/5", "11/6", "11/7","11/8", "11/9", "11/10", "11/11", "11/12", "11/13", "11/14"],
      outData: ["89", "37", "66", "75", "46", "55", "35","46", "85","66", "65", "46", "95", "35"],
      enterData: ["9", "57", "36", "45", "26", "75", "65","76", "25","46", "45", "86", "25", "65"]
    };
  },
  created() {
    this.$nextTick(() => {
      this.barCharts();
    });
  },
  methods: {
    barCharts() {
      this.myChart = new optionPublicFun().init("trend-container");
      let opTrendFnc = new optionTrendFun();
      let that = this;
      let option = {
        tooltip: {
          trigger: "axis"
        },
        xAxis: opTrendFnc.trendxAxis(that.date),
        grid: opTrendFnc.trendGrid(),
        axisLabel: {
          color: "#fff"
        },
        yAxis: opTrendFnc.trendyAxis(),
        series: opTrendFnc.trendSeries(that.outData, that.enterData)
      };
      this.myChart.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.trend-chart {
  width: 100%;
  height: 100%;
  position: relative;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  #trend-container {
    width: 100%;
    height: 93%;
  }
}
</style>