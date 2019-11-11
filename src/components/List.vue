<template>
  <div id="listS" name="listS">
    <ul class="listS_ul" name="listS_ul">
      <li v-for="(a,index) in listarr" :key="index">
        <div class="listS_ul_li_top">
          <img :src="a.image" alt />
        </div>
        <div class="listS_ul_li_bottom">
          <p class="title_der">
            <span v-html="a.tagText"></span>
            <span v-html="a.title"></span>
          </p>
          <p class="gold_dui">
            <span v-html="a.credits"></span>
            金币
          </p>
          <p>
            <span  class="dui_">兑换</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import datajson from "../assets/data/more.json";
export default {
  name:'listS_ul',
  data() {
    return {
      sites: datajson.data.list
    };
  },
  computed: {
    listarr() {
      return this.sites
    }
  }
};
</script>