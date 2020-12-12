<template>
  <div class="pages">
    <!-- <van-nav-bar title="发现音乐" left-arrow @click-left="onClickLeft" @click-right="handleSearch">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <van-tabs v-model="active">
      <van-tab title="音乐">
        <van-swipe class="pages-swipe" :autoplay="3000">
          <van-swipe-item v-for="(thumd, index) in musics.imglist" :key="`img${index}`">
            <van-image lazy-load :fit="thumd.mode" :src="thumd.url"/>
            <!-- <van-image :src="thumd"/> -->
          </van-swipe-item>
        </van-swipe>
        <dl class="pages-con" v-for="(con, index) in musics.conlist" :key="`con${index}`">
          <dt>
            <h3>{{ con.title }}</h3>
            <van-icon class="icon" name="arrow" />
          </dt>
          <dd class="indd" v-for="(cdd, cidex) in con.hotlist" :key="`con${index}cdd${cidex}`">
            <van-image
              fit="cover"
              :src="cdd.url"
            />
            <p>{{cdd.text}}</p>
          </dd>
          <dd v-for="(sdd, sidex) in con.suplist" :key="`con${index}sdd${sidex}`">
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
      </van-tab>
      <van-tab title="MV">
        <van-swipe class="pages-swipe" loop touchable>
          <van-swipe-item v-for="(mv, index) in videolist" :key="`mv${index}`">
            <video :id="mv.id" width="100%" controls="controls" :autoplay="mv.auto" :loop="mv.loop" :muted="mv.muted" :preload="mv.preload">
              <source :src="mv.path" type="video/mp4" />
              <!-- <source src="movie.ogg" type="video/ogg" />
              <source src="movie.webm" type="video/webm" /> -->
              <object :data="mv.path" width="100%">
                <!-- <embed src="movie.swf" width="320" height="240" /> -->
              </object>
            </video>
          </van-swipe-item>
        </van-swipe>
        
      </van-tab>
      <van-tab title="VIP活动">
        <vip-act/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import './index.scss';
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
import VipAct from '@/components/vip/index.vue'
export default {
  components: {
    // Tag,
    // Col,
    // Icon,
    // Cell,
    // CellGroup,
    // Tab,
    // Tabs,
    // Swipe,
    // VanImage,
    // Lazyload,
    // SwipeItem,
    // GoodsAction,
    // GoodsActionIcon,
    // GoodsActionButton
    VipAct
  },
  data() {
    return {
      active: 0,
      musics: {
        title: '推荐歌曲',
        price: 2680,
        express: '免运费',
        remain: 19,
        imglist: [
          {
            url: require('../../assets/images/3danangaoyin.jpeg'),
            mode: 'cover' // 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
          },
          {
            url: require('../../assets/images/lijian1.jpeg'),
            mode: 'fill'  // 拉伸图片，使图片填满元素
          },
          {
            url: require('../../assets/images/wanghongwei.jpeg'),
            mode: 'contain'  // 保持宽高缩放图片，使图片的长边能完全显示出来
          },
          {
            url: require('../../assets/images/huangheyy.jpg'),
            mode: 'none'  // 保持图片原有尺寸
          },
          {
            url: require('../../assets/images/leijia.jpg'),
            mode: 'scale-down' // 取none或contain中较小的一个 // 拉伸图片，使图片填满元素
          },
          {
            url: require('../../assets/images/liaochangyong.jpg'),
            mode: 'fill'  // 保持图片原有尺寸
          }
        ],
        conlist: [{
          title: '推荐音乐',
          hotlist: [{
            url: "http://p3.music.126.net/Gp9u38SolbtDZj0IUiF66w==/109951165293562575.jpg?param=140y140",
            text: '东方流韶：倾听民乐精选集'
          }, {
            url: "http://p4.music.126.net/wGSy2XKSLvs2q-hLnXbxKA==/109951165227667289.jpg?param=140y140",
            text: '欧美民谣丨散文诗般的情绪荡漾我心  散文诗般的情绪荡漾我心'
          }, {
            url: "http://p4.music.126.net/PQ2ZI4DO5LueJ-ruoA_mvw==/109951165313889467.jpg?param=140y140",
            text: '倾听大自然 · 轻音乐狂想曲'
          }]
        }, {
          title: '最新专辑',
          hotlist: [
            {
              url: "http://p4.music.126.net/ilhSwYuf1t3_vVu5eU5Pnw==/109951165434590354.jpg?param=130y130",
              text: '不完美人生指南'
            },
            {
              url: "https://p2.music.126.net/frcbVpitvA4Jw4R_CZ3gXQ==/109951165515492493.jpg?param=130y130",
              text: '蒹葭 舞蹈原声音乐'
            },
            {
              url: "https://p2.music.126.net/Fhxhr7wPqmJlBAyj3Su9LA==/109951165517177964.jpg?param=130y130",
              text: 'Home for Christmas'
            }
          ]
        }, {
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
      },
      videolist: [{
        path: 'https://www.w3school.com.cn/i/movie.mp4',
        id: 'Vjnanml',
        auto: true,
        preload: 'none',
        loop: undefined,
        muted: false
      }, {
        path: require('../../assets/media/mudanhua.mp4'),
        id: 'Vmudhua',
        auto: false,
        preload: 'auto',
        loop: 'loop',
        muted: false
      }, {
        path: require('../../assets/media/sixkeji.mp4'),
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
    onClickLeft() {
      // Toast('返回');
    },
    handleSearch() {
      // Toast('按钮');
    },
  }
};
</script>