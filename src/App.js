import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project-1" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
