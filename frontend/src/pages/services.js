import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/services.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <NavBar />
      <div className="services-content">
        <h1>Our Services</h1>

        <section className="service-section">
          <h2>Restaurant & Hospitality POS</h2>
          <p>
            Our Restaurant and Hospitality POS solutions are tailored to streamline your operations, improve service efficiency, and enhance the overall customer experience. With intuitive interfaces and robust features, our system ensures seamless management of orders, tables, and payments.
          </p>
          <button onClick={() => window.location.href='/hospitality'}>Learn More</button>
        </section>

        <section className="service-section">
          <h2>Retail POS Solutions</h2>
          <p>
            Our Retail POS systems are designed to meet the unique needs of retailers. From inventory management to customer tracking, we provide a comprehensive solution to help you manage your business more effectively and efficiently.
          </p>
          <button onClick={() => window.location.href='/RetailPOS'}>Learn More</button>
        </section>

        <section className="service-section">
          <h2>Hardware Solutions</h2>
          <p>
            We offer a range of hardware solutions to complement our software offerings. Our POS hardware is reliable, durable, and designed for high performance in busy retail and hospitality environments.
          </p>
          <button onClick={() => window.location.href='/hardware'}>Learn More</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
