// src/hooks/useCredentials.js
import { useState, useEffect } from "react";

// -----------------------------------------------------------------------------
// Mock credential data – replace with real API later if needed
// -----------------------------------------------------------------------------
const mockCredentials = [
  {
    id: "cred-001",
    title: "Bachelor of Science – Computer Science",
    issuer: "University of Example",
    issueDate: "2022-06-15",
    expiryDate: null,
    status: "verified",
    skills: ["Algorithms", "Data Structures", "React"],
    link: "https://example.edu/credential/cred-001",
  },
  {
    id: "cred-002",
    title: "Full‑Stack Development Badge",
    issuer: "Online Academy",
    issueDate: "2023-03-20",
    expiryDate: null,
    status: "verified",
    skills: ["Node.js", "Express", "MongoDB"],
    link: "https://onlineacademy.com/badge/cred-002",
  },
  {
    id: "cred-003",
    title: "JavaScript Fundamentals",
    issuer: "CodeCamp",
    issueDate: "2021-11-05",
    expiryDate: "2024-11-05",
    status: "expired",
    skills: ["ES6", "Async/Await"],
    link: "https://codecamp.io/cert/cred-003",
  },
];

/**
 * Hook that provides credential data and an updater.
 * Returns { credentials, updateCredential }.
 */
export const useCredentials = () => {
  const [credentials, setCredentials] = useState([]);

  // Load mock data once on mount (simulate async fetch)
  useEffect(() => {
    const timer = setTimeout(() => setCredentials(mockCredentials), 200);
    return () => clearTimeout(timer);
  }, []);

  const updateCredential = (updated) => {
    setCredentials((prev) =>
      prev.map((c) => (c.id === updated.id ? { ...c, ...updated } : c))
    );
  };

  return { credentials, updateCredential };
};
