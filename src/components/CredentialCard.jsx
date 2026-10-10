// src/components/CredentialCard.jsx
import React from "react";

import { Button } from "./Button";
import { StatusPill } from "./StatusPill";

/**
 * Simple credential preview card used on the Dashboard.
 * Props:
 *   - cred: credential object (id, title, issuer, status, etc.)
 *   - onSelect: callback fired when the user clicks the card
 */
export const CredentialCard = ({ cred, onSelect }) => {
  return (
    <div
      className="cursor-pointer rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 shadow hover:shadow-lg transition-shadow"
      onClick={() => onSelect && onSelect(cred.id)}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-lg truncate">{cred.title}</h3>
        <StatusPill status={cred.status} />
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 truncate">{cred.issuer}</p>
      {cred.skills && cred.skills.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {cred.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded px-1"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CredentialCard;
