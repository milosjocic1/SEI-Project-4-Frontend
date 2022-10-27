import React, { useEffect, useState } from "react";
import Axios from "axios";
import CartItem from "../cart/CartItem";
    export default function Cart(props){
      const [cart, setCart] = useState([]);
      useEffect(() => {
        loadCartList();
      }, []);
      const loadCartList = () => {
        Axios.get(`/cart/?userId=${props.user.id}`)
          .then(({data}) => {
            console.log(data.cart.products)
            setCart(data.cart);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      // const removeItem = () => {
      //   Axios.delete(`/cart/?userId=${props.user.id}?productId=${props.productId._id}`)
      //   .then(({data}) => {
      //     console.log(data.cart.products)
      //     loadCartList()
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      // }
        return (
          <div>
            <table>
                <tbody>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Shipping</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </tbody>
                {cart.products?.map((item, index) => (
                <tr key={index}>
                    {<CartItem {...item}/>}
                </tr>
                ))}
            </table>
            <br/>
            <div>Cart Total: £{cart.total}</div>
            <br/>
            <button>Continue to Checkout</button>
          </div>
        );
      }
