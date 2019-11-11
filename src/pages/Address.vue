<template>
  <div>
    <!-- <van-nav-bar title="地址信息" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Vue from "vue";
import areaList from "../assets/js/area.js";
import { AddressEdit, Toast } from "vant";

Vue.use(AddressEdit).use(Toast);
export default {
  name: "Address",
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    // onClickLeft() {
    //   this.$router.push("/my");
    // },
    onSave() {
      //   this.$router.push("/my");
      Toast("save");
    },
    onDelete() {
      Toast("delete");
      //   this.$router.push("/my");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "万达广场",
            address: "郑州市二七区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
</style>

