<template>
  <nav>
    <h4>{{ logo }}</h4>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['logo']
}
</script>

<style>
nav {
  height: 10vh;
  widows: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
nav ul {
  display: flex;
  align-content: center;
  list-style-type: none;
  gap: 20px;
}
nav ul li {
  cursor: pointer;
}
</style>
