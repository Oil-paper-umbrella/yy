<template>
  <div class="map-chart" v-bind:style="{height:clientHeight}">
    <div id="province-container"></div>
  </div>
</template>

<script>
require("echarts/map/js/province/henan");
import optionPublicFun from "../../../utils/optionPublic.js";
import optionMapFun from "./optionMap.js";
require("echarts/lib/chart/map");
require("echarts/lib/component/tooltip");
export default {
  name: "map-chart",
  data() {
    return {
      clientHeight: "100%",
      myChart: {},
      datas: [
        {
          name: "郑州市",
          value: 10,
          val1: 0,
          val2: 0
        },
        {
          name: "开封市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "洛阳市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "平顶山市",
          value: 4,
          val1: 0,
          val2: 0
        },
        {
          name: "焦作市",
          value: 1,
          val1: 0,
          val2: 0
        },
        {
          name: "鹤壁市",
          value: 3,
          val1: 0,
          val2: 0
        },
        {
          name: "新乡市",
          value: 50,
          val1: 0,
          val2: 0
        },
        {
          name: "安阳市",
          value: 100,
          val1: 0,
          val2: 0
        },
        {
          name: "濮阳市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "许昌市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "漯河市",
          value: 5,
          val1: 0,
          val2: 0
        },
        {
          name: "三门峡市",
          value: 2,
          val1: 0,
          val2: 0
        },
        {
          name: "南阳市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "商丘市",
          value: 0,
          val1: 0,
          val2: 0
        },
        {
          name: "信阳市",
          value: 3,
          val1: 0,
          val2: 0
        },
        {
          name: "周口市",
          value: 6,
          val1: 0,
          val2: 0
        },
        {
          name: "驻马店市",
          value: 3,
          val1: 0,
          val2: 0
        },
        {
          name: "济源市",
          value: 0,
        }
      ],
      yData: [],
      barData: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.mapCharts();
      // console.log(this.)
    });
  },
  mounted(){
    this.setClient()
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    mapCharts() {
      this.myChart = new optionPublicFun().init("province-container");
      this.myChart.setOption({
        // title: new optionMapFun().mapTitle(),
        tooltip: new optionMapFun().mapTooltip(),
        grid: new optionMapFun().mapBarGrid(),
        visualMap: {
            min: 0,
            max: 100,
            left: "15%",
            bottom: "5%",
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
              fontSize: "12",
              color: "white"
            }
        },
        series: new optionMapFun().mapBarSeries(this.datas)
      });
      this.myChart.on("click", () => {
        // if (!this.flag) {
        //   this.$router.push({
        //     path: "/whole/subpie/" + this.checkedVal + "/" + status[params.name]
        //   });
        // }
        this.$router.push({
            // path: "/whole/provice/" + params.data.cityName
            path: "/whole/proviceInfo"
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
  #province-container {
    width: 100%;
    height: 100%;
  }
}
</style>