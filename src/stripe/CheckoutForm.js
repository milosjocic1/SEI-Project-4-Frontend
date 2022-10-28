
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
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
      //send token to backend here
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="container  stripe">
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <div  class="card stripe-card">
        <h4>Card Details</h4>
      <CardElement />
      </div>
      <h6>Your card will be charged <b>£{props.total}</b></h6>
      <button class="buy-btn">Pay now with Stripe</button>
    </form>
    </div>
  );
};