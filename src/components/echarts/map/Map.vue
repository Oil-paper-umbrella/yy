<template>
  <div class="map-chart" :style="{ height: clientHeight }">
    <div class="box">
      <button class="backBtn" @click="back()">返回上级</button>
      <div id="map-container" class="chart"></div>
    </div>
  </div>
</template>

<script>
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
import cityMap from "@/js/china-main-city-map.js";
import optionPublicFun from "../../../utils/optionPublic.js";
import bus from "../../../../public/eventBus.js";
import optionMapFun from "./optionMap.js";
import echarts from "echarts";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;
//记录父级ID、Name
var mapStack = [];
var parentId = null;
var parentName = null;
export default {
  name: "map-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      id: 100000,
      name: 'china',
      jsonData: null,
      mapStack: [],
      parentId: null,
      parentName: null,
      dataXizang: [
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
      ],
      dataChina: [
        {
          name: "南海诸岛",
          value: 0
        },
        {
          name: "北京",
          value: 54
        },
        {
          name: "天津",
          value: 13
        },
        {
          name: "上海",
          value: 40
        },
        {
          name: "重庆",
          value: 75
        },
        {
          name: "河北",
          value: 13
        },
        {
          name: "河南",
          value: 83
        },
        {
          name: "云南",
          value: 11
        },
        {
          name: "辽宁",
          value: 19
        },
        {
          name: "黑龙江",
          value: 15
        },
        {
          name: "湖南",
          value: 69
        },
        {
          name: "安徽",
          value: 60
        },
        {
          name: "山东",
          value: 39
        },
        {
          name: "新疆",
          value: 4
        },
        {
          name: "江苏",
          value: 31
        },
        {
          name: "浙江",
          value: 104
        },
        {
          name: "江西",
          value: 36
        },
        {
          name: "湖北",
          value: 1052
        },
        {
          name: "广西",
          value: 33
        },
        {
          name: "甘肃",
          value: 7
        },
        {
          name: "山西",
          value: 9
        },
        {
          name: "内蒙古",
          value: 7
        },
        {
          name: "陕西",
          value: 22
        },
        {
          name: "吉林",
          value: 4
        },
        {
          name: "福建",
          value: 18
        },
        {
          name: "贵州",
          value: 5
        },
        {
          name: "广东",
          value: 98
        },
        {
          name: "青海",
          value: 1
        },
        {
          name: "西藏",
          value: 0
        },
        {
          name: "四川",
          value: 44
        },
        {
          name: "宁夏",
          value: 4
        },
        {
          name: "海南",
          value: 22
        },
        {
          name: "台湾",
          value: 3
        },
        {
          name: "香港",
          value: 5
        },
        {
          name: "澳门",
          value: 5
        }
      ],
      dataAli: [
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
        }
      ],
      cityName: 'china'
    };
  },
  created() {
    this.$nextTick(() => {
      this.name = this.$route.params.name;
      this.mapCharts();
    });
  },
  methods: {
    back() {
      if (mapStack.length != 0) {
        //如果有上级目录则执行
        let map = mapStack.pop();
        axios
          .get("http://127.0.0.1:8083/js/" + map.mapId + ".json", {})
          .then(response => {
            this.jsonData = response.data;
            registerAndsetOption(
              this.myChart,
              map.mapId,
              map.mapName,
              this.jsonData,
              this.dataChina,
              false
            );
            //返回上一级后，父级的ID、Name随之改变
            parentId = map.mapId;
            parentName = map.mapName;
          });
      }
    },
    mapCharts() {
      this.myChart = new optionPublicFun().init("map-container");
      let that = this;
          bus.$emit("cityName", this.cityName);
      axios
        .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
        .then(response => {
          that.mapJson = response.data;
          that.jsonData = that.mapJson;
          parentId = that.id;
          (parentName = "china"), that.request(false, that.dataChina);
          that.myChart.on("click", params => {
            that.name = params.name;
            that.cityName = that.name;
            console.log("objectsss",params);
            bus.$emit("cityName", that.cityName);
            if (that.id) {
              that.id = cityMap[params.name];
              that.request(true, that.dataXizang);
            } else {
              mapStack = [];
              parentId = that.id;
              parentName = that.name;
              this.$message({
                showClose: true,
                message: "已经到底了",
                type: "warning"
              });
            }
          });
        });
    },
    request(flag, data) {
      let that = this;
      axios
        .get("http://127.0.0.1:8083/js/" + that.id + ".json", {})
        .then(response => {
          that.mapJson = response.data;
          that.jsonData = that.mapJson;
          registerAndsetOption(
            that.myChart,
            that.id,
            that.name,
            that.mapJson,
            data,
            flag
          );
        });
    }
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
function registerAndsetOption(myChart, id, name, mapJson, data, flag) {
  // let that = this;
  echarts.registerMap(name, mapJson);
  myChart.setOption({
    tooltip: new optionMapFun().mapTooltip(),
    visualMap: new optionMapFun().mapVisualMap(),
    geo: new optionMapFun().mapGeo(name),
    series: new optionMapFun().mapSeries(data)
  });
  if (flag) {
    //往mapStack里添加parentId，parentName,返回上一级使用
    mapStack.push({
      mapId: parentId,
      mapName: parentName
    });
    parentId = id;
    parentName = name;
  }
}
/**
 *
 * @param {*} myChart
 * @param {*} id        省市县Id
 * @param {*} name      省市县名称
 * @param {*} mapJson   地图Json数据
 * @param {*} flag      是否往mapStack里添加parentId，parentName
 */
/* function initMapData(mapJson) {
  var mapData = [];
  for (var i = 0; i < mapJson.features.length; i++) {
    mapData.push({
      name: mapJson.features[i].properties.name
      //id:mapJson.features[i].id
    });
  }
  return mapData;
} */
</script>

<style scoped lang="scss">
.map-chart {
  .box {
    position: absolute;
    width: 90%;
    height: 80vh;
    left: 5%;
    top: 10%;
  }
  .chart {
    position: relative;
    height: 100%;
    top: 10%;
  }
  .backBtn {
    position: absolute;
    top: 25%;
    background-color: #00c298;
    border: 0;
    color: #fff;
    height: 27px;
    font-family: Microsoft Yahei;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    z-index: 99;
  }
}
</style>
