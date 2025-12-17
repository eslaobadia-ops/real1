import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePayment } from "../context/PaymentContext";

export default function StudentDashboard() {
  const { logout } = useAuth();
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
        <Link to="/results">Results</Link>
        <br />
        <Link to="/cbt">CBT Exam</Link>
      </nav>

      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}
