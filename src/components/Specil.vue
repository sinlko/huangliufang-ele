<template>
  <div>
    <div id="goodscard">
      <div class="gid" v-for="(i,index) in arrFor" :key="index">
        <span class="s1" v-html="i.tip">限时优惠</span>
        <img :src="i.img" alt />
        <p class="title" v-html="i.title"></p>
        <p>
          <span class="g" v-html="i.glod"></span>
          <span class="old">
            <del v-html="i.old"></del>
          </span>
        </p>
      </div>
    </div>
    <div class="more" @click="more">查看更多</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          tip: "限时优惠",
          img:
            "https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp",
          title: "3元品质联盟红包",
          glod: "90金币",
          old: "¥3"
        },
        {
          tip: "特价换购",
          img:
            "https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp",
          title: "数码经络按摩仪",
          glod: "9金币",
          old: "¥239"
        },
        {
          tip: "特价换购",
          img:
            "https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp",
          title: "机械手感背光键盘套装",
          glod: "9金币",
          old: "¥139"
        }
      ]
    };
  },
  methods: {
    more() {
      this.$router.push({
        name: "more"
      });
    }
  },
  computed: {
    arrFor() {
      //   window.console.log(this.arr);
      return this.arr;
    }
  }
};
</script>