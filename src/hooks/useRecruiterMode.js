"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sizzad-recruiter-mode";
const EVENT_NAME = "recruiter-mode-change";

export function useRecruiterMode() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    setIsRecruiterMode(storedValue === "true");

    const syncMode = () => {
      setIsRecruiterMode(window.localStorage.getItem(STORAGE_KEY) === "true");
    };

    window.addEventListener("storage", syncMode);
    window.addEventListener(EVENT_NAME, syncMode);

    return () => {
      window.removeEventListener("storage", syncMode);
      window.removeEventListener(EVENT_NAME, syncMode);
    };
  }, []);

  const setRecruiterMode = (value) => {
    window.localStorage.setItem(STORAGE_KEY, String(value));
    window.dispatchEvent(new Event(EVENT_NAME));
  };

  const toggleRecruiterMode = () => {
    setRecruiterMode(!isRecruiterMode);
  };

  return {
    isRecruiterMode,
    setRecruiterMode,
    toggleRecruiterMode,
  };
}
