import { Link } from "react-router-dom";
import { usePayment } from "../context/PaymentContext";

export default function StudentDashboard() {
  const { paid, payFees, fee } = usePayment();

  return (
    <div style={{ padding: 40 }}>
      <h1>Student Dashboard</h1>

      {!paid && (
        <>
          <p>School Fees: ₦{fee}</p>
          <button onClick={payFees}>Pay Fees</button>
        </>
      )}

      <hr />

      <nav>
        <Link to="/cbt">CBT Exam</Link>
        <br />
        <Link to="/results">Results</Link>
      </nav>
    </div>
  );
}
