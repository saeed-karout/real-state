<template>
  <section class=" py-12">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">Partners</h2>

      <!-- Slider Container -->
      <div class="overflow-hidden ">
        <div
          ref="scrollContainer"
          class="flex items-center gap-8 animate-scroll"
          :style="{ transform: `translateX(-${scrollOffset}px)` }"
        >
          <!-- Original Partners -->
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="flex-none w-auto"
          >
            <img
              :src="partner.image"
              :alt="partner.name"
              class="w-36 object-contain mx-4"
            />
          </div>
          <!-- Cloned Partners for Infinite Effect -->
          <div
            v-for="(partner, index) in partners"
            :key="'clone-' + index"
            class="flex-none w-auto"
          >
            <img
              :src="partner.image"
              :alt="partner.name"
              class="w-36 object-contain mx-4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import img1 from '../../assets/images/partners/1.png'
import img2 from '../../assets/images/partners/2.png'
import img3 from '../../assets/images/partners/3.png'
import img4 from '../../assets/images/partners/4.png'
import img5 from '../../assets/images/partners/5.png'

const partners = [
  { name: "Avant Garde", image: img1 },
  { name: "Bullseye", image: img2 },
  { name: "Climb the Mountain", image: img3 },
  { name: "Golden Nest", image: img4 },
  { name: "Mighty Furnitures", image: img5 },
];

const scrollOffset = ref(0);
let scrollInterval;
const scrollSpeed = 20; // يمكنك تعديل هذه القيمة لتغيير سرعة التمرير

onMounted(() => {
  scrollInterval = setInterval(() => {
    scrollOffset.value += 1;
    // إعادة التمرير إلى البداية عند الوصول إلى منتصف التمرير
    const scrollContainer = document.querySelector('.animate-scroll');
    if (scrollContainer && scrollOffset.value >= scrollContainer.scrollWidth / 2) {
      scrollOffset.value = 0;
    }
  }, scrollSpeed);
});

onBeforeUnmount(() => {
  clearInterval(scrollInterval);
});
</script>

<style scoped>
.animate-scroll {
  display: flex;
  transition: transform 0.1s linear;
  will-change: transform;
}
</style>
