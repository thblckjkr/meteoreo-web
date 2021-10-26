<!--
Template to register a new station on the database.

Makes a GET to the /api/v1/stations/get_drivers to get the current available drivers to register a new station.
This, gets a list of fields that are required to send as a post to the register station endpoint.

Makes a POST to the /api/v1/stations route, with the data from the form.
-->

<template>
   <div>

   </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
      return {
         drivers: [],
         form: {
            name: '',
            driver: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            password: '',
            password_confirmation: '',
         },
         errors: [],
      }
   },
   mounted() {
      this.getDrivers();
   },
   methods: {
      getDrivers() {
         axios.get(process.env.VUE_APP_HOST + '/api/v1/drivers/')
            .then(response => {
               this.drivers = response.data;
            })
            .catch(error => {
               console.log(error);
            });
      },
      register() {
         axios.post(process.env.VUE_APP_HOST + '/api/v1/stations', this.form)
            .then(() => {

               this.$router.push('/login');
            })
            .catch(error => {
               this.errors = error.response.data.errors;
            });
      },
   }
}
</script>