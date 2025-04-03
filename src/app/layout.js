

import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Md Sizzad Hosen's Portfolio",
  description: "Md Sizzad Hosen's Portfolio",
  icons: {
    icon: "/favicon.ico", // Make sure this file is inside the "public" folder
    apple: "/apple-touch-icon.png", // Optional for Apple devices
  },

};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body  data-theme="" className={`min-h-screen max-w-7xl mx-auto bg-[#0f0f0f] text-white`}>
        <Navbar>{children}</Navbar> 
        <Footer />
      </body>
    </html>
  );
}
