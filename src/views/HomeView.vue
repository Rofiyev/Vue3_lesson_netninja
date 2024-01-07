<template>
  <div>
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    // const name = 'Dilshod'
    // const age = 18
    const name = ref('Dilshod')
    const age = ref(18)
    const p = ref(null)
    console.log(p, p.value)
    console.log('Hello world')

    const handleClick = () => {
      console.log(p, p.value)
      p.value.textContent = 'Hello World!'
    }

    return { name, age, handleClick, p }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style scoped></style>
