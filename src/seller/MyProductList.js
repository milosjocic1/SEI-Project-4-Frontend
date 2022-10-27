import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import ProductEditForm from "../product/ProductEditForm";

export default function MyProductList(props) {
  //   EDIT PRODUCTS
  // const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [showEditProductForm, setShowEditProductForm] = useState(false);

  const handleShowEditProductForm = (boolean) => {
    setShowEditProductForm(boolean);
  };

  const editView = (id) => {
    Axios.get(`/product/edit?id=${id}`)
      .then((response) => {
        let product = response.data.product;

        // setIsEdit(true);
        setShowEditProductForm(true);
        setCurrentProduct(product);
        editProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editProduct = (product) => {
    Axios.put(`/product/update`, product)
      .then((response) => {
        console.log(response);
        // loadProductList();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // DELETE PRODUCT

  const deleteProduct = (id) => {
    Axios.delete(`/product/delete?id=${id}`)
      .then((response) => {
        console.log(response);
        //   loadAuthorList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div key={props._id} className="col-md-5 col-lg-4 col-sm-12 mt-3">
      <div className="card">
        <img
          className="card-img-top"
          src={`${props.cloudinary_url}`}
          alt=" "
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subTitle}</p>
          <p className="card-text">Price: £{props.price}</p>
          <div className="row">
            <div className="col-4">
              <Link className="index-price-button view-product-btn m-1" to={`/product/${props._id}`}>
                View
              </Link>
            </div>
            <div className="col-3">
              <Link
                onClick={() => editView(props._id)}
                    // CONTINUE FROM HERE!!!!
                    className="index-price-button m-1 edit-delete-btn"
              >
                Edit
              </Link>
            </div>
            <div className="col-3">
              <Link
                onClick={() => {
                  deleteProduct(props._id);
                }}
                className="index-price-button m-1 edit-delete-btn"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showEditProductForm ? (
        <ProductEditForm
          functions={props}
          seller={props.seller}
          user={props.user}
          handleShowEditProductForm={handleShowEditProductForm}
          key={currentProduct._id} product={currentProduct} editProduct={editProduct}
        />
      ) : (
        <div> </div>
      )}
    </div>
  
  );
}
