<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import Navbar from "../components/Navbar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    Navbar,
    ChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style></style>
