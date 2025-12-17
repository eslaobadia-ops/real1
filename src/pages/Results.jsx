import RequirePayment from "../components/RequirePayment";

export default function Results() {
  return (
    <RequirePayment>
      <div style={{ padding: 40 }}>
        <h1>Results</h1>
        <p>Mathematics: A</p>
        <p>English: B</p>
      </div>
    </RequirePayment>
  );
}
