import React from "react";
import { FaImages, FaSlidersH, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PortfolioShowcase() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Interactive <span className="text-blue-400">Project Showcases</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Make your projects pop with animated case studies, carousels, before/after views, and embedded media.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition">
            Highlight My Work
          </Link>
        </div>
        <div>
          <img src="/images/interactive-showcase.png" alt="Interactive Showcases" className="rounded-2xl shadow-xl w-full" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Designed to Engage Viewers</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Your work deserves more than screenshots. We build dynamic, immersive showcases.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard icon={<FaImages />} title="Image Sliders" desc="Highlight portfolios with interactive carousels and auto-scrolling banners." />
          <FeatureCard icon={<FaLayerGroup />} title="Case Study Pages" desc="Break down your process in beautiful, scroll-friendly layouts." />
          <FeatureCard icon={<FaSlidersH />} title="Before & After Effects" desc="Show transformations in design, refactors, and redesigns interactively." />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Showcase Work that Converts</h4>
        <p className="text-white/80 mb-6 text-lg">
          Impress visitors with immersive experiences that guide them through your impact.
        </p>
        <Link to="/contact" className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition">
          Build Interactive Showcase →
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
