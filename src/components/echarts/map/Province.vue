<template>
  <div>
    <div class="title">Echarts中国地图三级钻取</div>
    <div class="box">
      <button class="backBtn" @click="back()">返回上级</button>
      <div id="mapChart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import cityMap from "@/js/china-main-city-map.js";
// import echarts from "echarts";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.prototype.$ajax = axios;
// import registerAndsetOption from '@/js/echarts-map'

//中国地图（第一级地图）的ID、Name、Json数据
// var chinaId = 100000;
// var chinaName = "china";
// var chinaJson = null;

//记录父级ID、Name
// var mapStack = [];
// var parentId = null;
// var parentName = null;

//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
// var myChart = null;

import optionPublicFun from "../../../utils/optionPublic.js";
require("echarts/map/js/province/xizang.js");
export default {
  name: "chinaMap",
  props: {
    msg: String,
    myChart: {},
  },
  data(){
    return {
      name: null,
    }
  },
  mounted() {
    this.name = this.$route.params.name;
    console.log(this.name);
    this.mapChart1s(this.name);
  },
  methods: {
    back() {},
    mapChart1s(name) {
      this.myChart = new optionPublicFun().init("mapChart1");
      let option = {
        tooltip: {
          triggerOn: "click",
          formatter: function(e) {
            return 0.5 == e.value
              ? e.name + "：有疑似病例"
              : e.seriesName + "<br />" + e.name + "：" + e.value;
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [
            {
              gt: 100,
              label: "> 100 人",
              color: "#7f1100"
            },
            {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428"
            },
            {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71"
            },
            {
              gt: 0,
              lt: 1,
              label: "疑似",
              color: "#ffd768"
            },
            {
              value: 0,
              color: "#ffffff"
            }
          ],
          show: !0
        },
        geo: {
          map: name,
          roam: !1,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.23,
          top: 120,
          label: {
            normal: {
              show: !0,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: [
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
          }
        ]
      };
      this.myChart.setOption(option);
      let that = this;
      this.myChart.on("click", function(param) {
        var cityId = cityMap[param.name];
        if (cityId) {
          //代表有下级地图
          axios
            .get("http://127.0.0.1:8083/js/" + cityId + ".json", {})
            .then(response => {
              const mapJson = response.data;
              console.log("kk",mapJson);
              that.$router.push({
                path:
                  "/whole/vil/" + cityId +"/" + param.name+ "/" + mapJson
              });
              /* registerAndsetOption(
                that.myChart,
                cityId,
                param.name,
                mapJson,
                true
              ); */
              // console.log(cityId,
              //   param.name,
              //   mapJson,);
            });
        } 
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
/* function registerAndsetOption(myChart, id, name, mapJson, flag) {
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

  if (flag) {
    //往mapStack里添加parentId，parentName,返回上一级使用
    mapStack.push({
      mapId: parentId,
      mapName: parentName
    });
    parentId = id;
    parentName = name;
  }
} */

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

<style scoped>
.title {
  width: 100%;
  height: 10vh;
  text-align: center;
  color: #fff;
  font-size: 2em;
  line-height: 10vh;
}
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
.myBlog {
  position: absolute;
  top: 2px;
  right: 5%;
  display: block;
  border: 2px solid #262a53;
}
.myBlog a {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px;
  font-size: 1em;
}
.myBlog a img {
  vertical-align: middle;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: -5px 5px auto auto;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 5%;
  line-height: 100%;
  left: 0;
  bottom: 0%;
  text-align: center;
}
</style>
