import React, {  useState, useEffect } from "react";
import Axios from 'axios'

// Components
import Home from "./Home";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ProductList from "./product/ProductList";
import Product from "./product/Product";
import ProductCreateForm from "./product/ProductCreateForm";
import SellerDashboard from "./seller/SellerAccount";
import UserDashboard from "./user/UserDashboard";
import jwt_decode from "jwt-decode";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  

} from "react-router-dom";

// Css
import "./App.css";

export default function App() {


  // ADD USER
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);
  

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = jwt_decode(token);
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else if (!user) {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, []);

console.log(user)
  const registerHandler = (user) => {
    Axios.post("/auth/signup", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginHandler = (cred) => {

    Axios.post("/auth/signin", cred)
      .then((response) => {
        console.log(response)
        console.log(response.data.token);

        if (response.data.token != null) {
          localStorage.setItem("token", response.data.token);
          let user = jwt_decode(response.data.token);
          setIsAuth(true);
          setUser(user);
          console.log(user);
        
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    setMessage("User logged out successfully");
    loadProductList();
  };

  //  const errMessage = message ? (
  //    <Alert variant="danger"> {message}</Alert>
  //  ) : null;

  // console.log(user.user);

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
    return (
      <a href="/" key={index} className="categories-links">
        {category}{" "}
      </a>
    );
  });

  const [products, setProducts] = useState([]);

  console.log(products)
  useEffect(() => {
    loadProductList();
  }, []);

  // PRODUCTS CRUD

  // PRODUCTS SHOW
  const loadProductList = () => {
    Axios.get("/product/index")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log("Error Retrieving Products");
        console.log(error);
      });
  };
  // PRODUCTS DELETE
  const deleteProduct = (id) => {
    Axios.delete(`/product/delete?id=${id}`)
      .then((response) => {
        console.log("Product deleted successfully");
        console.log(response);
        loadProductList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  console.log(allCategories);

  return (
    <Router>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">
              <img className="logo" alt="agora-logo" src="AGORA-LOGO.png"></img>
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              {isAuth ? (
                <div>
                  <Link to="/"> HOME </Link>
                  {user ? "Welcome " + user.user.name : null}&nbsp;
                  <Link to="/user/dashboard"> MY ACCOUNT </Link>
                  <Link to="/productlist"> Product List </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/product"> Single Product </Link>
                  <Link to="/logout" onClick={onLogoutHandler}>
                    Logout
                  </Link>{" "}
                </div>
              ) : (
                <div>
                  <Link to="/signin"> Sign In </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/signup"> Sign Up </Link>&nbsp;&nbsp;&nbsp;
                  {/* {user.userRole === "seller" ? (
                    <Link to="/seller/dashboard"> Seller Dashboard </Link>
                  ) : (
                    <Link to="/user/dashboard"> User Dashboard </Link>
                  )} */}
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/productlist"> Product List </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/product"> Single Product </Link>
                  &nbsp;&nbsp;&nbsp;
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/*" element={<Home category={allCategories} />}></Route>
          <Route
            path="/signin"
            element={<Signin login={loginHandler} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup register={registerHandler} />}
          ></Route>
          <Route
            path="/productlist/*"
            element={<ProductList product={products} />}
          ></Route>
          <Route
            path="/product/:productId"
            element={
              <Product
                product={products}
                category={allCategories}
                deleteProduct={deleteProduct}
              />
            }
          ></Route>
          <Route path="/addproduct" element={<ProductCreateForm />}></Route>
          {/* Below will have to add seller id to this link */}
          {/* <Route
            path="/seller/dashboard"
            element={<SellerDashboard user={user} product={products} />}
          ></Route> */}
          <Route
            path="/user/dashboard"
            element={<UserDashboard user={user} product={products} />}
          ></Route>
          <Route path="/logout"></Route>
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
            <Link to="/user/dashboard"> User Dashboard </Link>
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
          Built by Ellinha, Sashinha, Milinhos e Claudinha 2022 - This text will
          be updated.
        </p>
      </footer>
    </Router>
  );
}



