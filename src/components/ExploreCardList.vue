 <template>
    
<ion-searchbar show-cancel-button="focus"></ion-searchbar>

      <!-- <ExploreCard /> -->
      <IonGrid>
        <IonRow>
        <IonCol size="4" class="m-0">
          <PodcastCard/>
        </IonCol>

        <IonCol size="4" class="m-0">
          <PodcastCard/>
        </IonCol>

        <IonCol size="4" class="m-0">
          <PodcastCard/>
        </IonCol>
      </IonRow>
      </IonGrid>
    
    <ion-list>
      <ExploreCard/>
      <ExploreCard/>
      <ExploreCard/>
    </ion-list>
      
  
    
</template>

<script lang="ts">
import { IonList, IonGrid, IonRow, IonCol, IonSearchbar} from '@ionic/vue';
import { defineComponent } from 'vue';
import PodcastCard from '@/components/PodcastCard.vue';
import ExploreCard from '@/components/ExploreCard.vue';


export default defineComponent({
  name: 'ExploreCardList',
  components: { ExploreCard, PodcastCard, IonList,  IonGrid, IonRow, IonCol, IonSearchbar},
});
</script>

<style scoped>

.cover-art{
  width:100px;
  height:100px;
  object-fit:cover;
}




</style>