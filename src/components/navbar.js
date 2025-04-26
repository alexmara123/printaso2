// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>Printaso</h1>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#token">Our Token</a>
        <a href="#mission">Mission</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
