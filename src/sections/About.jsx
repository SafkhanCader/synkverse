import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPaintBrush,
  FaCode,
  FaHandshake,
  FaServer,
  FaRobot,
  FaPuzzlePiece,
  FaProjectDiagram,
} from "react-icons/fa";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// Reusable Card Component
const FeatureCard = ({ icon, title, description, color, bg, index }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 ${bg}`}
  >
    <div className="flex justify-center mb-6">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur"
        style={{ color }}
      >
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-center text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-400 text-center leading-relaxed text-sm sm:text-base">
      {description}
    </p>
  </motion.div>
);

export default function About() {
  const strengths = [
    {
      icon: <FaRocket />,
      title: "Rapid Scaling",
      description:
        "We take your MVP and scale it fast with robust cloud architecture and seamless performance across devices.",
      color: "#FF6B6B",
      bg: "bg-red-500/5",
    },
    {
      icon: <FaPaintBrush />,
      title: "Design Innovation",
      description:
        "User-centered UI/UX design that transforms ideas into engaging, intuitive digital experiences.",
      color: "#FFD93D",
      bg: "bg-yellow-400/5",
    },
    {
      icon: <FaCode />,
      title: "Code Quality",
      description:
        "Clean, testable code with modern development practices like CI/CD, code reviews, and version control.",
      color: "#38BDF8",
      bg: "bg-sky-400/5",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Partnership",
      description:
        "We don’t just code — we collaborate. Your success is our goal, and we’re in it together from day one.",
      color: "#7C3AED",
      bg: "bg-purple-500/5",
    },
    {
      icon: <FaServer />,
      title: "Full Stack Expertise",
      description:
        "From front-end to back-end, APIs to databases, we handle the complete technology stack with precision.",
      color: "#06D6A0",
      bg: "bg-emerald-400/5",
    },
    {
      icon: <FaRobot />,
      title: "Future-Ready Tech",
      description:
        "We adopt the latest technologies like AI, IoT, serverless, and edge computing to future-proof your product.",
      color: "#F4A261",
      bg: "bg-orange-400/5",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Custom Integrations",
      description:
        "From payment gateways to third-party APIs, we seamlessly integrate external services tailored to your business.",
      color: "#00B4D8",
      bg: "bg-cyan-400/5",
    },
    {
      icon: <FaProjectDiagram />,
      title: "End-to-End Delivery",
      description:
        "From ideation and wireframes to development, testing, launch, and support — we handle everything under one roof.",
      color: "#D946EF",
      bg: "bg-pink-400/5",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-32">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Why <span className="text-blue-500">SynkVerse</span>?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          We partner with forward-thinking teams to build scalable, polished,
          and beautiful digital products that drive impact.
        </p>
      </motion.div>

      {/* Core Strengths */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {strengths.map((item, i) => (
          <FeatureCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.description}
            color={item.color}
            bg={item.bg}
            index={i}
          />
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-5">
          Ready to Build Something Great?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
          Whether you're planning your MVP or scaling a production platform,
          we’d love to hear your vision and help bring it to life.
        </p>
        <Link
          to="/inquiry"
          className="inline-block px-10 py-4 bg-blue-500 text-black font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Let’s Talk →
        </Link>
      </motion.div>
    </section>
  );
}
