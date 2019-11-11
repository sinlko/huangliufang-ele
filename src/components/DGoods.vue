<template>
  <div class="d_goods_list">
    <div class="f1_">
      <div class="list_f_1">
        <span>热销</span>
        <span>大家喜欢吃，才是真好吃</span>
      </div>
      <div class="list_f_1_d">
        <div class="list_f_1_left">
          <img
            src="https://cube.elemecdn.com/1/fe/0588d89d3414e28ae256467654608jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            alt
          />
        </div>
        <div class="list_f_1_right">
          <h3>黑糖鹿丸鲜奶</h3>
          <p class="list_f_1_right_p1">
            "手工慢火熬煮的黑糖，让鹿丸吸附馥郁的黑糖味，咀嚼时散发着的甜馥黑糖香，融入浓醇牛奶味道甜而不腻。
            （不可作无糖或少糖，冰量也是固定的，不能调整喔！）"
            温馨提示：产品图片仅供参考。因产品特点、天气情况、路况、时间等原因，可能会与到店购买并当场享用的口感等存在差异。产品送达后请您尽快饮用。
            主要原料：奶茶
          </p>
          <p class="list_f_1_right_p2">月售7份</p>
          <p class="list_f_1_right_p3">
            <span>¥22起</span>
            <span class="add_" @click="addpupop">+</span>
          </p>
        </div>
      </div>
    </div>
    <div class="floor_all">
      <div class="floor_all_f" :id="a.id" v-for="(a,index) in nameid" :key="index">
        <h3 class="h3_" v-html="a.fname"></h3>
        <div class="list_f_1_d" v-for="(a,index) in 5" :key="index">
          <div class="list_f_1_left">
            <img
              src="https://cube.elemecdn.com/1/fe/0588d89d3414e28ae256467654608jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
          </div>
          <div class="list_f_1_right">
            <h3>黑糖鹿丸鲜奶</h3>
            <p class="list_f_1_right_p1">
              "手工慢火熬煮的黑糖，让鹿丸吸附馥郁的黑糖味，咀嚼时散发着的甜馥黑糖香，融入浓醇牛奶味道甜而不腻。
              （不可作无糖或少糖，冰量也是固定的，不能调整喔！）"
              温馨提示：产品图片仅供参考。因产品特点、天气情况、路况、时间等原因，可能会与到店购买并当场享用的口感等存在差异。产品送达后请您尽快饮用。
              主要原料：奶茶
            </p>
            <p class="list_f_1_right_p2">月售7份</p>
            <p class="list_f_1_right_p3">
              <span>¥22起</span>
              <span class="add_" @click="addpupop">+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-popup class="B_pupop_B" v-model="show" position="bottom" :style="{ height: '80%' }">
      <div class="goodsRule">
        <div class="gR_top">
          <img
            src="https://cube.elemecdn.com/5/ab/f1b8bfd60ac282eb8be73e66f8107jpeg.jpeg?x-oss-process=image/format,webp/resize,w_95"
            alt
          />
          <div class="gR_top_right">
            <h4>鹿丸噗哩(M)</h4>
            <span class="No" @click="Btn_no">×</span>
            <p class="rules">
              <span>已选：</span>
              <span>M热</span>
            </p>
            <p class="payfor">
              <span>¥</span>
              <span>26</span>
            </p>
          </div>
        </div>
        <div class="gR_bottom">
          <form action method="post">
            <div class="SML">
              <p>规格</p>
              <ul>
                <li>M</li>
              </ul>
            </div>
            <div class="temp">
              <p>温度</p>
              <ul>
                <li>热</li>
                <li>正常冰</li>
              </ul>
            </div>
          </form>
          <div class="OK">我选好了</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      show: false,
      nameid: [
        { id: "floor1", fname: "新品盛宴" },
        { id: "floor2", fname: "黑糖鹿丸" },
        { id: "floor3", fname: "鲜果鹿鹿" },
        { id: "floor4", fname: "金鉴赏特调" },
        { id: "floor5", fname: "雪融案列" },
        { id: "floor6", fname: "浓醇奶香" },
        { id: "floor7", fname: "小鹿下午茶" },
        { id: "floor8", fname: "小鹿活动专区" }
      ]
    };
  },
  methods: {
    addpupop() {
      this.show = true;
    },
    Btn_no() {
      this.show = false;
    }
  }
};
</script>