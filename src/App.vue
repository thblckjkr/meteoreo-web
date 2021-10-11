<template>
  <div id="app" class="flex">
    <Sidebar class="flex flex-row"></Sidebar>
    <div id="container" class="px-16 py-4 text-gray-700 h-screen w-screen">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
#container{
  background-color: #E5E5E5;
}
</style>