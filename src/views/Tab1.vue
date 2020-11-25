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
          <ion-title size="large text-center">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <HomeContainer name="Home" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import HomeContainer from '@/components/HomeContainer.vue';

export default{
  name: 'Tab1',
  components: { HomeContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>

