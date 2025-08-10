import React from "react";
import { FaCameraRetro, FaFilm, FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PortfolioMedia() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Creative <span className="text-blue-400">Photography & Media Portfolios</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Display your visual work in style — from photography galleries to cinematic showreels and media archives.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition">
            Show My Media
          </Link>
        </div>
        <div>
          <img src="/images/media-portfolio.png" alt="Photography Portfolio" className="rounded-2xl shadow-xl w-full" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Designed for Visual Storytelling</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Professional-grade media portfolios that perform beautifully across all devices.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard icon={<FaCameraRetro />} title="Photography Portfolios" desc="Grid or masonry layouts, lightbox viewing, and fullscreen experiences." />
          <FeatureCard icon={<FaFilm />} title="Cinematic Showreels" desc="Smooth video playback, YouTube/Vimeo integration, and auto-play galleries." />
          <FeatureCard icon={<FaPhotoVideo />} title="Mixed Media Displays" desc="Seamlessly mix photos, videos, and animations in curated collections." />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Put Your Work in the Spotlight</h4>
        <p className="text-white/80 mb-6 text-lg">
          Creatives need a platform that complements their vision. Let SynkVerse bring yours to life.
        </p>
        <Link to="/contact" className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition">
          Start Your Portfolio →
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
