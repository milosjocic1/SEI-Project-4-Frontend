import React, { useState } from "react";
import ProductCreateForm from "../product/ProductCreateForm";
// import ProductEditForm from "../product/ProductEditForm";
import "../App.css";
import MyProductList from "./MyProductList";
// import axios from "axios";

export default function MyProducts(props) {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  // const [showAllItems, setShowAllItems] = useState(allProducts)
  

  // const all

  //   SHOW SELLER RPDOCUTS ONLY

  const myProducts = props.products
    .filter((product) => {
      if (product.seller.length) {
        const { seller } = product;
        const [sellerInfo] = seller;
        const productSellerId = sellerInfo._id;

        return productSellerId === props.seller._id;
      }
    })
    .map((product) => {
      return <MyProductList key={product._id} {...product} />;
    });

  const handleShowAddProductForm = (boolean) => {
    setShowAddProductForm(boolean);
  };
  
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
          seller={props.seller}
          user={props.user}
          handleShowAddProductForm={handleShowAddProductForm}
        />
      ) : (
        <div> </div>
      )}
      
      <div className="row card-group mt-1 mb-3">
        <h3>My Listings</h3>
        <br></br>
        <br></br>
        {!!myProducts.length ? myProducts : <p>No listings yet!</p>}
      </div>
    </div>
  );
}
