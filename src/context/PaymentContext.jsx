import React, { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [fee] = useState(150000); // ₦150,000 default
  const [paid, setPaid] = useState(
    localStorage.getItem("jaycrestPaid") === "true"
  );

  function payFees() {
    setPaid(true);
    localStorage.setItem("jaycrestPaid", "true");
  }

  return (
    <PaymentContext.Provider value={{ fee, paid, payFees }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  return useContext(PaymentContext);
}
