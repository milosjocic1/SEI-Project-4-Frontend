import React, { useEffect, useState } from "react";
import Axios from "axios";
import BuyerAccount from "./BuyerAccount";
import SellerAccount from "../seller/SellerAccount";

import "./User.css";

export default function UserDashboard(props) {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [seller, setSeller] = useState({})
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  // useEffect() - ComponentDidMount
  // React Hooks - Allows to hook the functionality into React

  console.log(props)
  useEffect(() => {
    // Axios function
    loadDashboard(props.user.user.id);
  }, []);



  const loadDashboard = (id) => {
    Axios.get(`/user/dashboard/?userId=${id}`)
      .then((response) => {
        let user = response.data.user
        console.log("hi");
        console.log(response.data.user);
        let seller = response.data.seller;
        console.log(seller);
        console.log(user)
        setCurrentUser(user);
        setSeller(seller)
      })
      .catch((error) => {
        console.log(error);
        console.log("error retrieving user line 40");
      });
  };
  

  return (
    <div>
      {(currentUser.userRole === "buyer") ? 
        <BuyerAccount user={currentUser} product={props}></BuyerAccount>
     : 
        <SellerAccount seller={seller} user={currentUser} product={props}></SellerAccount>
      }
      
    </div>
  );}