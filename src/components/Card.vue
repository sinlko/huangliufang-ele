<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(a,index) in restaurant"
      :key="index"
      :desc="a.description"
      :title="a.name"
      :thumb="a.url"
      :data-id="index"
      @click="linkToDetail(index)"
    >
      <div slot="tags">
        <van-rate v-model="a.rating" allow-half void-icon="star" void-color="#eee" />
        <span class="fen" v-html="a.rating"></span>
        <span class="yue">月售</span>
        <span class="yueshou" v-html="a.recent_order_num
"></span>
        <span class="song">蜂鸟专送</span>
        <div class="No1">
          <span>¥</span>
          <span v-html="a.startpay"></span>
          <span>起送</span>
          <span>|</span>
          <span v-html="a.money"></span>
          <span class="right" v-html="a.distance/1000"></span>
          <span>km</span>
          <span>|</span>
          <span v-html="a.order_lead_time"></span>
          <span>分钟</span>
        </div>
        <div class="No2">
          <span v-html="a.support_tags"></span>
        </div>
        <div class="No3">
          <p class="p">
            <span>首</span>
            <span v-html="a.newclient"></span>
          </p>
          <p class="p">
            <span>减</span>
            <span class="p2">满28减6，满48减10，满66减13，满88减18，满120减28</span>
          </p>
        </div>
      </div>
    </van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List, Rate } from "vant";

Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
Vue.use(Rate);
export default {
  data() {
    return {
      value: 0,
      loading: false,
      finished: false,
      restaurant: []
    };
  },
  methods: {
    // 懒加载
    onLoad() {
      // 调用axios的get方法，如果成功就解构这个data，打印出来
      this.$axios.get("http://localhost:3000/restaurant").then(({ data }) => {
        // this.restaurant = [...this.restaurant,...data]; //这个亦可以
        this.restaurant = this.restaurant.concat(data); //这个也可以
        // window.console.log(this.restaurant);

        // 加载状态结束
        this.loading = false;
        // window.console.log(this.restaurant.length);
        // 数据加载全部完成
        if (this.restaurant.length >= 50) {
          //给他一个加载临界
          this.finished = true;
        }
      });

      // window.console.log("大哥到底了");
    },
    // 点击跳转详情页
    linkToDetail(index) {
      // 可以带参数（动态路由配置）
      this.$router.push({
        name: "detail",
        // 方式1   /detail/123   一般vue建议用这种
        params: {
          id: "gid=" + index
        }
      });
      sessionStorage.setItem("ShopID", this.restaurant[index]._id);
      // window.console.log(this.restaurant[index].name);
    }
  }
};
</script>
<style scoped>
.van-list {
  /* line-height: 26px; */
  margin-bottom: 50px;
}
</style>