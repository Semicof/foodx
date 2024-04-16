"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components-home/Header";
import Footer from "./_components-home/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
