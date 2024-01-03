import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarDark } from './components/Navbar';
import Intro from './components/pages/Intro';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Skills from './components/pages/Skills';
import Blogs from './components/pages/Blogs';
import Guest from './components/pages/Guest';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <NavbarDark />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;