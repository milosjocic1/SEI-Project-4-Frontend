import React from 'react'
import '../ProductList.css'
import Search from '../components/Search';
import { Link } from "react-router-dom";

export default function ProductList(props) {
 
console.log(props.product)

const allProducts = props.product.map((product) => (
  <div key={product._id} className="col-lg-4 col-sm-12 mt-3">
    <div className="card">
      <img
        className="card-img-top"
        src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449717/item/goods_00_449717.jpg?width=480&impolicy=quality_70&imformat=chrome"
        alt=" "
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.subTitle}</p>

        <Link className='index-price-button' to={`/product/${product._id}`}>{product.price}</Link>
      </div>
    </div>

  </div>
));

  return (
    <div className="container">
      <div>
        <Search></Search>
        <div className='row card-group mt-1 mb-3'>{allProducts}</div>
      </div>  
    </div>
  );
}
