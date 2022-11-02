
import React, {useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "../App.css";

export const CheckoutForm = (props) => {
  const [showAddSB, setShowAddSB] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        console.log("user id is " + props.user.id)
        const { id } = paymentMethod;
        const response = await axios.post(
          `/stripe/charge?userId=${props.user.id}`,
          {
            amount: props.total,
            id: id,
            userId: props.user.id
          }
        );
        console.log("Stripe 35 | data", response.data);
        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };


  return (
    <div className="container  stripe">
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }} class="stripe-container">
      <h4>Card Details</h4>
      <div  class="card stripe-card">
      <CardElement />
      </div>
      <h6>Your card will be charged <b>£{props.total}</b></h6>
      <button class="buy-btn stripe-btn">Pay now with Stripe</button>
    </form>
    </div>
  );
};