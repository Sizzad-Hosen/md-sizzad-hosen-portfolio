

import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata = {
  metadataBase: new URL("https://md-sizzad-hosen-portfolio.vercel.app"),
  title: {
    default: "Md Sizzad Hosen | Full Stack Developer",
    template: "%s | Md Sizzad Hosen",
  },
  description:
    "Portfolio of Md Sizzad Hosen, a Full Stack Developer focused on MERN, Next.js, scalable web applications, APIs, and responsive user experiences.",
  keywords: [
    "Md Sizzad Hosen",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Bangladesh Software Engineer",
  ],
  openGraph: {
    title: "Md Sizzad Hosen | Full Stack Developer",
    description:
      "MERN and Next.js developer building responsive, accessible, and production-ready web applications.",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Md Sizzad Hosen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sizzad Hosen | Full Stack Developer",
    description:
      "MERN and Next.js developer building responsive, accessible, and production-ready web applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="dark" className="min-h-screen bg-[#0f0f0f] text-white">
        <Navbar>{children}</Navbar> 
        <Footer />
      </body>
    </html>
  );
}
