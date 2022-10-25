import { ref } from "@vue/reactivity";
import axios from "axios";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await axios.get("http://localhost:3000/posts");
      if (res.status !== 200) {
        throw Error("No data available");
      }

      posts.value = res.data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
