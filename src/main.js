import Vue from 'vue'
// import 'amfe-flexible'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import UseGenerals from './plugins/initgeneral'
import 'vant/lib/index.less'
import '@/assets/styles/base.scss'
import '@/assets/styles/app.scss'
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

UseGenerals(Vue, Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
