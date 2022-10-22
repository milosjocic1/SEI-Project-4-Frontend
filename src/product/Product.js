import React from 'react'
import Categories from '../components/Categories';
import Search from '../components/Search'

export default function Product(props) {
  return (
    <div className="container">
      <Search></Search>
      <div className="categories-single-product">
        <Categories category={props.category}></Categories>
      </div>
    </div>
  );
}
