import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export default function StudentProtection({ element }) {
  const { user } = useContext(AuthContext);

  if (!user || user.type != "student") {
    return <Navigate to="/login" replace />;
  }

  return element;
}
