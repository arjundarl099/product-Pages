import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer class="bg-gray-900 text-gray-300 mt-16">
  <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


    <div>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <h2 class="text-2xl font-bold text-white">Aagan Sewa</h2>
      </div>
      <p class="text-sm leading-6 text-gray-400">
        Connecting people with trusted emergency and household service
        providers including doctors, ambulances, electricians, and plumbers.
      </p>
    </div>


    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
      <ul class="space-y-3 text-sm">
        <li><a href="#" class="hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:text-white transition">Services</a></li>
        <li><a href="#" class="hover:text-white transition">Providers</a></li>
        <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Our Services</h3>
      <ul class="space-y-3 text-sm">
        <li><a href="#" class="hover:text-white transition">Doctor Consultation</a></li>
        <li><a href="#" class="hover:text-white transition">Ambulance Booking</a></li>
        <li><a href="#" class="hover:text-white transition">Electrician Service</a></li>
        <li><a href="#" class="hover:text-white transition">Plumbing Service</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Stay Connected</h3>

      <div class="space-y-3 text-sm mb-5">
        <p>📍 Kathmandu, Nepal</p>
        <p>📞 +977 98XXXXXXXX</p>
        <p>✉️ support@aagansewa.com</p>
      </div>

      <form class="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  
  <div class="border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
      <p>© 2026 Aagan Sewa. All rights reserved.</p>

      <div class="flex items-center gap-5">
        <a href="#" class="hover:text-white transition">Privacy Policy</a>
        <a href="#" class="hover:text-white transition">Terms of Service</a>
        <a href="#" class="hover:text-white transition">Support</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
