<template>
  <div class="home_filter">
    <ul class="ul_1">
      <li @click="showPopup">
        <span>综合排序</span>
        <i class="iconfont icon-een"></i>
      </li>
      <li>
        <span>距离最近</span>
      </li>
      <li>
        <span>品质联盟</span>
      </li>
      <li>
        <span>筛选</span>
        <i class="iconfont icon-shaixuan"></i>
      </li>
    </ul>
    <van-popup v-model="show" position="top" :style="{ height: '63%'}">
      <ul class="ul_2" style>
        <li>
          <span>综合排序</span>
          <i class="iconfont icon-een" style="font-size: .453333rem;color: #777;"></i>
        </li>
        <li>
          <span>距离最近</span>
        </li>
        <li>
          <span>品质联盟</span>
        </li>
        <li>
          <span>筛选</span>
          <i class="iconfont icon-shaixuan" style="font-size: .453333rem;color: #777;"></i>
        </li>
      </ul>
      <ul class="popup_filter">
        <li>综合排序</li>
        <li>好评优先</li>
        <li>销量最高</li>
        <li>起送价最低</li>
        <li>配送最快</li>
        <li>配送费最低</li>
        <li>人均从低到高</li>
        <li>人均从高到低</li>
        <li>通用排序</li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style  scoped>
.ul_2 {
  margin-top: 5.333333rem !important;
  height: 2.333333rem;
  display: flex;
  font-size: 0.213333rem;
  flex-direction: row;
  align-items: center;
  padding: 0 1.6rem;
  color: #444;
  box-sizing: border-box;
  justify-content: space-between;
}
.popup_filter {
  border-top: 1px solid #ccc;
}
.popup_filter li {
  font-size: 0.853333rem;
  height: 1.333333rem;
  margin: 0.7rem;
}
</style>