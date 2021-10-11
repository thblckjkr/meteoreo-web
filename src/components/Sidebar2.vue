<template>
<div>
  <div
    class="absolute flex top-0 h-screen z-20"
    :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
  >
    <!--Drawer -->
    <button
      @click.prevent="toggle()"
      class="w-12 h-48 p-1 -my-1  text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
    >
      <span class="block transform origin-center font-bold" >
        Toggle
      </span>
    </button>

    <!-- Sidebar Content -->
    <div
      ref="content"
      class="transition-all duration-700 bg-yellow-200 overflow-hidden flex items-center justify-center"
      :class="[open ? 'max-w-lg' : 'max-w-0']"
    >
      <div class="w-56 text-center font-bold text-xl">Sidebar</div>
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
// import Logo from './Navbar/Logo.vue'

export default {
   name: 'Sidebar',
   data() {
    return {
      open: true,
      dimmer: true,
      right: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
   components: {
      // Logo
   },
}
</script>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>