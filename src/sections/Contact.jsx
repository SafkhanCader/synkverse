import React, { useState } from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      // await addDoc(collection(db, "contacts"), formData); // uncomment if db is setup
      setSuccessMsg("Your message has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      console.error("Firestore Error:", error);
      setSuccessMsg("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white text-white py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <header className="text-center space-y-4">
          <h1 className="text-black text-4xl sm:text-5xl font-bold">
            Let’s <span className="text-blue-600">Collaborate</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form and we'll get back to you as soon as possible.
          </p>
        </header>

        {/* Contact Form */}
        <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden Netlify Inputs */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium text-blue-500">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Full Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-blue-500">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium text-blue-500">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Inquiry Subject"
          />
        </div>

        {/* Inquiry Dropdown */}
        <div>
          <label htmlFor="inquiry" className="block font-medium text-blue-500 mb-1">
            What are you interested in?
          </label>
          <select
            name="inquiry"
            id="inquiry"
            required
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-medium text-blue-500 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            placeholder="Tell us about your project or idea..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Success Message */}
        {successMsg && <p className="text-green-400 font-medium">{successMsg}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-semibold py-3 rounded-full transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
      </div>


        {/* Social Media Section */}
        <div className="text-center space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-black text-5xl font-semibold">Connect with <span className="text-blue-600"> SynkVerse</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Follow us on social media and stay updated with the latest news, projects, and behind-the-scenes content.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
            <SocialCard href="https://www.youtube.com/@SoftwareCompany-UK" icon={<FaYoutube />} color="text-red-600" name="YouTube" />
            <SocialCard href="https://www.facebook.com/profile.php?id=61578567350758" icon={<FaFacebook />} color="text-blue-600" name="Facebook" />
            <SocialCard href="https://instagram.com/synkverse" icon={<FaInstagram />} color="text-pink-500" name="Instagram" />
            <SocialCard href="https://x.com/synkverse" icon={<FaXTwitter />} color="text-black" name="X (Twitter)" />
            <SocialCard href="https://linkedin.com/company/synkverse" icon={<FaLinkedin />} color="text-blue-500" name="LinkedIn" />
            <SocialCard href="https://github.com/synkverse" icon={<FaGithub />} color="text-gray-800" name="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}

// COMPONENTS

function FormField({ label, name, type = "text", required = false, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function SocialCard({ href, icon, color, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
    >
      <div className={`text-4xl ${color}`}>{icon}</div>
      <span className="mt-4 text-lg font-semibold text-gray-700">{name}</span>
    </a>
  );
}
