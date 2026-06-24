import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 👉 simple validation (you can improve later)
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // 👉 fake login success
    alert("Login Successful 🎉");

    // 👉 redirect to home page or products page
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>

      <form onSubmit={handleLogin} className="w-50">

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

      </form>
    </div>
  );
};

export default LoginPage;