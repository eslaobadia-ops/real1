import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import Admin from "./pages/Admin";
import CBT from "./pages/CBT";
import Results from "./pages/Results";
import Payment from "./pages/Payment";
import Layout from "./components/Layout";
import RequirePayment from "./components/RequirePayment";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  // If not logged in, show login page only
  if (!user) return <Login />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <StudentDashboard />
          </Layout>
        }
      />

      <Route
        path="/payment"
        element={
          <Layout>
            <Payment />
          </Layout>
        }
      />

      <Route
        path="/results"
        element={
          <Layout>
            <RequirePayment>
              <Results />
            </RequirePayment>
          </Layout>
        }
      />

      <Route
        path="/cbt"
        element={
          <Layout>
            <RequirePayment>
              <CBT />
            </RequirePayment>
          </Layout>
        }
      />

      <Route
        path="/admin"
        element={
          user.role === "admin" ? (
            <Layout>
              <Admin />
            </Layout>
          )
