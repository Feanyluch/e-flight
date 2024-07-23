<template>
    <div class="px-12 py-16 my-10">
        <div class="max-w-[1440px] mx-auto px-12 py-16 bg-white rounded-xl">
            <h2 class="text-5xl text-start mb-4">Explore Hotels in Trending Places</h2>
            <div class="relative">
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500"
                        :style="{ transform: `translateX(-${currentIndex * 25}%)` }">
                        <div v-for="(hotel, index) in hotels" :key="index" class="w-full md:w-1/4 p-2 flex-shrink-0">
                            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                                <img :src="hotel.image" :alt="hotel.country" class="w-full h-96 object-cover" />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
                                <div class="z-20 absolute bottom-0 text-start text-white p-4">
                                    <h3 class="text-2xl font-bold">{{ hotel.location }}</h3>
                                    <h3 class="text-xl">{{ hotel.country }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="prevChunk" :disabled="isPrevDisabled"
                    class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 disabled:opacity-50">
                    &#10094;
                </button>
                <button @click="nextChunk" :disabled="isNextDisabled"
                    class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 disabled:opacity-50">
                    &#10095;
                </button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'

const hotels = ref([
    { image: '/hotel1.jpg', country: 'USA', location: 'Miami - 47' },
    { image: '/hotel2.jpg', country: 'France', location: 'Paris - 489' },
    { image: '/hotel3.jpg', country: 'Italy', location: 'Italix - 38' },
    { image: '/hotel4.jpg', country: 'Spain', location: 'Ohos - 393' },
    { image: '/hotel5.jpg', country: 'Japan', location: 'Choumcl - 10' },
    { image: '/hotel6.jpg', country: 'Australia', location: 'Asutro - 994' },
    { image: '/hotel7.jpg', country: 'Brazil', location: 'Kanfgo - 85' },
    { image: '/hotel8.jpg', country: 'Canada', location: 'Toronto - 744' }
])

const chunkSize = 1
const currentIndex = ref(0)

const totalItems = hotels.value.length
const maxIndex = totalItems - chunkSize

const nextChunk = () => {
    if (currentIndex.value < maxIndex) {
        currentIndex.value++
    }
}

const prevChunk = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const isNextDisabled = computed(() => currentIndex.value >= maxIndex)
const isPrevDisabled = computed(() => currentIndex.value <= 0)
</script>
  
<style scoped>
/* Add any additional styles here */
button:disabled {
    cursor: not-allowed;
}
</style>
  