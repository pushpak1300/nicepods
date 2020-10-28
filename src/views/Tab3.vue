<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title align= center>Activity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ActivityContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ActivityContainer from '@/components/ActivityContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tab3',
  components: { ActivityContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>