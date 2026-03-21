import { useNavigate } from "react-router";

function RolePage() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <h1>Welcome to VoiceBox</h1>

      <div className="role-buttons">
        <button onClick={() => navigate("/home")}>
          User
        </button>

        <button onClick={() => navigate("/admin-login")}>
          Admin
        </button>
      </div>
    </div>
  );
}

export default RolePage;