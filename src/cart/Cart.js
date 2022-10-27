import React, { useEffect, useState } from "react";
import Axios from "axios";
import CartItem from "../cart/CartItem";

import { Form, Button } from "react-bootstrap";

    export default function Cart(props){

      const [newShipping, setNewShipping] = useState(props.user.shippingAddress);
      const [newBilling, setNewBilling] = useState(props.user.billingAddress);

      const editShipping = (newShipping) => {
        Axios.put('/shipping_billing/update', newShipping, {
            headers: {
                "Authorisation":"Bearer " + localStorage.getItem("token")
            }   
        })
        .then(response => {
            console.log('Shipping details updated successfully');
            console.log(response)
            // loadAuthorList();
        })
        .catch(error => {
            console.log('Error editing shipping details');
            console.log(error)
        })
   }

    const editBilling = (newBilling) => {
      Axios.put('/shipping_billing/update', newBilling, {
          headers: {
              "Authorisation":"Bearer " + localStorage.getItem("token")
          }   
      })
      .then(response => {
          console.log('Billing details updated successfully');
          console.log(response)
          // loadAuthorList();
      })
      .catch(error => {
          console.log('Error editing billing details');
          console.log(error)
      })
}
      
 
      
      const handleChangeS = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const shipping = { ...newShipping };
        shipping[attributeToChange] = newValue;
        setNewShipping(shipping);
      };

      const handleChangeB = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const billing = { ...newBilling};
        billing[attributeToChange] = newValue;
        setNewBilling(billing);
      };

    
      const handleSubmit = (event) => {
        event.preventDefault();
        editShipping(newShipping);
        editBilling(newBilling);
        event.target.reset();
      }

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
            <Button  variant="primary" value="Update Product" >Continue to  Shipping</Button >

          <div className="container">
          <h3>Shipping Address</h3>
          <Form onSubmit={handleSubmit}>

            <Form.Group>  
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                name="addressLine1S"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                name="addressLine2S"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                name="cityS"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>County</Form.Label>
              <Form.Control
                name="countyS"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>PostCode</Form.Label>
              <Form.Control
                name="priceS"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>
            <h3>Billing Address</h3>

            <Form.Group>  
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                name="addressLine1B"
                type="text"
                onChange={handleChangeB}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                name="addressLine2B"
                type="text"
                onChange={handleChangeB}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                name="cityB"
                type="text"
                onChange={handleChangeB}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>County</Form.Label>
              <Form.Control
                name="countyB"
                type="text"
                onChange={handleChangeB}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>PostCode</Form.Label>
              <Form.Control
                name="postCodeB"
                type="text"
                onChange={handleChangeB}
              ></Form.Control>
            </Form.Group>

            <Button variant="primary" value="Update Product" type="submit">
              Checkout
            </Button>
          </Form>
        </div>
        </div>
            <button>Continue to Checkout</button>
          </div>
        );
      }
