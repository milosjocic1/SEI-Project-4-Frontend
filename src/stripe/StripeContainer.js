import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../stripe/CheckoutForm";

const PUBLIC_KEY = "pk_test_51Lw9TvHUgNwNJdr54LEFuED1VU7NMKosZg58j0EpzHajUT6qMYbPBclcIpfSaBXgVevZWYtO5PFr8UX33KhCxRc100mvUYxKOC";
console.log(PUBLIC_KEY)

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function Stripe(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm  total={props.total}/>
    </Elements>
  );
};

