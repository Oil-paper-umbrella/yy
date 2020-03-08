<template>
  <div class="uninputTable" :style="{ height: clientHeight }">
    <el-table :data="uninputInfo" border style="width: 100%" class="uninputInfo">
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
  name: "uninputTable",
  data() {
    return {
      clientHeight: "100%",
      uninputInfo: [
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.uninputTable::-webkit-scrollbar {
  width: 4px;
}
.uninputTable::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.uninputTable::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.uninputTable {
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
  .uninputInfo {
    margin-top: 10px;
  }
}
</style>
