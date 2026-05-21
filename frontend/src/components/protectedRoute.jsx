import { Navigate } from "react-router";

function isTokenValid(token) {
  if (!token) return false;
  try {
    // JWT is base64url: header.payload.signature
    const payload = JSON.parse(atob(token.split(".")[1]));
    // check expiry (exp is in seconds)
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!isTokenValid(token)) {
    // clear any bad/expired token
    localStorage.removeItem("token");
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
