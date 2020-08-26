import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/shop/detail/:id',
    name: 'Detail Product',
    component: () => import('../views/DetailProduct.vue'),
  },
  {
    path: '/add-product',
    name: 'Add Product',
    component: () => import('../views/AddProduct.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
