import { usePayment } from "../context/PaymentContext";

export default function Admin() {
  const { fee, setFee, resetPayment } = usePayment();

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Panel – Jaycrest</h1>

      <p>School Fees (₦)</p>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={resetPayment}>
        Reset All Student Payments
      </button>
    </div>
  );
}
