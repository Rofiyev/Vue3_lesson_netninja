<template>
  <div>
    <!-- <HeaderComponent logo="RD7" /> -->
    <HeaderComponent :logo="headerLogo" />

    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  },
  data() {
    return {
      title: 'Home',
      headerLogo: 'RD7'
    }
  },
  methods: {
    handleClick() {
      if (!this.$refs.name.value) {
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      } else {
        this.$refs.name.classList.remove('active')
        alert(this.$refs.name.value)
        this.$refs.name.value = ''
      }
    }
  }
}
</script>

<style scoped>
input {
  padding: 8px 6px;
  border-radius: 4px;
  width: 50%;
  margin: 20px 10px 0;
  outline: none;
}
input.active {
  border: 1px solid crimson;
}

button {
  padding: 8px 16px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
