<template>
  <ReactiveButton 
    :loading="loading"
    :error="error"
    :onPress="rescan"
  >
    Reescanear
  </ReactiveButton>
</template>

<script>
import { Requests } from "../../api/requests.js";
import ReactiveButton from "./ReactiveButton.vue";

export default {
  props: {
    stationId: {
      type: String,
      required: true,
    },

    onComplete: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  components: {
    ReactiveButton,
  },
  methods: {
    rescan() {
      if(this.loading) return;

      this.loading = true;
      this.error = null;

      const service = new Requests();

      service
        .rescanStation(this.stationId)
        .then(() => {
          this.onComplete();
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
          this.onComplete();
        });
    },
  },
};
</script>
