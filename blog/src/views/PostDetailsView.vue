<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleClick">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getSinglePost from "../composables/getSinglePost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const { post, error, load } = getSinglePost(route.params.id);

    load();

    const handleClick = async () => {
      try {
        await projectFirestore.collection("posts").doc(props.id).delete();
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    };

    return { post, error, handleClick };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>
