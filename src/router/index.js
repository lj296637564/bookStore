import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home/Home.vue'
import Cart from '@/page/cart/Cart.vue'
import Category from '@/page/category/Category.vue'
import Me from '@/page/me/Me.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
  ]
})
