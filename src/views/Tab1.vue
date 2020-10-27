<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-center">Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="text-center" size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <logout-button />
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
import LogoutButton from "../components/LogoutButton";

export default {
  name: "Tab1",
  components: {
    LogoutButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>
