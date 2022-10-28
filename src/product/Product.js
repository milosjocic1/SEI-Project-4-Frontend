import React from "react";
import Categories from "../components/Categories";
import Search from "../components/Search";
import Review from "../seller/Review";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const { productId } = useParams();
  const thisProduct = props.product.find(
    (product) => product._id === productId
  );
  console.log(props);

  return (
    <div className="container">
      <Search />
      <div className="categories-single-product">
        <Categories category={props.category}></Categories>
      </div>

      {/* PRODUCT DETAILS */}

      <div className="row d-flex mt-6 product-details-div">
        <p className="subcategories">{thisProduct.subCategory}</p>
        <div className="col-md-6">
          <img
            src={`${thisProduct.cloudinary_url}`}
            alt={`${thisProduct.cloudinary_url}`}
            className="product-image-detail"
          />
        </div>
        <div className="col-md-6">
          <h1>{thisProduct.title}</h1>
          <h4> {thisProduct.subTitle} </h4> <br />
          <br /> <br /> <br />
          <p>
            Condition:{" "}
            <span>
              <strong>{thisProduct.condition}</strong>
            </span>
          </p>
          <p>
            Sold by:{" "}
            <span>
              <strong>{thisProduct.seller[0].sellerName}</strong>
            </span>
          </p>
          <p>
            Shipping fee to the UK:{" "}
            <span>
              {" "}
              <strong>£{thisProduct.shippingRate}</strong>{" "}
            </span>
          </p>{" "}
          <br />
          <br />
          <h2>£{thisProduct.price}</h2> <br />
          <button
            className="buy-btn"
            onClick={() => {
              props.buyItem(props.user.id, thisProduct._id);
              props.counterUp();
            }}
          >
            Buy
          </button>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h2>Product Description</h2>
        <p>{thisProduct.description}</p> <br />
        <h2>Returns Policy</h2>
        <p>{thisProduct.returnsPolicy}</p>
      </div>
      <Review></Review>
      <div>
        <h5>Recently viewed cards - possibly</h5>
      </div>
    </div>
  );
}
