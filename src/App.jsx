import React from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact /> 
      </BrowserRouter>
  );
};

export default App;
