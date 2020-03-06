<template>
  <div>
    hh
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "map-chart",
  created() {
    this.test()
  },
  methods: {
    test() {
      this.$axios.get("../../../static/a.json",{}).then(response => {
        console.log("ok", response.data);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
