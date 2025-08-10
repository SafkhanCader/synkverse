import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = {
      "form-name": "newsletter",
      email,
    };

    try {
      // 1. Submit to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData),
      });

      // 2. Send confirmation to YOU (admin)
      await emailjs.sendForm(
        " ",
        " ",
        formRef.current,
        " "
      );

      // 3. Send auto-reply to USER
      await emailjs.send(
        " ",
        " ",
        { email },
        " "
      );

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8">
      <h3 className="text-4xl font-bold mb-6">Stay Updated</h3>
      <p className="text-gray-400 mb-8">
        Subscribe to our newsletter for the latest updates, promotions, and more.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="newsletter"
        method="POST"
        data-netlify="true"
        className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
      >
        <input type="hidden" name="form-name" value="newsletter" />

        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="flex-grow px-4 py-2 rounded text-white bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-400">
          🎉 Thanks for subscribing! Please check your inbox.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-400">
          ⚠️ Something went wrong. Please try again later.
        </p>
      )}
    </section>
  );
}
