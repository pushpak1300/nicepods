<template>
  <div>
    <div class="flex p-4 border-t-2 border-solid dark:border-gray-400">
      <img
        class="rounded-md h-12 w-12 user"
        :src="podcast.podcastImage"
        alt="Avatar"
      />
      <div class="pt-2">
        <h5
          class="dark:text-gray-100 text-gray-800 font-bold pl-4 place-content-start m-0"
        >
          {{ podcast.podcastTitle }}
        </h5>
        <p
          class="dark:text-gray-100 text-gray-600 font-sm pl-4 place-content-start m-0 text-sm"
        >
          {{ podcast.podcastAuthor }}
        </p>
      </div>
    </div>
    <div class="pb-4">
      <h5
        class="dark:text-gray-300 text-gray-700 font-semibold pl-4 place-content-start m-0"
      >
        {{ podcast.podcastDescription }}
      </h5>

      <button
        class="border-2 focus:outline-none dark:border-gray-700 border-solid border-blue-700 ml-4 rounded-full py-1 px-2 mt-2 inline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6 text-blue-700 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <a
          class="text-blue-700 dark:text-gray-400 text-sm font-semibold space-x-1 inline "
          href="whatsapp://send?text=this.title"
          data-action="share/whatsapp/share"
        >
          Share
        </a>
      </button>

      <button
        class="border-2 focus:outline-none dark:border-gray-700 border-solid border-blue-700 ml-4 rounded-full py-1 px-2 mt-2 inline"
      >
        <svg
          class="h-6 w-6 text-blue-700 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
        <a
          class="text-blue-700 dark:text-gray-400 text-sm font-semibold space-x-1 inline "
          @click="deletePodcast"
        >
          Delete
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "../plugins/firebase";

export default defineComponent({
  name: "FavouriteCard",
  props: {
    podcast: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePodcast() {
      let docID = this.podcast.userId + this.podcast.podcastUuid;

      db.collection("favourite")
        .doc(docID)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });

      this.$emit("deleted",this.podcast);
    },
  },
});
</script>

<style scoped>
.user {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.card-header {
  padding-left: 100 px;
  padding-top: 4 px;
}
</style>
