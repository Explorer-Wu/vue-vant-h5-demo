import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'found',
    component: () => import('@/views/found'),
    meta: {
      title: '发现'
    }
  },
  {
    name: 'playlist',
    component: () => import('@/views/playlist'),
    meta: {
      title: '音乐'
    }
  },
  // {
  //   name: 'friends',
  //   component: () => import('@/views/friends'),
  //   meta: {
  //     title: '朋友'
  //   }
  // },
  {
    name: 'cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'user',
    component: () => import('@/views/user'),
    meta: {
      title: '账户'
    }
  },
  {
    path: ('/' || ''),
    redirect: '/found',
  },
  // {
  //   name: '404',
  //   path: '/error',
  //   component: () => import('@/views/error')
  // },
  // {
  //   path: '*',
  //   redirect: '/error'
  // }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router
