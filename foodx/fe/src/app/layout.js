"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components_home/Header";
import Footer from "./_components_home/Footer";
import { AppProvider } from "@/context/AppProvider";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
