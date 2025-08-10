import React from "react";
import { FaMicrochip, FaCloud, FaNetworkWired, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Iot() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Smart <span className="text-blue-400">IoT Integration</span> Solutions
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Connect and control devices seamlessly with custom dashboards, embedded systems, and smart interfaces.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Discuss Your IoT Project
          </Link>
        </div>
        <div className="relative">
          <img
            src="/service/IotImage.png"
            alt="IoT integration"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Why Choose SynkVerse for IoT?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          We deliver secure, scalable, and connected systems designed for real-world efficiency and innovation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaMicrochip />}
            title="Embedded Systems"
            desc="Custom firmware and hardware integrations tailored to your devices."
          />
          <FeatureCard
            icon={<FaCloud />}
            title="Cloud Connectivity"
            desc="Robust cloud solutions for device management, data streaming, and control."
          />
          <FeatureCard
            icon={<FaNetworkWired />}
            title="Network Security"
            desc="Secure communication protocols and encryption for peace of mind."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Data Privacy"
            desc="Compliance with industry standards to protect your users’ data."
          />
          <FeatureCard
            icon={<FaTachometerAlt />}
            title="Real-Time Monitoring"
            desc="Live dashboards and alerts for instant insight into your systems."
          />
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
        <p className="text-gray-400 mb-8">
          Technologies and platforms powering our IoT solutions:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/raspberry-pi.svg" alt="Raspberry Pi" className="h-12" />
          <img src="/logos/arduino.svg" alt="Arduino" className="h-12" />
          <img src="/logos/aws-iot.svg" alt="AWS IoT" className="h-12" />
          <img src="/logos/mqtt.svg" alt="MQTT" className="h-12" />
          <img src="/logos/docker.svg" alt="Docker" className="h-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Bring Your Devices to Life</h4>
        <p className="text-white/80 mb-6 text-lg">
          Custom IoT solutions that connect hardware and software seamlessly to transform your business.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Let’s Build Together →
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
      <div className="text-blue-400 text-3xl mb-4">{icon}</div>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
