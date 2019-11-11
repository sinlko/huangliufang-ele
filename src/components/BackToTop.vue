<template>
  <div class="BacktoTop" @click="backTop">
    <span class="iconfont icon-up-fill1"></span>
  </div>
</template>
<script>
export default {
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style>
.BacktoTop {
  position: fixed;
  top: 80%;
  right: 0;
  padding: 0.666667rem;
  background: #ccc;
  opacity: 0.8;
}
</style>