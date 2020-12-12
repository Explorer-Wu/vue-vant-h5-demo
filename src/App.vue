<template>
  <div id="app">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>
        <span v-show="!isSearch">{{title}}</span>
        <form action="/" v-show="isSearch">
          <van-search
            v-model="searchVal"
            show-action
            input-align="center"
            shape="round"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </template>
      <template #left>
        <van-icon name="apps-o" size="18"/>
      </template>
      <template v-if="!isSearch" #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <router-view/>
    <van-tabbar active-color="#DCCC00" inactive-color="#fff" route v-model="activeLink" @change="onChange">
      <van-tabbar-item replace to="/found" name="found" icon="search">发现</van-tabbar-item>
      <van-tabbar-item replace to="/playlist" name="playlist" icon="music-o" dot>音乐</van-tabbar-item>
      <!-- <van-tabbar-item replace to="/friends" name="friends" icon="friends-o" badge="5">朋友</van-tabbar-item> -->
      <van-tabbar-item replace to="/cart" name="cart" icon="cart-o" badge="8">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" name="user" icon="user-circle-o">账号</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      title: '梧音音乐',
      isSearch: true,
      searchVal: '',
      activeLink: 'found',
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      this.isSearch = true
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      // Toast('取消');
      this.isSearch = false
    },
    onChange(name) {
      // console.log("nav-act:", name)
      if (name === 'found') {
        this.isSearch = true
      } else {
        this.isSearch = false
      }

      switch (name) {
        case 'found': 
          this.title = '梧音音乐'
          break;
        case 'playlist': 
          this.title = '我的音乐'
          break; 
        case 'cart': 
          this.title = '购物车'
          break;
        case 'user': 
          this.title = '个人中心'
      }
      // Notify({ type: 'primary', message: index });
    },
  },
}
</script>
<style lang="scss">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
