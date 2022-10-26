import React, {useState} from "react";
import "./Auth.css"
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Axios from 'axios'



export default function Signup(props) {

 const navigate = useNavigate();
  
  const [showBuyer, setShowBuyer] = useState(false)
  // const buyerClick = () => setShowBuyer(true)
  

  const [showSeller, setShowSeller] = useState(false)
  // const sellerClick = () => setShowSeller(true)

  const [newUser, setNewUser] = useState({});

  const [fileInputState, setFileInputState] = useState("")
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();

  const changeHandler = (e) => {
    const user = { ...newUser };
    user[e.target.name] = e.target.value;
    console.log(user);
    console.log(e.target.name)
    console.log(e.target.value);
    setNewUser(user);
  };


  const registerHandler = () => {
    props.register(newUser);
    navigate("/signin");
  };

  
  const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
    }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (e) => {
    console.log("submitting file")
    e.preventDefault();
    if(!previewSource) return;
    uploadImage(previewSource);
  }

  const uploadImage = (base64EncodedImage) => {
    console.log(base64EncodedImage)
  }

  return (
    <div className="signupForm container">
      <h1 className="sign-title">Sign Up</h1>
      {/* <form> */}
      {/* <form method="POST" action="/auth/signup" encType="multipart/form-data"> */}
      <h3 className="sign-up-text">How would you like to sign up today?</h3>
      <br></br>
      <div className="button-div div-spaced">
        <div className="form-check form-check-inline groupOne">
          <a href="#buyer-link">
            <button
              onClick={() => {
                setShowBuyer(true);
                setShowSeller(false);
              }}
              className="sign-button"
              htmlFor="inlineCheckbox1"
              name="userRole"
              defaultValue="buyer"
            >
              Buyer
            </button>
          </a>
          &nbsp; &nbsp;
        </div>
        <div className="form-check form-check-inline groupOne">
          <a href="#seller-link">
            <button
              onClick={() => {
                setShowSeller(true);
                setShowBuyer(false);
              }}
              className="sign-button"
              htmlFor="inlineCheckbox2"
              name="userRole"
              defaultValue="seller"
            >
              Seller
            </button>
          </a>
          &nbsp; &nbsp;
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      {showBuyer ? (
        <div id="buyer-link">
          <form onSubmit={handleSubmitFile}>
            <div>
              <h3>Let's get you signed up so you can start shopping!</h3>
              <br />
              <div className="groupOne group1">
                <input type="hidden" value="buyer" name="userRole"></input>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameInput"
                  name="firstName"
                  placeholder="Enter first name"
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="groupOne group1">
              <input type="hidden" value="seller" name="userRole"></input>
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                  name="lastName"
                  placeholder="Enter last name"
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="groupOne group1">
                <label>Upload a profile photo</label>&nbsp;<br></br>
                <input name="image" type="file" value={fileInputState} onChange={handleFileInputChange}></input>
              </div>
              <div>
              {previewSource && (
        <img src={previewSource} alt="chosen" style={{height: "150px"}}/>
      )}
              </div>
              <div className="grouppOne group1">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="emailAddress"
                  id="emailAddressInput"
                  placeholder="Enter email"
                  onChange={changeHandler}
                ></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  id="passwordInput"
                  placeholder="Password must be more than 6 characters"
                  onChange={changeHandler}
                ></input>
              </div>
              <div>
                <label htmlFor="userRole">
                  You must accept our Terms and Conditions{" "}
                </label>
                <input
                  name="userRole"
                  type="radio"
                  id="userRole"
                  value="buyer"
                  className="radio-button-signup"
                  onChange={changeHandler}
                ></input>
              </div>
              <button className="sign-button" type="button" onClick={registerHandler}>
                Sign up
              </button>
              <br />
              <br />
              <h2>
                Already have an account?<Link to="/signin"> Sign in here</Link>
              </h2>{" "}
              <br />
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      ) : showSeller ? (
        <form>
          <div id="seller-link">
            <h3>
              Let's get you signed up so you can start selling!
            </h3>
            <div className="groupOne group1">
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                name="firstName"
                placeholder="Enter first name"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="groupOne group1">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                name="lastName"
                placeholder="Enter last name"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="groupOne group1">
              <label>Upload a profile photo</label>&nbsp;
              <button variant="primary">+</button>
            </div>
            <div className="groupTwo">
              <label htmlFor="sellerName">Seller Name</label>
              <input
                type="text"
                className="form-control"
                id="sellerNameInput"
                name="sellerName"
                placeholder="Enter seller name"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="groupTwo">
              <label>Add a bio to your shop page</label>
              <textarea
                className="form-control"
                rows="3"
                name="bio"
                placeholder="Max 500 characters"
                onChange={changeHandler}
              ></textarea>
            </div>
            <div className="grouppOne group1">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="emailAddress"
                id="emailAddressInput"
                placeholder="Enter email"
                onChange={changeHandler}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                name="password"
                type="password"
                id="passwordInput"
                placeholder="Password must be more than 6 characters"
                onChange={changeHandler}
              ></input>
            </div>
            <div>
              <label htmlFor="userRole">
                You must accept our Terms and Conditions{" "}
              </label>
              <input
                name="userRole"
                type="radio"
                id="userRole"
                value="seller"
                className="radio-button-signup"
                onChange={changeHandler}
              ></input>
            </div>
            <button className="sign-button" value="submit" onClick={registerHandler}>
              Sign up
            </button>
            <br />
            <br />
            <h2>
              Already have an account?<Link to="/signin"> Sign in here</Link>
            </h2>
            <br />
            <br />
            <br />
            <br />
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}
