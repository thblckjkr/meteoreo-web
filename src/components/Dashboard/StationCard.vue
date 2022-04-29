<template>
  <!-- div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" -->
  <div
    class="container-card relative mb-4 mr-4 pb-4 shadow-lg"
    v-bind:class="class_has_problems['border']"
  >
    <div
      v-bind:class="class_has_problems['color']"
      class="border-blue absolute top-3 right-3 left-auto"
    >
      <v-icon :icon="class_has_problems['icon']" size="24"></v-icon>
    </div>
    <div class="bg-white text-black w-full p-6 pb-8">
      <div class="text-green text-xl mb-2">
        <span class="font-medium">Estación</span> <i>{{ station.name }}</i>
      </div>

      <div class="text-sm text-gray font-light mb-4">
        {{ station.ip_address }}
        {{ timeago }}
      </div>

      <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          <StationService
            :service="service"
            :incidents="station.incidents"
            v-for="service in services" :key="service"
          ></StationService>
      </div>
    </div>

    <router-link
      v-bind:to="url"
      class="outline-blue-button bg-white absolute bottom-3 right-3 left-auto"
      router-to=""
    >
      Ver
    </router-link>
  </div>
</template>

<script>
import StationService from "./StationService.vue";
import VIcon from "../Icons/VIcon.vue";
import moment from "moment";

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
    url() {
      return `/station/${this.station.id}`;
    },
    services() {
      return ["network", "driver"].concat(this.station.services);
    },
    timeago() {
      // Processess the incidents list and get's the oldest one
      let incidents = this.station.incidents;
      let oldest = this.station.incidents.reduce((oldest, incident) => {
        if (moment(oldest.created_at).isAfter(incident.created_at)) {
          return incident;
        }
        return oldest;
      }, incidents[0]);

      let time = oldest ? oldest.created_at : this.station.last_scan;
      return moment.utc(time).fromNow();
    },
    class_has_problems() {
      return this.station.incidents.length > 0
        ? { color: "text-red-500", icon: "cross", border: "card-error" }
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
