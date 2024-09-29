import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/RetailPOS.css';
import retailPOSImage from '../assets/retailpos.png';

function RetailPOS() {
  const navigate = useNavigate(); 

  const handleRequestDemo = () => {
    navigate('/contact'); 
  };

  return (
    <div className="RetailPOS">
      <NavBar />
      <div className="content">
        <header className="hero-section">
          <h1>Retail POS Solutions</h1>
          <img src={retailPOSImage} alt="Retail POS Solutions" className="retail-pos-image" />
          <p>
            Our Retail POS solutions are designed to streamline your operations, enhance customer experiences, and boost sales. 
            With advanced features and user-friendly interfaces, we help you manage your retail business effectively and efficiently.
          </p>
        </header>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature-card">Real-time Inventory Management</div>
            <div className="feature-card">Customer Relationship Management (CRM)</div>
            <div className="feature-card">Multi-Channel Selling</div>
            <div className="feature-card">Integrated Payment Processing</div>
            <div className="feature-card">Sales Reporting and Analytics</div>
            <div className="feature-card">Employee Management</div>
            <div className="feature-card">Loyalty Program Integration</div>
            <div className="feature-card">Mobile POS Capabilities</div>
          </div>
        </section>

        <section className="details-section">
          <h2>Detail</h2>
          <p>
            HAMSTER POS Retail Software is categorized into Supermarket, Spa & Salon Outlet, Retail Pharmacy, Clothing & Shoe Store, 
            Apparel Store, Healthcare Retail, Optical Retail, and more.
          </p>
        </section>

        <section className="details-section">
          <h2>Precision</h2>
          <p>
            Point of sale software can record transactions, manage inventory, and analyze sales patterns to complete all operations 
            faster without any errors. For today's competitive market, you need accurate data to perform critical business operations, 
            from managing inventory to managing your cash flow.
          </p>
        </section>

        <section className="details-section">
          <h2>Promotions</h2>
          <p>
            Promotions give your customers another reason to come back. Our integrated back office lets you easily set up mix & match, 
            promotions, and other discounts for automated pricing calculations, buy one, get one free, and more. It also allows automated 
            pricing tied to specific dates, days, and periods.
          </p>
        </section>

        <section className="details-section">
          <h2>Speed of Service</h2>
          <p>
            Speed of Service Retail locations are fast-paced, cash-rich environments. Speed of service and reliability are essential 
            in these high-volume environments: whether it's a convenience store or a department store, our Hamster POS software system 
            facilitates excellent customer service even during busy trading periods.
          </p>
        </section>

        <section className="details-section">
          <h2>Real-time Reporting</h2>
          <p>
            It provides an accurate overview of daily operations because the POS system is integrated into the network of your entire business. 
            Reports will be generated instantly and will update all transaction and performance data as it happens.
          </p>
        </section>

        <section className="cta-section">
          <h3>Get Started with Our Retail POS Solutions!</h3>
          <p>Transform your retail experience today. Contact us for a demo!</p>
          <button className="request-demo-button" onClick={handleRequestDemo}>Request Demo</button>
        </section>

        <h2>We are happy to answer your questions</h2>
      </div>
      
      <Footer />
    </div>
  );
}

export default RetailPOS;
