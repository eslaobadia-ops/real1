import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Payments from "./pages/Payments";
import RequireAuth from "./components/RequireAuth";
import RequirePayment from "./components/RequirePayment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Login />} />

        {/* AUTH ONLY */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* AUTH + PAYMENT */}
        <Route
          path="/results"
          element={
            <RequirePayment>
              <Results />
            </RequirePayment>
          }
        />

        <Route
          path="/payments"
          element={
            <RequireAuth>
              <Payments />
            </RequireAuth>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
