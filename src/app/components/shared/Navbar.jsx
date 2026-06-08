"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Command, Download, Menu, Sparkles, X } from "lucide-react";
import { navItems, siteProfile } from "@/data/site";
import { useRecruiterMode } from "@/hooks/useRecruiterMode";
import CommandPalette from "./CommandPalette";

const shortcutLabel = "Ctrl K";

const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const handleNavClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <button
            aria-label="Go to homepage"
            className="group flex items-center gap-2 rounded-md px-0 py-0 text-left"
            onClick={() => router.push("/")}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/10 text-sm font-black text-blue-200">
              SZ
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold tracking-wide">Md Sizzad</span>
              <span className="block text-xs text-zinc-500 group-hover:text-zinc-300">
                MERN / Next.js
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname === item.path
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-pressed={isRecruiterMode}
              onClick={toggleRecruiterMode}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isRecruiterMode
                  ? "border-blue-300 bg-blue-500 text-white"
                  : "border-white/15 text-zinc-200 hover:bg-white/10"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Recruiter Mode
            </button>
            <button
              type="button"
              onClick={() => setIsPaletteOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              <Command className="h-4 w-4" />
              <span>{shortcutLabel}</span>
            </button>
            <a
              href={siteProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Open command palette"
              onClick={() => setIsPaletteOpen(true)}
              className="rounded-md border border-white/10 p-2 text-white hover:bg-white/10"
            >
              <Command className="h-5 w-5" />
            </button>
            <button
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md border border-white/10 p-2 text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="mx-4 mb-4 space-y-3 rounded-lg border border-white/10 bg-zinc-950 p-4 lg:hidden">
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
            <button
              type="button"
              aria-pressed={isRecruiterMode}
              onClick={toggleRecruiterMode}
              className={`w-full rounded-full px-4 py-2 font-semibold ${
                isRecruiterMode ? "bg-blue-500 text-white" : "border border-white/15 text-white"
              }`}
            >
              {isRecruiterMode ? "Recruiter Mode On" : "Recruiter Mode Off"}
            </button>
            <a
              href={siteProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-blue-500 px-4 py-2 text-center font-semibold hover:bg-blue-400"
            >
              Download Resume
            </a>
          </div>
        )}
      </header>

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        isRecruiterMode={isRecruiterMode}
        toggleRecruiterMode={toggleRecruiterMode}
      />

      <main className="mx-auto min-h-[400px] max-w-7xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
};

export default Navbar;
