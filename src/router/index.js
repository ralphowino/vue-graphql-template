import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/Index.vue'),
  },
  {
    path: '/blog/post/:id',
    name: 'BlogPost',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/Post.vue'),
  },
  {
    path: '/blog/author/:id',
    name: 'BlogAuthor',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/Author.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
