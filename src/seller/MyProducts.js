import React, { useState } from 'react'
import ProductCreateForm from '../product/ProductCreateForm'

export default function MyProducts(props) {
    const [showAddProductForm, setShowAddProductForm] = useState(false)

    console.log(props.product.product.product[0])

    const myProducts = props.product.product.product.map((product, index) => {
      console.log(props.seller.seller._id);
      console.log(product.seller[0]._id)
    if (props.seller.seller._id === product.seller[0]._id)
        return <div key={index}>
            <p>{product.title}</p>
      
            
        </div>
    })
console.log(props)

  return (
    <div>
      <button
        onClick={() => {
          setShowAddProductForm(true);
        }}
      >
        Add Product
      </button>

      {showAddProductForm ? (
        <ProductCreateForm functions={props} seller={props} user={props}></ProductCreateForm>
      ) : (
        <div> </div>
      )}
      <div>{myProducts}</div>
    </div>
  );
}
