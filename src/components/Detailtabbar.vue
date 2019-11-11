<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="点餐">
        <D1 />
      </van-tab>
      <van-tab title="评价">
        <D2 />
      </van-tab>
      <van-tab title="商家">
        <D3 />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { Tab, Tabs } from "vant";

import D1 from "../pages/D_1.vue";
import D2 from "../pages/D_2.vue";
import D3 from "../pages/D_3.vue";

Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    D1,
    D2,
    D3
  },
  mounted() {
    window.addEventListener("scroll", this.xiding);
  },
  // 离开页面移除监听事件
  destroyed() {
    window.removeEventListener("scroll", this.xiding);
  },
  methods: {
    xiding() {
      // window.console.log("吸顶" + $(".van-tabs__wrap").offset().top);
      // const top = $(".van-tabs__wrap").offset().top;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // window.console.log("滚动" + scrollTop);
      if (scrollTop >= 250) {
        $(".van-tabs__wrap").addClass("fixedTabbar");
      } else {
        $(".van-tabs__wrap").removeClass("fixedTabbar");
      }
    }
  }
};
</script>