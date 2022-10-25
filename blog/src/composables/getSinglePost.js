import axios from "axios";
import { ref } from "@vue/reactivity";

const getSinglePost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await axios.get("http://localhost:3000/posts/" + id);
      if (res.status !== 200) {
        throw Error("No data available");
      }

      post.value = res.data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getSinglePost;
