import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

import index from '@/components/index'
import test from '@/components/test'
import vuex from '@/components/vuex'
import display from '@/components/display'
import increment from '@/components/increment'
import reduce from '@/components/reduce'

import Public from '@/components/public/public.vue'

Vue.use(Router)
Vue.use(Public)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: index
		},
		{
			path: '/test',
			component: test
		},
    {
      path: '/vuex',
      component: vuex
    },
    {
      path: '/display',
      component: display
    },
    {
      path: '/increment',
      component: increment
    },
    {
      path: '/reduce',
      component: reduce
    }

	]
})


// 注册了一个自定义组件..,
Vue.component('my-component', {
  template: '<div style="color: white;"> 注意 :一个自定义组件成功引入了</div>'
})
