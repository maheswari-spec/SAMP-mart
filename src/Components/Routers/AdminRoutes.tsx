import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";

interface AdminRoutesProps {
  children: JSX.Element;
}

export default function AdminRoutes({ children }: AdminRoutesProps) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true); // <- Added loading state

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === "admin@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false); // <- Auth check complete
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading admin access...</p>; // Or a spinner
  }

  if (!isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
