<template>
  <!-- div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" -->
  <div class="w-full h-full m-5 relative flex shadow-lg card-error">
    <div
      class="text-red-500 border-blue absolute top-3 right-3 left-auto"
    >
      <!-- <v-icon icon="cross" size=24></v-icon> -->
    </div>

    <div class="bg-white text-black w-full p-6 pb-8">
      <div class="text-green text-xl mb-2">
        <span class="font-medium">Error</span>
      </div>

      <div class="text-sm text-gray font-light mb-4">
        {{ error }}
      </div>

    </div>
    <button v-bind:to="reload" class="outline-blue-button absolute bottom-3 right-3 left-auto" >
      Recargar
    </button>
  </div>
</template>

<script>
// import VIcon from "../Icons/VIcon.vue";

export default {
  // props: ["error", "reload"],
  props: {
    error: {
      type: String,
      required: true
    },
    onReload: {
      type: Function,
      required: true
    }
  },
  components: {
    // VIcon
  },
  data() {
    return {};
  },
};
</script>

<style>
.card-error {
	border-left: 10px solid red;
}
</style>