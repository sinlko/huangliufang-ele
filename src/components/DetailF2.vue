<template>
  <div id="DF2">
    <div class="df_2">
      <p class="p1_1">
        <span>鹿角巷The Alley fefefe</span>
        <span class="iconfont icon-you"></span>
      </p>
      <p class="p1_2">
        <span>月售</span>
        <span>5</span>
        <span>单</span>
        <span>蜂鸟专送</span>
        <span>约</span>
        <span>30</span>
        <span>分钟</span>
      </p>
      <p class="p1_3">
        <van-tag color="#f2826a">首单立减17</van-tag>
        <van-tag color="#7232dd" plain>与满减同享</van-tag>
        <van-tag color="#f2826a" plain>30减5</van-tag>
        <van-tag color="#7232dd" plain>38减3</van-tag>
        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
          class="vanCell"
        />

        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </p>
      <p class="p1_4">
        <span>公告:</span>
        <span>欢迎光临，用餐高峰期请提前下单，谢谢</span>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { Tag, CouponCell, CouponList } from "vant";

Vue.use(Tag)
  .use(CouponCell)
  .use(CouponList);

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
  mounted() {
    this.vanellTitle();
  },

  methods: {
    onChange(index) {
      this.showList = true;
      this.chosenCoupon = index;
    },
    onExchange(coupon) {
      this.coupons.push(coupon);
    },
    vanellTitle() {
      $(".van-cell__title").remove();
      window.console.log($(".van-cell__value").text())
      $(".van-cell__value").text('2个优惠')
    }
  }
};
</script>