<template>
  <div class="pie-chart" v-bind:style="{ height: clientHeight }">
    <div class="index-menu">
      <span class="menu-name">城市：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allTimes"
        size="small"
      ></el-cascader>
    </div>
    <div id="four-modules-container"></div>
  </div>
</template>

<script>
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
// import dataPublicFun from "../../../utils/dataPublic";
// import getFourModual from "../../../api/modules.js";
// import requestCommonData from "../../../api/common.js";
// const colors = ["#FCD85A", "#0084C8", "#D8514B", "#9CCB63"];
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
export default {
  name: "pie-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      flag: false, // 切换legend样式
      pieLgendStyle: {
        // legend 样式
        weight: "bold",
        size: 14,
        legendRight: "13%"
      },
      allTimes: [
        {
          value: "pie",
          label: "饼图",
          children: [
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
          ]
        },
        {
          value: "line",
          label: "折线图",
          children: [
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
          ]
        }
      ],
      checkedVal: ["pie","henan", "pingdingshan"],
      datas: [
              { value: 5, name: "确诊病例" },
              { value: 16, name: "疑似病例" },
              { value: 234, name: "正常" }
            ]
    };
  },
  created() {
    this.$nextTick(() => {
       this.setLegendStyle(this.flag);
      this.fourModulesPieCharts();
    });
  },
  mounted() {
    let nowPath = this.$route.path;
    if (nowPath == "/whole/proviceInfo") {
      this.setClient();
    }else if (nowPath == "/whole") {
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
    setLegendStyle(flag) {
      // 设置 legend 样式参数
      if (flag) {
        this.pieLgendStyle.weight = "normal";
        this.pieLgendStyle.size = 9;
        this.pieLgendStyle.legendRight = "-5";
      }
    },
    // pie 数据渲染
    fourModulesPieCharts() {
      this.myChart = new optionPublicFun().init("four-modules-container");
      let pieObj = this.pieLgendStyle;
      let opPieFnc = new optionPieFun();
      let that = this;
      this.myChart.setOption({
        tooltip: opPieFnc.firstPieTooltip(pieObj.weight, pieObj.size),
        legend: opPieFnc.firstPieLegend(
          pieObj.weight,
          pieObj.size,
          pieObj.legendRight
        ),
        series: opPieFnc.firstPieSeries(that.datas)
      });
      // 饼图 级联
      this.myChart.on("click", () => {
        // let status = {
        //   着力电网发展质量提升: "1",
        //   着力公司管理效率提升: "2",
        //   着力创新创效能力提升: "3",
        //   基础保障力提升: "4"
        // };
        // if (!this.flag) {
        //   this.$router.push({
        //     path: "/whole/subpie/" + this.checkedVal + "/" + status[params.name]
        //   });
        // }
        this.$router.push({
            path: "/whole/subPie"
          });
      });
    }
  },
  watch: {
    checkedVal: {
      handler: function(val) {
        // let getApi = [getFourModual({ timeid: val[0] })];
        // let resApi = [this.requestFourModualData];
        // this.reqGetInfo(getApi, resApi);
        if(val[0]=="line"){
          this.$router.push({
            // path: "/whole/provice/" + params.data.cityName
            path: "/whole/line"
          });
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pie-chart {
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
  #four-modules-container {
    width: 100%;
    height: 96%;
  }
}
</style>
