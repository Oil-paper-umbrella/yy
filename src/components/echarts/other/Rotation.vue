<template>
  <!-- 无缝滚动效果 -->
  <div class="marquee-wrap">
    <div>
      <i class="el-icon-arrow-right" style="color: #E6A23C;"></i
      ><span class="title">出入信息：</span>
    </div>
    <ul class="marquee-list" :class="{ 'animate-up': animateUp }">
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "marquee-up",
  data() {
    return {
      animateUp: false,
      listData: [
        "12***ve 成功邀请12人 已获奖金60元",
        "l***e 成功邀请5人 已获奖金40元",
        "l***e 成功邀请1人 已获奖金5元",
        "12***ve 成功邀请12人 已获奖金60元",
        "l***e 成功邀请5人 已获奖金40元",
        "l***e 成功邀请1人 已获奖金5元",
        "12***ve 成功邀请12人 已获奖金60元",
        "l***e 成功邀请5人 已获奖金40元",
        "l***e 成功邀请1人 已获奖金5元",
        "12***ve 成功邀请12人 已获奖金60元",
        "l***e 成功邀请5人 已获奖金40元",
        "l***e 成功邀请1人 已获奖金5元"
      ],
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(this.scrollAnimate, 1500);
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.listData.push(this.listData[0]);
        this.listData.shift();
        this.animateUp = false;
      }, 500);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.marquee-wrap {
  width: 100%;
  height: 243px;
  border-radius: 20px;
  margin: 0 auto;
  overflow: hidden;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  .marquee-list {
    li {
      width: 100%;
      height: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 20px;
      list-style: none;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    }
  }
  .animate-up {
    transition: all 0.5s ease-in-out;
    transform: translateY(-40px);
  }
}
</style>
