<template>
  <div>
    <h1>Articles</h1>
    <br />
    <article v-for="article in articles" :key="article.id" class="article">
      <h2 @click="this.$router.push({ name: 'article-detail', params: { id: `${article.id}` } })">
        {{ article.title }}
      </h2>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Article 1',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
        },
        {
          id: 2,
          title: 'Article 2',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
        },
        {
          id: 3,
          title: 'Article 3',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
        }
      ]
    }
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
