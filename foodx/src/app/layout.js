"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { UserLocationContext } from "../../context/UserLocationContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [userLocation,setUserLocation] = useState({});

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    });
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
            <NavBar />
            {children}
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
