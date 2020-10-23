import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';
import Login from '../views/Login.vue';
import useFirebaseAuth from "../hooks/firebase-auth";

const state = useFirebaseAuth();

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/tabs/",
    component: Tabs,
    name: "Home",
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

router.beforeEach((to, _from, next) => {

  if (state.user.value && (to.name === 'Login')) {
    next('/tabs/tab1')
  }

  if (!state.user.value && (to.name !== 'Login')) {
    next('/login')
  }

  next();
});

export default router
