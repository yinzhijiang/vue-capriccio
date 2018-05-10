import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/pages/home')
const Blog = () => import('../components/pages/blog')
const Contact = () => import('../components/pages/contact')
const about = () => import('../components/pages/about')
const tags = () => import('../components/pages/tags')
const message = () => import('../components/pages/message')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/jyz/',
      name: '／',
      component: Home
    },
    {
      path: '/jyz/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/jyz/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/jyz/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/jyz/about',
      name: 'about',
      component: about
    },
    {
      path: '/jyz/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/jyz/message',
      name: 'message',
      component: message
    }
  ]
})
