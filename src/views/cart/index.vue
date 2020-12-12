<template>
  <div class="pages">
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      class="bottom-btn"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
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
      checkedGoods: ['1', '2', '3'],
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
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      // Toast('点击结算');
    }
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.bottom-btn {
  bottom: 50px !important;
}
</style>