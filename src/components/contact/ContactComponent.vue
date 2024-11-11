<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-10">Contact Us</h2>
      <!-- Section Wrapper -->
      <div class="flex flex-col md:flex-row ">
        <!-- Agent Info Section -->
        <div class="flex-1 px-4">
          <!-- Agent Info Section -->
          <h3 class="text-2xl mx-20 mt-10 font-bold text-gray-800 mb-4">Our Agent</h3>
          <div class="p-8 rounded-lg flex flex-col items-center justify-center md:items-start md:flex-row gap-6  ">
            <!-- Agent Image -->
            <img src="../../assets/images/contact.png" alt="Agent" class="w-36 h-36 rounded-lg object-cover" />

            <!-- Agent Details -->
            <div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Jane Doe</h4>
              <p class="text-gray-600 mb-2"><strong>Phone:</strong><br> (123) 456 789 000</p>
              <p class="text-gray-600 mb-2"><strong>E-mail:</strong><br> john.doe@example.com</p>
              <p class="text-gray-600"><strong>Skype:</strong><br> John Doe</p>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="flex-1 p-8 rounded-lg  ">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Contact Form</h3>
          <form @submit.prevent="sendMessage">
            <div class="flex flex-col md:flex-row gap-6 mb-6">
              <!-- Name Input -->
              <div class="flex-1">
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input type="text" id="name" v-model="name"
                  class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your Name" />
              </div>

              <!-- Email Input -->
              <div class="flex-1">
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                <input type="email" id="email" v-model="email"
                  class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your Email" />
              </div>
            </div>

            <!-- Message Input -->
            <div class="mb-6">
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea id="message" v-model="message"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#823250]"
                rows="6" placeholder="Your Message"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-right">
              <button type="submit"
                class="outline outline-4 outline-[#823250]  py-3 px-6 rounded-md hover:bg-[#823250] transition">
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

function sendMessage() {
  // Replace with your form handling logic
  console.log('Message sent:', {
    name: name.value,
    email: email.value,
    message: message.value,
  });
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
