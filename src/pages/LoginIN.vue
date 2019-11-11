<template>
  <div class="login">
    <div class="login_img_logo">
      <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt />
    </div>
    <div class="login_tabbel">
      <form action="post">
        <div class="log_ tel">
          <input type="text" placeholder="手机号" v-model="nameTell" @blur="trigger" />
          <span class="getMa" @click="showPopup">获取验证码</span>
          <p class="Tips_box" v-show="msgShow" v-html="message"></p>
        </div>
        <div class="log_ reg">
          <input type="text" placeholder="验证码" v-model="yzma" />
        </div>
        <div class="rule">
          <span>新用户登录即自动注册，并表示已同意</span>
          <a href="###">《用户服务协议》</a>
          <span>和</span>
          <a href="###">《隐私权政策》</a>
        </div>
        <button class="log_in" @click.prevent="loginORregiste">登录</button>
        <p class="about">关于我们</p>
      </form>
    </div>
    <van-popup v-model="show" id="#box" @click="hiddenPupop">
      <h3>请填写图形验证码</h3>
      <div class="in">
        <input type="text" id="shuru" @blur="identify" v-model="shuruVal" />
        <span id="show1" v-html="tipmsg" v-show="show1"></span>
        <div class="code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <div class="btn">
        <button @click="hiddenPupop">取消</button>
        <button id="go" @click="sure">确定</button>
      </div>
    </van-popup>
  </div>
</template> 
<script>
const qs = require("qs");
import Vue from "vue";
import { Popup } from "vant";

import SIdentify from "../components/Canvas.vue";

Vue.use(Popup);
export default {
  name: "LoginIN",
  data() {
    return {
      show: false,
      show1: false,
      nameTell: "",
      yzma: "",
      msgShow: false,
      message: "号码有误,请重新输入正确手机号码",
      tipmsg: "验证码错误",
      reg: "",
      identifyCode: "",
      identifyCodes: "1234567890",
      shuruVal: ""
    };
  },
  components: {
    SIdentify
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 验证号码正则
    trigger() {
      var _this = this;
      var tellValue = this.nameTell;
      var regRules = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (regRules.test(tellValue)) {
        window.console.log("号码正确，可以下一步");
        this.reg = "yes";
        // 通过验证才可以点击获取验证码弹出遮罩
        // 函数方法嵌套使用（记得修正this指向）
        _this.$options.methods.showPopup(_this);
        // 隐藏提示
        this.msgShow = false;
      } else {
        window.console.log("号码有误");
        this.reg = "no";
        this.msgShow = true;
      }
    },
    showPopup(_this) {
      _this.show = true;
    },

    // 验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // window.console.log(this.identifyCode);
    },
    //  验证填入的验证码是否正确
    identify() {
      var _this_ = this;
      window.console.log("图形码：" + this.identifyCode);
      window.console.log("输入码：" + this.shuruVal);
      // window.console.log(this.shuruVal === this.identifyCode);

      if (this.shuruVal != this.identifyCode) {
        this.show1 = true;
      } else {
        this.show1 = false;
        _this_.$options.methods.sure(_this_);
      }
    },
    // 点击确定
    sure(_this_) {
      _this_.$options.methods.hiddenPupop(_this_);
    },
    hiddenPupop(_this_) {
      _this_.show = false;
    },
    // 点击登录按钮
    loginORregiste() {
      // const timer = null;
      if (this.nameTell) {
        window.console.log(this.nameTell);
        window.console.log(this);
        const params = {
          clientname: this.nameTell
        };
        this.$axios
          .post("http://localhost:3000/clientName", qs.stringify(params))
          .then(res => {
            var _this = this;
            if (res.data === true) {
              window.console.log("老用户");
            } else {
              window.console.log("新用户");
            }
            window.sessionStorage.setItem("username", this.nameTell);
            setTimeout(function() {
              _this.$router.push({ path: "/main/mine" });
            }, 1000);
          });
      } else {
        window.console.log("号码不可为空");
      }
    }
  }
};
</script>