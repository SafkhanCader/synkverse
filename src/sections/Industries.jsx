import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaGlobe,
  FaCogs,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaMobileAlt />,
    title: "Startups",
    desc: "Fast-paced MVPs and pivot-ready digital products for early-stage companies.",
    color: "#34D399",
    bg: "bg-green-100/5",
  },
  {
    icon: <FaGlobe />,
    title: "E‑commerce",
    desc: "Scalable, SEO-optimized online stores with secure checkout experiences.",
    color: "#F97316",
    bg: "bg-orange-100/5",
  },
  {
    icon: <FaCogs />,
    title: "SaaS",
    desc: "Robust, cloud-native multi‑tenant platforms for long-term product growth.",
    color: "#3B82F6",
    bg: "bg-blue-100/5",
  },
  {
    icon: <FaChartLine />,
    title: "Education",
    desc: "Modern LMS platforms and interactive tools for digital learning.",
    color: "#A855F7",
    bg: "bg-purple-100/5",
  },
  {
    icon: <FaUsers />,
    title: "Healthcare",
    desc: "HIPAA-compliant portals, telemedicine tools, and patient dashboards.",
    color: "#EF4444",
    bg: "bg-red-100/5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Industries() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 lg:px-32">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Industries We Empower
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From innovative startups to healthcare platforms, we tailor solutions for every sector.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 ${ind.bg}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
          >
            <div className="flex justify-center mb-5">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${ind.color}1A` }} // Light tint
              >
                <div className="text-3xl" style={{ color: ind.color }}>
                  {ind.icon}
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">{ind.title}</h3>
            <p className="text-gray-400 text-center">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
