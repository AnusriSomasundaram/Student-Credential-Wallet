// src/pages/Verifier.jsx
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShareContext } from "../context/ShareContext";
import { Button } from "../components/Button";

const Verifier = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const shareId = query.get("share");
  const { getShare } = useContext(ShareContext);
  const share = getShare(shareId);

  const [status, setStatus] = useState(null);

  const handleVerify = () => {
    // Simple simulation: if share exists and not revoked and not expired -> verified
    if (!share) {
      setStatus("invalid");
      return;
    }
    const now = new Date();
    const expired = new Date(share.expiry) < now;
    if (share.revoked) {
      setStatus("revoked");
    } else if (expired) {
      setStatus("expired");
    } else {
      setStatus("verified");
    }
  };

  if (!share) {
    return (
      <section className="p-8">
        <p className="text-red-600">Share link not found.</p>
        <Button variant="secondary" onClick={() => navigate(-1)} className="mt-4">Go back</Button>
      </section>
    );
  }

  return (
    <section className="p-8 space-y-6">
      <h2 className="font-heading text-2xl">Verifier</h2>
      <p><strong>Share ID:</strong> {share.id}</p>
      <p><strong>Expires:</strong> {new Date(share.expiry).toLocaleDateString()}</p>
      {share.revoked && <p className="text-amber-600">⚠️ This share has been revoked.</p>}
      <h3 className="font-medium mt-4">Credentials included:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {share.items.map((c) => (
          <li key={c.id}>
            {c.title} – {c.issuer}
            {share.options.showDate && <span> (Issued: {c.issueDate})</span>}
            {share.options.showSkills && c.skills && <span> [Skills: {c.skills.join(", ")}]</span>}
            {share.options.showId && <span> (ID: {c.id})</span>}
          </li>
        ))}
      </ul>
      <Button variant="primary" onClick={handleVerify}>Verify</Button>
      {status && (
        <p className={
          status === "verified"
            ? "text-green-600"
            : status === "revoked"
            ? "text-amber-600"
            : status === "expired"
            ? "text-orange-600"
            : "text-red-600"
        }>
          Verification result: {status}
        </p>
      )}
    </section>
  );
};

export default Verifier;
