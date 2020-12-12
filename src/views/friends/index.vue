<template>
  <div class="pages">
    <van-tabs v-model="active">
      <van-tab title="音乐">
        <van-swipe class="pages-swipe" :autoplay="3000">
          <van-swipe-item v-for="(thumd, index) in musics.imglist" :key="`img${index}`">
            <van-image lazy-load :src="thumd"/>
          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="MV">
        <van-swipe class="pages-swipe" loop touchable>
          <van-swipe-item v-for="(mv, index) in videolist" :key="`mv${index}`">
            <video id="mv.id" width="100%" controls="controls" autoplay="mv.auto" loop="mv.loop" muted="mv.muted" preload="mv.preload">
              <source src="mv.path" type="video/mp4" />
              <!-- <source src="movie.ogg" type="video/ogg" />
              <source src="movie.webm" type="video/webm" /> -->
              <object data="mv.path" width="100%" height="100%">
                <!-- <embed src="movie.swf" width="320" height="240" /> -->
              </object>
            </video>
          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="直播">内容 3</van-tab>
    </van-tabs>
    <van-cell-group>
      <van-cell>
        <div class="pages-title">{{ musics.title }}</div>
        <div class="pages-price">{{ formatPrice(musics.price) }}</div>
      </van-cell>
      <van-cell class="pages-express">
        <van-col span="10">运费：{{ musics.express }}</van-col>
        <van-col span="14">剩余：{{ musics.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="pages-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="pages-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="pages-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

  </div>
</template>

<script>
// import {
//   Tag,
//   Col,
//   Icon,
//   Cell,
//   CellGroup,
//   Tab,
//   Tabs,
//   Image as VanImage,
//   Lazyload,
//   Swipe,
//   Toast,
//   SwipeItem,
//   GoodsAction,
//   GoodsActionIcon,
//   GoodsActionButton
// } from 'vant';

export default {
  // components: {
  //   Tag,
  //   Col,
  //   Icon,
  //   Cell,
  //   CellGroup,
  //   Tab,
  //   Tabs,
  //   Swipe,
  //   VanImage,
  //   Lazyload,
  //   SwipeItem,
  //   GoodsAction,
  //   GoodsActionIcon,
  //   GoodsActionButton
  // },
  data() {
    return {
      active: 0,
      musics: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        imglist: [
          '@/assets/images/3danangaoyin.jpeg',
          '@/assets/images/lijian1.jpeg',
          '@/assets/images/wanghongwei.jpeg',
          '@/assets/images/huangheyy.jpg',
          '@/assets/images/leijia.jpg',
          '@/assets/images/liaochangyong.jpg'
        ]
      },
      videolist: [{
        path: 'https://www.w3school.com.cn/i/movie.mp4',
        id: 'Vjnanml',
        auto: true,
        preload: 'none',
        loop: undefined,
        muted: false
      }, {
        path: 'https://music.163.com/78d15cf8-a687-4be7-963b-c833e8172b3a',
        id: 'Vmudhua',
        auto: false,
        preload: 'auto',
        loop: 'loop',
        muted: false
      }, {
        path: '@/assets/media/sixkeji.mp4',
        id: 'Vsixkj',
        auto: false,
        preload: 'meta',
        loop: undefined,
        muted: true
      }]
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.musics.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('/views/cart');
    },
    sorry() {
      // Toast('暂无后续逻辑~');
    }
  }
};
</script>

<style lang="scss">
.pages {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      height: 200px;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>