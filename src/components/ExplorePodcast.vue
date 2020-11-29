<template>
  <ion-content>
    <ion-searchbar show-cancel-button="focus"></ion-searchbar>
    <ion-grid>
      <podcast-card />
    </ion-grid>
    <hr />
    <ion-list>
      <ExploreCard
        v-for="podcast in podcastData"
        :key="podcast.uuid"
        :podcast="podcast"
      />
    </ion-list>
    <ion-infinite-scroll
      id="infiniteScroll"
      v-on:ionInfinite="scrolled"
      ref="infiniteScroll"
      threshold="100px"
      position="bottom"
      :disabled="scrollDisabled"
    >
      <ion-infinite-scroll-content
        loadingSpinner="bubbles"
        loadingText="Loading more data..."
      ></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script>
import {
  IonGrid,
  IonSearchbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonContent,
  IonList,
} from "@ionic/vue";
import { defineComponent } from "vue";
import PodcastCard from "../components/PodcastCard.vue";
import ExploreCard from "../components/ExploreCard.vue";
import { db } from "../plugins/firebase";
import { Podcast } from "../components/Podcast";

export default defineComponent({
  name: "ExploreCardList",
  components: {
    ExploreCard,
    PodcastCard,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonGrid,
    IonSearchbar,
    IonContent,
    IonList,
  },
  data() {
    return {
      scrollDisabled: false,
      podcastData: [],
      snapshot: null,
    };
  },
  methods: {
    scrolled(event) {
      var lastVisible = this.snapshot.docs[this.snapshot.docs.length - 1];
      db.collection("podcasts")
        .orderBy("uuid")
        .startAt(lastVisible)
        .limit(15)
        .get()
        .then(podcast => {
          if (!podcast) {
            this.scrollDisabled = true;
          }
          var vm = this;
          podcast.forEach(doc => {
            vm.podcastData.push(Podcast.crateFromArray(doc.data()));
          });
          this.snapshot = podcast;
        });
      event.target.complete();
    },
  },
  mounted() {
    db.collection("podcasts")
      .orderBy("uuid")
      .limit(15)
      .get()
      .then(podcast => {
        var vm = this;
        podcast.forEach(function(doc) {
          vm.podcastData.push(Podcast.crateFromArray(doc.data()));
        });
        this.snapshot = podcast;
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
  },
});
</script>
