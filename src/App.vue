<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import LoadingItem from './components/loadingItem.vue'
export default {
  components: {
    AppHeader,
    AppMain,
    LoadingItem,
  },

  data() {
    return {
      store,
    }
  },

  mounted() {
    this.store.callApiCardsPath(this.store.API_URL)
  }

}
</script>

<template>
  <AppHeader />
  <AppMain v-if="!store.loading" />
  <loadingItem v-else />
</template>


<style lang="scss" scoped></style>