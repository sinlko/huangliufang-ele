<template>
  <!-- 嵌套路由 -->

  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar.vue";
export default {
  components: {
    Tabbar
  }
};
</script>