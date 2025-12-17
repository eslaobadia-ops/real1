import RequirePayment from "../components/RequirePayment";

export default function Results() {
  return (
    <RequirePayment>
      <div style={{ padding: "40px" }}>
        <h1>Student Results</h1>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>85</td>
              <td>A</td>
            </tr>
            <tr>
              <td>English</td>
              <td>72</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>68</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>
      </div
