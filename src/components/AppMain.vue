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
         archURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
         archArray: [],
      }
   },
   methods: {
      filterArchetypes(url) {
         axios
            .get(url)
            .then(response => {
               this.archArray = response.data;
            })
            .catch(err => {
               console.log(err);
               console.error(err.message);
            })
      }
   },
   mounted() {
      this.filterArchetypes(this.archURL);
   }

}
</script>
<template>
   <main>
      <selectItem :arch-array="archArray" />
      <cardList />
   </main>
</template>


<style lang="scss" scoped></style>