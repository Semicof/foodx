"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components_home/Header";
import Footer from "./_components_home/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div>
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
