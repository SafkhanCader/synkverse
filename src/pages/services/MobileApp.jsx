import React from "react";
import { FaMobileAlt, FaCode, FaCloud, FaUsers, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileApp() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Cutting-Edge <span className="text-blue-400">Mobile App Development</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Cross-platform Flutter and React Native apps tailored for iOS and Android with smooth UX and performant code.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Start Your Mobile Project
          </Link>
        </div>
        <div className="relative">
          <img
            src="/service/MobileApp.png"
            alt="Mobile app development"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Why Choose SynkVerse for Mobile Apps?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From intuitive UI to robust backend integration, we build mobile apps that scale with your business.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaMobileAlt />}
            title="Cross-Platform Expertise"
            desc="Develop once, deploy everywhere: iOS, Android, and web with Flutter and React Native."
          />
          <FeatureCard
            icon={<FaCode />}
            title="Clean & Maintainable Code"
            desc="Modular codebases designed for easy updates and future-proof scaling."
          />
          <FeatureCard
            icon={<FaCloud />}
            title="Cloud Integration"
            desc="Seamless backend connections with Firebase, AWS, and custom APIs."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="User-Centered Design"
            desc="Engaging, accessible interfaces focused on delighting your users."
          />
          <FeatureCard
            icon={<FaRocket />}
            title="Fast Launch & Updates"
            desc="Streamlined release cycles for quick deployment and iterative improvements."
          />
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
        <p className="text-gray-400 mb-8">
          We use industry-leading tools to build high-quality, performant mobile apps:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/flutter.svg" alt="Flutter" className="h-12" />
          <img src="/logos/react-native.svg" alt="React Native" className="h-12" />
          <img src="/logos/firebase.svg" alt="Firebase" className="h-12" />
          <img src="/logos/aws.svg" alt="AWS" className="h-12" />
          <img src="/logos/figma.svg" alt="Figma" className="h-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Reach Mobile Users?</h4>
        <p className="text-white/80 mb-6 text-lg">
          Whether it’s a sleek app for consumers or a powerful tool for your team, we bring your mobile vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Get Started Today →
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
