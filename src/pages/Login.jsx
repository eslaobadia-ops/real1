import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email); // sets auth state
    navigate("/dashboard"); // 🔥 THIS WAS MISSING
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Jaycrest Group of School</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
