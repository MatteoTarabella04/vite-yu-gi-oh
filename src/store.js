import { reactive } from 'vue'
import axios from 'axios';
export const store = reactive({
   API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
   archURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
   loading: true,
   cards: [],
   archArray: [],
   filter: '-- Select Archetype --',


   callApiCardsPath(url) {
      axios
         .get(url)
         .then(response => {
            console.log(response);
            this.cards = response.data.data;
            console.log(this.cards);
            this.loading = false;
         })
         .catch(err => {
            console.log(err);
            console.error(err.message);
         })
   },

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
   },
});
