import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


const SERVICE_ID = " ";
const USER_TEMPLATE_ID = " ";
const PUBLIC_KEY = " ";

export default function InquiryForm() {
  const formRef = useRef(null);
  const navigate = useNavigate(); // 👈 React Router navigation
  const [service, setService] = useState("");
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectBudget: "",
    timeline: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "service") setService(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const encode = (data) =>
      Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");

    try {
      // Send form data to Netlify (or your backend)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "inquiry-form", ...formData }),
      });

      // Send auto-reply to user via EmailJS
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, formData, PUBLIC_KEY);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectBudget: "",
        timeline: "",
        details: "",
      });
      setService("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  // 🔥 Advanced "Thank You" Applet UI
  const ThankYouApplet = () => (
    <motion.div
      className="bg-white text-black py-24 px-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/logos/SynkVerseLogo.png"
        alt="Thank You"
        className="w-32 h-32 mb-6"
      />
      <h2 className="text-4xl font-bold mb-4 text-green-600">Thank You!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Your inquiry has been submitted successfully. <br />
        We’ve received your request and will be in touch shortly.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition-all"
      >
        Continue to Homepage
      </button>
    </motion.div>
  );


  return (
    <section className="bg-white text-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black">
            Let's Build Something Exceptional
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Use this inquiry form to start your project with us. We bring your vision to life.
          </p>
        </motion.div>

        {/* Video Section */}
        <div className="mb-16 relative z-10 max-w-4xl mx-auto mt-16 rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto object-cover rounded-xl"
            src="videos/Inquiry.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Subtitle: Why SynkVerse */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-extrabold text-center text-black mb-4">Why <span className="text-blue-500">SynkVerse?</span></h3>
          <p className="text-gray-600 leading-relaxed">
            At SynkVerse, we combine creativity and technical excellence to craft digital experiences that elevate brands.
            Our multi-disciplinary team works closely with you to ensure your project exceeds expectations in function,
            design, and delivery.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Tailored Solutions",
              desc: "We design tech that aligns with your goals and speaks to your audience.",
              icon: "🎯",
            },
            {
              title: "Reliable Collaboration",
              desc: "You’ll always know what’s happening and when.",
              icon: "🤝",
            },
            {
              title: "Fast Delivery",
              desc: "We use agile methods to build and ship quality products faster.",
              icon: "🚀",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 text-black rounded-2xl p-6 shadow-lg border border-gray-800 hover:scale-[1.03] transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>


        {status === "success" ? (
          <ThankYouApplet />
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Your journey starts here — Let’s get to know your project!
              </h2>
              <p className="text-lg text-gray-600">
                Let’s bring your idea to life. Fill out the form and we’ll get
                in touch with you shortly.
              </p>
            </div>

            {/* Form */}
        <form
          ref={formRef}
          name="inquiry-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 p-8 text-black rounded-2xl shadow-xl space-y-6"
        >
          
          <input type="hidden" name="form-name" value="inquiry-form" />
          <input type="hidden" name="bot-field" />

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block mb-1 font-medium text-blue-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Full Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block mb-1 font-medium text-blue-900">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block mb-1 font-medium text-blue-900">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="+4412345678"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block mb-1 font-medium text-blue-900">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Company or Brand or Any"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label htmlFor="service" className="block mb-1 font-medium text-blue-900">
              What service are you interested in? <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a service</option>
              <option value="React Web Applications">React Web Applications</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="IoT Integration">IoT Integration</option>
              <option value="Branding & Design">Branding & Design</option>
              <option value="Cloud Solutions & DevOps">Cloud Solutions & DevOps</option>
              <option value="Backend & API Development">Backend & API Development</option>
              <option value="AI & Machine Learning">AI & Machine Learning</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="Portfolio Website Development">Portfolio Website Development</option>
              <option value="Interactive Project Showcases">Interactive Project Showcases</option>
              <option value="Photography & Media Portfolios">Photography & Media Portfolios</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Project Budget */}
          <div className="space-y-2">
            <label htmlFor="projectBudget" className="block mb-1 font-medium text-blue-900">
              What is your estimated project budget? <span className="text-red-500">*</span>
            </label>
            <select
              id="projectBudget"
              name="projectBudget"
              required
              value={formData.projectBudget}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a budget range</option>
              <option value="Open to discuss">Open to discuss</option>
              <option value="$200 - $500">$200 - $500</option>
              <option value="$500 - $800">$500 - $800</option>
              <option value="$800 - $1,000">$800 - $1,000</option>
              <option value="$1,000 - $2,000">$1,000 - $2,000</option>
              <option value="$2,000 - $5,000">$2,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">More than $10,000</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <label htmlFor="timeline" className="block mb-1 font-medium text-blue-900">
              What is your expected project timeline? <span className="text-red-500">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a timeline</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="block mb-1 font-medium text-blue-900">
              Tell us about your project <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              value={formData.details}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your project, goals, or anything else you'd like us to know."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-3xl transition duration-300"
            >
              Send Inquiry
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-400 text-center mt-6">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
          </>
        )}
      </div>
    </section>
  );
}
