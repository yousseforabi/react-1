import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Color from './pages/Color.jsx';
import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/color" element={<Color />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;