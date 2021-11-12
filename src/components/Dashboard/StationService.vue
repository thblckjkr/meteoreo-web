<template>
  <div>
    <v-icon :service="service" class="text-gray-700 mx-2"></v-icon>
    <span class="flex-1">{{ service }}:</span>&nbsp;
    <span class="flex-1" :class="status['text-color']">{{
      status["text"]
    }}</span>
  </div>
</template>

<script>
import VIcon from "../Icons/VIcon.vue";

export default {
  name: "StationService",
  props: ["service", "incidents"],
  components: {
    VIcon,
  },
  data() {
    return {};
  },
  computed: {
    status() {
      for (var incident in this.incidents) {
        if (this.incidents[incident].path.split(".").shift() == this.service) {
          return {
            text: "Error",
            "text-color": "text-red-500",
            // "icon" : this.icons[this.service]
          };
        }
      }

      return {
        text: "OK",
        "text-color": "text-green",
        // "icon" : this.icons[this.service]
      };
    },
  },
};
</script>
