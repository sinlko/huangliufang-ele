<template>
  <div class="Hd">
    <p>
      <van-icon name="location-o" />广州市
    </p>
    <van-search
      v-model="value"
      placeholder="搜索饿了么商家、商品名称"
      show-action
      shape="round"
      @click="onSearch"
    >
      <!-- <div slot="action" @click="onSearch">搜索</div> -->
    </van-search>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Icon } from "vant";

Vue.use(Icon);

Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      // 跳转到搜索页
      this.$router.push({
        name: "search"
      });
    }
  }
};
</script>


