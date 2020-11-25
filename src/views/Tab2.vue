<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title align= center> Explore </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large text-center">Explore</ion-title>
        </ion-toolbar>
      </ion-header>
      <explore-podcast/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ExplorePodcast from '../components/ExplorePodcast.vue';

export default {
  name: ' Tab2',
  components: { IonPage,IonHeader,IonToolbar,IonTitle, IonContent,ExplorePodcast},
};
</script>