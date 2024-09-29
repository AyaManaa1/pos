import React from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 
import '../styles/About.css'; 
import PizzaHut from '../assets/pizzahut.png';
import Skechers from '../assets/sk.png';
import HugoBoss from '../assets/HugoBoss.png';

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about-content">
        <h1>About Hamster POS</h1>
        <p>
          Welcome to Hamster POS! We are dedicated to providing innovative and efficient point-of-sale systems for businesses of all sizes. Our solutions are designed to streamline operations and enhance customer experiences.
        </p>
        
        <h2 className="services-title">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Intuitive Point-of-Sale Software</h3>
            <p>Seamless integration and user-friendly interface for efficient sales management.</p>
          </div>
          <div className="service-item">
            <h3>Inventory Management</h3>
            <p>Keep track of stock levels and manage inventory effortlessly.</p>
          </div>
          <div className="service-item">
            <h3>Customer Relationship Management</h3>
            <p>Enhance customer engagement and improve retention with our CRM tools.</p>
          </div>
          <div className="service-item">
            <h3>Analytics and Reporting Tools</h3>
            <p>Get insights into sales trends and performance with powerful analytics.</p>
          </div>
          <div className="service-item">
            <h3>24/7 Customer Support</h3>
            <p>Reliable support to ensure your business runs smoothly at all times.</p>
          </div>
        </div>

        <h2>Our Clients</h2>
        <p>
          We are proud to serve a diverse range of clients across various industries. Here are some of our valued clients:
        </p>
        <div className="client-photos">
          <img src={PizzaHut} alt="Pizza Hut" className="client-photo" />
          <img src={Skechers} alt="Skechers" className="client-photo" />
          <img src={HugoBoss} alt="Hugo Boss" className="client-photo" />
        </div>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about our solutions, feel free to reach out to us!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
