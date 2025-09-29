import React from 'react';
import 'animate.css'; // For simple animations (optional, run `npm install animate.css` if not installed)

const Hero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/dogi.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '80px 20px',
      }}
    >
      <div
        className="p-4 rounded animate__animated animate__fadeIn"
        style={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <h1 className="display-3 fw-bold mb-4">DES SECURITY SERVICES</h1>
        <p className="lead mb-4">Your Safety, Our Priority</p>
        <a href="/contact" className="btn btn-primary btn-lg px-4">
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
