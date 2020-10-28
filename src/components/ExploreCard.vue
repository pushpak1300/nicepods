<template>
  <ion-card>
    <ion-grid>
        <ion-row>
            <ion-col size="3">
                <img class="rounded-md h-12 w-12 user" src="https://i.redd.it/jjrj3k2raad51.jpg" alt="Avatar">
            </ion-col>
            <ion-col size="9">
                <div class="card-header" >
                    <ion-card-title class="text-red">Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-icon color="light" name="musical-note-outline"></ion-icon>
                <ion-button fill="outline">Add</ion-button>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
    <ion-card-content>
      This is content, without any paragraph or header tags,
      within an ion-card-content element.
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: ' ExploreCard',
  components: { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonButton},
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
    padding-top : 4 px;
}

</style>