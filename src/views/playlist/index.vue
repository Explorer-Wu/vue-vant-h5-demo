<template>
  <div class="pages">
    <!-- <van-nav-bar title="我的音乐" left-arrow @click-left="onClickLeft" @click-right="handleSearch">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <dl class="pages-con" v-for="(con, index) in musics" :key="`con${index}`">
      <dt>
        <h3>{{ con.title }}</h3>
        <van-icon class="icon" name="arrow" />
      </dt>
      <dd v-for="(sdd, sidex) in con.suplist" :key="`sdd${sidex}`">
        <van-image
          class="sup-img"
          fit="cover"
          :src="sdd.url"
        />
        <van-icon class="v-icon" name="arrow" />
        <h5>{{sdd.title}}</h5>
        <p>{{sdd.text}}</p>
      </dd>
    </dl>
  
  </div>
</template>

<script>
// import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant'
export default {
  // components: {
  //   [Card.name]: Card,
  //   [Checkbox.name]: Checkbox,
  //   [SubmitBar.name]: SubmitBar,
  //   [CheckboxGroup.name]: CheckboxGroup
  // },
  data() {
    return {
      musics: [{
        title: '精选专栏',
        suplist: [
          {
            url: "http://p3.music.126.net/Gp9u38SolbtDZj0IUiF66w==/109951165293562575.jpg?param=140y140",
            title: '东方流韶',
            text: '倾听民乐精选集',
          },
          {
            url: "http://p4.music.126.net/wGSy2XKSLvs2q-hLnXbxKA==/109951165227667289.jpg?param=140y140",
            title: '欧美民谣',
            text: '散文诗般的情绪荡漾我心'
          },
          {
            url: "http://p4.music.126.net/PQ2ZI4DO5LueJ-ruoA_mvw==/109951165313889467.jpg?param=140y140",
            title: '轻音乐狂想曲',
            text: '倾听大自然的天籁之音'
          }
        ]
      }]
    };
  },
  computed: {
    // submitBarText() {
    //   const count = this.checkedGoods.length;
    //   return '结算' + (count ? `(${count})` : '');
    // }
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
    },
    handleSearch() {
      // Toast('按钮');
    }
  }
};
</script>