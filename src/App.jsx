import Layout from "./components/Layout";
import Results from "./pages/Results";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import Admin from "./pages/Admin";
import CBT from "./pages/CBT";
import RequirePayment from "./components/RequirePayment";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <Routes>
      <Route path="/" element={<StudentDashboard />} />

      <Route
  path="/results"
  element={
    <RequirePayment>
      <Results />
    </RequirePayment>
  }
/>

      <Route
        path="/cbt"
        element={
          <RequirePayment>
            <CBT />
          </RequirePayment>
        }
      />

      <Route
        path="/admin"
        element={
          user.role === "admin" ? <Admin /> : <Navigate to="/" />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
