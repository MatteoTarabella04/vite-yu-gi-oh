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
      <label for="selecct" class="py-2"> <b>Filter Archetypes</b> </label>
      <select class="form-select" aria-label="default" v-model="this.store.filter" @change="$emit('changeArch')">
         <option value="" selected>-- Select Archetype --</option>
         <option v-for="archetype in store.archArray" :value="archetype.archetype_name">{{ archetype.archetype_name }}
         </option>

      </select>
   </div>
</template>


<style lang="scss" scoped></style>