import React from "react";
import { FaShoppingCart, FaCreditCard, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ECommerce() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Custom <span className="text-blue-400">E-commerce Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Build secure, scalable online stores with integrated payments and custom UX/UI tailored to your brand.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Launch Your Store
          </Link>
        </div>
        <div className="relative">
          <img
            src="/service/Ecommerce.png"
            alt="E-commerce solutions"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Everything You Need to Sell Online</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From product management to checkout and payment integration, we handle the technical side so you can sell.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaStore />}
            title="Custom Storefront"
            desc="Beautiful, responsive design tailored to your brand."
          />
          <FeatureCard
            icon={<FaShoppingCart />}
            title="Shopping Cart & Inventory"
            desc="Easy-to-manage product listings and stock control."
          />
          <FeatureCard
            icon={<FaCreditCard />}
            title="Secure Payments"
            desc="Integration with major payment gateways for smooth checkout."
          />
        </div>
      </section>

      {/* Video Promo Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          Watch How SynkVerse Helps You Win
        </h3>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Explore the key benefits of choosing our team through this short promo
          video. See what makes our approach unique and effective.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            className="w-full h-150"
            autoPlay 
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="/videos/EcommerceVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Start Selling Online Today</h4>
        <p className="text-white/80 mb-6 text-lg">
          Let SynkVerse build you an e-commerce platform that grows with your business.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Contact Us →
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
      <div className="text-blue-400 text-3xl mb-4">{icon}</div>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
