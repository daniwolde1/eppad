"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentCheckoutPage() {
  const params = useSearchParams();
  const membershipId = params.get("membershipId");

  return (
    <Card className="max-w-md mx-auto mt-10 text-center">
      <CardContent className="pt-6">
        <h1 className="text-2xl font-bold mb-4">Stripe Payment Checkout</h1>
        <p className="mb-6">
          Membership ID: <strong>{membershipId}</strong>
        </p>
        <p className="mb-6">
          This is a placeholder page. Next step, we’ll connect this page to Stripe checkout for secure payment.
        </p>
        <Button onClick={() => alert("Stripe integration coming next!")}>
          Proceed to Payment
        </Button>
      </CardContent>
    </Card>
  );
}
