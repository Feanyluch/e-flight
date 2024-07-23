<template>
    <div class="z-10 relative w-full overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <div class="relative w-full h-[70vh] bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})`}">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
              <h2 class="text-center text-white p-4 text-7xl lg:max-w-[50%]">
                {{ slide.text }}
              </h2>
              <p class="text-center text-white p-4 text-3xl max-w-[60%]">
                {{ slide.paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-5xl mx-6 hover:bg-blue-800">
        &#10094;
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-5xl mx-6 hover:bg-blue-800">
        &#10095;
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const slides = ref([
    { image: '/img5.jpg', paragraph: 'We help people save time, make their life better, exercising communications, both in business and in private life.', text: 'Unlimited Delivery' },
    { image: '/img6.jpg', paragraph: 'We strive to ensure that our services have become a benchmark of quality in the field of the delivery.', text: 'A partnership based on trust.' },
    { image: '/img7.jpg', paragraph: 'Payment for services is made by credit or advanced system. A form of payment is in the discretion of the customer.', text: 'Comfortable Payment System.' },
  ])
  
  const currentIndex = ref(0)
  
  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else {
      currentIndex.value = slides.value.length - 1
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  