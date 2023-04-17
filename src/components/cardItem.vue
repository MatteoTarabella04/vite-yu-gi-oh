<script>
export default {

   name: 'cardItem',

   props: {
      card: Object,
   },


}
</script>
<template>
   <div class="col mb-3">
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
</template>


<style lang="scss" scoped></style>