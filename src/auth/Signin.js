import "./Auth.css"
import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }
  return (
    <div className="container div-for-sign">
      <div className="row sign">
        <div className="col-md-6 signin-left">
          <h1 className="sign-title">Sign in</h1> <br />
          <br />
          <Container>
            <Form.Group>
              {/* <Form.Label>Email Address</Form.Label> */}
              <Form.Control
                name="emailAddress"
                placeholder="Email"
                onChange={changeHandler}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                name="password"
                placeholder="Password"
                type="password"
                onChange={changeHandler}
              ></Form.Control>
              <p>Forgot your password?</p>
            </Form.Group>
            <div className="button-div">
              <Button className="sign-button" onClick={loginHandler}>
                Log in
              </Button>
            </div>
          </Container>
        </div>
        <div className="col-md-6 signin-right">
          <h1 className="signup-signin-title">New to Agora?</h1> <br />
          <p className="sign-up-white">
            Enter your personal details and get started with us!
          </p>{" "}
          <br />
          <br />
          <div className="button-div">
            <button className="signin-register">
              <Link to="/signup"> Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
