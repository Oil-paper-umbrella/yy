<template>
  <div class="line-chart" v-bind:style="{ height: clientHeight }">
    <div class="index-menu">
      <span class="menu-name">指标：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allIndexs"
        size="small"
      ></el-cascader>
    </div>
    <div id="line-container"></div>
  </div>
</template>

<script>
import dataPublicFun from "../../../utils/dataPublic.js";
import optionPublicFun from "../../../utils/optionPublic.js";
// import dataLineFun from "./dataLine.js";
// import optionLineFun from "./optionLine.js";
import requestCommonData from "../../../api/common.js";
import getLineChart from "../../../api/line.js";
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/grid");
require("echarts/lib/component/dataZoom");
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
// const defaultCityName = "河南";
export default {
  name: "echarts",
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
      allIndexs: [
        {
          value: "1",
          label: "确诊病例"
        },
        {
          value: "2",
          label: "疑似病例"
        }
      ],
      checkedVal: ["1"] // 选中的 指标参数 和 季度参数
    };
  },
  created() {
    this.$nextTick(() => {
      this.lineCharts();
    });
  },
  mounted() {
    this.setClient();
    /* let nowPath = this.$route.path;
    if (nowPath == "/whole/line") {
      this.setClient();
    } else if (nowPath == "/whole") {
      this.flag = true;
    } */
    /**
     * APi请求队列
     * */
    /* let getApi = [requestCommonData.getAllIndexs(), this.getLineInfo()]; */
    /**
     * 响应数据处理队列
     * */
    // let resApi = [this.requestAllIndexs, this.requestLineChartData];
    //请求组件所需要数据
    // this.reqGetInfo(getApi, resApi);
  },
  methods: {
    async getLineInfo() {
      let indexData = await requestCommonData.getAllIndexs();
      this.checkedVal[0] = indexData.data.Allindexs[1].iid;
      let lineData = await getLineChart({
        indexid: indexData.data.Allindexs[1].iid
      });
      return lineData;
    },
    reqGetInfo(getApi, resApi) {
      /**
       * 异步请求数据
       * */
      let result = Promise.all(getApi);
      result
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].code === 0) {
              resApi[i](data[i].data);
            } else {
              throw new Error(data[i].message);
            }
          }
        })
        .catch(error => {
          throw error;
        });
    },
    requestLineChartData(data) {
      this.setLineStyle(this.flag);
      this.lineCharts(data);
    },
    requestAllIndexs(data) {
      this.allIndexs = new dataPublicFun(data).getAllIndexs("line");
    },
    lineCharts() {
      this.myChart = new optionPublicFun().init("line-container");
      let option = {
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "white",
            fontSize: "14"
          },
          formatter: "确诊人数：<br />" + "{b} <br/>{a}:" + "{c}"
        },
        legend: {
          orient: "vertical",
          type: "scroll",
          right: 10,
          top: "30%",
          selectedMode: "multiple",
          selected: selectedCity,
          textStyle: {
            color: "white",
            fontSize: "14"
          }
        },
        color: colors,
        grid: {
          bottom: "15%"
        },
        dataZoom: [
          {
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            textStyle: {
              color: "#fff"
            },
            height: 30,
            bottom: "0"
          },
          {
            type: "inside"
          }
        ],
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: new optionPublicFun().lineStyle("#fff", 1)
          },
          axisLabel: {
            show: true,
            textStyle: new optionPublicFun().textStyle("normal", 12),
            nameTextStyle: new optionPublicFun().textStyle("bold", 12)
          },
          data: ["3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7"],
          name: "日期"
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          },
          axisLine: {
            lineStyle: new optionPublicFun().lineStyle("#fff", 1)
          },
          textStyle: new optionPublicFun().textStyle("normal", 12),
          nameTextStyle: new optionPublicFun().textStyle("bold", 12),
          name: "人数",
          splitLine: {
            show: true,
            lineStyle: new optionPublicFun().lineStyle("#1B283E", 1)
          },
          min: 0
        },
        series: [
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
      this.myChart.setOption(option);
      // let pd_this = this;
      // legend发生变化事件
      /* this.myChart.on("legendselectchanged", function(params) {
        let stack = new optionPublicFun().getStack(params);
        if (stack == 4) {
          pd_this.$message.warning({
            showClose: true,
            message: "糟糕，数据太多了，眼花缭乱的。请至多对三个地市进行比较"
          });
          pd_this.myChart.setOption(
            new optionPublicFun().initSelectedCity(
              params,
              defaultCityName,
              selectedCity,
              option
            )
          );
        }
      }); */
    },

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
    }
  },
  watch: {
    checkedVal: {
      handler: function(val) {
        let getApi = [getLineChart({ indexid: val[0] })];
        let resApi = [this.requestLineChartData];
        this.reqGetInfo(getApi, resApi);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.line-chart {
  width: 100%;
  height: 100%;
  position: relative;
  .index-menu,
  .index-menu:hover {
    display: inline-block !important;
    margin: 0 10px;
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
  #line-container {
    width: 100%;
    height: 85%;
  }
}
</style>
