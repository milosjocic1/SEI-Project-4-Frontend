import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import ProductEditForm from "../product/ProductEditForm";

export default function MyProductList(props) {
  //   EDIT PRODUCTS
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const editView = (id) => {
    Axios.get(`/product/edit?id=${id}`)
      .then((response) => {
        let product = response.data.product;

        setIsEdit(true);
        setCurrentProduct(product);
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
          src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449717/item/goods_00_449717.jpg?width=480&impolicy=quality_70&imformat=chrome"
          alt=" "
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subTitle}</p>
          <p className="card-text">Price: {props.price}</p>
          <div className="row">
            <div className="col-4">
              <Link className="index-price-button view-product-btn m-1" to={`/product/${props._id}`}>
                View
              </Link>
            </div>
            <div className="col-3">
              <Link
                onClick={
                  <ProductEditForm
                    key={props._id}
                    product={currentProduct}
                    editProduct={editProduct}
                  />
                  // CONTINUE FROM HERE!!!!
                }
                className="index-price-button m-1 edit-delete-btn"
                to={`/product/edit?id=${props._id}`}
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
    </div>
  );
}
