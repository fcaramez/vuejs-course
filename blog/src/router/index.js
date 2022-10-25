import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetails from "../views/PostDetailsView.vue";
import Create from "../views/CreateView.vue";
import Tag from "../views/TagView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: PostDetails,
    props: true,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
