import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/pages/home')
const Blog = () => import('../components/pages/blog')
const Contact = () => import('../components/pages/contact')
const about = () => import('../components/pages/about')
const tags = () => import('../components/pages/tags')
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
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    }
  ]
})
