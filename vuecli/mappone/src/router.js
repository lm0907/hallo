import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'book',
      component: () => import(/* webpackChunkName: "about" */ './views/book/Book.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ './views/movie/Movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import(/* webpackChunkName: "about" */ './views/music/Music.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "about" */ './views/chat/Chat.vue')
    },

  ]
})
