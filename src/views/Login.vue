<template>
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
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Log in on NicePods
        </h2>
      </div>
      <div class="mt-6">
        <button
          @click="loginWithGoogle"
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
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useShowError from "../hooks/show-error";
import { useRouter } from "vue-router";
import useFirebaseAuth from "../hooks/firebase-auth";

export default {
  name: "Login",
  setup() {
    const alert = useShowError();
    const router = useRouter();
    const { login } = useFirebaseAuth();

    function loginWithGoogle() {
      try {
        login().then(() => {
          router.push("/tabs/tab1");
        });
      } catch (error) {
        console.log(error);
        alert.handleAlert("Login Failed", true);
      }
    }

    return {
      loginWithGoogle,
    };
  },
};
</script>

<style></style>
