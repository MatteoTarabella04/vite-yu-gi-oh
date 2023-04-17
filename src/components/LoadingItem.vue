<script>
import { store } from '../store';
export default {
   name: "loadingItem",
   data() {
      return {
         store,
      }
   }
}
</script>
<template>
   <div class="load d-flex flex-column justify-content-center align-items-center">
      <img src="../assets/img/yu-gi-oh-logo.png" alt="logo" height="400">
      <h3>
         LOADING...
      </h3>
   </div>
</template>


<style lang="scss" scoped>
.load {
   height: calc(100vh - 100px);

   img {

      animation: pulse-animation 0.7s infinite linear alternate;
   }
}

@keyframes pulse-animation {
   0% {
      transform: scale(1);
   }

   100% {
      transform: scale(1.3);
   }
}
</style>