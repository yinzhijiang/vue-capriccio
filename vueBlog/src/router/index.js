import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Blog from '@/components/pages/blog'
import Contact from '@/components/pages/contact'
import about from '@/components/pages/about'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
