<script>
import { store } from '../store.js';
export default {
   name: 'SelecItem',

   data() {
      return {
         store,
      }
   },

   props: {
      archArray: Array,
   }
}
</script>
<template>
   <div class="container px-2 py-4">
      <select class="form-select" aria-label="default">
         <option selected>Filter</option>
         <option v-for="arch in archArray" :value="arch.archetype_name">{{ arch.archetype_name }}</option>

      </select>
   </div>
</template>


<style lang="scss" scoped></style>