import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: JSX.Element;
}

export default function ProtetectedRoutes({ children }: ProtectedRoutesProps) {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");

  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
