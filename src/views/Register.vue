<!--
Template to register a new station on the database.

Makes a GET to the /api/v1/stations/get_drivers to get the current available drivers to register a new station.
This, gets a list of fields that are required to send as a post to the register station endpoint.

Makes a POST to the /api/v1/stations route, with the data from the form.

The form is made with Tailwind
-->

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-center">
      <div class="w-full max-w-sm">
        <div
          class="flex flex-col break-words bg-white border-2 rounded shadow-md py-4"
        >
          <div class="bg-white text-primary text-xl pb-4 text-center mb-0">
            Registrar una nueva estacion
          </div>
          <form class="w-full px-6" @submit.prevent="register">
            <div class="flex flex-wrap mb-6">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                v-model="form.name"
                required
              />
            </div>
            <div class="flex flex-wrap mb-6">
              <label
                for="address"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                IP
              </label>
              <input
                id="ip"
                name="ip"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="IP"
                v-model="form.ip"
                required
              />
            </div>
            <!-- Port -->
            <div class="flex flex-wrap mb-6">
              <label
                for="port"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Puerto
              </label>
              <input
                id="port"
                name="port"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Port"
                v-model="form.port"
                required
              />
            </div>
            <div class="flex flex-wrap mb-6">
              <label
                for="driver"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Driver
              </label>
              <select
                id="driver"
                name="driver"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.driver"
              >
                <option
                  v-for="driver in drivers"
                  :key="driver"
                  :value="driver"
                >
                  {{ driver }}
                </option>
              </select>
            </div>
            <!-- Username -->
            <div class="flex flex-wrap mb-6">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
                v-model="form.username"
                required
              />
            </div>
            <div class="flex flex-wrap mb-6">
              <label
                for="password"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                v-model="form.password"
                required
              />
            </div>
            <!-- Submit button -->
            <!-- TODO: Add status to the button -->
            <div class="flex items-center justify-between">
              <button
                class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      drivers: [],
      form: {
        name: "",
        ip: "",
        port: "",
        driver: "",
        username: "",
        password: "",
      },
      errors: [],
    };
  },
  mounted() {
    this.getDrivers();
  },
  methods: {
    getDrivers() {
      axios
        .get(process.env.VUE_APP_HOST + "/api/v1/drivers/")
        .then((response) => {
          this.drivers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      this.loading = true;
      axios
        .put(process.env.VUE_APP_HOST + "/api/v1/stations/", this.form)
        .then(() => {
          this.$router.push("/login");
          this.loading = false;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.loading = false;
        })
    },
  },
};
</script>
