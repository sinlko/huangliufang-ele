<template>
  <van-grid :column-num="5">
    <van-grid-item
      v-for="(g,index) in grid"
      :key="index"
      :icon="g.imgurl"
      :text="g.name"
      to="/goodlist"
    />
  </van-grid>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import $ from "jquery";
//获取MongoDB中表的数据，可以用jq也可以用axios,在这里我用jq,在Card.vue利用axios
// 但是如果多处用到axios，最好把它放到全局，在main.js
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grid: []
    };
  },
  created() {
    // 获取数据
    this.loadMore();
  },
  methods: {
    loadMore() {
      let _this = this;
      $.ajax({
        url: "http://localhost:3000/entries",
        type: "GET",
        success(data) {
          _this.grid = data;
          // window.console.log(data);
        }
      });
    }
  }
};
</script>
