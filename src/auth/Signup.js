import React, {useState} from "react";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export default function Signup() {
  
  const [showBuyer, setShowBuyer] = useState(false)
  // const buyerClick = () => setShowBuyer(true)

  const [showSeller, setShowSeller] = useState(false)
  // const sellerClick = () => setShowSeller(true)


  return (
    <div className="signupForm">

      <h2>Sign Up</h2>
      <form method="POST" action="/auth/signup" encType="multipart/form-data">
      <h3>How would you like to sign up today?</h3><br></br>
        <div className="form-check form-check-inline groupOne">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="userRole" defaultValue="buyer"></input>
          <button onClick={() => setShowBuyer(true)} className="form-check-label" htmlFor="inlineCheckbox1">Buyer</button>
          &nbsp; &nbsp;
        </div>
        <div className="form-check form-check-inline groupOne">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="userRole" defaultValue="seller"></input>
          <button onClick={() => setShowSeller(true)} className="form-check-label" htmlFor="inlineCheckbox2">Seller</button>
          &nbsp; &nbsp;
        </div>
        {
          showBuyer? 
          <div>
        <h3>Let's get you signed up so you can start shopping!</h3>
        <div className="groupOne group1">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstNameInput" name="firstName" placeholder="Enter first name"></input>
        </div>
        <div className="groupOne group1">
          <label>Last Name</label>
          <input type="text" className="form-control" id="lastNameInput" name="lastName" placeholder="Enter last name" ></input>
        </div>
        <div className="groupOne group1">
          <label>Upload a profile photo</label>&nbsp;
          <button variant="primary">+</button>
        </div>
        <div className="groupTwo">
          <label htmlFor="sellerName">Seller Name</label>
          <input type="text" className="form-control" id="sellerNameInput" name="sellerName" placeholder="Enter seller name"></input>
        </div>
        <div className="groupTwo">
          <label>Add a bio to your shop page</label>
          <textarea className="form-control" rows="3" name="bio" placeholder="Max 500 characters"></textarea>
        </div>
        <div className="grouppOne group1">
          <label htmlFor="emailAddress">Email Address</label>
          <input type ="email" className="form-control" name="emailAddress" id="emailAddressInput" placeholder="Enter email"></input>
        </div>
        <div>
          <label htmlFor="passowrd">Password</label>
          <input className="form-control" name="password" type="password" id="passwordInput" placeholder="Password must be more than 6 characters" ></input>
        </div>
        <button variant="primary" >Sign up</button>
      <h2>Already have an account?<Link to="/signin"> Sign in here</Link></h2>
      </div>
      : null
    }
    </form>
    </div>
  );
}
