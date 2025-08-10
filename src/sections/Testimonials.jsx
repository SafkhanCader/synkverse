import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    profession: "Software Engineer",
    country: "USA",
    flag: "🇺🇸",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Absolutely fantastic service! From start to finish, SynkVerse demonstrated professionalism, efficiency, and creativity.",
  },
  {
    id: 2,
    name: "Bob Smith",
    profession: "Digital Marketer",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    text: "Their attention to detail is impressive. My app now performs and looks better than ever. Thank you SynkVerse!",
  },
  {
    id: 3,
    name: "Catherine Lee",
    profession: "Entrepreneur",
    country: "Singapore",
    flag: "🇸🇬",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "I'm blown away by the design and responsiveness. The team truly understood our brand and delivered beyond expectations.",
  },
  {
    id: 4,
    name: "Ahmed Khan",
    profession: "Tech Startup CEO",
    country: "Pakistan",
    flag: "🇵🇰",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    text: "Reliable and innovative! Our collaboration with SynkVerse has been one of the best tech decisions we've made.",
  },
  {
    id: 5,
    name: "Maria Garcia",
    profession: "Freelancer",
    country: "Spain",
    flag: "🇪🇸",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 4,
    text: "Friendly team, strong communication, and beautiful results. Definitely recommended for anyone building web/mobile platforms.",
  },
];

function renderStars(rating) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.387-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  const { name, profession, country, flag, image, rating, text } =
    testimonialsData[current];

  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from the global businesses and creatives we’ve empowered.
        </p>

        <div className="relative bg-white rounded-xl shadow-xl p-10 transition duration-700 ease-in-out">
          <FaQuoteLeft className="absolute top-6 left-6 text-yellow-400 text-3xl opacity-30" />
          <FaQuoteRight className="absolute bottom-6 right-6 text-yellow-400 text-3xl opacity-30" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                “{text}”
              </p>
              {renderStars(rating)}
              <h3 className="text-xl font-bold mt-4 text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">
                {profession} • {flag} {country}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={prevSlide}
              className="text-gray-600 hover:text-yellow-400 transition"
            >
              <MdArrowBackIos size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-600 hover:text-yellow-400 transition"
            >
              <MdArrowForwardIos size={28} />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonialsData.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-yellow-400 w-6" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
