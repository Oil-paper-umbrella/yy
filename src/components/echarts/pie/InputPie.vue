<template>
  <div class="input-pie-chart" :style="{ height: clientHeight }">
    <i class="el-icon-arrow-right"></i
    ><span class="chart-title">{{ title }}信息录入情况：</span>
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
      dataSchool: [
        { value: 5, name: "已录" },
        { value: 16, name: "未录" }
      ],
      dataDepartment: [
        { value: 5, name: "计算机学院(软件学院)" },
        { value: 116, name: "新闻与传播学院" },
        { value: 51, name: "信息工程学院" },
        { value: 6, name: "化学与环境工程学院" },
        { value: 85, name: "教师教育学院" },
        { value: 10, name: "电气与自动化学院" }
      ],
      dataGrade: [
        { value: 5, name: "17级" },
        { value: 116, name: "16级" },
        { value: 51, name: "18级" }
      ],
      data: null,
      title: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.title = "全校师生";
      this.data = this.dataSchool;
      this.inputPieCharts(this.data);
    });
  },
  methods: {
    // pie 数据渲染
    inputPieCharts(data) {
      let opPieFnc = new optionPieFun();
      this.myChart = new optionPublicFun().init("input-pie-container");
      this.myChart.setOption({
        tooltip: opPieFnc.pieTooltip(),
        legend: opPieFnc.pieLegend("horizontal", "0"),
        // color: colors,
        series: opPieFnc.pieSeries("68%", data)
      });
      // 饼图重新渲染
      this.myChart.on("click", params => {
        if (params.name == "未录" || params.name == "已录") {
          this.title = "所有院系师生";
          this.data = this.dataDepartment;
        } else if (
          params.name == "16级" ||
          params.name == "17级" ||
          params.name == "16级"
        ) {
          console.log(params.name,"aa");
          this.$router.push({
            path: "/whole/uninputInfo/" + params.name
          });
        } else {
          this.title = params.name + "师生";
          this.data = this.dataGrade;
        }
        console.log(this.index, params);
        this.inputPieCharts(this.data);
        /* this.$router.push({
          path: "/whole/uninputInfo/" + that.time
        }); */
        /* else if (params.name == "计算机学院(软件学院)") {
          this.data = this.dataGrade;
        } */
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
