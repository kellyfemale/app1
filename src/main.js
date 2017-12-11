// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible"
import axios from 'axios'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios=axios

var store=new Vuex.Store({
	state:{
		isLogin:false,
		username:''
	},
	mutations:{
		login(state,userInfo){
			state.isLogin = true
			state.username = userInfo.nickName
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
