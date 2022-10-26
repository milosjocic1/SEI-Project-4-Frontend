import React, { useState } from "react";
import ProductCreateForm from "../product/ProductCreateForm";
import "../App.css";
import MyProductList from "./MyProductList";



export default function MyProducts(props) {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

    console.log(props)
    console.log(props.product.seller._id)
        console.log(props.seller.seller._id);
        console.log(props.product.seller[0]);

  console.log(props.product.product.product)

  const myProducts = props.product.product.product.map((product, index) => {
    // console.log(product.seller._id)
    // if (props.product.seller._id === product.seller[0]._id){
      return (
          <MyProductList key={index} {...product} />
      ) 
      } 
  
  ); 
  

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
        <h3>My Listings</h3><br></br><br></br>{myProducts}</div>
    </div>
  );
}