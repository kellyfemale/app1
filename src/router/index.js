import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Type from '@/components/Type'
import Order from '@/components/Order'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
  ]
})
