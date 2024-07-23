<template>
    <div class="z-10 relative bg-white">
        <div class="max-w-[1440px] mx-auto py-16 bg-white">
            <div class="flex items-center justify-center flex-col">
                <h2 class="pb-8 text-6xl">Our Services</h2>
                <p class="text-xl py-2 text-center w-[70%] font-light">Our transportation company has been offering a vast
                    set
                    of reliable solutions for
                    businesses and individuals all
                    over the world since our establishment.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 my-4">
                <div v-for="(service, index) in services" :key="index" class="relative group hover:cursor-pointer">
                    <div class="relative w-full h-64 bg-cover bg-center "
                        :style="{ backgroundImage: `url(${service.image})` }">
                        <div
                            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        </div>
                        <div class="absolute text-center text-white p-2 z-20 bg-blue-800 bottom-[30px] w-[15rem] text-2xl">
                            {{ service.text }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <NuxtLink href="/services"
                    class="uppercase text-xl text-blue-800 border border-blue-800 px-6 py-4 hover:bg-blue-800 hover:text-white transition-all duration-500">
                    View All services </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const services = ref([
    { image: '/img1.jpg', text: 'Transportation' },
    { image: '/img2.jpg', text: 'Logistics' },
    { image: '/img3.jpg', text: 'Towing Service' },
    { image: '/img4.jpg', text: 'Storage' },
    { image: '/img5.jpg', text: 'Distribution Service' },
    { image: '/img6.jpg', text: 'Maintenance Leasing' }
])
</script>
  
<style scoped>/* Add any additional styles here */</style>