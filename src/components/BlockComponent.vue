<template>
  <div class="block" v-if="isShowBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      isShowBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      this.$emit('stopTimer', this.reactionTime)
      clearInterval(this.timer)
    }
  },
  mounted() {
    console.log('Block component mounted...')
    setTimeout(() => {
      this.isShowBlock = true
      this.startTimer()
    }, this.delay)
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
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
