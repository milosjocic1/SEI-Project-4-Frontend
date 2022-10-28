
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../App.css";

export const CheckoutForm = () => {
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
    <div className="container">
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <div  class="card">
        <h4>Card Details</h4>
      <CardElement />
      </div>
      <button class="buy-btn">Pay</button>
    </form>
    </div>
  );
};