// AboutContent.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket, FaLightbulb, FaCode, FaHandshake, FaReact, FaNodeJs,
  FaDocker, FaPython, FaAws, FaFigma, FaCogs, FaGlobe, FaMobileAlt,
  FaChartLine, FaUsers,
} from "react-icons/fa";
import {
  SiNextdotjs, SiFlutter, SiTailwindcss, SiFirebase,
  SiMongodb, SiGraphql, SiPostgresql, SiTypescript, SiExpress
} from "react-icons/si";

// Animated Feature Card
export function AnimatedFeature({ icon, title, desc, color }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-lg p-8 text-center"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mb-4 text-4xl" style={{ color }}>{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );
}

// Export Data Arrays
export const strengths = [
  {
    icon: <FaRocket />,
    title: "Rapid Scaling",
    desc: "From MVP to enterprise scale without missing a beat.",
    color: "#FF6B6B",
  },
  {
    icon: <FaLightbulb />,
    title: "Design Innovation",
    desc: "Prototyping and UX design rooted in real user needs.",
    color: "#FFD93D",
  },
  {
    icon: <FaCode />,
    title: "Code Quality",
    desc: "Clean, testable, maintainable code with solid architecture.",
    color: "#38BDF8",
  },
  {
    icon: <FaHandshake />,
    title: "Collaborative Partnership",
    desc: "Your goals + our expertise = unmatched outcomes.",
    color: "#7C3AED",
  },
];

export const technologies = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Express", icon: <SiExpress />, color: "#999999" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
];

export const industries = [
  {
    icon: <FaMobileAlt />,
    title: "Startups",
    desc: "Fast-paced MVPs & pivot-ready products.",
    color: "#34D399",
  },
  {
    icon: <FaGlobe />,
    title: "E‑commerce",
    desc: "Scalable stores with secure checkout.",
    color: "#F97316",
  },
  {
    icon: <FaCogs />,
    title: "SaaS",
    desc: "Cloud-native multi‑tenant platforms.",
    color: "#3B82F6",
  },
  {
    icon: <FaChartLine />,
    title: "Education",
    desc: "Engaging LMS & learning tools.",
    color: "#A855F7",
  },
  {
    icon: <FaUsers />,
    title: "Healthcare",
    desc: "Secure portals & telehealth systems.",
    color: "#EF4444",
  },
];
