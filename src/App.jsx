import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Routes, Route } from "react-router-dom";

// Section & Page Imports
import Home from "./sections/Home";
import ReactWeb from "./pages/services/ReactWeb";
import MobileApp from "./pages/services/MobileApp";
import Iot from "./pages/services/Iot";
import Design from "./pages/services/Design";
import CloudSolutions from "./pages/services/CloudSolutions";
import BackendAPI from "./pages/services/BackendAPI";
import AIandML from "./pages/services/AIandML";
import ECommerce from "./pages/services/ECommerce";
import PortfolioWeb from "./pages/services/PortfolioWeb";
import PortfolioShowcase from "./pages/services/PortfolioShowcase";
import PortfolioMedia from "./pages/services/PortfolioMedia";
import InquiryForm from "./sections/InquiryForm";
import Explore from "./sections/Explore";
import Quote from "./pages/services/Quote";
import Ads from "./pages/services/Ads"

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  // Cookie Consent States
  const [cookiePanelOpen, setCookiePanelOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "Stats", to: "projects" },
    { label: "Services", to: "services" },
    { label: "About", to: "about" },
    { label: "Stack", to: "stack" },
    { label: "Industries", to: "industries" },
    { label: "FAQ", to: "faq" },
    { label: "Newsletter", to: "newsletter" },
    { label: "Contact", to: "contact" },
    //{ label: "Team", to: "team" },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Load cookie consent from localStorage
    const consent = localStorage.getItem("synkverse_cookies_accepted");
    if (consent === "true") {
      setCookiesAccepted(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Accept cookies handler
  const acceptCookies = () => {
    localStorage.setItem("synkverse_cookies_accepted", "true");
    setCookiesAccepted(true);
    setCookiePanelOpen(false);
  };

  // Close mobile menu on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col relative">
      {/* Fixed Header */}
      <header className="bg-black shadow-sm fixed inset-x-0 top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-88}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/logos/SynkVerse.png"
              alt="SynkVerse Logo"
              className="h-16 w-auto"
            />
          </ScrollLink>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ label, to }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-88}
                className="text-gray-300 hover:text-gray-400 cursor-pointer"
              >
                {label}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="
              md:hidden 
              text-black
              hover:text-blue-500 
              transition-colors duration-300 
              rounded-lg 
              border border-transparent 
              px-5 py-2.5 
              text-base font-medium 
              bg-white 
              cursor-pointer
              focus:outline-none
            "
            style={{
              outlineOffset: '2px',
            }}
            onFocus={e => e.currentTarget.style.outline = '4px auto'}
            onBlur={e => e.currentTarget.style.outline = 'none'}
          >
            <i
              className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-3xl`}
              aria-hidden="true"
            />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="absolute top-20 right-0 z-50 w-3/4 max-w-xs bg-white shadow-lg rounded-l-xl max-h-[70vh] h-fit overflow-y-auto transition-all duration-300 ease-in-out">
            {/* Nav Links */}
            <nav className="pt-8 pb-6 px-6 flex flex-col gap-5">
              {navLinks.map(({ label, to }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth
                  duration={500}
                  offset={-88}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-blue-800 transition duration-200 cursor-pointer"
                >
                  {label}
                </ScrollLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Push content down below fixed header */}
      <main className="flex-grow pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/react-web" element={<ReactWeb />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/iot" element={<Iot />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/backend-api" element={<BackendAPI />} />
          <Route path="/services/ai-ml" element={<AIandML />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/portfolio-web" element={<PortfolioWeb />} />
          <Route path="/services/portfolio-showcase" element={<PortfolioShowcase />} />
          <Route path="/services/portfolio-media" element={<PortfolioMedia />} />
          <Route path="/inquiry" element={<InquiryForm />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services/quote" element={<Quote />} />
          <Route path="/services/ads" element={<Ads />} />

        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-300 px-6 sm:px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logos/SynkVerse.png"
                alt="SynkVerse Logo"
                className="h-10 w-auto"
              />
              <h2 className="text-xl font-semibold text-white">{/* Add Text */}</h2>
            </div>
            <p className="text-gray-400">
              Crafting intelligent software solutions for a connected future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["services", "about", "faq", "contact"].map((to) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth
                    duration={500}
                    offset={-88}
                    className="hover:text-white cursor-pointer capitalize"
                  >
                    {to}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <p className="text-gray-400 mb-2">
              Email:{" "}
              <a href="mailto:info@synkverse.com" className="hover:text-white">
                info@synkverse.com
              </a>
            </p>
            <p className="text-gray-400 mb-4">Location: London, UK</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-github text-xl"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-instagram text-xl"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SynkVerse. All rights reserved.
        </div>
      </footer>

      {/* Scroll to Top Arrow */}
      {scrollTopVisible && (
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-88}
          className="fixed bottom-22 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition duration-300 ease-in-out cursor-pointer animate-bounce group"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </ScrollLink>
      )}
    </div>
  );
}
