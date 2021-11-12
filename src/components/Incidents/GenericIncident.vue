<template>
  <div class="card">
    <div class="card-header text-center">
      <p>
         <v-icon icon="network" ></v-icon>
         Problema de conexion
      </p>
    </div>

    <div class="card-body">
      <p class="text-sm text-center text-gray-500">
         Encontrado: {{ incident.created_at | moment }} <br>
         Actualizado: {{ incident.updated_at | moment }}
      </p>

      <div>
         <p class="text-secondary">Problema:</p>
         <p class="mb-4"> Problema de conexion a la estacion </p>

         <p class="text-secondary"> Solucion: </p>
         <p class="mb-4"> Revise la red y conexion de la estacion meteorologica </p>

      </div>
    </div>
  </div>
</template>

<script>
// import VIcon from '../../components/VIcon.vue'
import VIcon from "../Icons/VIcon.vue";
import moment from 'moment'

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
      moment: function (date) {
         return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
   },
  computed: {
    incidents_list() {
      return this.incident;
    },
  },
};
</script>
