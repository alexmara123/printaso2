// src/App.js
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TokenFeatures from './components/TokenFeatures';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Empowering Creators in the Web3 Era</h2>
        <p>Own your creations, earn your worth, and shape the future of the creator economy. Join Printaso today!</p>
        <button className="cta-button">Join the Revolution</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Our Story</h2>
        <p>We saw a broken system where creators, artists, and innovators were undervalued...</p>
      </section>

      {/* Token Features Section */}
      <section id="token" className="token-features">
        <TokenFeatures />
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to empower creators...</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
