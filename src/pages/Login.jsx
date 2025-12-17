import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;

    if (email.includes("admin")) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Jaycrest Group of School</h1>
      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Email" required />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
