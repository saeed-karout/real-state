<template>
  <section class=" py-20 ">
    <div class="bg-Raspberry rounded-lg w-1/3 p-6  absolute right-0 mr-60">
      <h2 class="text-4xl font-extrabold text-white ">filters Bar</h2>
    </div>
    <div class="container mx-auto px-4 mt-48">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-start ml-12">Listing</h2>

      <!-- Card Container -->
      <div class="flex flex-wrap justify-center gap-16">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-[350px] min-h-[650px]">
          <img src="../../assets/images/listing.png" alt="Apartment C" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col items-center gap-8">
            <h3 class="text-gray-600 text-xl font-semibold mb-2">Apartment C</h3>
            <p class="text-4xl font-bold text-gray-800">$356,000</p>
            <div class="text-gray-500 text-center text-sm mt-4 space-y-2">
              <p>480 m²</p>
              <p>2 Bathrooms</p>
              <p>2 Bedrooms</p>
              <p>30 m² Terrace</p>
            </div>
            <button class="mt-6 bg-Raspberry text-white p-3 rounded-sm hover:bg-red-800 transition">Contact Agent</button>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-Raspberry rounded-lg shadow-lg overflow-hidden w-[350px] text-white min-h-[650px]">
          <img src="../../assets/images/listing.png" alt="Apartment B" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col items-center gap-8">
            <h3 class="text-white text-xl font-semibold mb-2">Apartment B</h3>
            <p class="text-4xl font-bold text-white">$240,000</p>
            <div class="text-white text-center text-sm mt-4 space-y-2">
              <p>340 m²</p>
              <p>2 Bathrooms</p>
              <p>2 Bedrooms</p>
              <p>15 m² Balcony</p>
            </div>
            <button class="mt-6 bg-white text-Raspberry p-3 rounded-sm hover:bg-gray-200 transition">Contact Agent</button>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-[350px] min-h-[650px]">
          <img src="../../assets/images/listing.png" alt="Apartment C" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col items-center gap-8">
            <h3 class="text-gray-600 text-xl font-semibold mb-2">Apartment C</h3>
            <p class="text-4xl font-bold text-gray-800">$356,000</p>
            <div class="text-gray-500 text-center text-sm mt-4 space-y-2">
              <p>480 m²</p>
              <p>2 Bathrooms</p>
              <p>2 Bedrooms</p>
              <p>30 m² Terrace</p>
            </div>
            <button class="mt-6 bg-Raspberry text-white p-3 rounded-sm hover:bg-red-800 transition">Contact Agent</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
