import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";

export default function Hero() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 60,
      deleteSpeed: 40,
    });

    typewriter
      .typeString("Web Applications")
      .pauseFor(1500)
      .deleteAll()
      .typeString("Mobile Apps")
      .pauseFor(1500)
      .deleteAll()
      .typeString("IoT Dashboards")
      .pauseFor(1500)
      .deleteAll()
      .typeString("AI & ML Systems")
      .pauseFor(1500)
      .deleteAll()
      .typeString("Brand Identity")
      .pauseFor(1500)
      .deleteAll()
      .start();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32 text-center">
      {/* Hero Text */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Syncing <span className="text-blue-500">Ideas.</span>
          <br />
          Shaping <span className="text-blue-500">the Future.</span>
        </h1>

        {/* Auto-Type Line */}
        <div className="text-xl sm:text-2xl lg:text-4xl text-blue-200 mb-8 font-extrabold h-10">
          <span ref={typewriterRef}></span>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          We architect futuristic software—from blazing-fast web apps and cross-platform mobile experiences to intelligent IoT dashboards and immersive brand systems.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            to="/inquiry"
            className="inline-block px-8 py-3 text-black bg-white hover:bg-gray-200 font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Start a Project
          </Link>
          <Link
            to="/services/quote"
            className="inline-block px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      

      {/* 🔥 Promo Video (Autoplaying) */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 rounded-xl overflow-hidden shadow-2xl">
        <video
          className="w-full h-auto rounded-xl"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background Glow Animation */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-black to-black opacity-30 blur-3xl pointer-events-none" />
    </section>
  );
}
