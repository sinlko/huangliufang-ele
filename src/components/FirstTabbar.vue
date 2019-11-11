<template>
  <div class="first_bar">
    <van-tabs v-model="active" sticky>
      <van-tab title="全部"><Card/></van-tab>
      <van-tab title="面食粥点">内容 2</van-tab>
      <van-tab title="简餐便当">内容 3</van-tab>
      <van-tab title="香锅冒菜">内容 4</van-tab>
      <van-tab title="小吃炸串">内容 5</van-tab>
      <van-tab title="麻辣香锅">内容 6</van-tab>
    </van-tabs>
    <div class="second_bar">
      <Secondbar />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import Secondbar from "../components/Filter.vue";
import Card from '../components/Card.vue'

Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Secondbar,
    Card
  },
  methods: {
    goods() {
      this.$axios.get("http://localhost:3000/shops").then(({ data }) => {
        this.shops = this.shops.concat(data);
        window.console.log(this.shops);
      });
    }
  }
};
</script>
<style scoped>
</style>