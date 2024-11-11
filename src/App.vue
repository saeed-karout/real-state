<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/master/NavbarComponent.vue';
import FooterComponent from './components/master/FooterComponent.vue';

</script>

<template>

  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>
