<script>
import { store } from '../store';
export default {
   name: 'appMain',

   data() {
      return {
         store,
      }
   }

}
</script>
<template>
   <main>
      <div class="container px-2 py-4">
         <select class="form-select" aria-label="default">
            <option selected>Filtra</option>
            <option value="1">Alien</option>
            <option value="2">???</option>
            <option value="3">???</option>
         </select>
      </div>
      <div class="container bg-light h-100 p-4">
         <div class="found_banner d-flex align-items-center w-100 bg-dark text-light p-3">
            <h6>Found ?? cards</h6>
         </div>
         <div class="row row-cols-5">
            <div class="col mb-3" v-for="card in store.cards">
               <div class="card rounded-0">
                  <img :src="card.card_images[0].image_url" :alt="card.name" height="300">
                  <div class="info p-2 text-light text-center">
                     <h5 class="m-0">{{ card.name }}</h5>
                     <div class="archetype">
                        <p class="m-0">{{ card.archetype }}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>


<style lang="scss" scoped>
.card {
   background-color: orange;
   border: none;
   min-height: 100%;
}
</style>