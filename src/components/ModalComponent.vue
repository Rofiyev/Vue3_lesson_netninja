<template>
  <div>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
        <h3>{{ modalTitle }}</h3>
        <hr />
        <p>{{ modalDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modalDesc', 'modalTitle'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
hr {
  margin: 10px 0;
}
</style>
