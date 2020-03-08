<template>
  <div class="four-pie-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">疫情情况：</span>
      <span class="menu-name">地区：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allTimes"
        size="small"
      ></el-cascader>
    </div>
    <div class="container">
      <div id="pie-chart-diagnosis"></div>
      <div id="pie-chart-suspect"></div>
      <div id="pie-chart-cure"></div>
      <div id="pie-chart-death"></div>
      <div class="pie-info">
        <li class="info-title">{{ DiagnosisCount }} 例</li>
        <li class="info-inner" v-show="this.flag">
          较昨日 {{ Diagnosissymbol }}{{ DiagnosisAdd }}
        </li>
      </div>
      <div class="pie-info">
        <li class="info-title">{{ SuspectCount }} 例</li>
        <li class="info-inner" v-show="this.flag">
          较昨日 {{ Suspectsymbol }}{{ SuspectAdd }}
        </li>
      </div>
      <div class="pie-info">
        <li class="info-title">{{ CureCount }} 例</li>
        <li class="info-inner" v-show="this.flag">
          较昨日 {{ Curesymbol }}{{ CureAdd }}
        </li>
      </div>
      <div class="pie-info">
        <li class="info-title">{{ DeathCount }} 例</li>
        <li class="info-inner" v-show="this.flag">
          较昨日 {{ Deathsymbol }}{{ DeathAdd }}
        </li>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
require("echarts/lib/chart/pie");
require("echarts/lib/component/legend");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;
import optionPieFun from "./optionPie.js";
import optionPublicFun from "../../../utils/optionPublic.js";
export default {
  name: "four-pie-chart",
  data() {
    return {
      flag: true,
      getProvinceDataIndex: true,
      pieCure: {},
      pieDeath: {},
      pieSuspect: {},
      pieDiagnosis: {},
      checkedVal: [0],
      allTimes: [
        {
          value: 0,
          label: "中国"
        },
        {
          value: 1,
          label: "河南"
        },
        {
          value: 2,
          label: "平顶山"
        }
      ],
      CureAdd: null,
      DeathAdd: null,
      CureCount: null,
      DeathCount: null,
      SuspectAdd: null,
      SuspectCount: null,
      DiagnosisAdd: null,
      DiagnosisCount: null,
      Curesymbol: "+",
      Deathsymbol: "+",
      Suspectsymbol: "+",
      Diagnosissymbol: "+",
      clientHeight: "100%"
    };
  },
  created() {
    this.$nextTick(() => {
      this.getChinaData();
      this.fourModulesPieCharts();
    });
  },
  methods: {
    getChinaData() {
      let that = this;
      this.flag = true;
      axios.get("/yiqing/nCoV/api/overall", {}).then(
        response => {
          let rs = response.data;
          if (rs.success == true) {
            let data = rs.results[0];
            that.CureAdd = data.curedIncr;
            that.DeathAdd = data.deadIncr;
            that.CureCount = data.curedCount;
            that.DeathCount = data.deadCount;
            that.SuspectAdd = data.suspectedIncr;
            that.DiagnosisAdd = data.confirmedIncr;
            that.SuspectCount = data.suspectedCount;
            that.DiagnosisCount = data.confirmedCount;
            if (that.CureAdd < 0) that.Curesymbol = "-";
            if (that.DeathAdd < 0) that.Deathsymbol = "-";
            if (that.SuspectAdd < 0) that.Suspectsymbol = "-";
            if (that.DiagnosisAdd < 0) that.Diagnosissymbol = "-";
          }
        },
        rs => {
          console.log("fourPie request is error", rs);
        }
      );
    },
    getOtherData() {
      let that = this;
      this.flag = false;
      axios.get("/yiqing/nCoV/api/area?latest=1&getProvinceData=河南省", {}).then(
        response => {
          let rs = response.data;
          console.log("datas", rs);
          if (rs.success == true) {
            let data = null;
            if(that.getProvinceDataIndex) {
              data = rs.results[0];
            }else {
              data = rs.results[0].cities[7];
            }
            that.CureCount = data.curedCount;
            that.DeathCount = data.deadCount;
            that.SuspectCount = data.suspectedCount;
            that.DiagnosisCount = data.confirmedCount;
          }else {
          console.log("four pie request is error", rs.msg);
          }
        },
        rs => {
          console.log("four pie request is error", rs);
        }
      );
    },
    getProvinceData() {
      this.getProvinceDataIndex = true;
      this.getOtherData();
    },
    getCountyData() {
      this.getProvinceDataIndex = false;
      this.getOtherData();
    },
    pieOptions(name, color) {
      return {
        series: new optionPieFun().fourPieSeries(name, color, "70%", "95%")
      };
    },
    // pie 数据渲染
    fourModulesPieCharts() {
      this.pieCure = new optionPublicFun().init("pie-chart-cure");
      this.pieDeath = new optionPublicFun().init("pie-chart-death");
      this.pieSuspect = new optionPublicFun().init("pie-chart-suspect");
      this.pieDiagnosis = new optionPublicFun().init("pie-chart-diagnosis");
      this.pieCure.setOption(this.pieOptions("治愈", "#67C23A"));
      this.pieDeath.setOption(this.pieOptions("死亡", "#FF5C6C"));
      this.pieSuspect.setOption(this.pieOptions("疑似", "#FBC02D"));
      this.pieDiagnosis.setOption(this.pieOptions("确诊", "#00ccfe"));
    }
  },
  watch: {
    checkedVal: {
      handler: function(val) {
        let data = val[0];
        console.log("four pie",data);
        let that = this;
        if (data == 0) {
          that.getChinaData();
        } else if (data == 1) {
          that.getProvinceData();
        } else if (data == 2) {
          that.getCountyData();
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.four-pie-chart {
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
  .container {
    width: 100%;
    height: 64%;
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
    #pie-chart-diagnosis {
      width: 24%;
      height: 95%;
    }
    #pie-chart-suspect {
      width: 24%;
      height: 95%;
    }
    #pie-chart-cure {
      width: 24%;
      height: 95%;
    }
    #pie-chart-death {
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
}
</style>
