"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/skills", title: "Skills" },
    { path: "/projects", title: "Projects" },
    { path: "/services", title: "Services" },
    { path: "/contact", title: "Contact" },
    { path: "/blogs", title: "Blogs" },
  ];

  const handleNavClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen p-2 max-w-7xl mx-auto text-white">
      {/* Navbar */}
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
            SI<span className="text-2xl text-orange-600">ZZ</span>AD
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-md transition ${
                  pathname === item.path ? "bg-gray-700" : "hover:bg-gray-900"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button 
              onClick={() => router.push("/contact")} 
              className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-900 transition"
            >
              LET'S TALK
            </button>
            <a>

            <button 
              onClick={() => router.push("https://drive.google.com/file/d/1HkZL5ZGgMq5D_uzYglqaOMaJf_fd9uBL/view")} 
              className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-900 transition"
            >
              GET MY RESUME
            </button>

            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-md p-4 mx-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left px-4 py-2 rounded-md transition ${
                pathname === item.path ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {item.title}
            </button>
          ))}
          <div className="mt-4 space-y-2">
            <button 
              onClick={() => router.push("/contact")} 
              className="w-full px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-800 transition"
            >
              LET'S TALK
            </button>
            <button 
              onClick={() => router.push("https://drive.google.com/file/d/1HkZL5ZGgMq5D_uzYglqaOMaJf_fd9uBL/view")} 
              className="w-full px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-800 transition"
            >
              GET MY RESUME
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="p-6 min-h-[400px] rounded-md m-4">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
