import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getMyInfo, refreshToken } from '@/app/_utils/GlobalAPI';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getMyInfo(token);
          setUser(response.data.result);
          startTokenRefresh();
        } catch (error) {
          console.error('Error fetching user data', error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            router.push('/login');
          }
        }
      }
    };

    const startTokenRefresh = () => {
      const token = localStorage.getItem('token');
      if (token) {
        const interval = setInterval(async () => {
          try {
            const newToken = await refreshToken(token);
            localStorage.setItem('token', newToken);
          } catch (error) {
            console.error('Error refreshing token', error);
            if (error.response && error.response.status === 401) {
              localStorage.removeItem('token');
              clearInterval(interval);
              router.push('/login');
            }
          }
        }, 30 * 60 * 1000);
      }
    };

    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error('Error fetching location', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser');
      }
    };

    fetchUserData();
    fetchLocation();
  }, [router]);

  return (
    <AppContext.Provider value={{ user, location }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
