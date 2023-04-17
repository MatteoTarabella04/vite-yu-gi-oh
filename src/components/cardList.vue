<script>
import { store } from '../store';
import foundBanner from './foundBanner.vue';
import cardItem from './cardItem.vue';
export default {
   name: 'cardList',

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
   <div class="container bg-light h-100 p-4">
      <foundBanner />
      <div class="row row-cols-5">
         <cardItem v-for="card in store.cards" :card="card" />
      </div>
   </div>
</template>


<style lang="scss" scoped></style>