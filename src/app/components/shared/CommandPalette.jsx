"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Download,
  Github,
  Home,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { siteProfile } from "@/data/site";

const baseCommands = [
  { label: "Go to Home", hint: "Open homepage", path: "/", icon: Home },
  { label: "Go to About", hint: "Read professional summary", path: "/about", icon: UserRound },
  { label: "Go to Skills", hint: "View technical stack", path: "/skills", icon: Wrench },
  { label: "Go to Projects", hint: "Review case studies", path: "/projects", icon: Briefcase },
  { label: "Go to Contact", hint: "Send a message", path: "/contact", icon: Mail },
  { label: "Download Resume", hint: "Open resume in a new tab", external: siteProfile.resumeUrl, icon: Download },
  { label: "Open GitHub", hint: "View code profile", external: siteProfile.socials.github, icon: Github },
  { label: "Open LinkedIn", hint: "View professional profile", external: siteProfile.socials.linkedin, icon: Linkedin },
];

export default function CommandPalette({
  isOpen,
  onClose,
  isRecruiterMode,
  toggleRecruiterMode,
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = useMemo(
    () => [
      {
        label: isRecruiterMode ? "Turn Recruiter Mode Off" : "Turn Recruiter Mode On",
        hint: "Switch homepage scan mode",
        action: toggleRecruiterMode,
        icon: Sparkles,
      },
      ...baseCommands,
    ],
    [isRecruiterMode, toggleRecruiterMode]
  );

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
      return commands;
    }

    return commands.filter((command) =>
      `${command.label} ${command.hint}`.toLowerCase().includes(normalizedQuery)
    );
  }, [commands, query]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setQuery("");
    setActiveIndex(0);
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % filteredCommands.length);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(
          (current) => (current - 1 + filteredCommands.length) % filteredCommands.length
        );
      }

      if (event.key === "Enter" && filteredCommands[activeIndex]) {
        event.preventDefault();
        runCommand(filteredCommands[activeIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredCommands, isOpen, onClose]);

  const runCommand = (command) => {
    if (command.action) {
      command.action();
      onClose();
      return;
    }

    if (command.path) {
      router.push(command.path);
      onClose();
      return;
    }

    if (command.external) {
      window.open(command.external, "_blank", "noopener,noreferrer");
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search className="h-5 w-5 text-blue-300" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search commands..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
          <button
            type="button"
            aria-label="Close command palette"
            onClick={onClose}
            className="rounded-md p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[420px] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => {
              const Icon = command.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={command.label}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition ${
                    isActive ? "bg-blue-500 text-white" : "text-zinc-200 hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>
                    <span className="block text-sm font-semibold">{command.label}</span>
                    <span className={`block text-xs ${isActive ? "text-blue-100" : "text-zinc-500"}`}>
                      {command.hint}
                    </span>
                  </span>
                </button>
              );
            })
          ) : (
            <p className="px-3 py-8 text-center text-sm text-zinc-500">No matching commands.</p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-white/10 px-4 py-3 text-xs text-zinc-500">
          <span>Ctrl/Cmd + K</span>
          <span>Arrow keys</span>
          <span>Enter</span>
          <span>Esc</span>
        </div>
      </div>
    </div>
  );
}
