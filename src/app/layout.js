

import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";


export const metadata = {
  title: "Md Sizzad Hosen's Portfolio",
  description: "Md Sizzad Hosen's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body  data-theme="" className={`min-h-screen max-w-7xl mx-auto bg-[#0f0f0f] text-white`}>
        <Navbar>{children}</Navbar> 
        <Footer />
      </body>
    </html>
  );
}
