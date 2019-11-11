<template>
  <div id="moreF" name="more">
    <div class="loginF">
      <span>兑换前请先登录</span>
      <button class="yes" @click="toLogin">立即登录</button>
    </div>
    <div class="f2">
      <div class="found">
        <div class="top">
          <div class="top_left">
            <a href="###">
              <img src="//yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt />
            </a>
          </div>
          <div class="top_right">
            <div class="text1 left">
              <a href="###">
                <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt />
              </a>
            </div>
            <div class="text1 right">
              <a href="###">
                <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <List />
    <BackToTop />
  </div>
</template>
<script>
import List from "../components/List.vue";
import BackToTop from "../components/BackToTop.vue";
export default {
  components: {
    List,
    BackToTop
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>