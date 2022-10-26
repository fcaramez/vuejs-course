import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import ChatRoom from "../views/ChatRoomView.vue";
import { projectAuth } from "@/firebase/config";

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
