import React from "react";
import { motion } from "framer-motion";


const teamMembers = [
  {
    name: "Mohamed Safkhan",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for innovative tech solutions and a proven track record in full-stack development.",
    image: "/team/safkhan.jpg",
    social: {
      linkedin: "https://linkedin.com/in/safkhan",
      twitter: "https://twitter.com/safkhan",
      github: "https://github.com/safkhan",
    },
  },
  {
    name: "Fatima Noor",
    role: "Lead Frontend Developer",
    bio: "Expert in crafting intuitive user interfaces and experiences using React, Tailwind, and Next.js.",
    image: "/team/fatima.jpg",
    social: {
      linkedin: "https://linkedin.com/in/fatimanoor",
      twitter: "https://twitter.com/fatimanoor",
      github: "https://github.com/fatimanoor",
    },
  },
  {
    name: "Omar Yusuf",
    role: "AI & ML Engineer",
    bio: "Data science enthusiast who builds scalable AI-driven models and intelligent systems.",
    image: "/team/omar.jpg",
    social: {
      linkedin: "https://linkedin.com/in/omaryusuf",
      twitter: "https://twitter.com/omaryusuf",
      github: "https://github.com/omaryusuf",
    },
  },
  {
    name: "Leila Khan",
    role: "UI/UX Designer",
    bio: "Design thinker focused on accessibility and seamless user experiences across platforms.",
    image: "/team/leila.jpg",
    social: {
      linkedin: "https://linkedin.com/in/leilakhan",
      twitter: "https://twitter.com/leilakhan",
      github: "https://github.com/leilakhan",
    },
  },
  {
    name: "Ayaan Malik",
    role: "Cloud & DevOps Engineer",
    bio: "Automating infrastructure and optimizing performance with AWS, Docker, and CI/CD pipelines.",
    image: "/team/ayaan.jpg",
    social: {
      linkedin: "https://linkedin.com/in/ayaanmalik",
      twitter: "https://twitter.com/ayaanmalik",
      github: "https://github.com/ayaanmalik",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TeamCard = ({ member, index }) => (
  <motion.div
    className="group bg-black rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <motion.img
      src={member.image}
      alt={member.name}
      className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover mb-4"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
    <p className="text-sm text-blue-400 font-medium mb-2">{member.role}</p>
    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
    <div className="flex space-x-4">
      <a
        href={member.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a
        href={member.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href={member.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-300 transition"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
    </div>
  </motion.div>
);

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white text-white py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-black">
          Meet Our Dream Team
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          Behind every successful project is a team of passionate thinkers and
          creators. We combine technology, creativity, and determination to
          deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-semibold text-black mb-2">
          Want to Join Us?
        </h3>
        <p className="text-gray-500 mb-4">
          We're always on the lookout for passionate people who want to shape
          the future of technology. If you're creative, driven, and a team
          player, we’d love to hear from you.
        </p>
        <a
          href="/explore"
          className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md shadow-md hover:scale-105 transition-transform"
        >
          Explore Careers
        </a>
      </div>
    </section>
  );
}
