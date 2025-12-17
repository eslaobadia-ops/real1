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

  // Not logged in → show login only
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
