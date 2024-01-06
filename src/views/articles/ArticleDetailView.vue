<template>
  <div>
    <article v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.desc }}</p>
    </article>
    <div v-else>
      <h4>Loading...</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleDetailView',
  props: ['id'],
  data() {
    return {
      article: null
    }
  },
  mounted() {
    ;(async () => {
      const { data } = await axios.get(`http://localhost:3001/articles/${this.id}`)
      this.article = data
    })()
  }
}
</script>

<style scoped></style>
