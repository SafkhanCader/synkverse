import React, { useState, useEffect } from "react";
import { CheckCircle, Rocket, Smartphone, Cpu } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

export default function ServiceAdPopup() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 10000); // Show after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500">
      <div className="relative w-[70%] max-w-3xl max-h-[70vh] sm:max-h-[70vh] sm:max-w-[50%] overflow-y-auto rounded-2xl shadow-2xl border border-gray-200 bg-white/20 backdrop-blur-lg p-4 sm:p-8 text-white scroll-smooth overscroll-contain">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-blue-500 text-4xl font-bold hover:text-red-400 transition"
          onClick={() => setShowAd(false)}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Elevate Your Digital Presence with SynkVerse 🚀
        </h2>

        {/* Video */}
        <div className="relative w-full sm:w-[480px] mx-auto overflow-hidden rounded-xl shadow-lg mb-6 border border-gray-300">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://placehold.co/800x450?text=SynkVerse+Preview"
          >
            <source src="videos/Ads.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base mb-6">
          <div className="flex items-center space-x-2">
            <Rocket className="text-indigo-300" />
            <span>Fast & Scalable Development</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="text-indigo-300" />
            <span>Mobile & Web Applications</span>
          </div>
          <div className="flex items-center space-x-2">
            <Cpu className="text-indigo-300" />
            <span>IoT & Automation Integrations</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around items-center text-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-indigo-200">150+</h3>
            <p className="text-sm text-white/80">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-200">99%</h3>
            <p className="text-sm text-white/80">Client Retention Rate</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-200">24/7</h3>
            <p className="text-sm text-white/80">Support & Maintenance</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 shadow-inner mb-6">
          <h4 className="text-xl font-semibold mb-3 text-indigo-100">Why Choose SynkVerse?</h4>
          <ul className="space-y-2 text-white/90 text-sm sm:text-base">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-2" />
              Tailor-made solutions for startups, businesses, and enterprises.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-2" />
              UI/UX focused design that converts visitors into customers.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-2" />
              Future-ready tech: React, Flutter, IoT, AI integrations.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-2" />
              Complete project ownership, transparency, and collaboration.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/services/ads"
            className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition duration-300 shadow-md"
          >
            Get Now ✨
          </Link>
        </div>
      </div>
    </div>
  );
}
