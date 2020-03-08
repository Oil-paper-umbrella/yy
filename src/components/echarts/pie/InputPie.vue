<template>
  <div class="input-pie-chart" v-bind:style="{ height: clientHeight }">
      <i
        class="el-icon-arrow-right"
        style="color: #E6A23C;font-weight: bold;"
      ></i
      ><span class="title">疫情比例：</span>
    <div id="input-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
const colors = ["#3893E5", "#F6D54A", "#FF4343"];
export default {
  name: "input-pie-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      datas: [
        { value: 5, name: "已录" },
        { value: 16, name: "未录" }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.inputPieCharts();
    });
  },
  mounted(){

  },
  methods: {
    // pie 数据渲染
    inputPieCharts() {
      this.myChart = new optionPublicFun().init("input-pie-container");
      let opPieFnc = new optionPieFun();
      let that = this;
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend(),
        color: colors,
        series: opPieFnc.pieSeries(that.datas)
      });
      // 饼图 级联
      this.myChart.on("click", () => {
        this.$router.push({
          path: "/whole/detail"
        });
      });
    }
  }
  /* watch: {
    checkedVal: {
      handler: function(val) {
        // let getApi = [getFourModual({ timeid: val[0] })];
        // let resApi = [this.requestFourModualData];
        // this.reqGetInfo(getApi, resApi);
        if (val[0] == "line") {
          this.$router.push({
            // path: "/whole/provice/" + params.data.cityName
            path: "/whole/line"
          });
        }
      }
    }
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.input-pie-chart {
  width: 100%;
  height: 100%;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  #input-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
