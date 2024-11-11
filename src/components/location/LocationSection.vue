<template>
  <section class=" py-16">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Location</h2>
        <p class="text-lg text-gray-500">Where You'll Be Living</p>
      </div>

      <!-- Map Container -->
      <div class="relative bg-white rounded-lg shadow-lg ">
        <!-- Google Map Background (iframe or image) -->
        <div class="w-full h-[500px] relative">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0924094305217!2d-122.41941628468128!3d37.774929279759524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e6c16c5%3A0x1e27e3b2d3ec7ed8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <!-- Black Overlay -->
          <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>

        <!-- Location Info Card -->
        <div class="absolute top-44 left-8 bg-white p-6 rounded-lg shadow-lg w-[300px]">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Greenfield Residence</h3>
          <p class="text-gray-600 mb-2">2519 Stanley Avenue</p>
          <p class="text-gray-600 mb-4">Huntington, NY 11743</p>
          <div class="text-sm text-gray-600">
            <p><strong>Latitude:</strong> 51.5144281</p>
            <p><strong>Longitude:</strong> -0.1281562</p>
          </div>
          <img src="../../assets/images/location.png" alt="Residence" class="mt-4 w-full rounded-md shadow-md" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional JavaScript needed for this static location section
</script>

<style scoped>
/* Optional: additional styling for enhanced appearance */
</style>
