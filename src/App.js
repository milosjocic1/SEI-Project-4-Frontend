import React, { Component } from "react";

// Components
import Home from "./Home";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ProductList from "./product/ProductList";


// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Css
import "./App.css";

export default function App() 
  {
     const categories = [
          'Fashion',
          'Electronics',
          'Sports, Hobbies, Leisure',
          'Home and Garden',
          'Motors',
          'Collectables and Art',
          'Office Supplies',
          'Health and Beauty',
          'Media',
        ]

        
    
    const allCategories = categories.map((category) => {
      return category
    })

    console.log(allCategories)
         

    return (
      <Router>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/">
                <img
                  className="logo"
                  alt="agora-logo"
                  src="AGORA-LOGO.png"
                ></img>
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="">
                <Link to="/signin"> Sign In </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/signup"> Sign Up </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/"> Empty link now </Link>&nbsp;&nbsp;&nbsp;
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/*" element={<Home category={allCategories} />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/productlist" element={<ProductList />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }



