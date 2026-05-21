import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { RoleIllustration } from "../components/illustrations";

const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

function RolePage() {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  return (
    <div className="role-container">
      <button className="theme-toggle role-theme-toggle" onClick={toggle} aria-label="Toggle theme">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>

      {/* illustration sits above content */}
      <div className="role-illustration">
        <RoleIllustration />
      </div>

      <div className="role-eyebrow">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Complaint Management System
      </div>

      <h1>Voice<span>Box</span></h1>
      <p className="role-sub">Raise concerns anonymously. Track every resolution in real time.</p>

      <div className="role-cards">
        <button className="role-card" onClick={() => navigate("/home")}>
          <span className="role-card-icon">🙋</span>
          <span className="role-card-title">User</span>
          <span className="role-card-desc">Submit or track</span>
        </button>
        <button className="role-card gold-card" onClick={() => navigate("/admin-login")}>
          <span className="role-card-icon">🛡️</span>
          <span className="role-card-title">Admin</span>
          <span className="role-card-desc">Manage complaints</span>
        </button>
      </div>
    </div>
  );
}

export default RolePage;
