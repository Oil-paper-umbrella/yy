<template>
  <div class="blight-pie-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i
        class="el-icon-arrow-right"
      ></i
      ><span class="chart-title">疫情比例：</span>
      <span class="menu-name">城市：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allTimes"
        size="small"
      ></el-cascader>
    </div>
    <div id="blight-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPieFun from "./optionPie.js";
import optionPublicFun from "../../../utils/optionPublic.js";
const colors = ["#3893E5", "#F6D54A", "#FF4343"];
export default {
  name: "blight-pie-chart",
  data() {
    return {
      myChart: {},
      clientHeight: "100%",
      allTimes: [
        {
          value: "henan",
          label: "河南省",
          children: [
            {
              value: "pingdingshan",
              label: "平顶山市"
            },
            {
              value: "jiaozuo",
              label: "焦作市"
            }
          ]
        }
      ],
      checkedVal: ["henan", "pingdingshan"],
      datas: [
        { value: 5, name: "确诊" },
        { value: 16, name: "疑似" },
        { value: 234, name: "正常" }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.blightPieCharts();
    });
  },
  methods: {
    // pie 数据渲染
    blightPieCharts() {
      let that = this;
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("blight-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend(),
        color: colors,
        series: opPieFnc.pieSeries(that.datas)
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
.blight-pie-chart {
  width: 100%;
  height: 100%;
  .index-menu,
  .index-menu:hover {
    display: inline-block;
    margin: 0 10px;
    .el-input {
      width: 85%;
    }
    .el-input__inner {
      background-color: #111739;
      border: 1px solid #60c1de;
      color: #fff;
    }
    .el-input__inner:hover {
      border: 1px solid #60c1de;
    }
    .menu-name {
      font-size: 13px;
      color: #60c1de;
    }
  }
  #blight-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
