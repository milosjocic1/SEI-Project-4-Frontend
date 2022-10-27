import React from "react";
import "./User.css";
import Favourite from "./Favourite";
import Reviews from "./Reviews";
import Transaction from "./Transaction";
import Profile from "./Profile";

export default function BuyerAccount(props) {
  return (
    <div className="container">
      <Profile user={props.user} />
      <div className="row mt-5 mb-5 d-flex justify-content-between">
        <Favourite user={props} />
      </div>
      <Transaction user={props} />
    </div>
  );
}
