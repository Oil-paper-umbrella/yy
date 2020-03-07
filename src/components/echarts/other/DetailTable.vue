<template>
  <div class="studentTable" v-bind:style="{ height: clientHeight }">
    <div class="index-menu">
      <span class="menu-name">城市：</span>
      <el-cascader
        v-model="checkedVal"
        :options="allTimes"
        size="small"
      ></el-cascader>
    </div>
    <el-table :data="tableData3" border style="width: 100%" class="studentInfo">
      <el-table-column prop="name" label="姓名" width="90"> </el-table-column>
      <el-table-column prop="temperature" label="体温/℃" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="住址" width="180">
      </el-table-column>
      <el-table-column prop="Diagnosis" label="是否确诊" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="outDoor" label="是否外出"> </el-table-column
      ><el-table-column
        prop="Contact"
        label="是否接触患病人员"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="quarantine" label="是否隔离" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="hospitalization" label="是否住院">
      </el-table-column>
      <el-table-column
        prop="relative"
        label="亲人是否确诊"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="school" label="是否返平" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="village" label="小区是否有确诊人员">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "studentTable",
  data() {
    return {
      clientHeight: "100%",
      allTimes: [
        {
          value: "henan",
          label: "河南省",
          children: [
            {
              value: "pingdingshan",
              label: "平顶山市",
              children: [
                {
                  value: "all",
                  label: "所有学生信息"
                },
                {
                  value: "aid",
                  label: "确诊学生信息"
                },
                {
                  value: "aid1",
                  label: "疑似学生信息"
                }
              ]
            },
            {
              value: "jiaozuo",
              label: "焦作市",
              children: [
                {
                  value: "all",
                  label: "所有学生信息"
                },
                {
                  value: "aid",
                  label: "确诊学生信息"
                },
                {
                  value: "aid1",
                  label: "疑似学生信息"
                }
              ]
            }
          ]
        }
      ],
      checkedVal: ["henan", "pingdingshan", "all"],
      tableData3: [
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        },
        {
          temperature: "38.5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          Diagnosis: "是",
          outDoor: "否",
          Contact: "是",
          quarantine: "否",
          hospitalization: "否",
          relative: "否",
          school: "否",
          village: "否"
        }
      ]
    };
  },
  mounted() {
    this.setClient();
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    }
  },
  /* watch: {
    checkedVal: {
      handler: function(val) {
        // let getApi = [getFourModual({ timeid: val[0] })];
        // let resApi = [this.requestFourModualData];
        // this.reqGetInfo(getApi, resApi);
        if (val[0] == "pie") {
          this.$router.push({
            // path: "/whole/provice/" + params.data.cityName
            path: "/whole/pie"
          });
        }
      }
    }
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.studentTable::-webkit-scrollbar {
  width: 4px;
}
.studentTable::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.studentTable::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.studentTable {
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
  .studentInfo {
    margin-top: 10px;
  }
}
</style>
