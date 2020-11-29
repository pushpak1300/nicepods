<template>
  <ul class="flex space-x-2 items-center overflow-x-scroll">
    <li class="items-center flex flex-col space-y-0 w-1/3">
      <a href="#">
        <ion-img
          class="h-24 w-24 rounded-lg p-1"
          src="http://is5.mzstatic.com/image/thumb/Music71/v4/43/88/12/4388122e-226e-c59f-6d2d-88f7320f1aae/source/600x600bb.jpg"
          alt="kitten"
        />
      </a>
      <p class="text-gray-800 dark:text-gray-100 text-left font-semibold">Ted Podcast</p>
      <p class="text-gray-600 dark:text-gray-200 dark:text-gray-200 text-left font-medium text-sm">TED</p>
    </li>
    <li class="items-center flex flex-col space-y-0 w-1/3">
      <a href="#">
        <ion-img
          class="h-24 w-24 rounded-lg p-1"
          src="http://is5.mzstatic.com/image/thumb/Music71/v4/43/88/12/4388122e-226e-c59f-6d2d-88f7320f1aae/source/600x600bb.jpg"
          alt="kitten"
        />
      </a>
      <p class="text-gray-800 dark:text-gray-100 text-left font-semibold">Ted Podcast</p>
      <p class="text-gray-600 dark:text-gray-200 text-left font-medium text-sm">TED</p>
    </li>
    <li class="items-center flex flex-col space-y-0 w-1/3">
      <a href="#">
        <ion-img
          class="h-24 w-24 rounded-lg p-1"
          src="http://is5.mzstatic.com/image/thumb/Music71/v4/43/88/12/4388122e-226e-c59f-6d2d-88f7320f1aae/source/600x600bb.jpg"
          alt="kitten"
        />
      </a>
      <p class="text-gray-800 dark:text-gray-100 text-left font-semibold">Ted Podcast</p>
      <p class="text-gray-600 dark:text-gray-200 text-left font-medium text-sm">TED</p>
    </li>
  </ul>
</template>

<script>
import { IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PodcastCard",
  components: {
    IonImg
  },
});
</script>
