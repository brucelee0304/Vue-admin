import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/common/Home.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/common/Home.vue'], resolve),
      children:[
      	 {
            path: '/page1',
            component: resolve => require(['@/components/page/page1.vue'], resolve)
        	},
        	{
            path: '/page2',
            component: resolve => require(['@/components/page/page2.vue'], resolve)
        	},
        	{
            path: '/page3',
            component: resolve => require(['@/components/page/page3.vue'], resolve)
        	},
        	{
            path: '/page4',
            component: resolve => require(['@/components/page/page4.vue'], resolve)
        	},
      ]
    }
  ]
})
