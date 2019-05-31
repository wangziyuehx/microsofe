import Vue from 'vue'
import Router from 'vue-router'
import micro from '@/components/micro'
import HelloWorld from '@/components/HelloWorld'
import office from '@/components/office'
import Windows from '@/components/Windows'
import surface from '@/components/surface'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'micro',
      component:micro
    },

    {
      path: '/office',
      name: 'office',
      component: office
    },

    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/Windows',
      name:'Windows',
      component:Windows
    },
    {
      path:'/surface',
      name:'surface',
      component:surface
    }

  ]
})
