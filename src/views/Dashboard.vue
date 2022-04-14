<template>
   <div class="p-8 overflow-y-auto">
      <p class="text-2xl text-center"></p>
      
      <ErrorCard v-if="error" :error="error" :onReload="reload" ></ErrorCard>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <StationCard v-for="(station, index) in stations" :key="index" :station="station"></StationCard>
      </div>

      <router-link to="/register" class="fixed bottom-5 right-5">
         <button class="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            <span>Agregar</span>
         </button>
      </router-link>
      
   </div>
</template>

<script>
import StationCard from '../components/Dashboard/StationCard.vue'
import ErrorCard from '../components/Dashboard/ErrorCard.vue'
import { Requests } from '../api/requests.js';

// Instantiates the Requests class
const service = new Requests();

export default {
   components: {
      StationCard,
      ErrorCard
   },
   data() {
      return {
         stations: [],
         error: null,
         loading: true
      }
   },
   methods: {
      async fetchStations() {
         service.getStations().then(response => {
            this.stations = response;
            this.loading = false;
            console.log(this.stations);
         }).catch(error => {
            console.log("Unable to fetch stations", error);
            this.error = error.toString();
            this.stations = [];
            this.loading = false;
         });

      },
      async reload() {
         this.fetchStations();
      }
   },
   mounted() {
      this.fetchStations();
   }   
}
</script>