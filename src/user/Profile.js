import React from 'react'

import "./User.css";

export default function Profile(props) {

  console.log(props)
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h1>Hi, {props.user.user.firstName}</h1>
          <p>Here is your Dashboard!</p>
          <p>
            You are signed in as a <strong>{props.user.user.userRole}</strong>
          </p>
        </div>
        <div className="col-md-8 profile-dashboard">
          <div className="row">
            <div className="col-9">
              <p>
                Name: {props.user.user.firstName} {props.user.user.lastName}
              </p>
              <p>Email: {props.user.user.emailAddress}</p>
              <p>
                <a className="change-password-button" href="/">
                  Change your password
                </a>
              </p>
              <p>Member since: {props.user.user.createdAt}</p>
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
    </div>
  );
}
