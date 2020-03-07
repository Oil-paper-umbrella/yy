<template>
  <div class="trend-chart" v-bind:style="{ height: clientHeight }">
    <div>
      <i
        class="el-icon-arrow-right"
        style="color: #E6A23C;font-weight: bold;"
      ></i
      ><span class="title">人数趋势图：</span>
    </div>
    <div id="trend-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/grid");
require("echarts/lib/component/dataZoom");
import optionPublicFun from "../../../utils/optionPublic.js";
import optionLineFun from "./optionLine.js";
const colors = ["#3893E5", "#FF4343"];
export default {
  name: "trend-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      dates: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"],
      unnormalData: [10, 20, 11, 15, 17, 19, 51],
      normalData: [22, 70, 111, 571, 440, 360, 10]
    };
  },
  created() {
    this.$nextTick(() => {
      this.trendCharts();
    });
  },
  methods: {
    trendCharts() {
      this.myChart = new optionPublicFun().init("trend-container");
      let that = this;
      let opLineFnc = new optionLineFun();
      let option = {
        tooltip: opLineFnc.lineTooltip("bold", 14),
        color: colors,
        legend: {
          right: 10,
          top: 8,
          textStyle: new optionPublicFun().textStyle("normal", 14)
        },
        dataZoom: opLineFnc.lineDataZoom("20"),
        xAxis: opLineFnc.lineXaxis(that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("人数"),
        series: opLineFnc.lineSeries(that.unnormalData, that.normalData)
      };
      this.myChart.setOption(option);
      this.myChart.on("click", params => {
        this.$router.push({
          path: "/whole/detailTable/" + params.name
        });
      });
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
    height: 90%;
  }
}
</style>
