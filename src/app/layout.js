"use client"

import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark component as mounted on client
  }, []);
  return (
    <html lang="en">
      <body  data-theme="" className={`min-h-screen max-w-7xl mx-auto bg-[#0f0f0f] text-white${mounted ? "" : ""}`}>
        <Navbar>{children}</Navbar> 
        <Footer />
      </body>
    </html>
  );
}
