<script>
import { store } from '../store.js';
export default {
   name: 'SelecItem',

   data() {
      return {
         store,
      }
   },
}
</script>
<template>
   <div class="container px-2 py-4">
      <select class="form-select" aria-label="default" v-model="this.store.filter" @change="$emit('changeArch')">
         <option value="" selected>Filter</option>
         <option v-for="archetype in store.archArray" :value="archetype.archetype_name">{{ archetype.archetype_name }}
         </option>

      </select>
   </div>
</template>


<style lang="scss" scoped></style>