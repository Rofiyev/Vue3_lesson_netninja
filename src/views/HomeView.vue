<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlay">Play</button>
    <BlockComponent v-if="isPlay" :delay="delay" @stopTimer="endGames" />
    <ResultComponent v-if="isShowResult" :score="score" />
  </div>
</template>

<script>
import BlockComponent from '@/components/BlockComponent.vue'
import ResultComponent from '@/components/ResultComponent.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      isPlay: false,
      delay: null,
      score: null,
      isShowResult: false
    }
  },
  components: { BlockComponent, ResultComponent },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlay = true
      this.isShowResult = false
    },
    endGames(reactionTime) {
      this.score = reactionTime
      this.isShowResult = true
      this.isPlay = false
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
