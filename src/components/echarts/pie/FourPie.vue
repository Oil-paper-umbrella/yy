<template>
  <div class="four-pie-chart" :style="{ height: clientHeight }">
    <div class="index-menu">
      <i
        class="el-icon-arrow-right"
        style="color: #E6A23C;font-weight: bold;"
      ></i
      ><span class="title">疫情情况：</span>
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
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
export default {
  name: "four-pie-chart",
  data() {
    return {
      clientHeight: "100%",
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
      checkedVal: [0],
      pieDiagnosis: {},
      pieSuspect: {},
      pieCure: {},
      pieDeath: {},
      flag: true,
      Diagnosissymbol: "+",
      DiagnosisCount: null,
      DiagnosisAdd: null,
      Suspectsymbol: "+",
      SuspectCount: null,
      SuspectAdd: null,
      Curesymbol: "+",
      CureCount: null,
      CureAdd: null,
      Deathsymbol: "+",
      DeathCount: null,
      DeathAdd: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.fourModulesPieCharts();
      this.china();
    });
  },
  methods: {
    china() {
      this.flag = true;
      let that = this;
      axios.get("/yiqing/nCoV/api/overall", {}).then(
        response => {
          let rs = response.data;
          if (rs.success == true) {
            let data = rs.results[0];
            that.DiagnosisCount = data.confirmedCount;
            that.DiagnosisAdd = data.confirmedIncr;
            that.SuspectCount = data.suspectedCount;
            that.SuspectAdd = data.suspectedIncr;
            that.CureCount = data.curedCount;
            that.CureAdd = data.curedIncr;
            that.DeathCount = data.deadCount;
            that.DeathAdd = data.deadIncr;
            if (that.DeathAdd < 0) that.Deathsymbol = "-";
            if (that.DiagnosisAdd < 0) that.Diagnosissymbol = "-";
            if (that.SuspectAdd < 0) that.Suspectsymbol = "-";
            if (that.CureAdd < 0) that.Curesymbol = "-";
          }
        },
        rs => {
          console.log("error", rs);
        }
      );
    },
    province() {
      this.flag = false;
      let that = this;
      axios.get("/yiqing/nCoV/api/area?latest=1&province=河南省", {}).then(
        response => {
          let rs = response.data;
          console.log("objectssss", rs);
          if (rs.success == true) {
            let data = rs.results[0];
            that.DiagnosisCount = data.confirmedCount;
            that.SuspectCount = data.suspectedCount;
            that.CureCount = data.curedCount;
            that.DeathCount = data.deadCount;
          }
        },
        rs => {
          console.log("error", rs);
        }
      );
    },
    county() {
      this.flag = false;
      let that = this;
      axios.get("/yiqing/nCoV/api/area?latest=1&province=河南省", {}).then(
        response => {
          let rs = response.data;
          console.log("objectssss", rs);
          if (rs.success == true) {
            let data = rs.results[0].cities[7];
            that.DiagnosisCount = data.confirmedCount;
            that.SuspectCount = data.suspectedCount;
            that.CureCount = data.curedCount;
            that.DeathCount = data.deadCount;
          }
        },
        rs => {
          console.log("error", rs);
        }
      );
    },
    pieOptions(name, color) {
      return {
        series: new optionPieFun().fourPieSeries(name, color, "85%", "95%")
      };
    },
    // pie 数据渲染
    fourModulesPieCharts() {
      this.pieDiagnosis = new optionPublicFun().init("pie-chart-diagnosis");
      this.pieSuspect = new optionPublicFun().init("pie-chart-suspect");
      this.pieCure = new optionPublicFun().init("pie-chart-cure");
      this.pieDeath = new optionPublicFun().init("pie-chart-death");
      this.pieDiagnosis.setOption(this.pieOptions("确诊", "#00ccfe"));
      this.pieSuspect.setOption(this.pieOptions("疑似", "#FBC02D"));
      this.pieCure.setOption(this.pieOptions("治愈", "#67C23A"));
      this.pieDeath.setOption(this.pieOptions("死亡", "#FF5C6C"));
    }
  },
  watch: {
    checkedVal: {
      handler: function(val) {
        let data = val[0];
        let that = this;
        if (data == 0) {
          that.china();
        } else if (data == 1) {
          that.province();
        } else if (data == 2) {
          that.county();
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
  .title {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
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
    height: 100%;
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
