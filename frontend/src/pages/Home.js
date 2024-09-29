import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Super from '../assets/supermarket.png';
import Elec from '../assets/electronic-store.png';
import Clothing from '../assets/clothing-store.png';
import Gift from '../assets/gift_toy.png';
import Book from '../assets/book.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>HamsterPOS - Your Smart Business Solution</title>
        <meta name="description" content="Welcome to HamsterPOS, the smart business solution for your retail and hospitality needs." />
        <meta property="og:title" content="HamsterPOS" />
        <meta property="og:description" content="Your Smart Business Solution" />
        <meta property="og:image" content={Super} />
      </Helmet>
      
      <NavBar />

      <div className="full-page-background">
        <div className="left-content">
          <h1>WELCOME TO HAMSTER POS!</h1>
          <h2>Your Smart Business Solution</h2>
        </div>

        <div className="right-content">
          <div className="image-gallery">
            <img src={Super} alt="Supermarket system" />
            <img src={Elec} alt="Electronic POS" />
            <img src={Clothing} alt="Clothing POS" />
            <img src={Gift} alt="Gift Toy" />
            <img src={Book} alt="Book POS" />
          </div>
          <div className="services">
            <div className="service">
              <h3>
                <Link to="/hospitality">Restaurant & Hospitality POS</Link>
              </h3>
            </div>
            <div className="service">
              <h3>
                <Link to="/RetailPOS">Retail POS</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
