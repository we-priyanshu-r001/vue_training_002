<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="text-xl font-bold text-indigo-600">MyApp</a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:-my-px sm:flex sm:space-x-8">
            <nav-link to="/">Home</nav-link>
            <nav-link to="/contact">Contact</nav-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button @click="is_open = !is_open" type="button" 
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!is_open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="is_open" class="sm:hidden" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700 text-base font-medium">
          Home
        </a>
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
          About
        </a>
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
          Services
        </a>
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import NavLink from './NavLink.vue'

const is_open = ref(false)

</script>