import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project-1" element={<Project1 />} />
      <Route path="project-2" element={<Project2 />} />
      <Route path="project-3" element={<Project3 />} />
      <Route path="project-4" element={<Project4 />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
