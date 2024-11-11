<script setup lang="ts">
import ContactComponent from '@/components/contact/ContactComponent.vue';
import DiscoverComponent from '@/components/DiscoverComponent.vue';
import HeroSection from '@/components/hero/HeroSection.vue';
import ListingSection from '@/components/Listing/ListingSection.vue';
import LocationSection from '@/components/location/LocationSection.vue';
import PartnersSlider from '@/components/partners/PartnersSlider.vue';
import SlideComponent from '@/components/SlideComponent.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
</script>

<template>
  <div class="relative bg-[url('@/assets/bg/home.png')] bg-cover bg-center bg-fixed min-h-screen">
    <div class="absolute inset-0 bg-[#DCDDDE] opacity-70"></div>

<div class="relative">
      <HeroSection />
      <ListingSection />
      <SlideComponent />
      <TestimonialSection />
      <DiscoverComponent />
      <LocationSection />
      <PartnersSlider />
      <ContactComponent />

</div>
  </div>
</template>
