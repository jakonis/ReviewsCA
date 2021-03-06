import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Reviews from '@/components/Reviews'
import Review from '@/components/Review'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
