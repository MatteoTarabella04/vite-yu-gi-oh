<script>
import axios from 'axios';
import { store } from '../store';
import SelectItem from './selectItem.vue'
import CardList from './cardList.vue';
export default {
   name: 'AppMain',

   components: {
      SelectItem,
      CardList,
   },

   data() {
      return {
         store,
      }
   },
   methods: {

      selectedFilter() {
         const url = this.store.API_URL + `?archetype=${this.store.filter}`;
         this.store.callApiCardsPath(url);
      },

   },
   mounted() {
      this.store.filterArchetypes(this.store.archURL);
   }

}
</script>
<template>
   <main>
      <selectItem @changeArch="selectedFilter()" :arch-array="this.store.archArray" />
      <cardList />
   </main>
</template>


<style lang="scss" scoped></style>