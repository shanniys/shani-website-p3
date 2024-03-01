import React from "react";
import Card from 'react-bootstrap/Card';
import './about.css';

  /* Personal Information's icon */
import userIcon from './icon/cy-profile.png';
import birthIcon from './icon/cy-cake.png';
import homeIcon from './icon/cy-location.png';

/* Personal likes icon */
import musicIcon from './icon/cy-music.png';
import cameraIcon from './icon/cy-camera.png';
import bookIcon from './icon/cy-book.png';

/* Skills icon */
import brushIcon from './icon/cy-fountain-pen.png';
import brainIcon from './icon/cy-brain.png';
import codingIcon from './icon/cy-coding.png';
import paletteIcon from './icon/cy-palette.png';

function About() {
    return (
        <div className="center-container">
            <div className="card-container">
                <Card className="home-text-brand" style={{ width: '18rem', backgroundColor: 'transparent', borderColor: 'white', borderStyle: '35px' }}>
                    <Card.Body>
                        <Card.Title className="card-title">PERSONAL INFORMATION</Card.Title>
                        <div className="icon-container">
                            <img src={userIcon} alt="User Icon" className="icon" style={{ width: '50px', height: '50px' }} /> 
                            <p>Ma. Sha Ann A. Arga</p>
                        </div>
                        <div className="icon-container">
                            <img src={birthIcon} alt="Birth Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>April 6, 2001 || 22 years old</p>
                        </div>
                        <div className="icon-container">
                            <img src={homeIcon} alt="Home Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Zone 2, Bigaas Calabanga Camarines Sur</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="card-container">
                <Card className="home-text-brand" style={{ width: '18rem', backgroundColor: 'transparent', borderColor: 'white', borderStyle: '35px' }}>
                    <Card.Body>
                        <Card.Title className="card-title">LIKES</Card.Title>
                        <div className="icon-container">
                            <img src={musicIcon} alt="Music Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Listening</p>
                        </div>
                        <div className="icon-container">
                            <img src={cameraIcon} alt="Camera Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Photography</p>
                        </div>
                        <div className="icon-container">
                            <img src={bookIcon} alt="Book Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Reading</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="card-container">
                <Card className="home-text-brand" style={{ width: '18rem', backgroundColor: 'transparent', borderColor: 'white', borderStyle: '35px' }}>
                    <Card.Body>
                        <Card.Title className="card-title">SKILLS</Card.Title>
                        <div className="icon-container">
                            <img src={brushIcon} alt="Brush Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Calligraphy</p>
                        </div>
                        <div className="icon-container">
                            <img src={brainIcon} alt="Brain Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Logical</p>
                        </div>
                        <div className="icon-container">
                            <img src={codingIcon} alt="Coding Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Coding</p>
                        </div>
                        <div className="icon-container">
                            <img src={paletteIcon} alt="Palette Icon" className="icon" style={{ width: '50px', height: '50px' }} />
                            <p>Designing</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;