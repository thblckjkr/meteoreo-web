<template>
   <div class="">
      <p class="text-2xl text-center"></p>
      <div class="flex flex-wrap">
         <div class="info-card" v-for="(station, index) in stations" :key="index">
            <StationCard :station="station"></StationCard>
         </div>
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
import axios from 'axios';
import StationCard from '../components/Dashboard/StationCard.vue'

/**
Loads the data from axios to populate the stations array

The data comes from the URL /api/stations
The host server is stored in the .env file
*/

export default {
   components: {
      StationCard
   },
   data() {
      return {
         stations: [],
         loading: true
      }
   },
   mounted() {
      // Gets the host server from the .env file
      axios.get( process.env.VUE_APP_HOST + '/api/v1/stations/')
         .then(response => {
            this.stations = response.data.stations;
            this.loading = false;
         })
         .catch(error => {
            console.log(error);
         })
   }   
}
</script>