"use client";
import { useRouter, usePathname } from "next/navigation";


const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();


  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/skills", title: "Skills" },
    { path: "/projects", title: "Projects" },
    { path: "/services", title: "Services" },
    { path: "/contact", title: "Contact" },
    { path: "/blogs", title: "Blogs" },
  ];

  return (
    <div className=" min-h-screen p-2 max-w-7xl mx-auto text-white">
      {/* Navbar */}
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          
          {/* Left: Logo */}
          <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
            SI<span className="text-2xl text-orange-600">ZZ</span>AD
            
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`px-4 py-2 rounded-md transition ${
                  pathname === item.path ? "bg-gray-700" : "hover:bg-gray-900"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right: Buttons */}
          <div className="space-x-4 ">
            <button 
              onClick={() => router.push("/")} 
              className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-900 transition"
            >
              LET'S TALK
            </button>
            <button 
              onClick={() => router.push("/")} 
              className="px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-900 transition"
            >
              GET MY RESUME
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="p-6 min-h-[400px] rounded-md m-4">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
