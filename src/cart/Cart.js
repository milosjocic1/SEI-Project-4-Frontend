import React, { useEffect, useState } from "react";
import Axios from "axios";
import CartItem from "../cart/CartItem";
import StripeContainer from "../stripe/StripeContainer";
import { Form, Button} from "react-bootstrap";
import "../App.css";

export default function Cart(props) {

  console.log(props)
  console.log(props.user)

  const [newShipping, setNewShipping] = useState(props.user.shippingAddress);
  const [newBilling, setNewBilling] = useState(props.user.billingAddress);
  const [showAddSB, setShowAddSB] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("checkout-btn");

  const handleShowAddSB = (boolean) => {
    setShowAddSB(boolean);
    setButtonStyle("checkout-btn2");
  };

  const handleShowCheckout = (boolean) => {
    setShowCheckout(boolean);
    setButtonStyle("checkout-btn2");
  };

  const shippingAndBilling = (data) => {
    Axios.post(`/shipping_billing/update/?userId=${props.user.id}`, data, {
      headers: {
        Authorisation: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log("Shipping details updated successfully");
        console.log("response is " + response)
      })
      .catch((error) => {
        console.log("Error editing shipping details");
        console.log(error);
      });
  };

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
    const billing = { ...newBilling };
    billing[attributeToChange] = newValue;
    setNewBilling(billing);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      newShipping: newShipping, 
      newBilling: newBilling
    }  
    shippingAndBilling(data.newShipping,props.user.id);
    shippingAndBilling(data.newBilling,props.user.id);
    event.target.reset();
  };

  const [cart, setCart] = useState([]);
  useEffect(() => {
    loadCartList();
  }, []);

  const loadCartList = () => {
    Axios.get(`/cart/?userId=${props.user.id}`)
      .then(({ data }) => {

        console.log(data.cart.products);
        console.log(data.cart.products[0].productId._id);

        setCart(data.cart);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteItem = (id, productId) => {
    console.log(productId);
    deleteItem(id, productId);
  }
  // DELETE ITEM FROM CARD
  const deleteItem = (id, productId) => {
    Axios.delete(`/cart?userId=${id}&productId=${productId}`)
    .then(response => {
      console.log(response)
      loadCartList()
    })
    .catch(error => {
      console.log(error)
    })
  }

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
    <div className="container">
      <h1>My Cart</h1>
      {parseInt(cart.total) !== 0 ? (
        <div>
          {/* <Table striped responsive="sm"> */}
            {/* <tbody>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Shipping</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </tbody> */}
            {cart.products?.map((item, index) => (
              <div key={index}>{<CartItem {...item} loadCartList={loadCartList} id={cart.products[index].productId._id} userId={props.user.id} handleDeleteItem={handleDeleteItem} counterDown={props.counterDown}/>}</div>
            ))}
          {/* </Table> */}
          <br />
          <div>
            Cart Total: <b>£{cart.total}</b>
          </div>
          <br />

          <Button className={buttonStyle}
            value="showSB"
            onClick={() => {
              handleShowAddSB(true);
            }}
          >
            Continue with Checkout
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      {showAddSB ? (
        <div className="container">
        <br/>
          <h4>Shipping Address</h4>
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
                name="postCodeS"
                type="text"
                onChange={handleChangeS}
              ></Form.Control>
            </Form.Group>

            <h4>Billing Address</h4>
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

            <Button className={buttonStyle}
              value="show checkout"
              type="submit"
              onClick={() => {
                handleShowCheckout(true);
              }}
            >
              Confirm and Go to Payment
            </Button>
          </Form>
        </div>
      ) : (
        <div></div>
      )}
      <br/>
      {showCheckout ? <StripeContainer total={cart.total} user={props.user} cart={cart.products} loadCartList={loadCartList}/> : <div></div>}
    </div>
  );
}
      
 
  