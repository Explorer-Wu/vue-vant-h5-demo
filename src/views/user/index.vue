<template>
  <div>
    <!-- <van-nav-bar title="个人中心" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <van-cell size="large" :border="false" center is-link to="/views/user/detail" >
      <template #icon>
        <van-image class="avatar" lazy-load round fit="cover" :src="require('../../assets/images/horse.jpeg')"/>
      </template>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <!-- <van-icon :name="require('../../assets/images/horse.jpeg')" class-prefix="avatar" /> -->
        <span class="custom-title">梧韵</span>
        <span class="txt-lv">Lv 3.0.1</span>
      </template>
      <template #label>
        <van-rate
          v-model="starVal"
          :size="16"
          color="#ffd21e"
          void-icon="star"
          :count="6"
        />
        <!-- <van-icon name="star" color="rgb(245, 170, 8)"/> -->
      </template>
    </van-cell>
    <van-cell icon="award" title="VIP会员" class="cell-vip" value="VIP首月仅8元" value-class="vip-cor" :border="false" is-link/>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="underway-o" />
        最近播放
      </van-col>
      <van-col span="6">
        <van-icon name="down" />
        本地下载
      </van-col>
      <van-col span="6">
        <van-icon name="like-o" />
        音乐收藏
      </van-col>
      <van-col span="6">
        <van-icon name="goods-collect-o" />
        已购
      </van-col>
    </van-row>

    <!-- <van-cell-group class="user-group">
      <van-cell icon="records" title="自建歌单" arrow-direction="down" is-link />
    </van-cell-group> -->
    <van-collapse class="user-group" v-model="activeList" accordion>
      <van-collapse-item icon="orders-o" title="我的歌单" name="1">
        <dl class="pages-con">
          <dd v-for="(sdd, sidex) in songlist" :key="`song${sidex}`">
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
      </van-collapse-item>
      <van-collapse-item icon="balance-list-o" title="购物订单" name="2">
        <van-swipe-cell
          v-for="item in goods"
          :key="item.id" 
          class="card-goods">
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-collapse-item>
    </van-collapse>

    <van-cell-group>
      <van-cell icon="setting-o" title="设置" is-link />
      <van-cell icon="scan" title="扫一扫" is-link />
      <van-cell icon="envelop-o" title="我的消息" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<script>
// import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  // components: {
  //   [Row.name]: Row,
  //   [Col.name]: Col,
  //   [Icon.name]: Icon,
  //   [Cell.name]: Cell,
  //   [CellGroup.name]: CellGroup
  // }
  data() {
    return {
      starVal: 3,
      activeList: ['1'],
      songlist: [
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
      ],
      goods: [{
        id: '1',
        title: 'H16 Pro 光感入耳检测 开盖即连无线充电 蓝牙5.0真无线耳机 苹果安卓通用',
        desc: '白色【赠纯白硅胶套】',
        price: 26800,
        num: 1,
        thumb: 'http://p1.music.126.net/NnD6kCLTK4LOwgGIfrmQ7w==/109951165527394987.jpg?param=80y80'
      }, {
        id: '2',
        title: '漫步者（EDIFIER）MINI-BUDS 真无线蓝牙5.0小巧入耳式手机音乐通话耳机',
        desc: '高通蓝牙5.0，aptx解码；CVC8.0通话降噪；长效续航；小巧便携舒适佩戴；Type-C充电接口',
        price: 10800,
        num: 1,
        thumb: 'http://p3.music.126.net/is9_JwG7v7Utiis6RUZ5hA==/109951165385958437.jpg?param=440y440'
      }, {
        id: '3',
        title: '爱国者（aigo）播放器M1无损hifi音乐播放器触屏mp3学生随身听便携播放器',
        desc: '下单送16G内存卡 镜面触屏播放器 高清外放 30小时长时播放 蓝牙4.1',
        price: 28000,
        num: 1,
        thumb: 'http://p3.music.126.net/M-0_KjrZg4sUFZTFPdkj0w==/109951163693470454.jpg?param=440y440'
      }]
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/function";
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    width: 98vw;
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    margin: 3px auto;
    border-radius: 6px;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.avatar {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.txt-lv {
  display: inline-block;
  margin-left: 3px;
  color: #fff;
  background-color: rgb(10, 112, 245);
  @include superfixrem((
    "height": 30,
    "line-height": 30,
    "padding": 0 16,
    "font-size": 20,
    "border-radius": 15
  ));
}
.cell-vip {
  width: 98vw;
  background-color: rgb(239, 232, 243);
  color: rgb(83, 18, 121);
  margin: 3px auto;
  border-radius: 6px;
}
.vip-cor {
  color: rgba(108, 37, 150, 0.61);
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  // &__item {
  //   position: relative;
  //   background-color: #fafafa;
  //   .van-card__price {
  //     color: #f44;
  //   }
  // }
}
.delete-button {
  height: 100%;
}
</style>