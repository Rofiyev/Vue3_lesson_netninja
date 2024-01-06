<template>
  <div>
    <h1>Article Detail View ID: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailView',
  props: ['id']
  // data() {
  //   return {
  //     // 1 - usul
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style scoped></style>
