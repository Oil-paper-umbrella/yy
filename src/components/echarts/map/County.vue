<template>
  <div class="map-county" :style="{ height: clientHeight }">
    <div class="box">
      <a href="javascript:history.back();">
        <button class="backBtn" @click="back()">返回上级</button>
      </a>
      <div id="mapChart-county" class="chart"></div>
    </div>
  </div>
</template>

<script>
require("echarts/map/js/province/xizang.js");
require("echarts/map/js/china.js");
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
import optionMapFun from "./optionMap.js";
import echarts from "echarts";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;

export default {
  name: "map-county",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      id: null,
      name: null,
      /* datas: [
        {
          name: "索县",
          value: 0
        },
        {
          name: "安多县",
          value: 54
        },
        {
          name: "巴青县",
          value: 13
        },
        {
          name: "班戈县",
          value: 40
        },
        {
          name: "比如县",
          value: 75
        },
        {
          name: "嘉黎县",
          value: 13
        },
        {
          name: "那曲县",
          value: 83
        },
        {
          name: "尼玛县",
          value: 11
        },
        {
          name: "聂荣县",
          value: 19
        },
        {
          name: "申扎县",
          value: 15
        }
      ] */
      datas: [
        {
          name: "措勤县",
          value: 0
        },
        {
          name: "噶尔县",
          value: 54
        },
        {
          name: "改则县",
          value: 13
        },
        {
          name: "革吉县",
          value: 40
        },
        {
          name: "普兰县",
          value: 75
        },
        {
          name: "日土县",
          value: 13
        },
        {
          name: "札达县",
          value: 83
        },
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.setClient();
      this.id = this.$route.params.id;
      this.name = this.$route.params.name;
      this.mapCounty();
    });
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    mapCounty() {
      this.myChart = echarts.init(document.getElementById("mapChart-county"));
      let that = this;
      axios
        .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
        .then(response => {
          const mapJson = response.data;
          registerAndsetOption(
            that.myChart,
            that.id,
            that.name,
            mapJson,
            false
          );
          let option = {
            tooltip: new optionMapFun().mapTooltip(),
            visualMap: new optionMapFun().mapVisualMap(),
            series: new optionMapFun().mapCountySeries(that.name, that.datas)
          };
          this.myChart.setOption(option);
        });
    },
    back() {}
  }
};
/**
 *
 * @param {*} myChart
 * @param {*} id        省市县Id
 * @param {*} name      省市县名称
 * @param {*} mapJson   地图Json数据
 * @param {*} flag      是否往mapStack里添加parentId，parentName
 */
function registerAndsetOption(myChart, id, name, mapJson) {
  echarts.registerMap(name, mapJson);
  myChart.setOption({
    series: [
      {
        type: "map",
        map: name,
        itemStyle: {
          normal: {
            areaColor: "rgba(23, 27, 57,0)",
            borderColor: "#1dc199",
            borderWidth: 1
          }
        },
        data: initMapData(mapJson)
      }
    ]
  });
}

function initMapData(mapJson) {
  var mapData = [];
  for (var i = 0; i < mapJson.features.length; i++) {
    mapData.push({
      name: mapJson.features[i].properties.name
      //id:mapJson.features[i].id
    });
  }
  return mapData;
}
</script>

<style scoped lang="scss">
.map-county {
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
