
import React, { Component } from "react";

// Components
import Home from "./Home";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Css
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/">
                <img className='logo' src="AGORA-LOGO.png"></img>
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/"> Empy link now </Link>&nbsp;
                <Link to="/"> Empy link now </Link>&nbsp;
                <Link to="/"> Empy link now </Link>&nbsp;
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

