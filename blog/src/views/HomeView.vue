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
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
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

    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque saepe perferendis accusantium numquam, at ullam sed recusandae dicta aut vitae quibusdam cum ratione tenetur amet autem ea iure atque rerum! Culpa fugiat minima provident at, dolorem voluptatem praesentium vel sapiente vero exercitationem molestias porro, quae itaque labore ullam modi laudantium odio quod sunt! Deserunt molestiae libero tempora dolores soluta doloribus veniam odio. Voluptates libero quaerat expedita accusantium corrupti inventore, asperiores iure adipisci fugit maxime dolore modi molestiae nam dolorem? Rerum quia quidem saepe, itaque iusto mollitia nemo iste fuga quisquam, laborum dignissimos sed, repellendus dolor ea non! Nam, dolores!",
        id: 1,
      },
      {
        title: "Top 5 CSS tips",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque saepe perferendis accusantium numquam, at ullam sed recusandae dicta aut vitae quibusdam cum ratione tenetur amet autem ea iure atque rerum! Culpa fugiat minima provident at, dolorem voluptatem praesentium vel sapiente vero exercitationem molestias porro, quae itaque labore ullam modi laudantium odio quod sunt! Deserunt molestiae libero tempora dolores soluta doloribus veniam odio. Voluptates libero quaerat expedita accusantium corrupti inventore, asperiores iure adipisci fugit maxime dolore modi molestiae nam dolorem? Rerum quia quidem saepe, itaque iusto mollitia nemo iste fuga quisquam, laborum dignissimos sed, repellendus dolor ea non! Nam, dolores!",
        id: 2,
      },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>
