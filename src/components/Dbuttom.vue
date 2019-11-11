<template>
  <div class="D_buttom">
    <div class="W"></div>
    <div class="O" @click="toOrderMenu">
      <span class="iconfont icon-gouwucheman"></span>
    </div>
    <div class="jiesuan">
      <div class="B_left">
        <p>未选购商品</p>
        <p>
          <span>另需配送费</span>
          <span>5元</span>
        </p>
      </div>
      <div class="B_right">
        <span>¥</span>
        <span>18</span>
        <span>起送</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toOrderMenu() {
      this.$router.push({ path: "/main/orderfrom" });
    }
  }
};
</script>