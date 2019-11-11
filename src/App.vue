<template>
  <div id="app">
    <!-- <Search/>
   <Grid/>
   <Divider/>
    <Card />-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

// import Search from './components/Search.vue'
// import Grid from './components/Grid.vue'
// import Divider from './components/Divider.vue'
// import Card from './components/Card.vue'
// import Tabbar from "./components/Tabbar.vue";
// import $ from "jquery";
// import axios from "axios";

export default {
  name: "app",
  components: {
    // Search,
    // Grid,
    // Divider,
    // Card,
    // Tabbar
  }
};
</script>
<style lang="scss">
    @import "assets/sass/home.scss";
    @import "assets/sass/search2.scss";
    @import "assets/sass/mine.scss";
    @import "assets/sass/login.scss";
    @import "assets/sass/found.scss";
    @import "assets/sass/detail.scss";
    @import "assets/sass/goodlist.scss";

</style>
<style scoped>
  @import "assets/iconfont/iconfont.css";
</style>
