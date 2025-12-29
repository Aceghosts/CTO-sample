'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold tracking-wider">BYD</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">New Energy</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Innovation</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About BYD</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Media</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Products</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">New Energy</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Innovation</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About BYD</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Media</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600">
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Build Your Dreams</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">Leading the way in new energy vehicles and sustainable technology</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Products Section - Passenger Vehicles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Passenger Vehicles</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Experience the future of electric mobility</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vehicle 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🚗</div>
                  <div className="text-2xl font-bold">SEAL</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">BYD SEAL</h3>
                <p className="text-gray-600 mb-4">Ocean Aesthetics, sporty performance</p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🚙</div>
                  <div className="text-2xl font-bold">ATTO 3</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">BYD ATTO 3</h3>
                <p className="text-gray-600 mb-4">Premium electric SUV</p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🏎️</div>
                  <div className="text-2xl font-bold">HAN</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">BYD HAN</h3>
                <p className="text-gray-600 mb-4">Flagship luxury sedan</p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Vehicles Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Commercial Vehicles</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Powering sustainable public transportation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bus */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-80 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-2">🚌</div>
                  <div className="text-3xl font-bold">Electric Bus</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">BYD Electric Bus</h3>
                <p className="text-gray-600 mb-4">Zero-emission public transportation solutions</p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>

            {/* Truck */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-80 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-2">🚛</div>
                  <div className="text-3xl font-bold">Electric Truck</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">BYD Electric Truck</h3>
                <p className="text-gray-600 mb-4">Efficient and sustainable logistics</p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blade Battery */}
            <div className="text-center">
              <div className="text-6xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold mb-3">Blade Battery</h3>
              <p className="text-blue-100">Revolutionary lithium iron phosphate battery technology that redefines safety and performance standards</p>
            </div>

            {/* DM-i Technology */}
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">DM-i Technology</h3>
              <p className="text-blue-100">Super hybrid technology combining efficiency with powerful performance for extended range</p>
            </div>

            {/* e-Platform */}
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">e-Platform 3.0</h3>
              <p className="text-blue-100">Next-generation intelligent electric vehicle platform for superior driving experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation for a Better Tomorrow</h2>
              <p className="text-gray-700 text-lg mb-4">
                BYD is committed to creating a sustainable future through continuous innovation in new energy technologies.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                From electric vehicles to energy storage solutions, we are leading the charge toward a cleaner, greener world.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
                Discover Our Vision
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">🌍</div>
                <div className="text-3xl font-bold">Sustainable Future</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600 text-lg">Years of Innovation</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">70+</div>
              <div className="text-gray-600 text-lg">Countries & Regions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">600K+</div>
              <div className="text-gray-600 text-lg">Employees</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">3M+</div>
              <div className="text-gray-600 text-lg">NEVs Sold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">BYD</h3>
              <p className="text-gray-400">Build Your Dreams</p>
              <p className="text-gray-400 mt-2">Leading the world in new energy technology</p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Passenger Vehicles</a></li>
                <li><a href="#" className="hover:text-white">Commercial Vehicles</a></li>
                <li><a href="#" className="hover:text-white">Batteries</a></li>
                <li><a href="#" className="hover:text-white">Monorail</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About BYD</a></li>
                <li><a href="#" className="hover:text-white">Innovation</a></li>
                <li><a href="#" className="hover:text-white">Media Center</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Find a Dealer</a></li>
                <li><a href="#" className="hover:text-white">Customer Service</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 BYD Company Limited. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
