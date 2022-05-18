<template>
  <div class="flex flex-1 flex-col overflow-y-auto p-6">
    <!-- Filters -->
    <div class="flex">
      <!-- Filter the event by status (pending, auto_solved, solved) -->
      <div class="flex justify-center mb-3">
        <div class="w-full">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="status">
            Estado
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              v-model="filters.status"
            >
              <option value="">Todas</option>
              <option value="pending">Pendientes</option>
              <option value="auto_solved">Auto solucionados</option>
              <option value="solved">Solucionado</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Filter the event by type (driver, service_error, network )-->
      <div class="flex justify-center">
        <div class="w-full">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
            Tipo de falla
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="type"
              v-model="filters.type"
            >
              <option value="">Todas</option>
              <option value="driver_error">Driver</option>
              <option value="service_error">Servicio</option>
              <option value="network_error">Red</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Filter by station name -->
      <div class="flex justify-center">
        <div class="w-full">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="station">
            Estación
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="station"
              v-model="filters.station"
            >
              <option value="">Todas</option>
              <option v-for="station, id in stationsNames" :value="station" :key="id">
                {{ station }}
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of filters -->
    <div class="flex" v-if="loading">
      <div class="w-full h-full flex justify-center items-center">
        <div class="spinner"></div> <span class="text-gray-500">Cargando...</span>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full" v-for="event in filteredEvents" :key="event.id">
        <JournalIncident :incident="event" :actionable="false"></JournalIncident>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JournalIncident from "@/components/Incidents/JournalIncident.vue";

// Get's the events from the API, and sets the state
export default {
  data() {
    return {
      loading: true,
      events: [],
      filters: {
        status: "",
        type: "",
        station: "",
      }
    };
  },
  components: {
    JournalIncident,
  },
  beforeCreate() {
    this.$OneSignal.showSlidedownPrompt();
  },
  created() {
    this.loadEvents();
  },
  methods: {
    loadEvents: function() {
      this.loading = true;
      axios
      .get(process.env.VUE_APP_HOST + "/api/v1/incidents/")
      .then((response) => {
        this.events = response.data;
      })
      .catch((e) => {
        console.log(e);
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  computed: {
    stationsNames() {
      // Takes the stations from the events and returns an array of unique stations
      let stations = [];
      this.events.forEach((event) => {
        if (stations.indexOf(event.station.name) === -1) {
          stations.push(event.station.name);
        }
      });
      return stations;
    },
    filteredEvents() {
      return this.events.filter((event) => {
        // Additive filters
        let status = true;
        let type = true;
        let station = true;

        // Filter by status
        if (this.filters.status !== "") {
          status = event.status === this.filters.status;
        }

        // Filter by type
        if (this.filters.type !== "") {
          type = event.type === this.filters.type;
        }

        // Filter by station
        if (this.filters.station !== "") {
          station = event.station.name === this.filters.station;
        }

        return status && type && station;
      });
    }
  }
};
</script>
