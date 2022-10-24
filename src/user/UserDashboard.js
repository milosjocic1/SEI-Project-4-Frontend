import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "../product/Product";

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
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
        console.log("hi");
        console.log(response.data.user);
        setSellers(response.data.user);
      })
      .catch((error) => {
        console.log(error);
        console.log("error retrieving user line 40");
      });
  };

  return (
    <div>
      <h1> Hi </h1>
    </div>
  )}