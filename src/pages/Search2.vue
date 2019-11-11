<template>
  <div>
    <div class="backTohome" @click="back">
      <span class="iconfont icon-tubiaozhizuo-"></span>
    </div>
    <van-search
      v-model="value"
      placeholder="搜索饿了么商家、商品名称"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <Hotsearch v-show="this.value?hidden:show" />
    <van-list v-show="this.value?show:hidden" >
      <van-card
        v-for="(a,index) in restaurantFilter"
        :key="index"
        :desc="a.description"
        :title="a.name"
        :thumb="a.url"
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
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Icon } from "vant";
// import { Card } from "vant";
import Hotsearch from "../components/Hotsearch.vue";
import { Card, Tag, Button, List, Rate } from "vant";

// Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
Vue.use(Rate);

Vue.use(Icon);
Vue.use(Card);
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      show: true,
      hidden: false,
      restaurant: []
    };
  },
  components: {
    Hotsearch
  },
  methods: {
    onSearch() {
      // 将搜索值带到vuex
      window.console.log(this.value);
      window.console.log(this);
      this.$store.dispatch("setAuthor", {
        value: this.value
      });
      this.$axios.get("http://localhost:3000/restaurant").then(({ data }) => {
        // this.restaurant = [...this.restaurant,...data]; //这个亦可以
        this.restaurant = this.restaurant.concat(data); //这个也可以
        window.console.log(this.restaurant);
      });
    },
    back(){
       this.$router.push({
        name: "home"
      });
    }
  },
  // computed(){}方法拿值
  computed: {
    search() {
      return this.$store.getters.getAuthor; //拿到搜索值
    },
    // 数据过滤 计算 restaurant这个数组
    restaurantFilter() {
      //   const str='抱歉，没有找到匹配的商品或店铺'
      if (this.search.value) {
        return this.restaurant.filter(item => {
          if (
            item.name.indexOf(this.search.value) >= 0 ||
            item.support_tags.indexOf(this.search.value) >= 0
          ) {
            return item;
          }
        });
      } else {
        return this.restaurant;
      }
    }
  }
};
</script>


