// import React, { useState } from 'react'
// import ProductCreateForm from '../product/ProductCreateForm'

// export default function MyProducts(props) {
//     const [showAddProductForm, setShowAddProductForm] = useState(false)

//     console.log(props.product.product.product[0])

//     const myProducts = props.product.product.product.map((product, index) => {
//       console.log(props.seller.seller._id);
//       console.log(product.seller[0]._id)
//     if (props.seller.seller._id === product.seller[0]._id)
//         return <div key={index}>
//             <p>{product.title}</p>
      
            
//         </div>
//     })
// console.log(props)

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setShowAddProductForm(true);
//         }}
//       >
//         Add Product
//       </button>

//       {showAddProductForm ? (
//         <ProductCreateForm functions={props} seller={props} user={props}></ProductCreateForm>
//       ) : (
//         <div> </div>
//       )}
//       <div>{myProducts}</div>
//     </div>
//   );
// }
import React, { useState } from "react";
import ProductCreateForm from "../product/ProductCreateForm";
import "../App.css";
import MyProductList from "./MyProductList";



export default function MyProducts(props) {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

    console.log(props)
  console.log(props.product.product.product[0]);
  // console.log(props.seller.seller._id);
  // console.log(product.seller[0]._id)
  const myProducts = props.product.product.product.map((product, index) => {
   
    // if (props.seller.seller._id === product.seller[0]._id)
      return (
          <MyProductList key={index} {...product} />
      );
  });

  const handleShowAddProductForm = (boolean) => {
    setShowAddProductForm(boolean);
   }
  console.log(props);

  return (
    <div>
      <button
      className="index-price-button add-product"
        onClick={() => {
          setShowAddProductForm(true);
        }}
      >
        Add a Product!
      </button>

      {showAddProductForm ? (
        <ProductCreateForm
          functions={props}
          seller={props}
          user={props}
          handleShowAddProductForm={handleShowAddProductForm}
        ></ProductCreateForm>
      ) : (
        <div> </div>
      )}
      <div className="row card-group mt-1 mb-3">
        <h3>My Listings</h3><br></br><br></br>{myProducts}</div>
    </div>
  );
}