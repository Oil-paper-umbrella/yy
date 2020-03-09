<template>
  <div class="person-weather-table" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">温度异常人员信息：</span>
    </div>
    <el-table
      :data="personInfo"
      border
      style="width: 100%"
      class="person-info"
    >
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
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
      <el-table-column prop="selfTel" label="本人电话" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="parentTel"
        label="紧急联系人电话"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "person-weather-table",
  data() {
    return {
      clientHeight: "100%",
      personInfo: [
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
          selfTel: 13155443325,
          parentTel: 18545443325
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.person-weather-table::-webkit-scrollbar {
  width: 4px;
}
.person-weather-table::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.person-weather-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.person-weather-table {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .person-info {
    margin-top: 18px;
  }
}
</style>
