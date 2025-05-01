import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
  );
};

export default App;
