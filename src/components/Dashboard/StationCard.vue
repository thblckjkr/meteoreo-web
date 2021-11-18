<template>
  <!--div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" -->
  <div class="w-full h-full relative flex" v-bind:class="class_has_problems['border']">
    <div
      v-bind:class="class_has_problems['color']"
      class="border-blue absolute top-3 right-3 left-auto"
    >
      <v-icon :icon="class_has_problems['icon']" size=24></v-icon>
    </div>
    <div class="bg-white text-black w-full p-6 pb-8">
      <div class="text-green text-xl mb-2">
        <span class="font-medium">Estación</span> <i>{{ station.name }}</i>
      </div>

      <div class="text-sm text-gray font-light mb-4">
        {{ station.ip_address }}
      </div>

      <div
        class="inline-flex m-1"
        style="min-width: 40%"
        v-for="service in services"
        :key="service"
      >
        <StationService
          :service="service"
          :incidents="station.incidents"
        ></StationService>
      </div>
    </div>
    <router-link v-bind:to="url" class="outline-blue-button absolute bottom-3 right-3 left-auto" router-to="">
      Ver
    </router-link>
  </div>
</template>

<script>
import StationService from "./StationService.vue";
import VIcon from "../Icons/VIcon.vue";

export default {
  props: ["station"],
  data() {
    return {};
  },
  components: {
    StationService,
    VIcon,
  },
  computed: {
    url () {
      return `/station/${this.station.id}`;
    },
    services () {
      return ['network', 'driver'].concat(this.station.services);
    },
    class_has_problems() {
      
      return this.station.incidents.length > 0
        ? { color: "text-red-500", icon: "cross", border: "card-error"}
        : { color: "text-green", icon: "check", border: "" };
    },
  },
};
</script>

<style>
.card-error {
	border-left: 10px solid red;
}
</style>