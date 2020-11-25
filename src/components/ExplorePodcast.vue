<template>
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>
  <ion-grid>
    <podcast-card />
  </ion-grid>
  <hr/>
  <ion-list>
    <ExploreCard />
    <ExploreCard />
    <ExploreCard />
    <ExploreCard />
    <ExploreCard />
  </ion-list>
</template>

<script>
import { IonGrid, IonSearchbar, IonList } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import PodcastCard from "../components/PodcastCard.vue";
import ExploreCard from "../components/ExploreCard.vue";

export default defineComponent({
  name: "ExploreCardList",
  components: {
    ExploreCard,
    PodcastCard,
    IonList,
    IonGrid,
    IonSearchbar,
  },
  setup() {
    const flickityOptions = reactive({
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      ImagesLoaded: true,
    });

    return { flickityOptions };
  },
});
</script>
