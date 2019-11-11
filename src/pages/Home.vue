<template>
  <div>
    <Search />
    <Grid />
    <Menu />
    <Divider />
    <Filter2 />
    <Card />
    <BackToTop />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Menu from "../components/Menu.vue";
import Filter2 from "../components/Filter.vue";
import BackToTop from "../components/BackToTop.vue";

export default {
  components: {
    Search,
    Grid,
    Divider,
    Card,
    Menu,
    Filter2,
    BackToTop
  }
};
</script>