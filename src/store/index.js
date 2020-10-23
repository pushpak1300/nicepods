import { createStore } from 'vuex'
import { auth, provider } from "@/plugins/firebase";

export const store = createStore({
  state: {
    user: null,
    token: null,
  },
  getters: {
    getUser(state) {
      return state.user
    },
    isAuth(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    login(context) {
      auth.signInWithPopup(provider)
        .then(function (result) {
          context.commit('setUser', result.user)
          context.commit('setToken', result.credential.accessToken)
          localStorage.setItem("user-token", result.credential.accessToken);
        })
    },
    signOutAction(context) {
      auth.signOut()
        .then(() => {
          context.commit("setUser", null);
        })
    },
    authCheck(context) {
      return new Promise((resolve) => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            context.commit('setUser', user);
          } else {
            context.commit('setUser', null);
          }
          resolve(true);
        });
      });
    },
  }
});

export default store;