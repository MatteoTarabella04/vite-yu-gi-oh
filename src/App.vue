<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <div class="container px-2 py-4">
      <select class="form-select" aria-label="default">
        <option selected>Filtra</option>
        <option value="1">Alien</option>
        <option value="2">???</option>
        <option value="3">???</option>
      </select>
    </div>
    <div class="container bg-light h-100">

    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  background-color: orange;

  .form-select {
    width: 200px;
  }
}
</style>