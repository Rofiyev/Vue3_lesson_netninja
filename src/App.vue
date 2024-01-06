<template>
  <div>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <span> | </span>
      <RouterLink to="/about">About</RouterLink>
      <span> | </span>
      <RouterLink :to="{ name: 'articles' }">Articles</RouterLink>
    </nav>
    <br />
    <h4>Router history</h4>

    <div class="buttons">
      <button @click="redirect">Redirect</button>
      <button @click="back">Back</button>
      <button @click="forward">Forward</button>
    </div>
    <br />
    <br />
    <RouterView />
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  padding-top: 60px;
  text-align: center;
  min-height: 100vh;
}
nav a {
  font-weight: 700;
  color: #111;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
}
nav a.router-link-exact-active {
  background: crimson;
  color: white;
}
h4 {
  margin-bottom: 10px;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
