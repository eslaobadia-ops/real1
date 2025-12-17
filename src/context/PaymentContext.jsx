import { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [fee, setFee] = useState(250000); // admin can change
  const [paid, setPaid] = useState(
    JSON.parse(localStorage.getItem("jaycrestPaid")) || false
  );

  function payFees() {
    setPaid(true);
    localStorage.setItem("jaycrestPaid", true);
  }

  function resetPayment() {
    setPaid(false);
    localStorage.removeItem("jaycrestPaid");
  }

  return (
    <PaymentContext.Provider
      value={{ fee, setFee, paid, payFees, resetPayment }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  return useContext(PaymentContext);
}
