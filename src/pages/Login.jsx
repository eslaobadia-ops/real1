import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  function handleLogin() {
    if (!email) return alert("Enter email");
    login(email);
  }

  return (
    <div style={{ padding: 60 }}>
      <h1>Jaycrest Group of School</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
