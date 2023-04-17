<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    }
  },

  mounted() {
    store.callApiCardsPath(store.API_URL)
  }

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss" scoped></style>