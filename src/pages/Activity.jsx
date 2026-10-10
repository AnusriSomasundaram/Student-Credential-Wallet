// src/pages/Activity.jsx
import React, { useContext } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ShareContext } from "../context/ShareContext";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Activity = () => {
  const navigate = useNavigate();
  const { shares, revokeShare } = useContext(ShareContext);

  const handleCopy = async (link) => {
    await navigator.clipboard.writeText(link);
    alert("Link copied to clipboard");
  };

  return (
    <section className="p-8">
      <h2 className="font-heading text-2xl mb-4">Activity Log</h2>
      {shares.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-300">No share links created yet.</p>
      ) : (
        <ul className="space-y-4">
          {shares.map((share) => (
            <li key={share.id} className="rounded-lg bg-white dark:bg-neutral-800 p-4 shadow flex items-center justify-between">
              <div className="flex-1 break-all">
                <a href={share.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">
                  {share.link}
                </a>
                {share.revoked && (
                  <span className="ml-2 text-red-600 dark:text-red-400 font-medium">Revoked</span>
                )}
              </div>
              <div className="flex space-x-2 ml-4">
                <Button variant="secondary" onClick={() => handleCopy(share.link)}>
                  <ClipboardIcon className="h-5 w-5 mr-1" />Copy
                </Button>
                {!share.revoked && (
                  <Button variant="danger" onClick={() => revokeShare(share.id)}>
                    Revoke
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button variant="secondary" onClick={() => navigate('/dashboard')} className="mt-6">Back to Dashboard</Button>
    </section>
  );
};

export default Activity;
