<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="toggleModal">{{ !isPlay ? 'Open' : 'Close' }}</button>
    <BlockComponent v-if="isPlay" />
  </div>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      isPlay: false
    }
  },
  components: { BlockComponent },
  methods: {
    toggleModal() {
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style scoped>
button {
  background: #0faf87;
  border: none;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 700;
}
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: all !important;
}
</style>
