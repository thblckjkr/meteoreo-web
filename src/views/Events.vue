<template>
  <div class="">
    <p class="text-2xl text-center"></p>
    <div class="flex flex-wrap">
      <!--div class="info-card" v-for="(event, index) in events" :key="index" -->
        <div
          class="inline-flex m-3"
          style="min-width: 10%"
          v-for="event in events"
          :key="event"
        >
          <StationIncident :incident="event" :actionable="false"></StationIncident>
        </div>
      </div>
    <!--/div-->
  </div>
</template>

<script>
import axios from "axios";
import StationIncident from "@/components/Incidents/StationIncident.vue";

// Get's the events from the API, and sets the state
export default {
  data() {
    return {
      events: [],
    };
  },
  components: {
    StationIncident,
  },
  created() {
    axios
      .get(process.env.VUE_APP_HOST + "/api/v1/incidents/")
      .then((response) => {
        this.events = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
