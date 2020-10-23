<template>
  <div>
    <ion-button @click="logoutauth" expand="block">Logout</ion-button>
  </div>
</template>

<script>
import { IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import useFirebaseAuth from "../hooks/firebase-auth";

export default defineComponent({
  name: "LogoutButton",
  components: { IonButton },
  setup() {
    const router = useRouter();
    const { logout } = useFirebaseAuth();
    const logoutauth = () => {
      logout().then(() => {
        router.push("/login");
      });
    };
    return {
      logoutauth,
    };
  },
});
</script>
