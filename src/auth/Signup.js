import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export default function Signup(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const registerHandler = () => {
        props.register(newUser)
    }

  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <Form.Group>
          <Form.Label>How would you like to sign up today?</Form.Label><br></br>
          <Button variant="primary" type="checkbox" id="inlineCheckbox1" name="userRole" value="buyer">Buyer</Button>&nbsp; &nbsp;
          <Button variant="primary" type="checkbox" id="inlineCheckbox2" name="userRole" value="seller">Seller</Button><br></br><br></br>
        </Form.Group>
        {/* User Signup */}
        <Form.Text>Let's get you signed up so you can start shopping!</Form.Text>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload a profile photo</Form.Label>&nbsp;
          <Button variant="primary">+</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="sellerName">Seller Name</Form.Label>
          <Form.Control name="sellerName" id="sellerNameInput"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Add a bio to your shop page</Form.Label>
          <Form.Control name="bio"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={registerHandler}>Sign up</Button>
      </Container>
      <Link to="/signin">Signin</Link>&nbsp;

      <h2>Already have an account?<Link to="/signin"> Sign in here</Link></h2>
      
    </div>
  );
}
