import React from 'react'

export default function CartItem(props) {
  

    return (
      <>
      <td>{props.productId.title}</td>
      <td>{props.quantity}</td>
      <td>£{props.productId.price}</td>
      <td>£{props.productId.shippingRate}</td>
      <td>£{(parseInt(props.quantity) * parseInt(props.productId.price)) + parseInt(props.productId.shippingRate)}</td>
      <td><button>remove</button></td>
      </>
      
     )
  }
