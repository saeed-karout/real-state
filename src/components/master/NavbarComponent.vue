<template>
  <nav class="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50">
    <div class="container mx-auto px-4 flex items-center justify-between ">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <img src="../../assets/logo.png" alt="Logo" class="w-48" />
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-gray-800 focus:outline-none z-50">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Links Section (Responsive) -->
      <div :class="{ 'translate-y-0': menuOpen, '-translate-y-full': !menuOpen }" class="fixed md:static inset-x-0 top-0 md:top-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out md:flex space-x-8 md:space-x-12 md:items-center w-full md:w-auto mt-4 md:mt-0 py-8 md:py-0 z-40 md:translate-y-0 flex flex-col md:flex-row md:border-0 border-t border-gray-200  md:shadow-none">

        <!-- Links with Right Border -->
        <div class="md:border-r-2 md:h-full border-[#DFDFE1] flex flex-col md:flex-row md:space-x-8 w-full">
          <a href="#" class="text-gray-800 hover:text-red-700 font-medium py-2 md:py-0 px-4 md:px-0"
            :class="{
                'border-b-2 border-red-700 opacity-100': active === 'home',
                'opacity-50': active !== 'home'
            }"
            @click="setActive('home')">
            Home
          </a>
          <a href="#" class="text-gray-800 hover:text-red-700 font-medium py-2 md:py-0 px-4 md:px-0"
            :class="{
                'border-b-2 border-red-700 opacity-100': active === 'about',
                'opacity-50': active !== 'about'
            }"
            @click="setActive('about')">
            About Us
          </a>
          <a href="#" class="text-gray-800 hover:text-red-700 font-medium py-2 md:py-0 px-4 md:px-0"
            :class="{
                'border-b-2 border-red-700 opacity-100': active === 'listing',
                'opacity-50': active !== 'listing'
            }"
            @click="setActive('listing')">
            Listing
          </a>
          <a href="#" class="text-gray-800 hover:text-red-700 font-medium py-2 md:py-0 px-4 md:px-0"
            :class="{
                'border-b-2 border-red-700 opacity-100': active === 'contact',
                'opacity-50': active !== 'contact'
            }"
            @click="setActive('contact')">
            Contact Us
          </a>
          <a href=""></a>
        </div>

        <!-- Contact Info Section with No Wrap -->
        <div class="text-red-600 font-medium opacity-70 text-sm md:text-base hover:opacity-100 whitespace-nowrap mt-4 md:mt-0 md:block">
          +1 668 54871 345
        </div>
      </div>
    </div>

    <!-- Mobile Contact Info Section (Only shown on mobile) -->
    <div v-if="menuOpen" class="block md:hidden text-red-600 font-medium text-center mt-2 whitespace-nowrap">
      +1 668 54871 345
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('home');
const menuOpen = ref(false);

function setActive(page) {
  active.value = page;
  menuOpen.value = false; // Close the menu when a link is clicked
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
/* Animation for menu opening and closing */
nav {
  transition: background-color 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .container {
    flex-direction: row;
  }
}
</style>
