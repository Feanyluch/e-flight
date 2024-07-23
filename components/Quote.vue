<template>
    <div>
        <div class="relative z-10 flex">
            <div class="w-full bg-transparent">
                <div class="grid grid-cols-2">
                    <div class="lg:pl-48 px-6 py-8 col-span-1 bg-blue-900 bg-opacity-80">
                        <div class="opacity-100">
                            <h2 class="uppercase text-5xl text-white py-6">Get a free quote</h2>
                            <p class="uppercase text-xl text-white">We always use the best and fastest fleets</p>
                        </div>
                        <form class="my-8">
                            <div class="flex flex-col gap-4">
                                <div>
                                    <input type="text" placeholder="Full Name" name="fullName"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                </div>
                                <div class="flex gap-4">
                                    <input type="text" placeholder="Email" name="email"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                    <input type="text" placeholder="Mobile" name="mobile"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                </div>
                                <div class="flex gap-4">
                                    <input type="text" placeholder="Destination From" name="destinationFrom"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                    <input type="text" placeholder="Destination To" name="destinationTo"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                </div>
                                <div class="flex gap-4">
                                    <input type="text" placeholder="Shipping Type" name="shippingType"
                                        class="w-full px-4 py-3 text-xl rounded-lg" />
                                    <input type="date" placeholder="Date" name="date"
                                        class="text-gray-400 w-full px-4 py-3 text-xl rounded-lg" />
                                </div>
                                <div>
                                    <textarea placeholder="Message" name="message"
                                        class="w-full px-4 py-3 text-xl rounded-lg h-40"></textarea>
                                </div>
                            </div>

                            <button class="bg-blue-700 uppercase text-white px-8 py-4 my-4">Send us quote</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class="z-0 fixed w-screen h-screen left-0 top-0 bg-cover bg-center" :style="{
        backgroundImage: `url('/img1.jpg');`
    }">
    </div>
</template>