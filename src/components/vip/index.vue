<template>
  <div class="pages-act">
    <!-- <van-swipe class="swipe-box" :autoplay="3000" lazy-render> -->
      <!-- <div class="swipe-box"> -->
      <!-- <van-swipe-item v-for="(thumd, index) in activitylist" :key="`img${index}`">
        <van-image class="vimg" :src="thumd"/>
      </van-swipe-item> -->
      <!-- </div> -->
      <!-- <template #indicator>
        <van-icon name="arrow-left" class="indicator-left"/>
        <van-icon name="arrow" class="indicator-right"/>
      </template> -->
    <!-- </van-swipe> -->
    <swiper-vd-cover class="swipe-box" :swiperlist="activitylist">
      <template v-slot:swipevd="{ swipevd }">
        <van-image :src="swipevd"/>
      </template>
    </swiper-vd-cover>
    <dl class="con-act">
      <dt>
        <h1>音乐包 <em>+</em> VIP套餐组合</h1>
      </dt>
      <dd>
        <h5>连续包月+云音乐VIP</h5>
        <p>更多音乐，组合更优惠，立省10元/月!</p>
        <p><s>原价18元</s></p>
        <button>立即开通</button>
        <div class="price-info">
          <strong>8元</strong>
          <span class="txt">前三个月</span>
        </div> 
      </dd>
      <dd class="bg-bt">
        <h5>连续包年+云音乐VIP+优酷视频VIP</h5>
        <p>更多音乐、热播，组合更优惠，立省30元/年!</p>
        <p><s>原价118元</s></p>
        <button>立即开通</button>
        <div class="price-info">
          <strong>88元</strong>
          <span class="txt">前三个月</span>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import SwiperVdCover from '@/components/Swiper3D/index.vue'
export default {
  name: 'vip',
  components: {
    SwiperVdCover
  },
  data() {
    return {
      activitylist: [
        require('@/assets/images/act_banner1.png'),
        require('@/assets/images/act_banner2.png'),
        require('@/assets/images/act_banner3.png'),
        require('@/assets/images/act_banner4.png'),
        require('@/assets/images/act_banner5.png'),
      ],
    };
  },
  methods: {
    // formatPrice() {
    //   return '¥' + (this.musics.price / 100).toFixed(2);
    // },
    onClickCart() {
      this.$router.push('/views/cart');
    },
    sorry() {
      // Toast('暂无后续逻辑~');
    }
  }
};
</script>
<style scoped lang="scss">
</style>
