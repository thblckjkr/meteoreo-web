<template>
    <!--div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" -->
    <div class="bg-white overflow-hidden shadow-md rounded-lg h-40 w-40 m-5 md:w-80 cursor-pointer">
        <a href="#" class="w-full block h-full">
            <div class="bg-white text-black w-full p-4">
                <p class="text-green text-2xl font-medium">
                  {{ station.name }}
                </p>
                <p class="text-sm text-gray font-medium mb-2">
                    {{station.ip}}
                </p>
                <div class="flex flex-wrap justify-starts" v-for="(service, index) in station.services" :key="index">
                  <StationService :service="service" :key="index"></StationService>
               </div>
            </div>
        </a>
    </div>
</template>

<script>
import StationService from './StationService.vue'

export default {
   props: ['station'],
   data() {
      return {
      }
   },
   components: {
      StationService
   }
}
</script>