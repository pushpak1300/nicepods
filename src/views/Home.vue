<template>
<ion-page>
  <div class="relative h-full  bg-white ">
    <div class="h-full mx-auto">
      <div
        class="relative
         z-10  bg-white h-full lg:max-w-2xl lg:w-full "
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  <img
                    class="mx-auto h-12 w-auto"
                    src="assets/icon/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </nav>
          
        </div>

        <main
          class="my-40  mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 "
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Filter your podcast as per your choice.
              <br class="xl:hidden" />
              <span class="text-indigo-600">NicePods</span>
            </h2>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                 @click="() => router.push('/register')"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Register
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <button
                  @click="() => router.push('/login')"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { IonPage } from "@ionic/vue";
export default {
  name: "Home",
  components: {IonPage},
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
