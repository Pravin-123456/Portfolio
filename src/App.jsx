import React from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default App;
