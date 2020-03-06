<template>
  <div>
    <div class="clock">
      <span class="current">
        <div class="current-time">{{ nowTime }}</div>
        <br />
        <div class="current-date">{{ nowDate + " " + nowWeek }}</div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "" // 当前星期
    };
  },
  methods: {
    currentTime() {
      setInterval(this.getDate, 500);
    },
    getDate() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let sf =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      if (week == 1) {
        this.nowWeek = "星期一";
      } else if (week == 2) {
        this.nowWeek = "星期二";
      } else if (week == 3) {
        this.nowWeek = "星期三";
      } else if (week == 4) {
        this.nowWeek = "星期四";
      } else if (week == 5) {
        this.nowWeek = "星期五";
      } else if (week == 6) {
        this.nowWeek = "星期六";
      } else {
        this.nowWeek = "星期日";
      }
      _this.nowTime = hh + ":" + mf + ":" + sf;
      _this.nowDate = yy + "/" + mm + "/" + dd;
    }
  },
  created() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.getDate) {
      clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>
<style lang="scss">
  .current {
    float: left;
    color: #fff;
    margin-left: 0.25rem;
    height: 10%;
    line-height: 10%;
    .current-time {
      height: 2.2rem;
      font-size: 2.5rem;
      margin-top: 2rem;
      margin-left: 1rem;
    }
    .current-date {
      display: inline-block;
      padding-left: 15px;
    }
  }
</style>
