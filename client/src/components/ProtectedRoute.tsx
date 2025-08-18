import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Navigate, Outlet } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader2 className="size-6 animate-spin" />
      </div>
    );

  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};
export default ProtectedRoute;
