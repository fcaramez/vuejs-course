<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "HomeView",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  async mounted() {
    const data = await (await axios.get("http://localhost:3000/projects")).data;

    this.projects = data;
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((el) => el.id !== id);
    },
    handleComplete(id) {
      let q = this.projects.find((el) => el.id === id);
      q.complete = !q.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((el) => el.complete);
      }

      if (this.current === "ongoing") {
        return this.projects.filter((el) => !el.complete);
      }

      return this.projects;
    },
  },
};
</script>
