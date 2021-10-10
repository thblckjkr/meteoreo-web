<template>
   <div class="dashboard">
      <div class="container">
         <div class="">
            <Sidebar></Sidebar>
         </div>
         <div class="">
            <h1>Estado de estaciones meteorológicas</h1>
            <div class="flex flex-wrap">
               <div v-for="(station, index) in stations" :key="index">
                  <StationCard :station="station"></StationCard>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

var stations = [
   {
      name: 'Estación 1',
      ip: '148.210.4.31',
      services: [
         { 'Network': 'Error' }
      ]
   }, 
   {
      name: 'Estación 1',
      ip: '148.210.4.31',
      services: [
         { 'Network': 'Error' }
      ]
   }
];

import Sidebar from './Sidebar.vue'
import StationCard from './Dashboard/StationCard.vue'
export default {
   components: {
      Sidebar,
      StationCard
   },
   data () {
      return {
         stations
      }
   }
}
</script>