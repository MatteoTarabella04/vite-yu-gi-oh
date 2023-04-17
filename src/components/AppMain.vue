<script>
import { store } from '../store';
import selectItem from './SelectItem.vue';
import cardList from './CardList.vue';
export default {
   name: 'appMain',

   components: {
      selectItem,
      cardList,
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