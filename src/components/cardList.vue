<script>
import { store } from '../store';
import foundBanner from './foundBanner.vue';
import cardItem from './cardItem.vue';
export default {
   name: 'CardList',

   components: {
      foundBanner,
      cardItem,
   },

   props: {
      cards: Array,
   },

   data() {
      return {
         store,
      }
   }
}
</script>
<template>
   <div class="container bg-light p-2">
      <foundBanner />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5">
         <cardItem v-for="card in store.cards" :card="card" />
      </div>
   </div>
</template>


<style lang="scss" scoped></style>