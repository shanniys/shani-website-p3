import * as React from "react";
import shaniImages from './images/home-img.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "./Home.css"

function Home() {
    return (
        <Container className="d-flex p-2 align-items-md-center">
            <div style={{ float: 'left', marginRight: '20px' }}>
                <Image src={shaniImages} rounded style={{ width: '122%', height: 'auto' }} />
            </div>
            <div>
                <Col className="home-text-brand">
                    <p className="greeting"> Hi there! I'm</p>
                    <p className="name">Ma. Sha Ann Arga</p>
                    <p className="description">Welcome to my personal website</p>

                </Col>
                
            </div>
        </Container>
    );
}
export default Home;