<template>
  <!-- Sidebar -->
  <nav class="bg-white justify-between h-screen top-0">
    <div class="mt-10 mb-10 mx-auto">
      <router-link to="/">
        <img
          src="../assets/logo.svg"
          class="w-20 h-15 mb-3 mx-auto"
        />
      </router-link>
      <div class="p-8">
          <ul v-for="(link, index) in links" :key="index">
            <li class="mb-3 text-left">
              <router-link :to="link.address" class="text-gray-500 hover:text-blue">
                <span class="inline-block">
                  <svg
                    class="block fill-current h-5 w-5 mr-4 mx-auto hover:text-green-500 my-auto"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      :d="link.icon"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span class="hidden sm:inline-block">
                {{link.name}}
                </span>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
    <Logout />
  </nav>
</template>

<script>
// import Logo from './Navbar/Logo.vue'
import Logout from './Sidebar/Logout.vue';

export default {
   name: 'Sidebar',
   components: {
     Logout
   },
   data() {
    return {
     links: [
       {
         name: "Estaciones",
         address: "/",
         icon: "M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z"
       },
       {
         name: "Bitácora",
         address: "/events",
         icon: "M1.99998 0.333328C1.08331 0.333328 0.333313 1.08333 0.333313 1.99999C0.333313 2.91666 1.08331 3.66666 1.99998 3.66666C2.91665 3.66666 3.66665 2.91666 3.66665 1.99999C3.66665 1.08333 2.91665 0.333328 1.99998 0.333328ZM12 0.333328C11.0833 0.333328 10.3333 1.08333 10.3333 1.99999C10.3333 2.91666 11.0833 3.66666 12 3.66666C12.9166 3.66666 13.6666 2.91666 13.6666 1.99999C13.6666 1.08333 12.9166 0.333328 12 0.333328ZM6.99998 0.333328C6.08331 0.333328 5.33331 1.08333 5.33331 1.99999C5.33331 2.91666 6.08331 3.66666 6.99998 3.66666C7.91665 3.66666 8.66665 2.91666 8.66665 1.99999C8.66665 1.08333 7.91665 0.333328 6.99998 0.333328Z"
       },
       {
         name: "Acerca de",
         address: "/about",
         icon: "M1.99998 0.333328C1.08331 0.333328 0.333313 1.08333 0.333313 1.99999C0.333313 2.91666 1.08331 3.66666 1.99998 3.66666C2.91665 3.66666 3.66665 2.91666 3.66665 1.99999C3.66665 1.08333 2.91665 0.333328 1.99998 0.333328ZM12 0.333328C11.0833 0.333328 10.3333 1.08333 10.3333 1.99999C10.3333 2.91666 11.0833 3.66666 12 3.66666C12.9166 3.66666 13.6666 2.91666 13.6666 1.99999C13.6666 1.08333 12.9166 0.333328 12 0.333328ZM6.99998 0.333328C6.08331 0.333328 5.33331 1.08333 5.33331 1.99999C5.33331 2.91666 6.08331 3.66666 6.99998 3.66666C7.91665 3.66666 8.66665 2.91666 8.66665 1.99999C8.66665 1.08333 7.91665 0.333328 6.99998 0.333328Z"
       }
     ]
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
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