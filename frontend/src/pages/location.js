import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Location.css'; // Custom CSS for the Location Page

function Location() {
  return (
    <div className="LocationPage">
      <NavBar />
      <div className="location-header">
        <h1>Contact Us</h1>
        <p>Find us at our main location or reach out for more information!</p>
      </div>

      <div className="location-container">
        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.632973122628!2d35.60523107627351!3d33.92233888097245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172adfd65cdb%3A0x4573dc9e90b92952!2sKababji%2C%20Main%20St%2C%20Mtayleb!5e0!3m2!1sen!2slb!4v1696044023928!5m2!1sen!2slb"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Address</h2>
          <p>Mtayleb main road, Kababji building, Hamster POS, 1st floor, Mtayleb, LB</p>
          <h2>Phone</h2>
          <p><a href="tel:+96176671245">+961 76671245</a></p>
          <h2>Email</h2>
          <p><a href="mailto:info@hamsterpos.com">info@hamsterpos.com</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Location;