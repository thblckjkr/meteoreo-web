<template>
  <div id="app" class="flex flex-col h-screen">
    <main class="flex flex-1 overflow-hidden">
      <Sidebar class="flex flex-col"></Sidebar>
      <div id="container" class="text-gray-700 flex flex-1 flex-col">
        <router-view> </router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
#container {
  background-color: #e5e5e5;
}
</style>
