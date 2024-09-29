import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/hardware.css'; 
import HardwareImage from '../assets/hardware.png';

const Hardware = () => {
  return (
    <>
      <NavBar />
      <main className="hardware-content">
        <h1>Hardware POS</h1>
        <img src={HardwareImage} alt="POS Hardware setup including terminals and peripherals" className="hardware-image" />
        <p>
          All Hamster POS hardware products come with a 2-year warranty.
        </p>
        <h2>POS Terminal & Peripherals</h2>
        <p>
          Our hardware offerings include a comprehensive range of point-of-sale equipment, laptops, tablets, KDS screens, and various POS items designed to enhance your business operations.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Hardware;
