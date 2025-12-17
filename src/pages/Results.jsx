import React from "react";
import { usePayment } from "../context/PaymentContext";

export default function Results() {
  const { paid } = usePayment();

  if (!paid) {
    return <h3 style={{ padding: 40 }}>❌ Please pay school fees to view results.</h3>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Results</h2>
      <p>Your academic results will appear here.</p>
    </div>
  );
}
