<template>
  <div class="map-chart" >
    
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$ajax = axios
export default {
  mounted() {
    this.$axios({
      methods: 'get',
      url: "http://127.0.0.1:8083/a.json"
    })
    .then(rs => {
      console.log("ok",rs);
    }, rp => {
      console.log("erro",rp);
    })
  },
};
</script>