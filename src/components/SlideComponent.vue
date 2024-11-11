<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-14">What You'll Get</h2>

      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <!-- Slider Wrapper -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
        >
          <!-- Slide Item -->
          <div v-for="(slide, index) in slides" :key="index" class="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
            <div class="relative bg-cover bg-center h-[250px] sm:h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden" :style="{ backgroundImage: `url(${slide.image})` }">
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <h3 class="text-white text-base sm:text-lg md:text-xl font-semibold text-center px-4">{{ slide.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Controls Below the Slider -->
        <div class="flex items-center justify-center mt-8 md:mt-16 space-x-4">
          <button @click="prevSlide" class="hover:bg-opacity-80 transition p-2 md:p-4 rounded-full ">
            <img src="../assets/icons/left.png" alt="Previous Slide" class="w-4 sm:w-6 md:w-8" />
          </button>
          <button @click="nextSlide" class="hover:bg-opacity-80 transition p-2 md:p-4 rounded-full ">
            <img src="../assets/icons/right.png" alt="Next Slide" class="w-4 sm:w-6 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

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
  {
    title: "Modern Kitchens",
    image: "/assets/images/kitchen.jpg",
  },
  {
    title: "Cozy Bedrooms",
    image: "/assets/images/bedroom.jpg",
  },
];

const currentIndex = ref(0);
const itemsPerView = ref(1);

function updateItemsPerView() {
  if (window.innerWidth >= 1024) {
    itemsPerView.value = 3; // Large screens: 3 items
  } else if (window.innerWidth >= 640) {
    itemsPerView.value = 2; // Medium screens: 2 items
  } else {
    itemsPerView.value = 1; // Small screens: 1 item
  }
}

function nextSlide() {
  if (currentIndex.value < Math.ceil(slides.length / itemsPerView.value) - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // العودة إلى البداية
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = Math.ceil(slides.length / itemsPerView.value) - 1; // الذهاب إلى النهاية
  }
}

onMounted(() => {
  updateItemsPerView();
  window.addEventListener('resize', updateItemsPerView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerView);
});

// مراقبة عدد العناصر المرئية لضبط `currentIndex` إذا تغير عدد العناصر المرئية فجأة
watch(itemsPerView, (newVal, oldVal) => {
  if (currentIndex.value >= Math.ceil(slides.length / newVal)) {
    currentIndex.value = 0; // إعادة ضبط `currentIndex` لضمان المحاذاة الصحيحة
  }
});
</script>

<style scoped>
.bg-darkBlue {
  background-color: #1B1E34; /* Replace with the appropriate dark color to match your buttons */
}
</style>
