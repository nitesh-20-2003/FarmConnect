/**
 * direct payment from front end to stripe is not so secure so i am going to use an routing intead
 * instead of direct sending request ill send it first to my route defined than it to the stripe API
 * +--------+    Fetch clientSecret    +--------+   Request        +---------+
| Client | -----------------------> | Server | ---------------> | Stripe  |
|        |                          |        |                  |  API    |
|        |                          |        | <--------------- |         |
|        | <----------------------- |        |   clientSecret   |         |
|        |  clientSecret response   |        |                  |         |
+--------+                          +--------+                  +---------+
 */
"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");
  // !located in search params of create order action

  const fetchClientSecret = useCallback(
    async () => {
      // Create a Checkout Session
      const response = await axios.post("/api/payment", {
        orderId: orderId,
        cartId: cartId,
      });
      return response.data.clientSecret;
    },
    []
  );

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}