<template>
  <div
    class="container-card incident-card mx-4 max-w-2xl mb-6 p-4 pb-10 block relative"
  >
    <div class="card">
      <div class="card-header text-center">
        <p>
          <v-icon icon="driver"></v-icon>
          Problema de servicio
        </p>
      </div>

      <div class="card-body">
        <p class="text-sm text-center text-gray-500">
          Encontrado: {{ incident.created_at | moment }} <br />
          Actualizado: {{ incident.updated_at | moment }}
        </p>

        <div>
          <div v-if="incident.data.description">
            <p class="text-secondary">Problema:</p>
            <p class="mb-4">{{ incident.data.description }}</p>
          </div>

          <div v-if="incident.data.solution">
            <p class="text-secondary">Solucion:</p>
            <p class="mb-4">{{ incident.data.solution }}</p>
          </div>

          <div v-if="incident.data.path">
            <p class="text-secondary">Dirección:</p>
            <p class="mb-4">{{ incident.data.path }}</p>
          </div>

          <div v-if="incident.data.command"> 
            <p class="text-secondary">Comando a ejecutar:</p>
            <p class="mb-4">{{ incident.data.command }}</p>
          </div>

          <div v-if="incident.data.stdout"></div>
            <!-- Simple tailwind two columns for stdout and stderr -->
            <div class="flex flex-wrap -mx-2">
              <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <p class="text-secondary">Salida:</p>
                <p class="mb-4">{{ incident.data.stdout }}</p>
              </div>
              <div class="w-full md:w-1/2 px-2">
                <p class="text-secondary">Error:</p>
                <p class="mb-4">{{ incident.data.stderr }}</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
// import VIcon from '../../components/VIcon.vue'
import VIcon from "../Icons/VIcon.vue";
import moment from "moment";

export default {
  props: {
    incident: {
      type: Object,
      required: true,
    },
  },
  components: {
    VIcon,
  },
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  computed: {
    incidents_list() {
      return this.incident;
    },
  },
};
</script>
