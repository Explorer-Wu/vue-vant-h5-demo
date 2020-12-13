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
        <button @click="handleOpen('month')">立即开通</button>
        <div class="price-info">
          <strong>8元</strong>
          <span class="txt">前三个月</span>
        </div> 
      </dd>
      <dd class="bg-bt">
        <h5>连续包年+云音乐VIP+优酷视频VIP</h5>
        <p>更多音乐、热播，组合更优惠，立省30元/年!</p>
        <p><s>原价118元</s></p>
        <button @click="handleOpen('year')">立即开通</button>
        <div class="price-info">
          <strong>88元</strong>
          <span class="txt">前两年</span>
        </div>
      </dd>
    </dl>
    <van-action-sheet
      v-model="actShow"
      cancel-text="取消"
      title="组合套餐申请"
      close-on-click-action
    >
    <!-- description="这是一段描述信息" -->
      <van-form class="content" validate-trigger="onChange" @submit="onSubmit" @failed="onFailed" >
      <!-- <van-cell-group> -->
        <!-- 通过 validator 进行函数校验 error-message="手机号格式错误"-->
        <van-field
          v-model="actData.phone"
          type="tel"
          name="phone"
          label="+86 |"
          placeholder="请输入手机号"
          show-error
          show-error-message
          :rules="[{ validator: validPhone, message: '手机号格式错误' }]"
        />
        <van-field
          v-model="actData.sms"
          type="number"
          clearable
          name="sms"
          placeholder="请输入短信验证码"
          show-error
          show-error-message
          :rules="[{ validator: validCode, message: '验证码格式错误' }]"
        >
          <template #button>
            <van-button size="small" @click="getSmsCode" :disabled="!flag">
              <span v-if="flag">{{fetchTxt}}</span>
              <span v-else>({{curSecond}} s)后重新获取</span>
            </van-button>
          </template>
        </van-field>
      <!-- </van-cell-group> -->
        <div style="margin: 6px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-action-sheet>
  </div>
</template>

<script>
import SwiperVdCover from '@/components/Swiper3D/index.vue'
import { validPattern } from '@/utils/pattern.js'
import CookieStorage from '@/utils/cookiestorage.js'
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
      actShow: false,
      actData: {
        id: 'year',
        phone: '',
        sms: '',
      },
      flag: true,
      fetchTxt: '获取验证码',
      curSecond: 60
    };
  },
  watch: {
    'actData.phone' (newVal, oldVal) {
      // debugger
      if (!!CookieStorage.getCookie('phone') && newVal !== CookieStorage.getCookie('phone') && this.fetchTxt === '重新获取验证码') {
        this.fetchTxt = '获取验证码'
      }
    },
  },
  methods: {
    // formatPrice() {
    //   return '¥' + (this.musics.price / 100).toFixed(2);
    // },
    onClickCart() {
      this.$router.push('/views/cart');
    },
    handleOpen(id) {
      this.actShow = true;
      this.actData.id = id
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validPhone(val) {
      return validPattern.validMobile.test(val);
    },
    validCode(val) {
      return validPattern.validSms.test(val);
    },
    onFailed(errorInfo) {
      console.log('failed:', errorInfo);
    },
    onSubmit(values) {
      this.actData = {
        ...this.actData,
        ...values
      }
      console.log('submit:', this.actData);
    },
    getSmsCode() {
      if (this.actData.phone === '' || this.actData.phone.length === 0){
        this.$toast("请先输入手机号！")
      } else {
        let now = new Date()
        let nowtime = now.getTime()
        if (CookieStorage.getCookie('endtime') === null || CookieStorage.getCookie('endtime') < nowtime || document.cookie.indexOf('endtime=') === -1) {
          CookieStorage.setCookie('endtime', nowtime + 60 * 1000, '60s')
          CookieStorage.setCookie('phone', this.actData.phone, '1d')
          this.fetchCodeMsg();
        }
      }
    },
    fetchCodeMsg() {
      const that = this;
      this.flag = false;
      const intervalObj = setInterval(() => {
        if (that.curSecond-- <= 0) {
          that.curSecond = 60;
          that.flag = true;
          that.fetchTxt = '重新获取验证码'
          that.$toast.clear();
          clearInterval(intervalObj);
        }
      }, 1000);
      this.$ApiAuth.sendmsg(this.actData.phone)
      .then(res => {
        if (res.data.code === 200) {
          this.$toast("短信验证码已发送至您的手机，请注意查收!");
        } else {
          this.$toast("短信验证码发送失败，请重新发送!");
        }
      })
      .catch(err => {
        this.flag = true;
        clearInterval(intervalObj);
        this.curSecond = 60;
        this.fetchTxt = '重新获取验证码';
        this.$notify({ type: 'danger', message: err + '发送失败，请重新发送!' });  
      })
    }
  }
};
</script>
<style scoped lang="scss">
</style>
