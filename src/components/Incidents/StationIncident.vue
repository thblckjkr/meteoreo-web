<template>
   <div class="container-card incident-card mx-auto max-w-2xl mb-6 p-4 pb-10 block relative">
      <service-incident v-if="incident.type == 'service_error'" :incident="incident" />
      <generic-incident v-if="incident.type != 'service_error'" :incident="incident" />
      <ResolveButton :incident="incident"> </ResolveButton>
   </div>

</template>

<script>
import ServiceIncident from '@/components/Incidents/ServiceIncident.vue'
import GenericIncident from '@/components/Incidents/GenericIncident.vue'
import ResolveButton from '@/components/ResolveButton.vue'

export default {
      name: 'StationIncident',
      props: {
         incident: {
            type: Object,
            required: true
         }
      },
      components: {
         ServiceIncident,
         GenericIncident,
         ResolveButton
      },
      computed: {
         incidents_list() {
            return this.incident;
         }
      },
}
</script>

<style>
.incident-card {
   min-width: 24rem;
}
</style>