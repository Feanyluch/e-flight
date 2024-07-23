<template>
    <div class="relative z-10 bg-gray-800">
        <div class="max-w-[1440px] mx-auto text-white py-8">
            <h2 class="text-6xl uppercase py-6 text-center">Our Team</h2>
            <div class="grid grid-cols-3 gap-12 py-12">
                <div v-for="(service, index) in services" :key="index" class="relative group">
                    <div class="z-20 relative w-full h-96 bg-cover bg-center"
                        :style="{ backgroundImage: `url(${service.image})` }">
                        <div
                            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <!-- <div class="text-center text-white p-4">
                                {{ service.text }}
                            </div> -->
                        </div>
                        <div class="absolute text-start text-white px-4 z-20 bottom-[30px] w-[20rem] text-2xl">
                            <h1 class="text-3xl">{{ service.text }}</h1>
                            <p class="text-lg font-light">{{ service.paragraph }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
    { image: '/person1.jpg', text: 'Eva Pool', paragraph: 'Finance Director' },
    { image: '/person2.jpg', text: 'Mark Johnson', paragraph: 'Office Manager' },
    { image: '/person3.jpg', text: 'Sam Kromstain', paragraph: 'Head of Account Management' },
])
</script>
