import { Axios } from 'axios'
import React from 'react'
export default function CartItem(props) {
    return (
      <>
      <td>{props.productId.title}</td>
      <td>{props.quantity}</td>
      <td>{props.productId.price}</td>
      <td><button onClick={() => {
                  props.deleteItem(props.user.id, props.productId._id);
                }}>remove</button></td>
      </>
     )
  }