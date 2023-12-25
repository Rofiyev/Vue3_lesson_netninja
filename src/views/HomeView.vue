<template>
  <div>
    <HeaderComponent :logo="headerLogo" />
    <h1>{{ title }}</h1>
    <button @click="toggleModalHandle">Toggle Modal</button>
    <div v-if="showModal">
      <ModalComponent @close="toggleModalHandle">
        <template v-slot:title>
          <h1>{{ modalTitle }}</h1>
        </template>
        <template v-slot:description>
          <p>{{ modalDesc }}</p>
        </template>
      </ModalComponent>
    </div>

    <teleport to=".app_2">
      <h2>Teleport</h2>
    </teleport>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
  name: 'HomeView',
  components: { ModalComponent, HeaderComponent },
  data() {
    return {
      title: 'Home',
      showModal: false,
      headerLogo: 'RD7',
      modalTitle: 'Modal Title',
      modalDesc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
    }
  },
  methods: {
    toggleModalHandle() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
