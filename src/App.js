import React, {  useState, useEffect } from "react";
import Axios from 'axios'

// Components
import Home from "./Home";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ProductList from "./product/ProductList";
import Product from "./product/Product";
import ProductCreateForm from "./product/ProductCreateForm";
import SellerDashboard from "./seller/SellerDashboard";




// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Css
import "./App.css";

export default function App() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
      loadProductList();
    }, []);

    // PRODUCTS CRUD

    // PRODUCTS SHOW
    const loadProductList = () => {
      Axios.get("product/index")
        .then((response) => {
          console.log(response.data.products);
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.log("Error Retrieving Producst");
          console.log(error);
        });
    };
    // PRODUCTS DELETE
    const deleteProduct = (id) => {
      Axios.delete(`product/delete?id=${id}`)
      .then(response => {
        console.log("Product deleted successfully")
        console.log(response);
        loadProductList();
      })
      .catch(error => {
        console.log(error)
      })
    }
  
    // WHEN CREATE SELLER/USER READY
    // const loadMyProducts = (seller) => {
    //   console.log(seller)
    //   if(seller.product){
    //     const myProducts = seller.product.map((item, key) => (
    //       <div key={key}>
    //         <p>{item.title}</p>
    //       </div>
    //     ))
    //     return myProducts
    //   }
    // }
    
    // const addSeller = (seller) => {
    //   Axios.post("seller/add")
    // }

     const categories = [
       "Fashion",
       "Electronics",
       "Sports, Hobbies, Leisure",
       "Home and Garden",
       "Motors",
       "Media",
       "Office Supplies",
       "Health and Beauty",
       "Collectables and Art",
     ];

        
    
    const allCategories = categories.map((category, index) => {
      return <a href="/" key={index} className="categories-links">{category} </a>;
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
                <Link to="/productlist"> Product List </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/product"> Single Product </Link>
                &nbsp;&nbsp;&nbsp;
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route
              path="/*"
              element={<Home category={allCategories} />}
            ></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/productlist/*"
              element={<ProductList product={products} />}
            ></Route>
            <Route
              path="/product/:productId"
              element={<Product product={products} category={allCategories} deleteProduct={deleteProduct} />}
            ></Route>
            <Route path="/addproduct" element={<ProductCreateForm />}></Route>
            {/* Below will have to add seller id to this link */}
            <Route
              path="/dashboard"
              element={<SellerDashboard product={products} />}
            ></Route>
          </Routes>
        </div>
        <footer>
          <div className="container d-flex">
            <div className="col-3">
              <img className="logo" alt="agora-logo" src="AGORA-LOGO.png"></img>
            </div>
            <div className="col-3">
              <Link to="/addproduct"> Add a Product </Link>
              <br></br>
              {/* Below will have to add seller id to this link */}
              <Link to="/dashboard"> Seller Dashboard </Link>
              <br></br>
              <a href="/">Link 3</a>
            </div>
            <div className="col-3">
              <a href="/">Link 1</a>
              <br></br>
              <a href="/">Link 2</a>
              <br></br>
              <a href="/">Link 3</a>
            </div>
            <div className="col-3">
              <a href="/">Link 1</a>
              <br></br>
              <a href="/">Link 2</a>
              <br></br>
              <a href="/">Link 3</a>
            </div>
          </div>
          <p className="footer-text">
            Built by Ellinha, Sashinha, Milinhos e Claudinha 2022 - This text
            will be updated.
          </p>
        </footer>
      </Router>
    );
  }



