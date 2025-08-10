import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const exploreOptions = [
  {
    title: "Our Services",
    description:
      "Discover how we can help your business scale with custom mobile apps, websites, and IoT solutions.",
    icon: "/icons/services.svg",
    link: "/services",
    bg: "from-blue-600 to-blue-400",
  },
  {
    title: "Our Work",
    description:
      "Take a look at some of our proudest projects and digital products we've delivered to clients worldwide.",
    icon: "/icons/work.svg",
    link: "/portfolio",
    bg: "from-purple-600 to-purple-400",
  },
  {
    title: "Join the Team",
    description:
      "We're hiring! Check out our open roles if you're passionate about design, code, or strategy.",
    icon: "/icons/career.svg",
    link: "/careers",
    bg: "from-pink-600 to-pink-400",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Explore() {
  return (
    <section className="bg-gray-100 py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Explore More with SynkVerse
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
        >
          Navigate your path through our offerings, showcase, and opportunities to grow with us.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {exploreOptions.map((option, index) => (
          <motion.div
            key={index}
            className={`rounded-xl p-6 shadow-lg bg-gradient-to-r ${option.bg} text-white hover:shadow-2xl transition duration-500 flex flex-col justify-between`}
            variants={item}
          >
            <div className="flex items-center space-x-4 mb-6">
              <img src={option.icon} alt={option.title} className="w-12 h-12" />
              <h3 className="text-2xl font-bold">{option.title}</h3>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6">{option.description}</p>
            <div className="mt-auto">
              <Link
                to={option.link}
                className="inline-flex items-center space-x-2 group text-white hover:text-gray-100 font-medium"
              >
                <span>Explore Now</span>
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Still exploring?
        </h3>
        <p className="text-gray-600 mb-6">
          Whether you're a startup, a business, or a curious creator, we're happy to help you find what you need.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
