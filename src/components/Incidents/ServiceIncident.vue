<template>
  <div class="card">
    <div class="card-header text-center">
      <p>
         <v-icon :service="icon" ></v-icon>
         {{ incident.path.split(".").shift() }}
      </p>
    </div>
    <div class="card-body">
      <p class="text-sm text-center text-gray-500">
         Encontrado: {{ incident.created_at | moment }} <br>
         Actualizado: {{ incident.updated_at | moment }} <br>
         Status: {{ incident.status }}
      </p>

      <div>
         <p class="text-secondary">Problema:</p>
         <p class="mb-4"> {{ incident.data.description }} </p>

         <p class="text-secondary"> Solucion: </p>
         <p class="mb-4"> {{ incident.data.solution }} </p>

         <p class="text-secondary"> Direccion de la solucion</p>
         <p class="font-mono mb-4">{{ incident.data.path }}</p>

         <p class="text-secondary"> Comando a ejecutar </p>
         <p class="font-mono mb-2">{{ incident.data.command }}</p>


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
    icon() {
      return this.incident.path.split(".").shift();
    },
  },
};
</script>
