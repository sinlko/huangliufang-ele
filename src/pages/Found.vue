<template>
  <div class="found">
    <div class="top">
      <div class="top_left">
        <div class="text">
          <a class="title" href="###">金币商城</a>
          <span class="tips">0元好物在这里</span>
          <img
            src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
      </div>
      <div class="top_right">
        <div class="text1 left">
          <a class="title" href="###">推荐有奖</a>
          <span class="tips">20元现金拿不停</span>
          <img
            src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
        <div class="text1 right">
          <a class="title" href="###">周边优惠</a>
          <span class="tips">领取口碑好券</span>
          <img
            src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
      </div>
    </div>
    <Timeout />
    <Specil />
  </div>
</template>
<script>
import Timeout from "../components/Timeout.vue";
import Specil from "../components/Specil.vue";
export default {
  data() {
    return {};
  },
  components: {
    Timeout,
    Specil
  }
};
</script>