<template>
  <div
    class="container-card incident-card mx-auto w-full mb-6 p-4 block relative"
  >
    <div class="card">
      <div class="card-header flex flex-row flex-wrap place-content-between">
        <div>
          <span class="text-secondary"> Estado</span>
          &nbsp;<span :class="status.color">{{ status.string }}</span>
        </div>

        <p
          class="cursor-pointer"
          @mouseover="format_moment = false"
          @mouseleave="format_moment = true"
        >
          Encontrado {{ incident.created_at | moment(format_moment) }}
        </p>
        <p
          class="cursor-pointer"
          @mouseover="format_moment = false"
          @mouseleave="format_moment = true"
        >
          {{ incident.status == "auto_solved" ? "Solucionado" : "Actualizado" }}
          {{ incident.updated_at | moment(format_moment) }}
        </p>
      </div>

      <div class="card-body flex flex-row flex-wrap place-content-between mt-2">
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
      </div>

      <div v-if="incident.data.command">
        <p class="text-secondary">Comando a ejecutar:</p>
        <p class="mb-4">{{ incident.data.command }}</p>
      </div>

      <div
        v-if="incident.data.stdout || incident.data.stderr"
        class="basis-100"
      >
        <div class="w-full">
          <p class="text-secondary">Salida:</p>
          <code class="mb-4 whitespace-pre">{{ incident.data.stdout }}</code>
          <br />
          <code class="mb-4 whitespace-pre text-red-800">{{
            incident.data.stderr
          }}</code>
        </div>
      </div>

      <div
        class="border-t mt-4 pt-4"
        v-if="incident.solutions && incident.solutions.length > 0"
      >
        <div class="" v-for="solution in incident.solutions" :key="solution.id">
          <div>Comentario por: {{ solution.solved_by }}</div>
          <div>
            {{ solution.solution }}
          </div>
          <div v-if="solution.comment">
            {{ solution.comment }}
          </div>
        </div>
      </div>
    </div>
    <ResolveButton :path="incident.data.path" :stationId="stationId" :onComplete="rescanCallback" />
  </div>
</template>

<script>
import moment from "moment";
import ResolveButton from "../Buttons/ResolveButton.vue";

export default {
  name: "StationIncident",
  props: {
    stationId: {
      type: String,
      required: true
    },
    incident: {
      type: Object,
      required: true,
    },
    rescanCallback: {
      type: Function,
      required: true,
    },
    actionable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      format_moment: true,
    };
  },
  components: {
    ResolveButton,
  },
  filters: {
    moment: function(date, format_moment) {
      return format_moment
        ? moment.utc(date).calendar()
        : moment.utc(date).format("LLL");
    },
  },
  computed: {
    status() {
      let status = {
        color: "",
        string: "",
      };
      switch (this.incident.status) {
        case "pending":
          status.string = "Pendiente";
          status.color = "text-yellow-500";
          break;
        case "auto_solved":
          status.string = "Auto solucionado";
          status.color = "text-green";
          break;
        default:
          status = this.incident.status;
          status.color = "text-gray-500";
          break;
      }
      return status;
    },
  },
  methods: {},
};
</script>

<style>
.incident-card {
  min-width: 24rem;
}
</style>
