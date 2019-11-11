<template>
  <div>
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
      @click-right-icon="$toast('question')"
    />

    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />

    <van-button @click="login(username,password)" plain type="primary">登录</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Toast } from "vant";

Vue.use(Field).use(Toast);
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // 进行加密
      const info = {
        username: this.username,
        password: this.password
      };
      const token_2 = Buffer.from(JSON.stringify(info)).toString("base64");
      if (token_2 === window.sessionStorage.getItem("token")) {
        Toast.success("登录成功");
        this.$router.push({
          path: "/main/home"
        });
      } else {
        Toast.fail("用户名或密码错误");
      }
    }
  }
};
</script>