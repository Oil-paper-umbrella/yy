<template>
  <div class="table-num">
    <div>
      <i
        class="el-icon-arrow-right"
        style="color: #E6A23C;font-weight: bold;"
      ></i
      ><span class="title">温度统计：</span>
    </div>
    <el-table
      :data="personNum"
      border
      style="width: 100%"
      class="studentInfo"
      @cell-click="rowClick"
    >
      <el-table-column prop="time" label="统计时间" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="unnormal" label="正常/人" width="80">
      </el-table-column>
      <el-table-column prop="normal" label="异常/人" width="80">
      </el-table-column>
      <el-table-column prop="all" label="总人数" width="80"> </el-table-column>
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
          time: "8:00",
          unnormal: 10,
          normal: 10,
          all: 20
        },
        {
          time: "14:00",
          unnormal: 10,
          normal: 10,
          all: 20
        },
        {
          time: "19:00",
          unnormal: 10,
          normal: 10,
          all: 20
        }
      ],
      time: null
    };
  },
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      let date = new Date();
      let month = date.getMonth() + 1;
      let day = date.getDay() + 1;
      let time = month + "-" + day;
      this.time = time;
    },
    rowClick() {
      let that = this;
      this.$router.push({
        path: "/whole/tempPersonInfo/" + that.time
      });
    }
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
