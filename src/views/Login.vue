<template>
  <ion-page>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="assets/icon/logo.png"
            alt="Logo"
          />
          <h2
            class="mt-6 mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >
            Log in on NicePods
          </h2>
        </div>
        <form @submit.prevent="loginFirebase">
          <div class="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                v-model="data.email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div class="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                v-model="data.password"
                required
                minlength="8"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
                autocomplete="true"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="text-sm leading-5">
              <a
                @click="() => router.push('/register')"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div class="mt-6">
            <button
              @click="loginFirebase"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    <ion-loading
      :is-open="data.loading"
      cssClass="my-custom-class"
      message="Please wait..."
    ></ion-loading>
  </ion-page>
</template>

<script>
import useShowError from "../hooks/show-error";
import { useRouter } from "vue-router";
import useFirebaseAuth from "../hooks/firebase-auth";
import { reactive } from "vue";
import { IonPage, IonLoading } from "@ionic/vue";

export default {
  name: "Login",
  components: { IonPage, IonLoading },
  setup() {
    const alert = useShowError();
    const router = useRouter();
    const { login } = useFirebaseAuth();

    const data = reactive({
      email: null,
      password: null,
      loading: null,
    });

    function loginFirebase() {
      data.loading = true;
      login(data.email, data.password)
        .then(() => {
          data.loading = false;
          router.push("/tabs/tab1");
        })
        .catch(() => {
          data.loading = false;
          alert.handleAlert("Wrong Credentials.", true);
        });
    }

    return {
      data,
      loginFirebase,
      router,
    };
  },
};
</script>

<style></style>
