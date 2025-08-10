
// src/sections/Home.jsx
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
//import Team from "./Team";
import Projects from "./Projects";
// import Testimonials from "./Testimonials"
import ServiceAdBanner from "./ServiceAdBanner";
import Stack from "./Stack"
import Industries from "./Industries";


export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="service-ad"><ServiceAdBanner /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="stack"><Stack /></section>
      <section id="industries"><Industries /></section>
      <section id="faq"><Faq /></section>
      <section id="newsletter"><Newsletter /></section>
      <section id="contact"><Contact /></section>
      
    </>
  );
}
