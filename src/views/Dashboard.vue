<template>
   <div class="">
      <p class="text-2xl m-6 text-center"></p>
      <div class="flex flex-wrap">
         <div v-for="(station, index) in stations" :key="index">
            <StationCard :station="station"></StationCard>
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

import StationCard from '../components/Dashboard/StationCard.vue'
export default {
   components: {
      StationCard
   },
   data () {
      return {
         stations
      }
   }
}
</script>