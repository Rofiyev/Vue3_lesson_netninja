<template>
  <div>
    <p>Result time - {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 1000) this.rank = 'Fast speed'
    else if (this.score < 1500) this.rank = 'Middle speed'
    else this.rank = 'Slow speed'
  }
}
</script>

<style scoped>
div {
  margin-top: 10px;
}
.rank {
  color: #0faf87;
  font-size: 1.4rem;
}
</style>
