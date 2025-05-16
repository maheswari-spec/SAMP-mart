import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface AdminRoutesProps {
  children: JSX.Element;
}

export default function AdminRoutes({ children }: AdminRoutesProps) {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");
  console.log(user);

  if (!user || user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
}
