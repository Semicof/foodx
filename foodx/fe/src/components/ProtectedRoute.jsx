import { useAppContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { token } = useAppContext();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return token ? children : null;
};

export default ProtectedRoute;
