<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title align="center">Activity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Activity</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="p-8 container text-center ">
        <qr-stream @decode="onDecode" class="mb"></qr-stream>
        <h5 class="text-lg font-semibold text-blue-600 dark:text-gray-300">
          Scan playlist QR code
          <br />
          Add the playlist
        </h5>
      </div>
      <div class="p-8 container text-center ">
        <div class="items-center p-0 m-0 block">
          <canvas
            class="container dark:border-white dark:border-2"
            id="qr"
          ></canvas>
        </div>
        <h5 class="text-lg font-semibold text-blue-600 dark:text-gray-300">
          Show QR code to scan
        </h5>
      </div>

      <ion-button @click="logout" expand="block">Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  alertController,
  toastController,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { QrStream } from "vue3-qr-reader";
import QRious from "../../node_modules/qrious/dist/qrious.min.js";
import { auth, db } from "../plugins/firebase.js";
import router from "../router/";

export default defineComponent({
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    QrStream,
    IonButton,
  },
  data() {
    return {
      scannedData: null,
    };
  },
  methods: {
    onDecode(data) {
      this.scannedData = data;
      this.presentAlert();
    },
    async openToast(message) {
      const toast = await toastController.create({
        message: message,
        duration: 2000,
      });
      return toast.present();
    },
    addToPlaylist() {
      db.collection("favourite")
        .where("userId", "==", this.scannedData)
        .get()
        .then(podcast => {
          if (podcast.size === 0) {
            this.openToast("Not valid QR");
          } else {
            podcast.forEach(doc => {
              let song = doc.data();
              let docId = auth.currentUser.uid + song.podcastUuid;
              song.userId = auth.currentUser.uid;
              db.collection("favourite")
                .doc(docId)
                .set(song)
                .catch(function(error) {
                  console.error("Error writing document: ", error);
                });
            });
          }
        })
        .then(() => {
          this.openToast("Playlist Added sucessfully");
        });
    },
    logout() {
      auth.signOut().then(function() {
        router.push("/login");
      });
    },
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Confirm",
        message: "Add this Playlist?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: blah => {
              console.log("Confirm Cancel:", blah);
            },
          },
          {
            text: "Okay",
            cssClass: "primary",
            handler: () => {
              this.addToPlaylist();
            },
          },
        ],
      });
      return alert.present();
    },
  },
  mounted() {
    new QRious({
      element: document.getElementById("qr"),
      value: auth.currentUser.uid,
    });
  },
});
</script>
