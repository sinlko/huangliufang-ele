<template>
  <div class="tip_hot">
    <h3>热门搜索</h3>
    <van-tag color="#f2826a">沙拉</van-tag>
    <van-tag color="#f2826a" plain>咖啡</van-tag>
    <van-tag color="#7232dd">三明治</van-tag>
    <van-tag color="#7232dd" plain>提拉米苏</van-tag>
    <van-tag color="#ffe1e1" text-color="#ad0000">鸡蛋面</van-tag>
    <van-tag color="#7232dd" plain>无骨酸菜鱼</van-tag>
    <van-tag color="#ffe1e1" text-color="#ad0000">芝士蛋糕</van-tag>
    <van-tag color="#f2826a">面包</van-tag>
    <van-tag color="#f2826a" plain>拿铁</van-tag>
    <van-tag color="#7232dd">一点点</van-tag>
    <van-tag color="#7232dd" plain>渔民新村</van-tag>
    <van-tag color="#ffe1e1" text-color="#ad0000">麻辣香锅</van-tag>
  </div>
</template>
<script>
import Vue from "vue";
import { Tag } from "vant";

Vue.use(Tag);
export default {};
</script>
<style scoped>
.tip_hot {
  padding: 0 1.333333rem;
  margin-top: 1.333333rem;
  box-sizing: border-box;
}
.tip_hot .van-tag {
  margin: 0.333333rem 0.533333rem;
}
</style>