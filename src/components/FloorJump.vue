<template>
  <div class="floor_jump">
    <div class="top_tip">
      <img
        src="https://cube.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?x-oss-process=image/format,webp/resize,w_26"
        alt
      />热销
    </div>
    <div class="Sidebar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="新品盛宴" href="#floor1"></van-sidebar-item>
        <van-sidebar-item title="黑糖鹿丸" href="#floor2"></van-sidebar-item>
        <van-sidebar-item title="鲜果鹿鹿" href="#floor3"></van-sidebar-item>
        <van-sidebar-item title="金鉴赏特调" href="#floor4"></van-sidebar-item>
        <van-sidebar-item title="雪融案列" href="#floor5"></van-sidebar-item>
        <van-sidebar-item title="浓醇奶香" href="#floor6"></van-sidebar-item>
        <van-sidebar-item title="小鹿下午茶" href="#floor7"></van-sidebar-item>
        <van-sidebar-item title="小鹿活动专区" href="#floor8"></van-sidebar-item>
      </van-sidebar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onscrollFixed);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onscrollFixed);
  },
  methods: {
    onscrollFixed() {
      //  l元素到可视区顶部
      // const top = $(".floor_jump").offset().top;
      // window.console.log("楼层高度：" + top);

      // 滚动条的高度
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      window.console.log("滚动条高度：" + scrollTop);

      if (scrollTop >= 544) {
        $(".floor_jump").addClass("fixedNav");
      } else {
        $(".floor_jump").removeClass("fixedNav");
      }
    }
  }
};
</script>