import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer:
      "Projects typically take between 4–12 weeks depending on the complexity, scope, and client collaboration.",
  },
  {
    id: 2,
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React, Next.js, TailwindCSS, Flutter, React Native, and cutting-edge IoT integrations.",
  },
  {
    id: 3,
    question: "Can you handle branding and design?",
    answer:
      "Absolutely. We provide complete design solutions including logo design, UI/UX, wireframes, and brand identity kits.",
  },
  {
    id: 4,
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance, updates, and performance monitoring to ensure your solution stays reliable.",
  },
];

// Individual FAQ item with toggle animation
const FaqItem = React.memo(({ id, question, answer, isOpen, onToggle }) => {
  return (
    <article className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-question-${id}`}
          onClick={onToggle}
          className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-shadow"
        >
          <span>{question}</span>
          <svg
            className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-question-${id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-6 pb-6 text-gray-700 select-text"
          >
            <p>{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  );
});

export default function Faq() {
  const [openId, setOpenId] = useState(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = useCallback(
    (id) => {
      setOpenId((prevId) => (prevId === id ? null : id));
    },
    [setOpenId]
  );

  const toggleForm = () => {
    setShowQuestionForm((prev) => !prev);
    setSubmitted(false); // Reset success message when toggling form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., API call)
    setSubmitted(true);
    setFormData({ name: "", email: "", question: "" });
    setShowQuestionForm(false);
  };

  const faqItems = useMemo(
    () =>
      faqData.map(({ id, question, answer }) => (
        <FaqItem
          key={id}
          id={id}
          question={question}
          answer={answer}
          isOpen={openId === id}
          onToggle={() => toggleFaq(id)}
        />
      )),
    [openId, toggleFaq]
  );

  return (
    <section
      id="faq"
      className="bg-gray-50 text-gray-900 py-24 px-6 sm:px-12 md:px-20 lg:px-32"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to some of the most common questions we receive from clients.
          </p>
        </header>

        {/* FAQ List */}
        <div className="flex flex-col gap-5">{faqItems}</div>

        {/* Ask a Question CTA */}
        <div className="max-w-3xl mx-auto mt-16 px-4 text-center text-black">
          <p className="text-2xl font-semibold mb-2">
            Still have a question or something unclear?
          </p>
          <p className="text-gray-600 mb-6">
            Feel free to ask us directly — we’re happy to help you understand anything better.
          </p>
          <button
            onClick={toggleForm}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition"
            aria-expanded={showQuestionForm}
            aria-controls="question-form"
          >
            {showQuestionForm ? "Hide Question Form" : "Ask Any Questions"}
          </button>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-10 max-w-3xl mx-auto bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-md text-center font-semibold"
              role="alert"
              aria-live="polite"
            >
              Thank you for your question! We will get back to you shortly.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Reveal */}
        <AnimatePresence>
          {showQuestionForm && (
            <motion.form
              id="question-form"
              key="question-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onSubmit={handleSubmit}
              className="mt-10 bg-blue-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
              aria-label="Ask a question form"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Ask Us Anything</h3>

              <label htmlFor="name" className="block mb-2 font-medium text-blue-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 text-blue-900 placeholder-blue-700"
                placeholder="Your full name"
              />

              <label htmlFor="email" className="block mb-2 font-medium text-blue-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 text-blue-900 placeholder-blue-700"
                placeholder="your.email@example.com"
              />

              <label htmlFor="question" className="block mb-2 font-medium text-blue-800">
                Question
              </label>
              <textarea
                id="question"
                name="question"
                rows="4"
                value={formData.question}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-6 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none bg-blue-100 text-blue-900 placeholder-blue-700"
                placeholder="Type your question here..."
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition"
              >
                Submit Question
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
