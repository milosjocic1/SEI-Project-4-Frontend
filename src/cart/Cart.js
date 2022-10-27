import React, { useEffect, useState } from "react";
import Axios from "axios";
import CartItem from "../cart/CartItem";
export default function Cart(props) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    loadCartList();
  }, []);
  const loadCartList = () => {
    Axios.get(`/cart/?userId=${props.user.id}`)
      .then(({ data }) => {
        console.log(data.cart.products);
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


  const deleteItem = (id, productId) => {
    Axios.delete(`/cart?userId=${id}&?productId=${productId}`)
      .then((response) => {
        console.log(response);
        //   loadAuthorList();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const myProducts = cart.products?.map((item, index) => (
    <tr key={index}>{<CartItem {...item} user={props.user} deleteItem={deleteItem}/>}</tr>
  ));

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </tbody>
        {myProducts}
      </table>
      <button>Checkout</button>
    </div>
  );
}
