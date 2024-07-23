<template>
  <div class="bg-cover bg-center" :style="{ backgroundImage: `url('/img4.jpg')` }">
    <div class="py-8 px-4 ">
      <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-blue-900 p-6 text-white text-center">
          <h1 class="text-3xl">Book Your Flight</h1>
        </div>
        <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="from" class="block text-sm font-medium text-gray-700">From</label>
              <input type="text" id="from" v-model="form.from"
                class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
                placeholder="Departure city" required />
            </div>
            <div>
              <label for="to" class="block text-sm font-medium text-gray-700">To</label>
              <input type="text" id="to" v-model="form.to"
                class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
                placeholder="Destination city" required />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="departure-date" class="block text-sm font-medium text-gray-700">Departure Date</label>
              <input type="date" id="departure-date" v-model="form.departureDate"
                class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
                required />
            </div>
            <div>
              <label for="return-date" class="block text-sm font-medium text-gray-700">Return Date</label>
              <input type="date" id="return-date" v-model="form.returnDate"
                class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900" />
            </div>
          </div>
          <div>
            <label for="passengers" class="block text-sm font-medium text-gray-700">Passengers</label>
            <input type="number" id="passengers" v-model="form.passengers" min="1"
              class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
              placeholder="Number of passengers" required />
          </div>
          <div>
            <label for="class" class="block text-sm font-medium text-gray-700">Class</label>
            <select id="class" v-model="form.class"
              class="pl-6 py-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
              required>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">Search
              Flights</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 py-16 my-10">
    <Offers />
    <Hotels />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Offers from '~/components/Offers.vue';
import Hotels from '~/components/Hotels.vue'

const form = ref({
  from: '',
  to: '',
  departureDate: '',
  returnDate: '',
  passengers: 1,
  class: 'economy'
})

const handleSubmit = () => {
  console.log(form.value)
  alert(`Searching flights from ${form.value.from} to ${form.value.to}`)
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
