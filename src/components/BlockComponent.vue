<template>
  <div>
    <h5>Modal open</h5>
    <div class="block" v-if="isShowBlock">
      <span>Modal content</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBlock: false
    }
  },
  mounted() {
    console.log('Block component mounted...')
    setTimeout(() => {
      this.isShowBlock = true
    }, 1000)
  },
  updated() {
    console.log('Block component updated...')
  },
  unmounted() {
    console.log('Block component unmounted...')
  }
}
</script>

<style scoped>
h5 {
  margin: 20px 0;
}
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 0 auto;
}
</style>
