// src/pages/Explore.jsx
import React, { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const mockInvites = [
  { id: 1, from: "University of Example", title: "Student ID Credential" },
  { id: 2, from: "Acme Corp", title: "Employee Access Pass" },
];

const Explore = () => {
  const navigate = useNavigate();
  const [invites, setInvites] = useState(mockInvites);

  const handleAccept = (id) => {
    setInvites((prev) => prev.filter((i) => i.id !== id));
    alert("Invitation accepted");
  };

  const handleDecline = (id) => {
    setInvites((prev) => prev.filter((i) => i.id !== id));
    alert("Invitation declined");
  };

  return (
    <section className="p-8">
      <h2 className="font-heading text-2xl mb-4">Explore &amp; Invite</h2>
      {invites.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-300">No pending invitations.</p>
      ) : (
        <ul className="space-y-4">
          {invites.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
              <div>
                <p className="font-medium">{inv.title}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">From: {inv.from}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="primary" onClick={() => handleAccept(inv.id)}>Accept</Button>
                <Button variant="secondary" onClick={() => handleDecline(inv.id)}>Decline</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button variant="secondary" onClick={() => navigate('/dashboard')} className="mt-6">Back to Dashboard</Button>
    </section>
  );
};

export default Explore;
