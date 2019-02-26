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
      component: () => import('./views/book/Book.vue')
    
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/movie/Movie.vue')
    
    },{
      path: '/music',
      name: 'music',
      component: () => import('./views/music/Music.vue')
    
    },{
      path: '/chat',
      name: 'chat',
      component: () => import('./views/chat/Chat.vue')
    
    }
    ,{
      path: '*',
      component: () => import('./views/404notfound.vue')
    },
    {
      path: '/details',
      name:"details",
      component: () => import('./views/movie/Details.vue')
    }
  ]
})
