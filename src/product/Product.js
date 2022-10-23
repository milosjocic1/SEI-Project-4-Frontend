import React from 'react'
import Categories from '../components/Categories';
import Search from '../components/Search'
import Review from '../seller/Review';

export default function Product(props) {
  return (
    <div className="container">
      <Search></Search>
      <div className="categories-single-product">
        <Categories category={props.category}></Categories>
      </div>
      {/* PRODUCT DETAILS */}

      <div className="row d-flex mt-6 product-details-div">
        <p>Subcategory</p>
        <div className="col-md-5">
          <img
            src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449717/item/goods_00_449717.jpg?width=480&impolicy=quality_70&imformat=chrome"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h1>Product Title</h1>
          <h4> Product Subtitle </h4> <br />
          <br /> <br /> <br/>
          <p>
            Condition: <span>Used</span>
          </p>
          <p>
            Sold by: <span>Seller Name</span>
          </p>
          <p>
            Shipping fee to the UK: <span> $3</span>
          </p> <br/><br/>
          <h2>$100</h2> <br/>
          <button className='buy-btn'>Buy</button>
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <h5>Product Description</h5>
        <p>Details - Description</p>
        <h5>Returns Policy</h5>
        <p>Policy goes here</p>
      </div>
      <Review></Review>
      <div>
        <h5>
          Recently viewed cards - possibly
        </h5>
      </div>
    </div>
    
  );
}
