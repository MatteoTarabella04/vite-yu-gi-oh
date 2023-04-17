<script>
import { store } from '../store';
export default {
   name: 'foundBanner',

   data() {
      return {
         store,
      }
   }
}
</script>
<template>
   <div class="found_banner d-flex align-items-center w-100 bg-dark text-light p-3">
      <h6>Found {{ store.cards.length }} cards</h6>
   </div>
</template>


<style lang="scss" scoped></style>