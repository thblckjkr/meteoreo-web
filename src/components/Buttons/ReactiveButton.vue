<template>
  <button
    class="absolute bottom-3 right-3 left-auto"
    :class="className"
    @click="onPress"
  >
    <span v-if="!loading && !error">
      <slot></slot>
    </span>
    <span v-if="loading">Cargando</span>
    <span v-if="error">Reintentar</span>
  </button>
</template>

<script>
export default {
   props: {
      loading: {
         type: Boolean,
         required: true,
      },
      error: {
         type: Object,
      },
      onPress: {
         type: Function,
         required: true,
      },
   },
   computed: {
      className() {
         if (this.loading) {
            return "outline-gray-button";
         }

         if (this.error) {
            return "outline-yellow-button";
         }
         
         return "outline-blue-button";
      },
   },
}
</script>