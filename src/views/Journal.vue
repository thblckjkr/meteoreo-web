<template>
  <div class="flex flex-1 overflow-y-auto p-6">
    <p class="text-2xl text-center"></p>
    <div class="flex flex-wrap">
      <div class="w-full" v-for="event in events" :key="event.id">
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
      events: [],
    };
  },
  components: {
    JournalIncident,
  },
  beforeCreate() {
    this.$OneSignal.showSlidedownPrompt();
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
