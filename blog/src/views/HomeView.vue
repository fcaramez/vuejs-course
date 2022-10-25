<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <h2>Refs</h2>
    <p>{{ xico.name }} - {{ xico.age }}</p>
    <button @click="updateXico">Update Xico</button>
    <h2>Reactive</h2>
    <p>{{ andre.name }} - {{ andre.age }}</p>
    <button @click="updateAndre">Update Andre</button> -->
    <!-- <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="stopWatch">Stop Watching</button> -->
    <!--  <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button> -->
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, watch, watchEffect } from "@vue/runtime-core";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "HomeView",
  components: { PostList, Spinner, TagCloud },
  setup() {
    //  'This' Does not work in the setup function
    /* this.$refs.name */
    /* this.name */
    /* const xico = ref({ name: "Xico", age: 20 });
    // Primitive types don't work for reactive values
    const andre = reactive({ name: "Andre", age: 28 });

    const updateXico = () => {
      xico.value.age = 21;
    };

    const updateAndre = () => {
      andre.age = 29;
    };

    return { xico, updateXico, andre, updateAndre }; */
    /* const name = computed(() => {
      return "Xico";
    }); */
    /* const search = ref("");
    const names = ref(["xico", "andre", "karina", "diogo"]);

    // onChange

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    // useEffect

    const stopWatching = watchEffect(() => {
      console.log("watch effect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames, stopWatch, stopWatching }; */

    /* const showPosts = ref(true); */

    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
