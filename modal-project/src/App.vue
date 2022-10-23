<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>fcaramez giveaway!</h1>
      <p>Grab your fcaramez clothes for half price!</p>
      <template v-slot:links>
        <a href="#">Sign Up now</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <h1>Second Modal Exercise</h1>
      <p>Second content</p>
      <template v-slot:links>
        <a href="https://www.github.com/fcaramez" target="_blank">My Github</a>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal2">Open Modal2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue app",
      header: "Sign up for the Giveaway!",
      text: "Grab your clothes for half price!",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
