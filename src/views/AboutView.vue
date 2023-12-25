<template>
  <div>
    <HeaderComponent logo="RD11" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'AboutView',
  components: {
    HeaderComponent
  },
  data() {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped></style>
