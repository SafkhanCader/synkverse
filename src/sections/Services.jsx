import React from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaMobileAlt,
  FaMicrochip,
  FaPaintBrush,
  FaCloud,
  FaServer,
  FaRobot,
  FaShoppingCart,
  FaLaptopCode,
  FaProjectDiagram,
  FaCameraRetro,
} from "react-icons/fa";

// Services array
const services = [
  {
    title: "React Web Applications",
    desc: "High-performance, responsive web apps using React, Next.js, and TailwindCSS.",
    icon: <FaReact />,
    link: "/services/react-web",
    category: "Frontend",
    color: "#0ea5e9",
    bg: "bg-sky-400/5",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform Flutter and React Native apps for iOS and Android devices.",
    icon: <FaMobileAlt />,
    link: "/services/mobile-app",
    category: "Mobile",
    color: "#6366f1",
    bg: "bg-indigo-500/5",
  },
  {
    title: "IoT Integration",
    desc: "Connected dashboards, smart device interfaces, and embedded systems.",
    icon: <FaMicrochip />,
    link: "/services/iot",
    category: "Hardware",
    color: "#f97316",
    bg: "bg-orange-400/5",
  },
  {
    title: "Cloud Solutions & DevOps",
    desc: "Scalable infrastructure with AWS, Azure, and automated CI/CD pipelines.",
    icon: <FaCloud />,
    link: "/services/cloud-solutions",
    category: "DevOps",
    color: "#60a5fa",
    bg: "bg-blue-400/5",
  },
  {
    title: "Backend & API Development",
    desc: "Robust backends, REST/GraphQL APIs, secure auth, and scalable databases.",
    icon: <FaServer />,
    link: "/services/backend-api",
    category: "Backend",
    color: "#a855f7",
    bg: "bg-purple-400/5",
  },
  {
    title: "AI & Machine Learning",
    desc: "AI features, predictive analytics, ML models, and chatbot integrations.",
    icon: <FaRobot />,
    link: "/services/ai-ml",
    category: "Intelligence",
    color: "#f43f5e",
    bg: "bg-rose-400/5",
  },
  {
    title: "E-commerce Solutions",
    desc: "Fully customized stores with secure payment gateways and inventory tools.",
    icon: <FaShoppingCart />,
    link: "/services/ecommerce",
    category: "E-commerce",
    color: "#10b981",
    bg: "bg-emerald-400/5",
  },
  {
    title: "Portfolio Website Development",
    desc: "Clean, responsive websites to showcase your personal or professional brand.",
    icon: <FaLaptopCode />,
    link: "/services/portfolio-web",
    category: "Portfolio",
    color: "#22c55e",
    bg: "bg-green-400/5",
  },
  {
    title: "Interactive Project Showcases",
    desc: "Dynamic components to make your work stand out interactively.",
    icon: <FaProjectDiagram />,
    link: "/services/portfolio-showcase",
    category: "Portfolio",
    color: "#14b8a6",
    bg: "bg-teal-400/5",
  },
  {
    title: "Photography & Media Portfolios",
    desc: "High-quality galleries tailored for photographers, artists, and media creators.",
    icon: <FaCameraRetro />,
    link: "/services/portfolio-media",
    category: "Media",
    color: "#e11d48",
    bg: "bg-rose-500/5",
  },
  {
    title: "Branding & Design",
    desc: "Logo design, brand identity, UI/UX mockups, and complete design kits.",
    icon: <FaPaintBrush />,
    link: "/services/design",
    category: "Creative",
    color: "#ec4899",
    bg: "bg-pink-400/5",
  },
];

// ServiceCard component
const ServiceCard = ({ title, desc, icon, link, category, color, bg }) => (
  <div
    className={`rounded-xl p-6 transition-all duration-300 border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full ${bg}`}
  >
    <div>
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-inner backdrop-blur border border-white/10`}
        style={{ backgroundColor: `${color}1A`, color }}
      >
        <div className="text-4xl">{icon}</div>
      </div>

      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {desc}
      </p>
    </div>

    <div className="mt-6 flex justify-between items-center">
      <span className="text-xs bg-white/50 text-gray-800 px-3 py-1 rounded-full font-medium tracking-wide shadow-sm">
        {category}
      </span>
      <Link
        to={link}
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        Learn More →
      </Link>
    </div>
  </div>
);

// Main component
export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At <span className="font-semibold text-blue-600">SynkVerse</span>, we deliver tailor-made tech solutions that help businesses innovate, grow, and succeed across all platforms and industries.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
