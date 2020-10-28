<template>
    <ion-card class="p-1 m-1">

      <img class='cover-art' src = "https://i.pinimg.com/originals/6d/db/09/6ddb0925b7b1152bb6454f8b39c096ad.png" />   
      <ion-card-header>
      <ion-card-subtitle>Author</ion-card-subtitle>
      <ion-card-title>Podcast Title</ion-card-title>
      </ion-card-header>

      <ion-card-content>
      Content for podcast
      </ion-card-content>
      </ion-card>
</template>

<script>
import {IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PodcastCard',
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle },
})
    

</script>

<style scoped>

</style>