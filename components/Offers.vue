<template>
    <div class="max-w-[1440px] mx-auto mt-8 p-4">
        <h2 class="text-6xl text-center mb-6 py-6">Exclusive Offers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(offer, index) in offers" :key="index"
                class="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img :src="offer.image" :alt="offer.title" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-bold">{{ offer.title }}</h3>
                    <p class="text-gray-600">{{ offer.description }}</p>
                    <div class="mt-4">
                        <button class="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            @click="bookOffer(offer)">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const offers = ref([
    { image: '/offer1.jpg', title: 'Weekend Getaway', description: 'Enjoy a special discount on weekend getaways to various destinations.' },
    { image: '/offer2.jpg', title: 'Family Package', description: 'Get a great deal for your family vacation with our exclusive family packages.' },
    { image: '/offer3.jpg', title: 'Business Class Upgrade', description: 'Upgrade to business class at a discounted rate on selected flights.' },
])

const bookOffer = (offer) => {
    alert(`Booking offer: ${offer.title}`)
}
</script>
  
<style scoped>
/* Add any additional styles here */
</style>
  