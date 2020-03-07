<template>
  <div class="map-province" :style="{ height: clientHeight }">
    <div class="box">
      <a href="javascript:history.back();">
        <button class="backBtn" @click="back()">返回上级</button>
      </a>
      <div id="mapChart-province" class="chart"></div>
    </div>
  </div>
</template>

<script>
require("echarts/map/js/province/xizang.js");
require("echarts/map/js/china.js");
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
import cityMap from "@/js/china-main-city-map.js";
import optionPublicFun from "../../../utils/optionPublic.js";
import optionMapFun from "./optionMap.js";
export default {
  name: "map-province",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      name: null,
      datas: [
        {
          name: "拉萨市",
          value: 0
        },
        {
          name: "日喀则市",
          value: 54
        },
        {
          name: "昌都市",
          value: 13
        },
        {
          name: "山南市",
          value: 40
        },
        {
          name: "那曲地区",
          value: 75
        },
        {
          name: "阿里地区",
          value: 13
        },
        {
          name: "林芝市",
          value: 83
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.setClient();
      this.name = this.$route.params.name;
      this.mapChartProvince(this.name);
    });
  },
  methods: {
    back() {},
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    mapChartProvince(name) {
      this.myChart = new optionPublicFun().init("mapChart-province");
      let that = this;
      let option = {
        tooltip: new optionMapFun().mapTooltip(),
        visualMap: new optionMapFun().mapVisualMap(),
        geo: new optionMapFun().mapGeo(name),
        series: new optionMapFun().mapSeries(that.datas)
      };
      this.myChart.setOption(option);
      this.myChart.on("click", function(param) {
        that.$router.push({
          path: "/whole/county/" + cityMap[param.name] + "/" + param.name
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.map-province {
  .box {
    position: absolute;
    width: 90%;
    height: 80vh;
    left: 5%;
    top: 10%;
  }
  .chart {
    position: relative;
    height: 90%;
    top: 10%;
  }
  .backBtn {
    position: absolute;
    top: 0;
    background-color: #00c298;
    border: 0;
    color: #fff;
    height: 27px;
    font-family: Microsoft Yahei;
    font-size: 1em;
    cursor: pointer;
  }
}
</style>
