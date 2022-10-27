import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../stripe/CheckoutForm";

const PUBLIC_KEY = `${process.env.STRIPE_PUBLIC_KEY}`;
console.log(PUBLIC_KEY)

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function Stripe() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

