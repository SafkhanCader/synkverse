import React from "react";
import { FaCloud, FaServer, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CloudSolutions() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 sm:px-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Scalable, Secure <span className="text-blue-400">Cloud Solutions & DevOps</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Deploy and maintain robust cloud infrastructures with AWS, Azure, or Google Cloud.
            Automate releases with CI/CD and container orchestration for seamless scaling.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="relative">
          <img
            src="/images/cloud-devops-illustration.png"
            alt="Cloud Solutions and DevOps"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Why Choose SynkVerse for Cloud?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          We deliver scalable, secure cloud infrastructure solutions with automation and monitoring.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaCloud />}
            title="Multi-Cloud Expertise"
            desc="AWS, Azure, Google Cloud setups tailored to your needs."
          />
          <FeatureCard
            icon={<FaServer />}
            title="Infrastructure Automation"
            desc="CI/CD pipelines, Infrastructure as Code (Terraform, CloudFormation)."
          />
          <FeatureCard
            icon={<FaTools />}
            title="Containerization & Orchestration"
            desc="Docker and Kubernetes for resilient, scalable deployments."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Transform Your Cloud Infrastructure</h4>
        <p className="text-white/80 mb-6 text-lg">
          Let SynkVerse optimize your cloud setup for performance, security, and scalability.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-black font-medium text-white rounded-full hover:bg-gray-900 transition"
        >
          Contact Us →
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
