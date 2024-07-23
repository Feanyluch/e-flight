<template>
    <nav class="bg-white p-4 text-blue-800 border-b-gray-500 border sticky top-0 right-0 z-50 w-full">
        <div class="max-w-[1440px] mx-auto flex justify-between items-center h-16">
            <div class="text-4xl font-bold italic">
                <NuxtLink to="/">
                    <span>Flight-E</span>
                </NuxtLink>
            </div>
            <div class="hidden md:flex gap-20">
                <NuxtLink to="/" class="hover:text-blue-700 hover:underline text-xl">Home</NuxtLink>
                <NuxtLink to="/services" class="hover:text-blue-700 hover:underline text-xl">Services</NuxtLink>
                <NuxtLink to="/bookings" class="hover:text-blue-700 hover:underline text-xl">Flight booking</NuxtLink>
                <NuxtLink to="/about" class="hover:text-blue-700 hover:underline text-xl">About</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-blue-700 hover:underline text-xl">Contact</NuxtLink>
            </div>
            <div class="md:hidden">
                <button @click="toggleMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </div>
            <div v-if="isOpen"
                class="md:hidden absolute top-16 left-0 w-full bg-blue-500 text-white flex flex-col items-center space-y-2 p-4">
                <NuxtLink to="/" class="hover:text-gray-300" @click="toggleMenu">Home</NuxtLink>
                <NuxtLink to="/about" class="hover:text-gray-300" @click="toggleMenu">About</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-gray-300" @click="toggleMenu">Contact</NuxtLink>
            </div>
        </div>

    </nav>
</template>
  
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>
  
<style scoped>
/* Add any additional styles here */
</style>
  