import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { refreshToken } from "@/app/_utils/GlobalAPI";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const router = useRouter();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }

    const startTokenRefresh = () => {
      const interval = setInterval(async () => {
        if (token) {
          try {
            const newToken = await refreshToken(token);
            localStorage.setItem("token", newToken);
            setToken(newToken);
          } catch (error) {
            console.error("Error refreshing token", error);
            if (error.response && error.response.status === 401) {
              localStorage.removeItem("token");
              setToken("");
              clearInterval(interval);
              router.push("/login");
            }
          }
        }
      }, 30 * 60 * 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    };

    startTokenRefresh();

    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error fetching location", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
      }
    };

    fetchLocation();
  }, [token, router]);

  return (
    <AppContext.Provider value={{ token, location }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
