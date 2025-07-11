import { useState } from "react";
import React from "react";
import Header from "./components/header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
