import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user } = useAuth();
  const isAdmin = user?.email === "admin@jaycrest.com";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside style={{
        width: "220px",
        background: "#000",
        color: "#fff",
        padding: "20px"
      }}>
        <h3>Jaycrest</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
          <Link to="/payments" style={{ color: "#fff" }}>Payments</Link>
          <Link to="/results" style={{ color: "#fff" }}>Results</Link>

          {isAdmin && (
            <>
              <hr />
              <Link to="/admin" style={{ color: "gold" }}>Admin Panel</Link>
            </>
          )}
        </nav>
      </aside>

      {/* PAGE CONTENT */}
      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
}
