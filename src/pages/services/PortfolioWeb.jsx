import React from "react";
import { FaLaptopCode, FaPaintBrush, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PortfolioWeb() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Stunning <span className="text-blue-400">Portfolio Website Development</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Showcase your talent with elegant, responsive portfolio websites designed for creatives, developers, and professionals.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition">
            Let’s Build Yours
          </Link>
        </div>
        <div>
          <img src="/service/Portfolio.png" alt="Portfolio Web Design" className="rounded-2xl shadow-xl w-full" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Tailored to Represent You</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Built to impress clients, recruiters, and collaborators. Our portfolio sites are fast, modern, and engaging.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard icon={<FaLaptopCode />} title="Developer Portfolios" desc="Highlight your GitHub, live projects, and skills with clean design and animations." />
          <FeatureCard icon={<FaPaintBrush />} title="Creative Portfolios" desc="UI/UX, graphic design, and art portfolios that visually stand out." />
          <FeatureCard icon={<FaGlobe />} title="Personal Branding" desc="Custom domains, SEO, and identity-driven design that reflects your personality." />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Let Your Work Speak for You</h4>
        <p className="text-white/80 mb-6 text-lg">
          A professional online portfolio is your digital handshake. Make it unforgettable.
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
