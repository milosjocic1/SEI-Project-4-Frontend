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

  return (
    <div className="container">
      <Search></Search>
      <div className="categories-single-product">
        <Categories category={props.category}></Categories>
      </div>

      {/* PRODUCT DETAILS */}

      <div className="row d-flex mt-6 product-details-div">
        <p>{thisProduct.subCategory}</p>
        <div className="col-md-5">
          <img
            src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449717/item/goods_00_449717.jpg?width=480&impolicy=quality_70&imformat=chrome"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h1>{thisProduct.title}</h1>
          <h4> {thisProduct.subTitle} </h4> <br />
          <br /> <br /> <br />
          <p>
            Condition: <span>{thisProduct.condition}</span>
          </p>
          <p>
            Sold by: <span>{thisProduct.seller[0].sellerName}</span>
          </p>
          <p>
            Shipping fee to the UK: <span> {thisProduct.shippingRate}</span>
          </p>{" "}
          <br />
          <br />
          <h2>£{thisProduct.price}</h2> <br />
          <button className="buy-btn" onClick={() => {props.buyItem(props.user.id, thisProduct._id); props.counterUp()}}>Buy</button>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h5>Product Description</h5>
        <p>{thisProduct.description}</p>
        <h5>Returns Policy</h5>
        <p>{thisProduct.returnsPolicy}</p>
      </div>
      <Review></Review>
      <div>
        <h5>Recently viewed cards - possibly</h5>
      </div>
    </div>
  );
}


