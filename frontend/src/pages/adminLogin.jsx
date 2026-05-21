import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";
import { AdminIllustration } from "../components/illustrations";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) { setError("Please fill in all fields"); return; }
    try {
      const res = await api.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="form-card" onSubmit={handleLogin}>
        <div className="form-card-icon"><AdminIllustration /></div>
        <h2 className="form-card-title">Admin Login</h2>
        <p className="form-card-sub">Restricted access — authorised personnel only</p>
        <div className="form-divider" />

        <label className="field-label">Username</label>
        <input
          className="field-input"
          type="text"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="field-label">Password</label>
        <input
          className="field-input"
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-gold" style={{ marginTop: "0.25rem" }}>
          Sign In
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;
