<template>
<nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
   <div class="mb-2 sm:mb-0">
      <Logo></Logo>
   </div>
  <div>
   <router-link to="/" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" >Home</router-link>
   <router-link to="/about" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</router-link>
  </div>
</nav>
</template>

<script>
import Logo from './Navbar/Logo.vue'
export default {
   name: 'Navbar',
   components: {
      Logo
   },
   data() {
      return {
         isActive: false,
         isLoggedIn: false
      }
   },
}
</script>