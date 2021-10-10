<template>
  <div id="app">    
    <Navbar></Navbar>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Navbar
  }
}
</script>

<style>

</style>
