import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PublicRoutesProps {
  children: JSX.Element;
}

export default function PublicRoutes({ children }: PublicRoutesProps) {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");

  if (user != null) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
