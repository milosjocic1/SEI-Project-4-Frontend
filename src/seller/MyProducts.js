import React, { useState } from "react";
import ProductCreateForm from "../product/ProductCreateForm";
import "../App.css";
import MyProductList from "./MyProductList";



export default function MyProducts(props) {
  const [showAddProductForm, setShowAddProductForm] = useState(false);




    let userId = props.user.product.user.user.id;
    
    console.log(userId)
    let productUserId = props.product.user._id;
    
    const newTry = props.product.product.product.map((product, index) => {
        console.log(product.seller[0].id)
        if(product.seller[0]._id.toString() == userId.toString()) {
            console.log("match")
        } else {
            console.log("No")
        }
    
    })


  const handleShowAddProductForm = (boolean) => {
    setShowAddProductForm(boolean);
   }

  return (
    <div>
      <button
      className="index-price-button add-product"
        onClick={() => {
          setShowAddProductForm(true);
        }}
      >
        Add a Product!
      </button>

      {showAddProductForm ? (
        <ProductCreateForm
          functions={props}
          seller={props}
          user={props}
          handleShowAddProductForm={handleShowAddProductForm}
        ></ProductCreateForm>
      ) : (
        <div> </div>
      )}
      <div className="row card-group mt-1 mb-3">
        <h3>My Listings</h3><br></br><br></br>{newTry}</div>
    </div>
  );
      }