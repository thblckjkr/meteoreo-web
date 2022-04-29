<template>
   <button
      class="outline-blue-button absolute bottom-3 right-3 left-auto"
      @click="fixStation"
      :disabled="loading"
   >Resolver</button>
</template>

<script>
export default {
   props: {
      path: {
         required: true,
         type: String
      } ,
      station_id: {
         required: true,
         type: String
      }
      },
   data() {
      return {
         loading: false,
      }
   },
   methods: {
      fixStation: function() {
         console.log(this.path, this.station_id)
         
      }
   },
}
</script>