<template>
  <div class="uninputTable" :style="{ height: clientHeight }">
    <el-table :data="uninputInfo" border style="width: 100%" class="uninputInfo">
      <el-table-column prop="name" label="姓名" width="90"> </el-table-column>
      <el-table-column prop="Professional" label="专业班级" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="dormitoryNum" label="宿舍号" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="dormitorManName" label="宿舍长姓名" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="dormitorManTel" label="宿舍长联系电话" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="instructor" label="辅导员" width="180">
      </el-table-column>
      <el-table-column prop="selfTel" label="本人电话" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="parentTel" label="紧急联系人电话" show-overflow-tooltip>
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
          name: "王小虎",
          Professional: "17学前一班",
          dormitoryNum: "3号楼 311",
          dormitorManName: "李四",
          dormitorManTel: 13155443325,
          instructor: "王五",
          selfTel: 13155443325,
          parentTel: 18545443325
        },
        {
          name: "王小虎",
          Professional: "教师教育学院",
          dormitoryNum: "3号楼 311",
          dormitorManName: "李四",
          dormitorManTel: 13155443325,
          instructor: "王五",
          selfTel: 13155443325,
          parentTel: 18545443325
        },
        {
          name: "王小虎",
          Professional: "教师教育学院",
          dormitoryNum: "3号楼 311",
          dormitorManName: "李四",
          dormitorManTel: 13155443325,
          instructor: "王五",
          selfTel: 13155443325,
          parentTel: 18545443325
        },
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
