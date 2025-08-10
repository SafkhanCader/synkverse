import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 bg-gray-100 hover:bg-gray-200 transition duration-200 flex justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
      >
        <span className="font-medium text-lg">{question}</span>
        <span className="ml-4 text-blue-600 text-xl">
          {isOpen ? <i className="fas fa-minus-circle" /> : <i className="fas fa-plus-circle" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700"
          >
            <p className="leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
