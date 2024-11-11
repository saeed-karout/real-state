<script setup>
    import heroImage from '../../assets/bg/hero.png';
</script>

<template>
    <div :style="{ backgroundImage: `url(${heroImage})` }" class=" h-[80vh] w-full bg-cover bg-center">


        <section class="bg-darkBlue relative top-[500px] right-96 p-8 rounded-lg  max-w-md mx-auto text-white space-y-6">
            <!-- Heading -->
            <div class="text-4xl font-bold">
                <span class="mr-4">OUR</span>
                <span class="text-Raspberry">NEWS</span>
                <span class="block">LETTER</span>
            </div>

            <!-- Subtitle -->
            <p class="text-gray-400">Subscribe for the latest news!</p>

            <!-- Email Input -->
            <div class="flex items-center bg-gray-200 rounded-md overflow-hidden">
                <input type="email" placeholder="Your Email"
                    class="w-full px-4 py-2 text-gray-700 focus:outline-none" />
                <button class="bg-Raspberry p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Description -->
            <div class="text-gray-400 text-sm space-y-2">
                <p>Get Exclusive Real Estate Insights</p>
                <p>Subscribe for the latest listings, market trends, and investment tips—delivered directly to your
                    inbox!</p>
            </div>

            <!-- More Button -->
            <button
                class="  text-sm px-4 py-2 rounded-lg  hover:text-darkBlue transition shadow-border-raspberry">
                More
            </button>
        </section>
    </div>
</template>
<style scoped>
    .bg-darkBlue {
        background-color: #121629;
        /* Customize to match the exact dark blue in your design */
    }
</style>
