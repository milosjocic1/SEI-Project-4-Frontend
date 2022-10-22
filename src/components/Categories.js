import React from 'react'

export default function Categories(props) {
    console.log(props.category)
  return (
    <div className="categories-div">
      <h2 className="categories-headline">Browse by Category</h2>
      {props.category}
    </div>
  );
}

