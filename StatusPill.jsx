// src/components/StatusPill.jsx
import React from "react";

/**
 * Small pill that indicates credential status.
 * Props:
 *   - status: string (e.g., "verified", "expired", "pending", "student-added", "unverified")
 */
const statusColors = {
  verified: "bg-teal-200 text-teal-800 dark:bg-teal-800 dark:text-teal-200",
  pending: "bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200",
  "student-added": "bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200",
  unverified: "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  expired: "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",
};

export const StatusPill = ({ status }) => {
  const classes = statusColors[status] ?? "bg-neutral-200 text-neutral-800";
  return (
    <span
      className={`${classes} px-2 py-0.5 rounded-full text-xs font-medium capitalize`}
    >
      {status.replace(/-/g, " ")}
    </span>
  );
};

export default StatusPill;
