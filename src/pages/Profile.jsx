// src/pages/Profile.jsx
import React, { useState, useEffect, useContext } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useCredentials } from "../hooks/useCredentials";

const Profile = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { credentials } = useCredentials();
  const [reducedMotion, setReducedMotion] = useState(
    localStorage.getItem("reducedMotion") === "true"
  );

  // Apply reduced motion class
  useEffect(() => {
    const root = document.documentElement;
    if (reducedMotion) {
      root.classList.add("motion-reduce");
    } else {
      root.classList.remove("motion-reduce");
    }
    localStorage.setItem("reducedMotion", reducedMotion);
  }, [reducedMotion]);

  const handleExport = () => {
    const dataStr = JSON.stringify(credentials, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "credentials.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="p-8 space-y-8">
      <h2 className="font-heading text-2xl mb-4">Profile & Settings</h2>

      {/* Theme toggle */}
      <div className="flex items-center justify-between rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
        <span className="font-medium">Theme</span>
        <Button
          variant="secondary"
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        >
          Switch to {theme === "dark" ? "Light" : "Dark"}
        </Button>
      </div>

      {/* Motion preference */}
      <div className="flex items-center justify-between rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
        <span className="font-medium">Reduced Motion</span>
        <Button
          variant="secondary"
          onClick={() => setReducedMotion((prev) => !prev)}
        >
          {reducedMotion ? "Enable Animations" : "Reduce Motion"}
        </Button>
      </div>

      {/* Export credentials */}
      <div className="flex items-center justify-between rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
        <span className="font-medium">Export Credentials</span>
        <Button variant="primary" onClick={handleExport}>Download JSON</Button>
      </div>

      <Button
        variant="secondary"
        onClick={() => navigate("/dashboard")}
        className="mt-6"
      >
        Back to Dashboard
      </Button>
    </section>
  );
};

export default Profile;
