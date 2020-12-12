<template>
  <div class="swiper-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperlist" :key="`swel${index}`">
        <slot name="swipevd" :swipevd="item"></slot>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-3d-coverflow',
    title: '3D Coverflow effect',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      swiperlist: {
        type: Array,
        default () {
          return []
        }
      },
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true, // 该选项给Swiper用户提供小小的贴心应用，设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
          centeredSlides: true,
          coverflowEffect: {
            rotate: 50, // slide做3d旋转时Y轴的旋转角度
            stretch: 110,  // 每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
            depth: 110, // slide的位置深度。值越大z轴距离越远，看起来越小。
            modifier: 1.3, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
            slideShadows: false, // 是否开启slide阴影
          },
          slidesPerView: 'auto',
          centeredSlidesBounds: true, //当设置了Active Slide居中后，还可以配合设置此参数，使得第一个和最后一个Slide 始终贴合边缘。
          // spaceBetween: -30,
          // loop: true,
          // loopedSlides: 8, //该参数设置所要用到的loop个数
          // loopAdditionalSlides: 1, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
          // loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/function";
  .swiper-3d {
    // width: 100%;
    // height: 100%;
    overflow: hidden;
    // padding: 5px auto;
  }

  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80vw;
      // height: 15rem;
      text-align: center;
      // font-weight: bold;
      @include mediafixrem((
        "font-size": 64
      ));
    }
    .swiper-button-prev {
        @include superfixrem((
          "left": 6
        ));
        right: auto;
    }
    .swiper-button-next {
      left: auto;
      @include superfixrem((
        "right": 6
      ));
    }
    .swiper-button-prev:after, .swiper-button-next:after {
      @include superfixrem((
        "font-size": 56
      ));
      font-weight: bold;
      color: rgba(5, 202, 252, 0.966);
      // width: 1rem;
      // height: 1rem;
    }
    .swiper-pagination {
      /deep/ .swiper-pagination-bullet {
        background-color: rgb(27, 255, 255);
      }
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }
</style>