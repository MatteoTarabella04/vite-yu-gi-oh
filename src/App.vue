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
    if (this.store.filter === '-- Select Archetype --') {
      this.store.callApiCardsPath(store.API_URL + `?num=30&offset=0`)
    }
  }

}
</script>

<template>
  <AppHeader />
  <AppMain v-if="!store.loading" />
  <loadingItem v-else />
</template>


<style lang="scss" scoped></style>