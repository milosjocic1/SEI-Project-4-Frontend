import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "../product/Product";
import "./User.css";

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  // useEffect() - ComponentDidMount
  // React Hooks - Allows to hook the functionality into React

  useEffect(() => {
    // Axios function
    loadDashboard();
  }, []);


    console.log()

  const loadDashboard = () => {
    Axios.get("/user/dashboard")
      .then((response) => {
        let user = response.data.user
        console.log("hi");
        console.log(response.data.user);
        console.log(user)
        setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
        console.log("error retrieving user line 40");
      });
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1> Hi, {currentUser.firstName}! </h1>
          <p>Here is your Dashboard!</p>
          <p>
            You are signed in as a <strong>{currentUser.userRole}</strong>
          </p>
        </div>
        <div className="col-md-8 profile-dashboard">
          <div className="row">
            <div className="col-9">
              <p>
                Name: {currentUser.firstName} {currentUser.lastName}
              </p>
              <p>Email: {currentUser.emailAddress}</p>
              <p>
                <a className="change-password-button" href="/">
                  Change your password
                </a>
              </p>
              <p>Member since: {currentUser.createdAt}</p>
            </div>
            <div className="col-3">
              <img
                alt="profile"
                className="profile-picture"
                src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
              ></img>
              <p>
                <a className="change-password-button" href="/">
                  Edit Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex justify-content-between">
        <div className="col-md-5 profile-dashboard">
          <h3>Your favourite products</h3>
          <p>List of favorite products</p>
          <p>List of favorite products</p>
          <p>List of favorite products</p>
        </div>
        <div className="col-md-5 profile-dashboard">
          <h3>Your reviews</h3>
          <p>List of reviews</p>
          <p>List of reviews</p>
        </div>
      </div>
      <div className="profile-dashboard col-md-12 mb-5">
        <h3>Your recent transactions</h3>
        <p>List of transactions</p>
      </div>
    </div>
  );}