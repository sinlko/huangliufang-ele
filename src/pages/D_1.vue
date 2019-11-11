<template>
  <div>
    <Shoptj />
    <FloorJump />
    <DGoods />
    <Dbuttom />
  </div>
</template>
<script>
import Shoptj from "../components/Shoptj.vue";
import FloorJump from "../components/FloorJump.vue";
import DGoods from "../components/DGoods.vue";
import Dbuttom from "../components/Dbuttom.vue";
export default {
  components: {
    Shoptj,
    FloorJump,
    DGoods,
    Dbuttom
  }
};
</script>