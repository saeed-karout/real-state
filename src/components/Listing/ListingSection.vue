<template>
  <section class="py-20 relative">
    <!-- Filters Bar -->
    <div class="bg-Raspberry rounded-lg w-full md:w-1/2 lg:w-1/3 p-6 absolute right-0 md:mr-12 top-8 md:top-20">
      <h2 class="text-2xl md:text-4xl font-extrabold text-white text-center md:text-start">Filters Bar</h2>
    </div>

    <div class="container mx-auto px-4 mt-40 md:mt-48">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-start ml-4 md:ml-12">Listing</h2>

      <!-- Card Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-items-center">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[350px] min-h-[650px]">
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
        <div class="bg-Raspberry rounded-lg shadow-lg overflow-hidden w-full max-w-[350px] text-white min-h-[650px]">
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
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[350px] min-h-[650px]">
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


