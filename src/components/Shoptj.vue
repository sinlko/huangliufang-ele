<template>
  <div class="G_card_1">
    <h3>商家推荐</h3>
    <ul class="g_Card">
      <li v-for="(a,index) in shoptjarr" :key="index">
        <img :src="a.img" alt />
        <p class="g_C1" v-html="a.title"></p>
        <p class="g_C2">
          <span>月售</span>
          <span>0</span>
          <span>好评率</span>
          <span>0</span>
          <span>%</span>
        </p>
        <p class="g_C3">
          <span>¥</span>
          <span v-html="a.pay"></span>
          <span class="g_add" @click="addpupop">+</span>
        </p>
      </li>
    </ul>
    <van-popup class="B_pupop_B" v-model="show" position="bottom" :style="{ height: '80%' }">
      <div class="goodsRule">
        <div class="gR_top">
          <img
            src="https://cube.elemecdn.com/5/ab/f1b8bfd60ac282eb8be73e66f8107jpeg.jpeg?x-oss-process=image/format,webp/resize,w_95"
            alt
          />
          <div class="gR_top_right">
            <h4>鹿丸噗哩(M)</h4>
            <span class="No" @click="Btn_no">×</span>
            <p class="rules">
              <span>已选：</span>
              <span>M热</span>
            </p>
            <p class="payfor">
              <span>¥</span>
              <span>26</span>
            </p>
          </div>
        </div>
        <div class="gR_bottom">
          <form action method="post">
            <div class="SML">
              <p>规格</p>
              <ul>
                <li>M</li>
              </ul>
            </div>
            <div class="temp">
              <p>温度</p>
              <ul>
                <li>热</li>
                <li>正常冰</li>
              </ul>
            </div>
          </form>
          <div class="OK">我选好了</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import shoptj from "../assets/data/shoptj.json";

import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      show: false,
      sites: shoptj.shoptj
    };
  },
  computed: {
    shoptjarr() {
      return this.sites;
    }
  },
  methods: {
    addpupop() {
      this.show = true;
    },
    Btn_no() {
      this.show = false;
    }
  }
};
</script>