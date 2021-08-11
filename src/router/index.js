import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";



Vue.use(VueRouter); 

//라우터 정의 , 경로 설정
const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [{
    path: "/", 
    component: Home
  },
    { 
    path: "/about",
    component: About
    },
  ],
});

export default router;


// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];