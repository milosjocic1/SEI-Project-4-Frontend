import React from 'react'
import { Form, Button, Table } from "react-bootstrap";
export default function CartItem(props) {
  

    return (
      <>
      <td>{props.productId.title}</td>
      <td>{props.quantity}</td>
      <td>£{props.productId.price}</td>
      <td>£{props.productId.shippingRate}</td>
      <td>£{(parseInt(props.quantity) * parseInt(props.productId.price)) + parseInt(props.productId.shippingRate)}</td>
      <td><Button className='remove-cart' variant="primary" value="remove">remove</Button></td>
      </>
      
     )
  }
