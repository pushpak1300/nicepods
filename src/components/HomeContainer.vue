<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center ion-padding-top">
      <ion-col size="9">
        <div class="ion-text-center">
          <img src="../../public/assets/podcast_image_2.svg" />
          <h3>Add your favourites</h3>
          <p>
            Tab Subscribe on your podcast to add them here. You'll see the
            latest episodes for all your favourite shows in one place.
          </p>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script >
import { defineComponent } from "vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
  name: "HomeContainer",
  components: { IonGrid, IonRow, IonCol },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.ion-padding-top {
  padding-top: 30%;
}
</style>
