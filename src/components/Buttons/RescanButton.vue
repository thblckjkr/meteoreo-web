<template>
  <button
    class="outline-blue-button absolute bottom-3 right-3 left-auto"
    @click="rescan"
  >
    <span v-if="!loading && !error">Rescanear</span>
    <span v-if="loading" class="text-gray">
      Cargando
    </span>
    <span v-if="error" class="text-red">
      Reintentar
    </span>
  </button>
</template>

<script>
import { Requests } from "../../api/requests.js";

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
