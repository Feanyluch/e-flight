<template>
    <div class="z-10 relative bg-white">
        <div class=" max-w-[1440px] mx-auto py-16">
        <div class="flex items-center justify-center flex-col">
            <h2 class="pb-8 text-6xl uppercase">What we offer</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 my-4">
            <div v-for="(service, index) in services" :key="index" class="relative group hover:cursor-pointer">

                <h2 class="text-4xl py-4">
                    {{ service.text }}
                </h2>
                <p class="text-xl font-light">
                    {{ service.paragraph }}
                </p>
            </div>
        </div>
    </div>
    </div>
    
</template>
  
<script setup>
import { ref } from 'vue'

const services = ref([
    { text: 'Team Spirit', paragraph: 'We help each other, wherever we are. This makes work easier.' },
    { text: 'Join the Industry', paragraph: 'As you might expect, joining this industry gives new opportunities.' },
    { text: 'Find the Nearest Branch', paragraph: 'You can freely use our interactive map to find the nearest office.' },
    {
        text: 'New Technologies', paragraph: 'If youre in logistics, expect to work' },
    { text: '24/7 Support', paragraph: 'Our experts work day and night to solve all your cargo-related problems.' },
    { text: 'Document Preparation', paragraph: 'Our document maintenance methodology is dependable.' },
])
</script>
  
<style scoped>
/* Add any additional styles here */
</style>