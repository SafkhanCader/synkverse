import React, { useState } from "react";
import { BadgePercent, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Ads() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    discountCode: "SYNK20",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const navigate = useNavigate();

  // Discount calculator state
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("20");
  const [finalPrice, setFinalPrice] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        ...formData,
      }).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (!isNaN(price) && !isNaN(discount)) {
      const discountAmt = (price * discount) / 100;
      const final = price - discountAmt;
      setDiscountAmount(discountAmt.toFixed(2));
      setFinalPrice(final.toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-gray-900">
      <div className="w-full max-w-4xl bg-blue-50 border border-blue-200 rounded-3xl shadow-xl p-8 space-y-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          🎉 Get Your Exclusive Discount with SynkVerse!
        </h1>
        <p className="text-center text-blue-800 max-w-2xl mx-auto">
          We’re offering a <span className="font-bold text-blue-600">20% discount</span> on your first project — whether you're launching a startup, refreshing your site, or developing an app.
        </p>

        {/* How It Works */}
        <div className="bg-white p-6 rounded-xl shadow-inner border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Fill in your name, email, and business type.</li>
            <li>We’ll contact you within 24 hours.</li>
            <li>Use the discount code below during your consultation.</li>
          </ol>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-500">Thank You! ✅</h2>
            <p className="text-gray-700">
              We’ve received your details. Our team will be in touch shortly!
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full text-white font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form
            name="discount-inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Netlify Hidden Fields */}
            <input type="hidden" name="form-name" value="discount-inquiry" />
            <input type="hidden" name="bot-field" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-blue-900">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-blue-900">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 font-medium text-blue-900">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+123456789"
                />
              </div>

              {/* Business */}
              <div>
                <label className="block mb-1 font-medium text-blue-900">Business Type</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Startup / E-commerce / SaaS"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-blue-900">Anything Else You’d Like Us to Know?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Project goals, timeline, ideas, etc."
                className="w-full p-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Discount Code Display */}
            <div className="flex items-center space-x-3 mt-4">
              <BadgePercent className="text-blue-500 w-6 h-6" />
              <span className="text-lg font-semibold text-blue-900">Your Discount Code:</span>
              <span className="bg-blue-100 px-3 py-1 rounded-lg text-blue-700 font-mono tracking-wide">
                {formData.discountCode}
              </span>
            </div>
            <div className="text-sm text-blue-700 mt-2">
              Use this code during your consultation to redeem your discount.
            </div>

            {/* Discount Calculator */}
            <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-inner">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Discount Calculator</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="Original Price"
                  className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  placeholder="Discount %"
                  className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={calculateDiscount}
                  type="button"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition"
                >
                  Calculate
                </button>
              </div>

              {finalPrice && (
                <div className="text-xl mt-4 text-blue-800 text-center space-y-2">
                  <p className="text-green-800"><strong>You Save:</strong> ${discountAmount}</p>
                  <p><strong>Final Price:</strong> ${finalPrice}</p>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-bold text-white transition"
            >
              Claim My Discount Now
            </button>
          </form>
        )}

        {/* FAQ Section */}
        <div className="mt-10 bg-blue-100 p-6 rounded-xl shadow-inner">
          <button
            onClick={() => setShowFAQ(!showFAQ)}
            className="flex items-center space-x-2 text-blue-800 font-semibold text-lg"
          >
            <HelpCircle className="w-5 h-5" />
            <span>{showFAQ ? "Hide FAQs" : "Need Help? View FAQs"}</span>
          </button>

          {showFAQ && (
            <div className="mt-4 space-y-4 text-blue-900">
              <div>
                <strong>Q: Is this offer limited?</strong>
                <p>A: Yes! This 20% discount is only available for a limited time. Don’t miss out!</p>
              </div>
              <div>
                <strong>Q: What kind of projects qualify?</strong>
                <p>
                  A: Any new project we haven’t worked on with you before — from branding to app dev!
                </p>
              </div>
              <div>
                <strong>Q: How long does it take to hear back?</strong>
                <p>A: You’ll usually get a response from our team within 1 business day.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
