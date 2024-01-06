<template>
  <div>
    <h1>Articles</h1>
    <br />
    <div>
      <div v-if="articles.length">
        <article v-for="article in articles" :key="article.id" class="article">
          <h2
            @click="this.$router.push({ name: 'article-detail', params: { id: `${article.id}` } })"
          >
            {{ article.title }}
          </h2>
        </article>
      </div>
      <div v-else>
        <h4>Loading Articles ...</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleView',
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    ;(async () => {
      const { data } = await axios.get('http://localhost:3001/articles')
      this.articles = data
    })()
  }
}
</script>

<style scoped>
.article h2 {
  cursor: pointer;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: #444;
}
.article h2:hover {
  background: #ddd;
}
</style>
