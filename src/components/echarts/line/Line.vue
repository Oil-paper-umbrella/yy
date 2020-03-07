<template>
  <div class="line-chart" v-bind:style="{ height: clientHeight }">
    <span>
      <i
        class="el-icon-arrow-right"
        style="color: #E6A23C;font-weight: bold;"
      ></i
      ><span class="title">各省人数变化：</span>
    </span>
    <div id="line-container"></div>
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
const defaultCityName = "河南";
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
export default {
  name: "line-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      lineStyle: {
        weight: "bold",
        size: 14,
        orientData: "vertical",
        zoomHeight: "30"
      },
      flag: false,
      dates: ["3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7"],
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
      this.setLineStyle(this.flag);
      this.lineCharts();
    });
  },
  mounted() {
    let nowPath = this.$route.path;
    if (nowPath == "/whole/line") {
      this.setClient();
    } else if (nowPath == "/whole") {
      this.flag = true;
    }
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    // 设置 折线图 样式
    setLineStyle(flag) {
      if (flag) {
        this.lineStyle.weight = "normal";
        this.lineStyle.size = 12;
        this.lineStyle.orientData = "horizontal";
        this.lineStyle.zoomHeight = "20";
      }
    },
    lineCharts() {
      this.myChart = new optionPublicFun().init("line-container");
      let that = this;
      let lineObj = this.lineStyle;
      let opLineFnc = new optionLineFun();
      let option = {
        tooltip: opLineFnc.lineTooltip(lineObj.weight, lineObj.size),
        legend: opLineFnc.lineLegend(
          lineObj.weight,
          lineObj.size,
          lineObj.orientData,
          selectedCity
        ),
        color: colors,
        grid: {
          bottom: "15%"
        },
        dataZoom: opLineFnc.lineDataZoom(lineObj.zoomHeight),
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
              defaultCityName,
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
.line-chart {
  width: 100%;
  height: 100%;
  position: relative;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  #line-container {
    width: 100%;
    height: 90%;
  }
}
</style>
