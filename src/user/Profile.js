import React from "react";

import "./User.css";

export default function Profile(props) {
  return (
    <div>
      <div className="row container">
        <div className="col-md-4 col-sm-12">
          <h1 className="user-name">Hi, {props.user.firstName}</h1>
          <p>Here is your Dashboard!</p>
          <p>
            You are signed in as a{" "}
            <strong className="user-role">{props.user.userRole}</strong>
          </p>
        </div>
        <div className="col-md-8 col-sm-12 profile-dashboard">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <br />
              <p>
                Name: {props.user.firstName} {props.user.lastName}
              </p>
              <p>Email: {props.user.emailAddress}</p>
              <p>Member since: {props.user.createdAt}</p> <br />
              <p>
                <a className="change-password-button" href="/">
                  Change your password
                </a>
              </p>
              <p>
                <a className="change-password-button edit-btn" href="/">
                  Edit Profile
                </a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <img
                alt="profile"
                className="profile-picture"
                src={`${props.user.cloudinary_url}`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
