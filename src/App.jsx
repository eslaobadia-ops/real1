import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Payments from "./pages/Payments";
import Admin from "./pages/Admin";
import Layout from "./layout/Layout";
import RequireAuth from "./components/RequireAuth";
import RequirePayment from "./components/RequirePayment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Login />} />

        {/* AUTHENTICATED AREA */}
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route
            path="/results"
            element={
              <RequirePayment>
                <Results />
              </RequirePayment>
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
