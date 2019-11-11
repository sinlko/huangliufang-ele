<template>
  <div class="orderMenu">
    <div class="ordermenu_1" v-show="showNo">
      <img src="https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" alt />
      <p class="order_no_p1">近三个月无外卖订单记录</p>
      <p class="order_no_p2">查看三个月前的外卖订单</p>
    </div>
    <div class="ordermenu_2" v-show="showmenu">
      <div class="list_f_1_d" v-for="(a,index) in arr" :key="index" :data-id="index">
        <div class="list_f_1_left">
          <img
            src="https://cube.elemecdn.com/1/fe/0588d89d3414e28ae256467654608jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            alt
          />
        </div>
        <div class="list_f_1_right">
          <h3 v-html="a.SName"></h3>
          <p class="list_f_1_right_p1">
            "手工慢火熬煮的黑糖，让鹿丸吸附馥郁的黑糖味，咀嚼时散发着的甜馥黑糖香，融入浓醇牛奶味道甜而不腻。
            （不可作无糖或少糖，冰量也是固定的，不能调整喔！）"
            温馨提示：产品图片仅供参考。因产品特点、天气情况、路况、时间等原因，可能会与到店购买并当场享用的口感等存在差异。产品送达后请您尽快饮用。
            主要原料：奶茶
          </p>
          <p class="list_f_1_right_p2">月售7份</p>
          <p class="list_f_1_right_p3">
            <span>¥</span>
            <span class="Sigprice" v-html="a.price"></span>
            <!-- <van-checkbox class="add_" ></van-checkbox> -->
            <input type="checkbox" class="add_" @click="checkedstau(index)" />
            <!-- <input type="chack" class="add_" ></input> -->
          </p>
        </div>
      </div>
      <div class="sendTocar">
        <div class="q1">
          <span>已选：</span>
          <span v-html="sumNum"></span>
          <span>件商品</span>
        </div>
        <div class="summoney">
          <span>费用总计：¥</span>
          <span v-html="sumMoney">66</span>
        </div>
        <div class="sumSend">提交订单</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox).use(CheckboxGroup);
export default {
  data() {
    return {
      arr: [
        { SName: "黑糖鹿丸鲜奶", price: "23" },
        { SName: "冰镇波霸奶绿", price: "16" },
        { SName: "鹿鹿玫瑰鲜奶", price: "12" },
        { SName: "香草花茶", price: "13" },
        { SName: "黑糖烧仙草", price: "14" }
      ],
      checked: true,
      showmenu: false,
      showNo: true,
      arrChecked: [], //存放勾选商品对应下表
      sumNum: 0, //勾选商品总数
      sumMoney: 0 //勾选商品费用总计
    };
  },
  mounted() {
    this.ShowMenu();
  },
  watch: {
    $route: "ShowMenu"
  },
  methods: {
    ShowMenu() {
      let Name = window.sessionStorage.getItem("username");
      if (Name) {
        this.showmenu = true;
        this.showNo = false;
      }
    },
    checkedstau(index) {
      this.arrChecked.push(index);
      window.console.log(this.arrChecked);
      this.sumNum = this.arrChecked.length;
      window.console.log(index);
      window.console.log(
        index +
          "号商品价钱" +
          $(".Sigprice")
            .eq(index)
            .html()
      );
      const tall = Number(
        $(".Sigprice")
          .eq(index)
          .html()
      );
      this.sumMoney += tall;
    }
  }
};
</script>