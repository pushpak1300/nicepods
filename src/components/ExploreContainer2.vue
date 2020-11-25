<template>
  <ion-grid>
    <ion-row>
      <ion-searchbar
        color="light"
        placeholder="Search"
        show-cancel-button="focus"
      ></ion-searchbar>
    </ion-row>
    <ion-row>
      <ion-col></ion-col>
    </ion-row>
  </ion-grid>

  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col size="3">
          <img
            class="user"
            src="https://i.redd.it/jjrj3k2raad51.jpg"
            alt="Avatar"
          />
        </ion-col>

        <ion-col size="9">
          <div class="card-header">
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-icon color="light" name="musical-note-outline"></ion-icon>

            <ion-button fill="outline" slot="end">Add</ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-card-content>
      This is content, without any paragraph or header tags, within an
      ion-card-content element.
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCol,
  IonGrid,
  IonRow,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExploreContainer2",
  props: {
    name: String,
  },
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
  },
  setup() {
    return { warning };
  },
});
</script>

<style scoped>
.user {
  display: inline-block;
  border-radius: 90%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.card-header {
  padding-left: 100 px;
  padding-top: 4 px;
}
</style>
