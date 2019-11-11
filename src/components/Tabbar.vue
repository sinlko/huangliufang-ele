<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/main/home" class="iconfont icon-eliaomo1">首页</van-tabbar-item>
    <van-tabbar-item to="/main/found" icon="eye-o">发现</van-tabbar-item>
    <van-tabbar-item to="/main/orderfrom" class="iconfont icon-wodedingdan">订单</van-tabbar-item>
    <van-tabbar-item to="/main/mine" class="iconfont icon-wodejuhuasuan">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>