import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
    const handleLinkClick = (platform) => {
        console.log(`Navigating to ${platform}`);
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <p>&copy; 2024 All Rights Reserved</p>
                <div className="social-links">
                    <button className="link-button" onClick={() => handleLinkClick('Facebook')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button className="link-button" onClick={() => handleLinkClick('Twitter')}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className="link-button" onClick={() => handleLinkClick('Instagram')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
