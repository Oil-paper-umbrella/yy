<template>
  <div class="time-table-info" :style="{ height: clientHeight }">
    <div>
      <i class="el-icon-arrow-right"></i
      ><span class="chart-title">{{ classNo }}课表信息：</span>
    </div>
    <el-table
      :data="timeTableInfo"
      border
      style="width: 100%"
      class="time-table-info"
      @cell-click="getTeacherInfo"
    >
      <el-table-column prop="monday" label="星期一" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tuesday" label="星期二" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="wednesday" label="星期三" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="thursday" label="星期四" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="friday" label="星期五" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="saturday" label="星期六" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="sunday" label="星期日" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "time-table-info",
  data() {
    return {
      clientHeight: "100%",
      classNo: null,
      timeTableInfo: [
        {
          monday: "工作流 李冰",
          tuesday: "操作系统 小王",
          wednesday: "离散数学 小李",
          thursday: "工作流 李冰",
          friday: "操作系统 小王",
          saturday: "离散数学 小李",
          sunday: "离散数学 小李"
        },
        {
          monday: "工作流 李冰",
          tuesday: "操作系统 小王",
          wednesday: "离散数学 小李",
          thursday: "工作流 李冰",
          friday: "操作系统 小王",
          saturday: "离散数学 小李",
          sunday: "离散数学 小李"
        },
        {
          monday: "工作流 李冰",
          tuesday: "操作系统 小王",
          wednesday: "离散数学 小李",
          thursday: "工作流 李冰",
          friday: "操作系统 小王",
          saturday: "离散数学 小李",
          sunday: "离散数学 小李"
        }
      ]
    };
  },
  created() {
    this.setClient();
    this.classNo = this.$route.params.classNo;
  },
  methods: {
    setClient() {
      let clientHeight = document.documentElement
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
      this.clientHeight = clientHeight - 125 + "px";
    },
    getTeacherInfo(row, column) {
      let name = row[column.property].split(" ")[1];
      this.$router.push({
        path: "/whole/teacherInfo/" + name + "/false"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.time-table-info::-webkit-scrollbar {
  width: 4px;
}
.time-table-info::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.time-table-info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.time-table-info {
  width: 100%;
  height: 100%;
  .chart-title {
    font-size: 20px;
  }
  .time-table-info {
    margin-top: 18px;
  }
}
</style>
