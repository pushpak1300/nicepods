<template>
<ion-grid>
  <ion-row>
      <ion-col size="6">
  <!-- <ion-card>
    <img src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card> -->
  <ExploreCard/>

  
  </ion-col >
  </ion-row>
</ion-grid>
</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreCard from '@/components/ExploreCard.vue';

export default defineComponent({
  name: 'ActivityContainer',
  props: {
    name: String
  },
  components: { IonCol, IonGrid, IonRow, ExploreCard},
});
</script>


<style scoped>
/* #container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
} */
</style>