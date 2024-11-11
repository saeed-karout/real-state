<template>
  <section class=" py-12">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-14">What You'll Get</h2>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Slider Wrapper -->
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Slide Item -->
          <div v-for="(slide, index) in slides" :key="index" class="w-full flex-none md:w-1/3 p-4">
            <div class="relative bg-cover bg-center h-[400px] rounded-lg shadow-lg overflow-hidden" :style="{ backgroundImage: `url(${slide.image})` }">
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <h3 class="text-white text-xl font-semibold">{{ slide.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Controls Below the Slider -->
        <div class="flex items-center justify-center mt-16 space-x-4">
          <button @click="prevSlide" class=" hover:bg-opacity-80 transition">
           <img src="../assets/icons/left.png" alt="">
          </button>
          <button @click="nextSlide" class=" hover:bg-opacity-80 transition">
            <img src="../assets/icons/right.png" alt="">

          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Slides data
const slides = [
  {
    title: "Beautiful Interiors",
    image: "/assets/images/interior1.jpg",
  },
  {
    title: "Parking and Shopping",
    image: "/assets/images/parking.jpg",
  },
  {
    title: "Wellness and Relax Places",
    image: "/assets/images/wellness.jpg",
  },
];

const currentIndex = ref(0);
const slideCount = slides.length;

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slideCount;
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slideCount) % slideCount;
}
</script>

<style scoped>
.bg-darkBlue {
  background-color: #1B1E34; /* Replace with the appropriate dark color to match your buttons */
}
</style>
