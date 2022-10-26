import React, {  useState } from 'react'
import Axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';


export default function MyProductList(props) {
//   console.log(props);

  //   EDIT PRODUCTS
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const editView = (id) => {
    Axios.get(`/product/edit?id=${id}`)
      .then((response) => {
        console.log(response.data.product);
        let product = response.data.product;
        console.log("Loaded Product Information");
        setIsEdit(true);
        setCurrentProduct(product);
      })
      .catch((error) => {
        console.log("Error loading product information");
        console.log(error);
      });
  };
  const editProduct = (product) => {
    Axios.put("/product/update", product)
      .then((response) => {
        console.log("Product Updated Successfully!");
        console.log(response);
        // loadProductList();
      })
      .catch((error) => {
        console.log("Error editing product");
        console.log(error);
      });
  };
  // DELETE PRODUCT

  const deleteProduct = (id) => {
    Axios.delete(`/product/delete?id=${id}`)
      .then((response) => {
        console.log("Product deleted successfully!");
        console.log(response);
        //   loadAuthorList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div key={props._id} className="col-lg-4 col-sm-12 mt-3">
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
            <div className="col-5">
              <Link className="index-price-button" to={`/product/${props._id}`}>
                View
              </Link>
            </div>
            <div className="col-3">
              <Link
                className="index-price-button edit-delete-btn"
                to={`/product/${props._id}`}
              >
                Edit
              </Link>
            </div>
            <div className="col-4">
              <Link onClick={() => {deleteProduct(props._id)}}
                className="index-price-button edit-delete-btn"
                
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
