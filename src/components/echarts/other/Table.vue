<template>
  <div class="table-num">
    <div>
      <i class="el-icon-arrow-right" style="color: #E6A23C;"></i
      ><span class="title">出入人数统计：</span>
    </div>
    <el-table :data="personNum" border style="width: 100%" class="studentInfo">
      <el-table-column prop="time" label="截止时间" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="outNum" label="外出/人" width="80"> </el-table-column>
      <el-table-column prop="enterNum" label="进入/人" width="80"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "table-num",
  data() {
    return {
      myChart: {},
      personNum: [
        {
          time: "2020-3-6 11:27:03",
          outNum: "15",
          enterNum: "10"
        },{
          time: "2020-3-6 11:27:03",
          outNum: "15",
          enterNum: "10"
        },{
          time: "2020-3-6 11:27:03",
          outNum: "15",
          enterNum: "10"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.table-num::-webkit-scrollbar {
  width: 4px;
}
.table-num::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.table-num::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.table-num {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  .studentInfo {
    margin-top: 10px;
  }
}
</style>
