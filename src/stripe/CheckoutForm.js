
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "../App.css";

export const CheckoutForm = (props) => {
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
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:5423/stripe/charge",
          {
            amount: props.total,
            id: id,
          }
        );

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