import React from "react";
import { usePayment } from "../context/PaymentContext";

export default function Payment() {
  const { fee, paid, payFees } = usePayment();

  return (
    <div style={{ padding: 40 }}>
      <h2>School Fees Payment</h2>
      <p>Amount: ₦{fee.toLocaleString()}</p>

      {paid ? (
        <p style={{ color: "green" }}>✅ Fees Paid</p>
      ) : (
        <button onClick={payFees}>Pay Now</button>
      )}
    </div>
  );
}
