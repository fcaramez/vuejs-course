import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection, data) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);

      error.value = null;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addDoc };
};

export default useCollection;
