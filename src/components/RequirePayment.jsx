import { usePayment } from "../context/PaymentContext";

export default function RequirePayment({ children }) {
  const { paid } = usePayment();

  if (!paid) {
    return (
      <div style={{ padding: 40, fontSize: 22 }}>
        🔒 Access Restricted  
        <br />
        Please pay school fees to continue.
      </div>
    );
  }

  return children;
}
