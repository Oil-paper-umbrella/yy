<template>
  <div class="map-chart" v-bind:style="{ height: clientHeight }">
    <div class="container">
      <div id="pie-container1"></div>
      <div id="pie-container2"></div>
      <div id="pie-container3"></div>
      <div id="pie-container4"></div>
      <div class="pie-info"><li class="info-title">200例</li><li class="info-inner">昨日 + 10</li></div>
      <div class="pie-info"><li class="info-title">200例</li><li class="info-inner">较昨日降低10例</li></div>
      <div class="pie-info"><li class="info-title">200例</li><li class="info-inner">较昨日降低10例</li></div>
      <div class="pie-info"><li class="info-title">200例</li><li class="info-inner">较昨日降低10例</li></div>
    </div><div style="clear: both;"></div>
    <div id="map-container"></div>
  </div>
</template>

<script>
require("echarts/map/js/china.js");
import optionPublicFun from "../../../utils/optionPublic.js";
import optionMapFun from "./optionMap.js";
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
export default {
  name: "map-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      pieChart1: {},
      pieChart2: {},
      pieChart3: {},
      pieChart4: {},
      datas: [
        {
          name: "南海诸岛",
          cityName: "",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "北京",
          cityName: "beijing",
          value: 54,
          val1: 0,
          val2: 0
        },
        {
          name: "天津",
          cityName: "tianjin",
          value: 13,
          val1: 0,
          val2: 0
        },
        {
          name: "上海",
          cityName: "shanghai",
          value: 40,
          val1: 0,
          val2: 0
        },
        {
          name: "重庆",
          cityName: "chongqing",
          value: 75,
          val1: 0,
          val2: 0
        },
        {
          name: "河北",
          cityName: "hebei",
          value: 13,
          val1: 0,
          val2: 0
        },
        {
          name: "河南",
          cityName: "henan",
          value: 83,
          val1: 0,
          val2: 0
        },
        {
          name: "云南",
          cityName: "yunnan",
          value: 11,
          val1: 0,
          val2: 0
        },
        {
          name: "辽宁",
          cityName: "liaoning",
          value: 19,
          val1: 0,
          val2: 0
        },
        {
          name: "黑龙江",
          cityName: "heilongjiang",
          value: 15,
          val1: 0,
          val2: 0
        },
        {
          name: "湖南",
          cityName: "hunan",
          value: 69,
          val1: 0,
          val2: 0
        },
        {
          name: "安徽",
          cityName: "anhui",
          value: 60,
          val1: 0,
          val2: 0
        },
        {
          name: "山东",
          cityName: "shandong",
          value: 39,
          val1: 0,
          val2: 0
        },
        {
          name: "新疆",
          cityName: "xinjiang",
          value: 4,
          val1: 0,
          val2: 0
        },
        {
          name: "江苏",
          cityName: "jiangsu",
          value: 31,
          val1: 0,
          val2: 0
        },
        {
          name: "浙江",
          cityName: "zhejiang",
          value: 104,
          val1: 0,
          val2: 0
        },
        {
          name: "江西",
          cityName: "jiangxi",
          value: 36,
          val1: 0,
          val2: 0
        },
        {
          name: "湖北",
          cityName: "hubei",
          value: 1052,
          val1: 0,
          val2: 0
        },
        {
          name: "广西",
          cityName: "guangxi",
          value: 33,
          val1: 0,
          val2: 0
        },
        {
          name: "甘肃",
          cityName: "gansu",
          value: 7,
          val1: 0,
          val2: 0
        },
        {
          name: "山西",
          cityName: "shanxi",
          value: 9,
          val1: 0,
          val2: 0
        },
        {
          name: "内蒙古",
          cityName: "neimenggu",
          value: 7,
          val1: 0,
          val2: 0
        },
        {
          name: "陕西",
          cityName: "shanxi",
          value: 22,
          val1: 0,
          val2: 0
        },
        {
          name: "吉林",
          cityName: "jilin",
          value: 4,
          val1: 0,
          val2: 0
        },
        {
          name: "福建",
          cityName: "fujian",
          value: 18,
          val1: 0,
          val2: 0
        },
        {
          name: "贵州",
          cityName: "guizhou",
          value: 5,
          val1: 0,
          val2: 0
        },
        {
          name: "广东",
          cityName: "shandong",
          value: 98,
          val1: 0,
          val2: 0
        },
        {
          name: "青海",
          cityName: "qinghai",
          value: 1,
          val1: 0,
          val2: 0
        },
        {
          name: "西藏",
          cityName: "xizang",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "四川",
          cityName: "sichuan",
          value: 44,
          val1: 0,
          val2: 0
        },
        {
          name: "宁夏",
          cityName: "ningxia",
          value: 4,
          val1: 0,
          val2: 0
        },
        {
          name: "海南",
          cityName: "hainan",
          value: 22,
          val1: 0,
          val2: 0
        },
        {
          name: "台湾",
          cityName: "taiwan",
          value: 3,
          val1: 0,
          val2: 0
        },
        {
          name: "香港",
          cityName: "xianggang",
          value: 5,
          val1: 0,
          val2: 0
        },
        {
          name: "澳门",
          cityName: "aomen",
          value: 5,
          val1: 0,
          val2: 0
        }
      ],
      yData: [],
      barData: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.mapCharts();
    });
  },
  methods: {
    options(name,color){
        return {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        series: [
          {
            name: name,
            type: "pie",
            clockWise: true,
            hoverAnimation: false,
            radius: ["85%", "85%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 1,
                label: {
                  normal: {
                    formatter: name,
                    textStyle: {
                      color: color,
                      fontSize: 16
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: color,
                    borderColor: color,
                    borderWidth: 2
                  }
                },
                tooltip: {
                  backgroundColor: "rgba(0,0,0,0)",
                  textStyle: {
                    color: "rgba(0,0,0,0)"
                  }
                }
              }
            ]
          },
          {
            name: name,
            type: "pie",
            clockWise: true,
            hoverAnimation: false,
            radius: ["95%", "95%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 1,
                label: {
                  normal: {
                    formatter: name,
                    textStyle: {
                      color: color,
                      fontSize: 16
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: color,
                    borderColor: color,
                    borderWidth: 2
                  }
                },
                tooltip: {
                  backgroundColor: "rgba(0,0,0,0)",
                  textStyle: {
                    color: "rgba(0,0,0,0)"
                  }
                }
              }
            ]
          }
        ]
      }
    },
    mapCharts() {
      this.myChart = new optionPublicFun().init("map-container");
      this.pieChart1 = new optionPublicFun().init("pie-container1");
      this.pieChart2 = new optionPublicFun().init("pie-container2");
      this.pieChart3 = new optionPublicFun().init("pie-container3");
      this.pieChart4 = new optionPublicFun().init("pie-container4");
      let that = this;
      /* let option = {
        tooltip: {
            formatter: function(e) {
                return .5 == e.value ? e.name + "：有疑似病例" : e.name + "<br />" + "学生总人数：" + e.value + "<br />" + "确诊病例：" + e.data.val1 + "<br />" + "疑似病例：" + e.data.val2;
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            left: 0,
            bottom: 0,
            showLabel: !0,
            text: ["高", "低"],
            pieces: [{
                gt: 100,
                label: "> 100 人",
                color: "#7f1100"
            }, {
                gte: 10,
                lte: 100,
                label: "10 - 100 人",
                color: "#ff5428"
            }, {
                gte: 1,
                lt: 10,
                label: "1 - 9 人",
                color: "#ff8c71"
            },{
                value: 0,
                color: "lightgreen"
            }],
            show: true,
            textStyle: {
              fontSize: "10",
              color: "white"
            }
        },
        geo: {
            map: "china",
            zoom: 1.24,
            label: {
                normal: {
                  show: true,
                    fontSize: "12",
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
        series: [{
            type: "map",
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                color: "red"
              }
            },
            geoIndex: 0,
            data: that.datas,

        }]
      }; */
      this.myChart.setOption({
        tooltip: new optionMapFun().mapTooltip(),
        visualMap: {
          min: 0,
          max: 100,
          left: 0,
          bottom: 60,
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
              value: 0,
              color: "lightgreen"
            }
          ],
          show: true,
          textStyle: {
            fontSize: "10",
            color: "white"
          }
        },
        geo: {
          map: "china",
          zoom: 1.23,
          label: {
            normal: {
              show: true,
              fontSize: "12",
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
            type: "map",
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                color: "red"
              }
            },
            geoIndex: 0,
            data: that.datas
          }
        ]
      });
      this.myChart.on("click", () => {
        // if (!this.flag) {
        //   this.$router.push({
        //     path: "/whole/subpie/" + this.checkedVal + "/" + status[params.name]
        //   });
        // }
        this.$router.push({
          // path: "/whole/provice/" + params.data.cityName
          path: "/whole/provice"
        });
      });

      this.pieChart1.setOption(this.options("确诊","#00ccfe"));
      this.pieChart2.setOption(this.options("疑似","#FBC02D"));
      this.pieChart3.setOption(this.options("治愈","#67C23A"));
      this.pieChart4.setOption(this.options("死亡","#FF5C6C"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map-chart {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    #pie-container1 {
      width: 24%;
      height: 95%;
    }
    #pie-container2 {
      width: 24%;
      height: 95%;
    }
    #pie-container3 {
      width: 24%;
      height: 95%;
    }
    #pie-container4 {
      width: 24%;
      height: 95%;
    }
    .pie-info {
        width: 24%;
        height: 5%;
        text-align: center;
        .info-title {
            font-size: 20px;
        }
        .info-inner {
            font-size: 14px;
        }
    }
  }
  #map-container {
    width: 100%;
    height: 86%;
    margin: 0;
    padding: 0;
  }
}
</style>
