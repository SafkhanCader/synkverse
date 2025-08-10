import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-white px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Get a Free <span className="text-blue-600">Quote</span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          Tell us about your project and we’ll get back to you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mt-16 bg-white p-10 rounded-2xl shadow-2xl"
        >
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900">Success!</h3>
          <p className="mt-3 text-gray-600">
            Thank you for submitting your project. We'll be in touch soon.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-600 hover:to-blue-600 text-white transition"
          >
            Explore More
          </button>
        </motion.div>
      ) : (
        <motion.form
          name="quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-12"
        >
          {/* Netlify hidden inputs */}
          <input type="hidden" name="form-name" value="quote" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-blue-900">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-blue-900">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="synkverse@example.com"
                required
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="bblock mb-1 font-medium text-blue-900">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Company or Brand or Any"
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-blue-900">Service Interested In</label>
              <select
                name="service"
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

            <div>
              <label className="block mb-1 font-medium text-blue-900">Budget Range</label>
              <select
                name="budget"
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a budget range</option>
                <option value="Open to discuss">Open to discuss</option>
                <option value="$200 - $500">$200 - $500</option>
                <option value="$500 - $800">$500 - $800</option>
                <option value="$800 - $1,000">$800 - $1,000</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">More than $10,000</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-blue-900">Timeline</label>
              <select
                name="timeline"
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a timeline</option>
                <option value="Minimum from 2 weeks">Minimum from 2 weeks</option>
                <option value="Less than 1 month">Less than 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mt-6 mb-1 font-medium text-blue-900">Project Description</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your project..."
              className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="relative px-8 py-3 text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-600 hover:to-blue-600 font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <ImSpinner2 className="animate-spin text-white text-xl" />
                  Submitting...
                </>
              ) : (
                "Request Quote"
              )}
            </button>
          </div>
        </motion.form>
      )}
    </section>
  );
};

export default Quote;
