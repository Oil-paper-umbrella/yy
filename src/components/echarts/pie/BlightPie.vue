<template>
  <div class="blight-pie-chart" :style="{ height: clientHeight }">
    <span>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{title}}疫情分析：</span>
    </span>
    <div id="blight-pie-container"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPieFun from "./optionPie.js";
import bus from "../../../../public/eventBus.js"
import optionPublicFun from "../../../utils/optionPublic.js";
const colors = ["#3893E5", "#F6D54A", "#FF4343"];
export default {
  name: "blight-pie-chart",
  data() {
    return {
      data: null,
      title: null,
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
      dataChina: [
        { value: 5, name: "确诊" },
        { value: 16, name: "疑似" },
        { value: 234, name: "正常" }
      ],
      dataProvice: [
        { value: 1, name: "确诊" },
        { value: 1, name: "疑似" },
        { value: 200, name: "正常" }
      ],
    };
  },
  mounted() {
    bus.$on("cityName", (cityName) => {
      console.log("cityname pie", cityName);
      if(cityName == "china"){
        this.title = "全国";
        this.data = this.dataChina;
      }else if(cityName == "西藏"){
        this.title = cityName + "省";
        this.data = this.dataProvice;
      }
      this.blightPieCharts(this.data);
    });
  },
  methods: {
    // pie 数据渲染
    blightPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("blight-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend('vertical', "-5", '30%'),
        color: colors,
        series: opPieFnc.pieSeries('83%', '43%', '50%', data)
      }); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.blight-pie-chart {
  width: 100%;
  height: 100%;
  #blight-pie-container {
    width: 100%;
    height: 96%;
  }
}
</style>
