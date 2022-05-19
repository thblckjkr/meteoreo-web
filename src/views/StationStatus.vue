<template>
  <div class="p-8">
    <div class="container-card mx-auto max-w-5xl mb-6 p-4 block relative">
      <div class="text-green text-xl mb-2">
        <h1>
          <span class="font-medium">Estación</span> <i>{{ station.name }}</i>
        </h1>
      </div>

      <div class="text-sm text-gray font-light mb-4">
        <div class="my-2 inline">
          <b>IP:</b> <span class="text-secondary">{{ station.ip_address }}</span>
        </div>
        
        <div class="m-2 inline">
          <b>Driver:</b> <span class="text-secondary">{{ station.driver }}</span>
        </div>
      </div>

      <div class="text-sm text-gray font-light mb-4 absolute top-4 right-4">
        Actualizado: {{ station.last_scan | moment }}
      </div>
      <div class="flex flex-row flex-wrap">

      <div
        class="m-1"
        style="min-width: 10%"
        v-for="service in station.services"
        :key="service"
      >
        <StationService
          :service="service"
          :incidents="station.incidents"
        ></StationService>
      </div>

      <div
        class="m-1"
        >
        <button class="outline-blue-button absolute bottom-3 right-3 left-auto" @click="refresh">
          <i class="fas fa-sync-alt"></i>
          Reescanear
        </button> 
      </div>
      </div>

    </div>

    <div v-if="station.incidents.length > 0">
      <p class="text-center text-primary text-xl mb-3">Incidentes</p>

      <div
        class="inline-flex m-1"
        style="min-width: 10%"
        v-for="incident in station.incidents"
        :key="incident"
      >
        <DetailedIncident :incident="incident" :station_id="uuid"></DetailedIncident>
      </div>
    </div>

    <!-- <div v-if="station.solved_incidents.length > 0">
      <p class="text-center text-primary text-xl mb-3">Incidentes</p>

      <div
        class="inline-flex m-1"
        style="min-width: 10%"
        v-for="incident in station.incidents"
        :key="incident"
      >
        <StationIncident :incident="incident"></StationIncident>
      </div>
    </div> -->

  </div>
</template>

<script>
/*
 * This is the page for the station status
 *
 * Get's the station UUID from the URL
 *
 * @param {string} uuid - The UUID of the station
 *
 * @returns {void}
 */
import axios from "axios";
import moment from "moment";
import StationService from "@/components/Dashboard/StationService.vue";
import DetailedIncident from "@/components/Incidents/DetailedIncident.vue";

export default {
  name: "StationStatus",
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  filters: {
      moment: function (date) {
         return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
   },
  components: {
    StationService,
    DetailedIncident,
  },
  data() {
    return {
      station: {},
      loading: true,
      error: false,
    };
  },
  mounted() {
    console.log(this.uuid);
    this.getStation(this.uuid);
  },
  methods: {
    /*
     * Get the station from the API
     *
     * @param {string} uuid - The UUID of the station
     *
     * @returns {void}
     */
    getStation(uuid) {
      this.loading = true;

      axios
        .get(process.env.VUE_APP_HOST + `/api/v1/stations/${uuid}`)
        .then((response) => {
          this.station = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
    // TODO: Add network and drivers as services
  },
};
</script>
