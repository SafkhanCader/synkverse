import React, { useState, useEffect } from "react";
import {
  FaRocket,
  FaCogs,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ReactWeb() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/service/W1.png",
      title: "E-Commerce Platform",
      description:
        "Built with Next.js and Stripe, this high-conversion store scales with demand.",
    },
    {
      image: "/service/W2.png",
      title: "Real-Time Dashboard",
      description:
        "A KPI dashboard powered by Firebase, React Query, and stunning charts.",
    },
    {
      image: "/service/W3.png",
      title: "Portfolio Showcase",
      description:
        "Modern personal portfolio with GSAP animations and dark/light themes.",
    },
  ];

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Scalable, Lightning-Fast{" "}
            <span className="text-blue-400">React Web Applications</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            From MVPs to enterprise dashboards, we deliver high-performance
            web apps powered by React, Next.js, and clean UI frameworks.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Start Your Project
          </Link>
        </div>
        <div className="relative">
          <img
            src="/service/ResponsiveWeb.png"
            alt="React web development"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-extrabold mb-6">
          Why Choose SynkVerse for Web Apps?
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          We combine bleeding-edge tech with business strategy to deliver tools
          that convert, scale, and perform. Here’s what makes us different:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaRocket />}
            title="Optimized Performance"
            desc="Apps built with Next.js, Vite, and code splitting for fast load times and top Lighthouse scores."
          />
          <FeatureCard
            icon={<FaMobileAlt />}
            title="Pixel-Perfect Responsive"
            desc="Every screen, every device — beautifully responsive UI powered by TailwindCSS and best practices."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Security-First"
            desc="HTTPS, secure APIs, form validation, and vulnerability scanning built-in."
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="SEO & Analytics"
            desc="On-page SEO + tools like GA4, Meta Pixel, and custom analytics integrations."
          />
          <FeatureCard
            icon={<FaCogs />}
            title="Modular Architecture"
            desc="Built for maintainability with reusable components and scalable folder structures."
          />
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          Our Projects
        </h3>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Take a look at some of the powerful web applications we’ve crafted
          using React, Next.js, TailwindCSS, and other modern technologies.
        </p>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg w-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h4 className="text-xl font-bold mb-2">
              {slides[currentSlide].title}
            </h4>
            <p className="text-gray-400">{slides[currentSlide].description}</p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
            >
              ◀ Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
            >
              Next ▶
            </button>
          </div>
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
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="/videos/WebVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h3 className="text-3xl font-extrabold mb-6">Tech Stack</h3>
        <p className="text-gray-400 mb-8">
          Trusted technologies we use to build secure, modern web experiences:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/react-color.svg" alt="React" className="h-12" />
          <img src="/logos/vite.svg" alt="Vite" className="h-12" />
          <img
            src="/logos/tailwindcss-color.svg"
            alt="TailwindCSS"
            className="h-12"
          />
          <img src="/logos/firebase-color.svg" alt="Firebase" className="h-12" />
          <img src="/logos/html5-color.svg" alt="HTML" className="h-12" />
          <img src="/logos/css-color.svg" alt="CSS" className="h-12" />
          <img
            src="/logos/javascript-color.svg"
            alt="JavaScript"
            className="h-12"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">
          Build Something Extraordinary
        </h4>
        <p className="text-white/80 mb-6 text-lg">
          Whether it's a custom CRM, SaaS dashboard, or landing page, SynkVerse
          has the expertise to deliver production-grade React solutions.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Let’s Collaborate →
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
