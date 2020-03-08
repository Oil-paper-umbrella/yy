<template>
  <div class="number-line-chart" :style="{ height: clientHeight }">
    <span>
      <i
        class="el-icon-arrow-right"
      ></i
      ><span class="chart-title">各省人数变化：</span>
    </span>
    <div id="number-line-container"></div>
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
import bus from "../../../../public/eventBus.js"
import optionPublicFun from "../../../utils/optionPublic.js";
const colors = [
  "#0000C6",
  "#009393",
  "#FF0000",
  "#01B468",
  "#2894FF",
  "#00FFFF",
  "#F0FFF0",
  "#79FF79",
  "#424200",
  "#844200",
  "#FFFF37",
  "#FF8F59"
];
const selectedCity = {
  福建: true,
  河南: false,
  云南: false,
  浙江: false,
  新疆: false,
  西藏: false,
  内蒙古: false,
  青海: false,
  陕西: false
};
export default {
  name: "number-line-chart",
  data() {
    return {
      myChart: {},
      clientHeight: "100%",
      defaultCityName: "河南",
      dates: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"],
      datas: [
        {
          name: "河南",
          type: "line",
          stack: "总量",
          data: [0, 0, 0, 0, 1, 0, 1]
        },
        {
          name: "浙江",
          type: "line",
          stack: "总量",
          data: [2, 0, 1, 1, 0, 0, 0]
        },
        {
          name: "福建",
          type: "line",
          stack: "总量",
          data: [1, 2, 0, 0, 0, 0, 0]
        },
        {
          name: "云南",
          type: "line",
          stack: "总量",
          data: [5, 3, 0, 1, 0, 0, 0]
        },
        {
          name: "内蒙古",
          type: "line",
          stack: "总量",
          data: [0, 1, 1, 1, 0, 1, 0]
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.lineCharts();
    });
  },
  mounted() {
    bus.$on("cityName", (cityName) => {
      console.log("ok-number-line",cityName);
    });
  },
  methods: {
    lineCharts() {
      let that = this;
      let opLineFnc = new optionLineFun();
      this.myChart = new optionPublicFun().init("number-line-container");
      let option = {
        tooltip: opLineFnc.lineTooltip("normal", 14),
        legend: opLineFnc.lineLegend(
          "normal",
          12,
          "horizontal",
          selectedCity
        ),
        color: colors,
        grid: {
          bottom: "17%"
        },
        dataZoom: opLineFnc.lineDataZoom(20),
        xAxis: opLineFnc.lineXaxis(that.dates, "日期"),
        yAxis: opLineFnc.lineYaxis("人数"),
        series: that.datas
      };
      this.myChart.setOption(option);
      // legend发生变化事件
      this.myChart.on("legendselectchanged", function(params) {
        let stack = new optionPublicFun().getStack(params);
        if (stack == 4) {
          that.$message.warning({
            showClose: true,
            message: "糟糕，数据太多了，眼花缭乱的。请至多对三个地市进行比较"
          });
          that.myChart.setOption(
            new optionPublicFun().initSelectedCity(
              params,
              that.defaultCityName,
              selectedCity,
              option
            )
          );
        }
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.number-line-chart {
  width: 100%;
  height: 100%;
  #number-line-container {
    width: 100%;
    height: 90%;
  }
}
</style>
