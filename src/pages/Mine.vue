<template>
  <div class="Mine">
    <div class="mine">
      <div class="top">
        <section>
          <div class="profile-3g0uv">
            <div class="index-18Ili" style="width: 120px; height: 120px;">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
              />
            </div>
            <div class="profile-xfCcC">
              <p class="profile-1_mtk" @click="login" :status="loginstatus" v-html="html"></p>
              <van-icon class="jiantou" name="arrow" />
              <p class="profile-1UP72">
                <van-icon name="graphic" />
                <span>登录后享受更多特权</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <van-grid class="bianli">
      <van-grid-item icon="bill" text="红包" />
      <van-grid-item icon="gold-coin" text="金币" />
    </van-grid>
    <div class="f1">
      <van-cell title="我的地址" icon="location" is-link to='/address' />
    </div>
    <div class="f2">
      <van-cell title="金币商城" icon="gold-coin" is-link />
      <van-cell title="分享拿20元现金" icon="bill" is-link />
    </div>
    <div class="f3">
      <van-cell title="我的客服" icon="service" is-link />
      <van-cell title="下载饿了么APP" icon="add-square" is-link />
      <van-cell title="规则中心" icon="comment" is-link />
    </div>
    <div class="f4">
      <a href="###">隐私政策</a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import $ from "jquery";
import { Grid, GridItem, Cell, CellGroup } from "vant";

Vue.use(Grid)
  .use(GridItem)
  .use(Cell)
  .use(CellGroup);
export default {
  data() {
    return {
      loginstatus: false,
      html: "登录/注册"
    };
  },
  created() {
    this.loginname();
  },
  watch: {
    $route: "loginname"
  },
  methods: {
    login() {
      this.$router.push({
        name: "login"
      });
    },
    loginname() {
      const name = window.sessionStorage.getItem("username");
      window.console.log(name);
      if (name) {
        //  window.location.reload();
        this.loginstatus = true;
        this.html = name;
      }
    }
  }
};
</script>