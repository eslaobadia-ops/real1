import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Jaycrest Group of School</h2>

        <nav>
          <Link to="/" style={{ marginRight: 20 }}>Dashboard</Link>
          <Link to="/results" style={{ marginRight: 20 }}>Results</Link>
          <Link to="/cbt">CBT</Link>

          {user?.role === "admin" && (
            <Link to="/admin" style={{ marginLeft: 20 }}>
              Admin
            </Link>
          )}
        </nav>
      </header>

      <main style={{ padding: 40 }}>{children}</main>
    </div>
  );
}
