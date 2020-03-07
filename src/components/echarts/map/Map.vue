<template>
  <div class="map-chart" v-bind:style="{ height: clientHeight }">
    <div id="map-container"></div>
  </div>
</template>

<script>
require("echarts/map/js/china.js");
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import optionPublicFun from "../../../utils/optionPublic.js";
import optionMapFun from "./optionMap.js";
export default {
  name: "map-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      datas: [
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
    };
  },
  created() {
    this.$nextTick(() => {
      this.mapCharts();
    });
  },
  methods: {
    mapCharts() {
      this.myChart = new optionPublicFun().init("map-container");
      let that = this;
      this.myChart.setOption({
        tooltip: new optionMapFun().mapTooltip(),
        visualMap: new optionMapFun().mapVisualMap(),
        geo: new optionMapFun().mapGeo("china"),
        series: new optionMapFun().mapSeries(that.datas)
      });
      this.myChart.on("click", (param) => {
        this.$router.push({
          path: "/whole/province/" + param.name
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map-chart {
  width: 100%;
  height: 100%;
  #map-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
