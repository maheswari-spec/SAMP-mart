import { useEffect, useState, type JSX } from "react";

import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface PublicRoutesProps {
  children: JSX.Element;
}

export default function PublicRoutes({ children }: PublicRoutesProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  });

  if (isLoggedIn != null) {
    toast.error(`You're already logged In`);
    return <Navigate to="/home" replace />;
  }

  return children;
}
