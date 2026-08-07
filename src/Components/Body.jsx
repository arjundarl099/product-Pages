import React from 'react'
import Button from '../shared/Button.jsx'



const Body = () => {
  
  return (
    <>

<main>
  
  <section class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      
      <div>
        <span class="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-5">
          Trusted Essential Services
        </span>

        <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Find Nearby <span class="text-indigo-600">Emergency & Home Services</span>
        </h1>

        <p class="text-lg text-gray-600 leading-8 mb-8 max-w-xl">
          Book doctors, ambulances, electricians, and plumbers quickly through one secure platform designed for convenience and reliability.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#services" class="px-7 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg text-center">
            Explore Services
          </a>
          <a href="#providers" class="px-7 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition text-center">
            Become a Provider
          </a>
        </div>

        
        <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div>
            <h3 class="text-3xl font-bold text-gray-900">5k+</h3>
            <p class="text-sm text-gray-600 mt-1">Happy Users</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900">200+</h3>
            <p class="text-sm text-gray-600 mt-1">Verified Providers</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900">24/7</h3>
            <p class="text-sm text-gray-600 mt-1">Support</p>
          </div>
        </div>
      </div>


      <div class="relative">
        <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
            alt="Emergency and home services"
            class="rounded-2xl w-full h-[400px] object-cover"
          />

          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-indigo-50 rounded-xl p-4 text-center">
              <p class="text-2xl mb-1">🚑</p>
              <p class="font-semibold animate-pulse text-gray-800">Ambulance</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 text-center">
              <p class="text-2xl mb-1">👨‍⚕️</p>
              <p class="font-semibold text-gray-800">Doctors</p>
            </div>
            <div class="bg-yellow-50 rounded-xl p-4 text-center">
              <p class="text-2xl mb-1">⚡</p>
              <p class="font-semibold text-gray-800">Electricians</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 text-center">
              <p class="text-2xl mb-1">🔧</p>
              <p class="font-semibold text-gray-800">Plumbers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Aagan Sewa?</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to access trusted local services in one simple and secure platform.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-100">
          <div class="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-5">⚡</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Quick Booking</h3>
          <p class="text-gray-600 leading-7">
            Find and book nearby service providers within minutes using a streamlined booking process.
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-100">
          <div class="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-5">🛡️</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Verified Providers</h3>
          <p class="text-gray-600 leading-7">
            All listed professionals go through a verification process to ensure trust and safety for users.
          </p>
        </div>
        <Button title='arjun darlami magar'>
          <div>
            <h1>arjun darlami magar</h1>
          </div>
        </Button>

        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-100">
          <div class="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-5">📍</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Nearby Services</h3>
          <p class="text-gray-600 leading-7">
            Connect with service providers located near your area for faster response and better availability.
          </p>
        </div>

      </div>
    </div>
  </section>
</main>
</>
  )
}

export default Body
