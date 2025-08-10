import React from "react";
import { FaPalette, FaPenNib, FaDraftingCompass, FaShapes, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Design() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Creative <span className="text-blue-400">Branding & Design</span> Services
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Crafting unique logos, brand identities, UI/UX mockups, and comprehensive design kits that captivate and convert.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Start Your Design Journey
          </Link>
        </div>
        <div className="relative">
          <img
            src="/service/BrandDesign.png"
            alt="Design and branding"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Why Choose SynkVerse for Design?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Design that tells your story and builds brand loyalty with clean, modern, and user-focused visuals.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaPalette />}
            title="Brand Identity"
            desc="Custom logos, color schemes, and style guides tailored to your vision."
          />
          <FeatureCard
            icon={<FaPenNib />}
            title="UI/UX Design"
            desc="User-friendly interfaces that enhance engagement and conversion."
          />
          <FeatureCard
            icon={<FaDraftingCompass />}
            title="Design Systems"
            desc="Scalable design frameworks for consistent, reusable assets."
          />
          <FeatureCard
            icon={<FaShapes />}
            title="Illustrations & Graphics"
            desc="Unique visuals and icons that set your brand apart."
          />
          <FeatureCard
            icon={<FaLightbulb />}
            title="Creative Consulting"
            desc="Collaborative sessions to shape your brand’s creative direction."
          />
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h3 className="text-2xl font-semibold mb-6">Tools We Use</h3>
        <p className="text-gray-400 mb-8">
          Industry-standard software for high-quality design and prototyping:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/figma.svg" alt="Figma" className="h-12" />
          <img src="/logos/adobe-illustrator.svg" alt="Adobe Illustrator" className="h-12" />
          <img src="/logos/adobe-photoshop.svg" alt="Adobe Photoshop" className="h-12" />
          <img src="/logos/sketch.svg" alt="Sketch" className="h-12" />
          <img src="/logos/invision.svg" alt="InVision" className="h-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Elevate Your Brand Today</h4>
        <p className="text-white/80 mb-6 text-lg">
          Let’s create stunning visuals and cohesive branding that makes your business unforgettable.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Contact Our Design Team →
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
