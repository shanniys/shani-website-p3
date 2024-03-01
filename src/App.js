import './App.css';
import './navbar.css';

import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";

import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import API from "./API";

function App() {
  return (
    
    <div className="App">

<Router>

<Navbar bg="transparent">
  <Container>
    <Navbar.Brand href="home"className="brand-text" style={{ color: 'cyan', fontSize: '26px', textShadow: '50px'  }}>SHANI</Navbar.Brand>
          <Nav className="me-center">
              <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white">Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white">About</Nav.Link>
              <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white">Education</Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white">Contact</Nav.Link>
              <Nav.Link as={Link} to={"/API"} className="text-decoration-none text-white">API</Nav.Link>
          </Nav>
  </Container>
</Navbar>
      
<Container className="mt -5">
  <Row>
    <Col md={12}>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/API" element={<API/>}/>
    </Routes>
    </Col>
  </Row>
  </Container>
</Router>
      <div className="App-background"></div>

    </div>
  );
}
export default App;