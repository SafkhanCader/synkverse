import React from "react";
import { FaDatabase, FaCode, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackendAPI() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Robust <span className="text-blue-400">Backend & API Development</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Custom backend services with Node.js, Python, and secure API design for seamless integrations.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Let's Build
          </Link>
        </div>
        <div className="relative">
          <img
            src="/images/backend-api-illustration.png"
            alt="Backend API Development"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Backend Services That Scale</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From RESTful APIs to GraphQL and secure authentication, we build backends tailored for your app’s needs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaCode />}
            title="Custom API Design"
            desc="REST & GraphQL APIs built for performance and flexibility."
          />
          <FeatureCard
            icon={<FaDatabase />}
            title="Database Management"
            desc="SQL & NoSQL data solutions with optimized queries and schema design."
          />
          <FeatureCard
            icon={<FaLock />}
            title="Secure Authentication"
            desc="JWT, OAuth, and multi-factor authentication for your users’ security."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Power Your App with a Strong Backend</h4>
        <p className="text-white/80 mb-6 text-lg">
          Whether you need a robust API or full backend system, SynkVerse delivers scalable solutions.
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
