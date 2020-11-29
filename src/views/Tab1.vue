<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title align="center">NicePods</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large text-center">Favourite</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid v-if="podcastList.length === 0">
        <ion-row class="ion-justify-content-center ion-padding-top">
          <ion-col size="9">
            <div class="ion-text-center">
              <ion-img src="../../public/assets/podcast_image_2.svg" />
              <h3>Add your favourites</h3>
              <p>
                Tab Subscribe on your podcast to add them here. You'll see the
                latest episodes for all your favourite shows in one place.
              </p>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-list v-else>
        <FavouriteCard
          v-for="podcast in podcastList"
          :key="podcast.podcastUuid"
          :podcast="podcast"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { IonGrid, IonRow, IonCol, IonList,IonImg } from "@ionic/vue";
import { db, auth } from "../plugins/firebase";
import FavouriteCard from "../components/FavouriteCard";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    FavouriteCard,
    IonImg
  },
  data() {
    return {
      podcastList: [],
    };
  },
  ionViewWillLeave() {
    this.podcastList = [];
  },
  ionViewWillEnter() {
    db.collection("favourite")
      .where("userId", "==", auth.currentUser.uid)
      .get()
      .then(podcast => {
        var vm = this;
        podcast.forEach(doc => {
          vm.podcastList.push(doc.data());
        });
      });
  },
};
</script>
