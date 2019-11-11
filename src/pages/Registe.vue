<template>
  <div>
    <p>
      <span>用户名：</span>
      <input type="text" v-model="username" />
    </p>
    <p>
      <span>密码：</span>
      <input type="password" v-model="password" />
    </p>
    <button @click="reg(username,password)">注册</button>
  </div>
</template>
<script>
// import Vue from "vue";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    reg() {
      // 进行加密
      const info = {
        username: this.username,
        password: this.password
      };
      const token = Buffer.from(JSON.stringify(info)).toString("base64");
      // window.console.log(token);
      sessionStorage.setItem("token", token);
  
      // 跳转登录页
       this.$router.push({
        name:'login',
        // 方式1   /detail/123   一般vue建议用这种
        params:{
          usern:this.username
        },
      })
    }
  }
};
</script>