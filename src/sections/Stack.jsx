import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaFigma,
  FaMicrochip,
  FaRaspberryPi,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiArduino,
  SiEspressif,
} from "react-icons/si";

// Core Software Stack
const softwareStack = [
  { name: "React", icon: <FaReact />, color: "#61DBFB", bg: "bg-[#e0f7fb]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", bg: "bg-[#f1f1f1]" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B", bg: "bg-[#e6f1fa]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8", bg: "bg-[#e0f7fb]" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", bg: "bg-[#e9f7e6]" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", bg: "bg-[#fff8e1]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", bg: "bg-[#eef8ed]" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", bg: "bg-[#fff4e6]" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", bg: "bg-[#e6f0fb]" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E", bg: "bg-[#ffece6]" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB", bg: "bg-[#fbe9f6]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", bg: "bg-[#e7edf6]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", bg: "bg-[#e4f0fc]" },
  { name: "Express", icon: <SiExpress />, color: "#999999", bg: "bg-[#f4f4f4]" },
  { name: "Python", icon: <FaPython />, color: "#3776AB", bg: "bg-[#e3f2fd]" },
];

// Embedded & IoT Stack
const embeddedStack = [
  { name: "Arduino", icon: <SiArduino />, color: "#00979D", bg: "bg-[#e0fafa]" },
  { name: "ESP32", icon: <SiEspressif />, color: "#E7352C", bg: "bg-[#faeaea]" },
  { name: "Raspberry Pi", icon: <FaRaspberryPi />, color: "#C51A4A", bg: "bg-[#fce6ec]" },
  { name: "Microcontrollers", icon: <FaMicrochip />, color: "#6B7280", bg: "bg-[#f0f0f0]" },
];

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function Stack() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-20 lg:px-32">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Technology Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to deliver robust, scalable, and maintainable software solutions.
        </p>
      </motion.div>

      {/* Software Development Stack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Web, App & Cloud</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {softwareStack.map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className={`rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ${tech.bg}`}
            >
              <div
                className="text-4xl mb-3"
                style={{ color: tech.color }}
                aria-label={tech.name}
              >
                {tech.icon}
              </div>
              <span className="font-semibold text-center text-gray-800">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Embedded & IoT Stack */}
      <div>
        <h3 className="text-2xl font-bold mb-6 mt-12">Embedded Systems & IoT</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {embeddedStack.map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className={`rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ${tech.bg}`}
            >
              <div
                className="text-4xl mb-3"
                style={{ color: tech.color }}
                aria-label={tech.name}
              >
                {tech.icon}
              </div>
              <span className="font-semibold text-center text-gray-800">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4">
          Need a specific tech stack?
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          We're adaptable. Whether it’s a trendy new framework or a legacy system — we build it right.
        </p>
        <Link
          to="/inquiry"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition"
        >
          Get In Touch
        </Link>
      </motion.div>
    </section>
  );
}
