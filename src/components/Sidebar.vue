<template>
  <div
  >
    <!--v-list dense>
      <v-subheader>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Meteoreo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-subheader>
      <v-list-tile v-for="(station, index) in stations" :key="index">
        <v-list-tile-content>
          <v-list-tile-title>{{ station.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-subheader>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Configuración</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-subheader>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Opciones</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-navigation-drawer-->
  </div>
</template>

<script>
export default {
   name: 'Sidebar',
   data () {
      return {
         drawer: null,
         stations: [
         {
            name: 'Station 1'
         },
         {
            name: 'Station 2'
         }
         ]
      }
   }
}
</script>