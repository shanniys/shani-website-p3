import React from "react";
import Card from 'react-bootstrap/Card';
import './contact.css';
import facebookIcon from './icon/cy-facebook.png';
import instagramIcon from './icon/cy-instagram.png';
import githubIcon from './icon/cy-github.png';

function Contact() {
    return (
        <div className="contact-container">
            <div className="card-container">
                <Card className="contact-card">
                    <Card.Body>
                        <h2 className="card-title">You may contact at:</h2>
                        <div className="contact-icons">
                            <a href="https://www.facebook.com/xiahanne.w" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <img src={facebookIcon} alt="Facebook Icon" className="icon" />
                            </a>
                            <a href="https://www.instagram.com/xiahanne_" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <img src={instagramIcon} alt="Instagram Icon" className="icon" />
                            </a>
                            <a href="https://github.com/shanniys" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <img src={githubIcon} alt="GitHub Icon" className="icon" />
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Contact;