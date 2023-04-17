<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import loadingItem from './components/loadingItem.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    loadingItem,
  },

  data() {
    return {
      store,
    }
  },

  mounted() {
    this.callApiCardsPath(store.API_URL)
  }

}
</script>

<template>
  <AppHeader />
  <AppMain v-if="!store.loading" />
  <loadingItem v-else />
</template>


<style lang="scss" scoped></style>