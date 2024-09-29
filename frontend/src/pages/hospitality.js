import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Modal from 'react-modal';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Hospitality.css'; 
import hospitalityImage from '../assets/hospitality.png'; 
import orderOnlineImage from '../assets/onlineOrder.png'; 
import KDS from '../assets/KDS.png';
import TableRes from '../assets/TableRes.png';
import QR from '../assets/QR.png';
import loyalty from '../assets/loyalty.png';
import rapport from '../assets/rapport.png';
import review from '../assets/review.png';

Modal.setAppElement('#root'); 
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
  },
};

function Hospitality() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const products = [
    {
      image: orderOnlineImage,
      title: 'Online Ordering',
      description: 'Branded restaurant website. Bring your own online presence to life with a personalized online food ordering system.',
    },
    {
      image: KDS,
      title: 'Logiciel d\'affichage de cuisine KDS',
      description: 'Powerful display system that enhances kitchen efficiency.',
    },
    {
      image: TableRes,
      title: 'Table Reservation',
      description: 'Take control by seamlessly managing table reservations and guest details without having to write anything down. Manage table reservations online across multiple locations.',
    },
    {
      image: QR,
      title: 'QR Digital Menu',
      description: 'Describe your product or give more information.',
    },
    {
      image: loyalty,
      title: 'Loyalty System',
      description: 'Start rewarding your customers with a personalized points and rewards program.',
    },
    {
      image: rapport,
      title: 'Rapports Web',
      description: 'Suitable for owners and managers, the Hamster POS web application displays all your business reports and notifications, whether you manage a single outlet or a multi-concept, multi-branch environment.',
    },
    {
      image: review,
      title: 'Avis et Commentaires des Clients',
      description: 'Stand out to your potential customers with HAMSTER POS review management software. Asking your customers for reviews has never been easier!',
    },
  ];

  const openModal = (product) => {
    if (product.title === 'Online Ordering') {
      setModalContent({
        title: product.title,
        description: (
          <ul>
            <li>Online table reservation</li>
            <li>Online ordering</li>
            <li>Intuitive dashboards</li>
            <li>Define delivery zones</li>
            <li>Marketing tools</li>
            <li>Accept payments online</li>
            <li>POS & Delivery Integration</li>
            <li>Restaurant Chains</li>
          </ul>
        ),
      });
    } else if (product.title === "Logiciel d'affichage de cuisine KDS") {
      setModalContent({
        title: product.title,
        description: (
          <ul>
            <li>Powerful display system</li>
            <li>Automatic Schedule Order Notifications</li>
            <li>Show Ingredients and Preparation Method</li>
            <li>Highlight Overdue Items</li>
            <li>Notifications and Display of Performance and Accuracy</li>
            <li>Chef Pass</li>
          </ul>
        ),
      });
    } else if (product.title === 'Table Reservation') {
      setModalContent({
        title: product.title,
        description: (
          <ul>
            <li>Deliver great experiences from table to edge</li>
            <li>Delight your guests with ordering at the table</li>
            <li>Send orders directly to the kitchen to spend more time with guests and increase table turnovers</li>
            <li>Customize your workflow to increase upselling and average check size</li>
            <li>Add modifiers and notes to accommodate special requests</li>
            <li>Inform your guests immediately if an item is out of stock</li>
            <li>Checks split by seat or by group</li>
          </ul>
        ),
      });
    } else if (product.title === 'QR Digital Menu') {
      setModalContent({
        title: product.title,
        description: (
          <ul>
            <li>Flexible API to adapt to changing business needs and new customer trends</li>
            <li>HAMSTER Marketplace helps discover new integration opportunities</li>
            <li>Schedule a free consultation to find the perfect combination of POS system integrations for your business</li>
          </ul>
        ),
      });
    } else if (product.title === 'Loyalty System') {
      setModalContent({
        title: product.title,
        description: (
          <ul>
            <li>Redeeming Rewards</li>
            <li>Spending Campaigns</li>
            <li>Black List</li>
            <li>Sponsorship Program</li>
            <li>VIP Levels</li>
          </ul>
        ),
      });
    } else {
      setModalContent({
        title: product.title,
        description: product.description,
      });
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleRequestDemo = () => {
    navigate('/contact'); 
  };

  return (
    <div className="Hospitality">
      <NavBar />
      <div className="content">
        <h1>Restaurant & Hospitality POS Solutions</h1>
        <div className="hospitality-container">
          <img src={hospitalityImage} alt="Restaurant and Hospitality" className="hospitality-image" />
          <p>
            Explore our tailored solutions for the restaurant and hospitality industry. We utilize top-quality, hotel-grade materials in the design of our point-of-sale systems, ensuring you can provide exceptional guest experiences, whether at the table, on the patio, or online. Rely on HAMSTER POS platforms to be the backbone of your catering and hospitality operations.
          </p>
        </div>
        {/* Orange container */}
        <div className="orange-container">
          <h2>Your Restaurant POS Companion</h2>
          <p>Point of Sale, Back Office, Accounting, CRM, Online Ordering, QR Digital Menu, and many others!</p>
          <p className="demo-text">THE FREEDOM TO WORK SMARTER AND FASTER WITH HAMSTER POS</p>
          <button className="request-demo-button" onClick={handleRequestDemo}>Request Demo</button>
        </div>
        <div className="additional-info">
          <h3>Effortless POS Solutions for Seamless Business Operations!</h3>
          <p>
            Hamster POS empowers your business to thrive, both in the dining room and off-premises. We provide essential capabilities and top-tier integrations that enhance customer experiences, including online ordering, omnichannel order management, takeaway and delivery, loyalty programs, gift options, and contactless payments. Let us handle your business operations, so you can focus on your guests!
          </p>
          <h4>FRONT OF HOUSE</h4>
          <ul>
            <li>Order at the table</li>
            <li>Online order</li>
            <li>Payments</li>
            <li>Delivery</li>
            <li>Loyalty</li>
          </ul>
          <h4>BACK OF HOUSE</h4>
          <ul>
            <li>Kitchen automation</li>
          </ul>
          <h4>BACK OFFICE</h4>
          <ul>
            <li>Menu Management</li>
            <li>Labor & Scheduling</li>
            <li>Inventory Control</li>
            <li>Reporting & Analytics</li>
            <li>Accounting</li>
          </ul>
        </div>
        <div className="products-section">
          <h3>Our Products</h3>
          {products.map((product, index) => (
            <div className="product" key={index} onClick={() => openModal(product)}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Product Details"
        >
          <h2>{modalContent.title}</h2>
          <div>{modalContent.description}</div>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default Hospitality;
