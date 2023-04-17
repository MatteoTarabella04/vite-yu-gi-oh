<script>
import { store } from '../store';
import SelectItem from './selectItem.vue';
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
   }

}
</script>
<template>
   <main>
      <selectItem />
      <cardList />
   </main>
</template>


<style lang="scss" scoped></style>