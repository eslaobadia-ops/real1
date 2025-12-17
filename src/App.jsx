import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import RequirePayment from "./components/RequirePayment";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Results (payment protected) */}
        <Route
          path="/results"
          element={
            <RequirePayment>
              <Layout>
                <Results />
              </Layout>
            </RequirePayment>
          }
        />

        {/* Admin (role protected) */}
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <Layout>
                <Admin />
              </Layout>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
