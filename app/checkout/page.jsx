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
// app/checkout/page.tsx (or .jsx)
"use client";

import { Suspense, useCallback } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || (() => { 
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined"); 
  })()
);

function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
  }, [orderId, cartId]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

export default function CheckoutPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
