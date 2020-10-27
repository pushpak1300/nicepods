import { createRouter, createWebHistory  } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';
import Home from '../views/Home.vue'
import useFirebaseAuth from "../hooks/firebase-auth";

const state = useFirebaseAuth();

const ifNotAuthenticated = (_to, _from, next) => {
  if (!state.user.value) {
    next()
    return
  }
  next('/tabs/tab1')
}

// eslint-disable-next-line
const ifAuthenticated = (_to, _from, next) => {
  if (state.user.value) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/tabs/",
    component: Tabs,
    name: "Home",
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "",
        redirect: "tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, _from, next) => {

//   if (state.user.value && (to.name === 'Login')) {
//     next('/tabs/tab1')
//   }

//   if (!state.user.value && (to.name !== 'Login')) {
//     next('/login')
//   }

//   next();
// });

export default router
