<template>
  <div class="outer-line-chart" :style="{ height: clientHeight }">
    <div>
      <i
        class="el-icon-arrow-right"
      ></i
      ><span class="chart-title">外出人数：</span>
    </div>
    <div id="outer-line-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/line");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/dataZoom");
require("echarts/lib/component/legendScroll");
import optionLineFun from "./optionLine.js";
import optionPublicFun from "../../../utils/optionPublic.js";
const colors = ["#3893E5", "#FF4343"];
export default {
  name: "outer-line-chart",
  data() {
    return {
      myChart: {},
      clientHeight: "100%",
      outerData: [10, 20, 11, 15, 17, 19, 51],
      enterData: [22, 70, 111, 571, 440, 360, 10],
      dates: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"]
    };
  },
  created() {
    this.$nextTick(() => {
      this.tempLineCharts();
    });
  },
  methods: {
    tempLineCharts() {
      let that = this;
      let opLineFnc = new optionLineFun();
      this.myChart = new optionPublicFun().init("outer-line-container");
      let option = {
        tooltip: opLineFnc.lineTooltip("normal", 12),
        color: colors,
        legend: {
          right: 10,
          top: 8,
          textStyle: new optionPublicFun().textStyle("normal", 12)
        },
        dataZoom: opLineFnc.lineDataZoom(20),
        xAxis: opLineFnc.lineXaxis(that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("人数"),
        series: opLineFnc.lineSeries(that.outerData, that.enterData, "外出", "非外出")
      };
      this.myChart.setOption(option);
      this.myChart.on("click", params => {
        this.$router.push({
          path: "/whole/outPersonInfo/" + params.name
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.outer-line-chart {
  width: 100%;
  height: 100%;
  #outer-line-container {
    width: 100%;
    height: 90%;
  }
}
</style>
