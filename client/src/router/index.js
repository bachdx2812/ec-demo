import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    component: ProductDetail,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
