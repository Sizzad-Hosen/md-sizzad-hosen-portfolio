"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems, siteProfile } from "@/data/site";

const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen mx-auto text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0f]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            aria-label="Go to homepage"
            className="rounded-md px-0 py-0 text-xl font-bold tracking-wide hover:text-blue-300"
            onClick={() => router.push("/")}
          >
            SI<span className="text-2xl text-blue-500">ZZ</span>AD
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname === item.path
                    ? "bg-white text-zinc-950"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button 
              onClick={() => router.push("/contact")} 
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:border-white/40 hover:bg-white/10"
            >
              Contact Me
            </button>
            <button 
              onClick={() => window.open(siteProfile.resumeUrl, "_blank", "noopener,noreferrer")}
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
            >
              Download Resume
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-2xl text-white hover:bg-white/10"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

      {isOpen && (
        <div className="mx-4 mb-4 space-y-3 rounded-lg border border-white/10 bg-zinc-900 p-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full rounded-md px-4 py-2 text-left transition ${
                pathname === item.path ? "bg-white text-zinc-950" : "hover:bg-white/10"
              }`}
            >
              {item.title}
            </button>
          ))}
          <div className="grid gap-2">
            <button 
              onClick={() => router.push("/contact")} 
              className="w-full rounded-full border border-white/15 px-4 py-2 hover:bg-white/10"
            >
              Contact Me
            </button>
            <button 
              onClick={() => window.open(siteProfile.resumeUrl, "_blank", "noopener,noreferrer")}
              className="w-full rounded-full bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-400"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
      </header>

      <main className="mx-auto min-h-[400px] max-w-7xl px-4 py-8 sm:px-6">
        {children}
      </main>
    </div>
  );
};

export default Navbar;
