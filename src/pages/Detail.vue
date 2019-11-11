<template>
  <div id="detail_shop">
    <div class="out_detail">
      <p @click="quitdetail">
        <span class="iconfont icon-tubiaozhizuo-"></span>
      </p>
      <span class="p_pai">品牌</span>
      <img
        src="https://cube.elemecdn.com/4/2c/f757eee163b3c8eaffe524057785dpng.png?x-oss-process=image/format,webp/resize,w_150"
        alt
      />
    </div>
    <DetailF2 />
    <Detailtabbar />
  </div>
</template>
<script>
import DetailF2 from "../components/DetailF2.vue";
import Detailtabbar from "../components/Detailtabbar.vue";

export default {
  data() {
    return {};
  },
  components: {
    DetailF2,
    Detailtabbar
  },
  created() {
    this.xuanRan();
  },
  methods: {
    quitdetail() {
      this.$router.push({
        name: "home"
      });
    },
    xuanRan() {
      window.console.log(sessionStorage.getItem("ShopID"));
    }
  }
};
</script>