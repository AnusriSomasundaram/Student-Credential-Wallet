// src/pages/Share.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCredentials } from "../hooks/useCredentials";
import { ShareContext } from "../context/ShareContext";
import { Button } from "../components/Button";
import QRCode from "react-qr-code";
import { Checkbox } from "@headlessui/react";

const Share = () => {
  const { credentials } = useCredentials();
  const { createShare } = useContext(ShareContext);
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [expiryDays, setExpiryDays] = useState(30);
  const [showDate, setShowDate] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showId, setShowId] = useState(false);
  const [generated, setGenerated] = useState(null);

  const toggleSelect = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const handleGenerate = () => {
    if (selected.length === 0) return;
    const items = credentials.filter((c) => selected.includes(c.id));
    const share = createShare({ items, expiryDays, showDate, showSkills, showId });
    setGenerated(share);
  };

  if (generated) {
    return (
      <section className="p-8 space-y-6">
        <h2 className="font-heading text-2xl">Share Link Created</h2>
        <p className="break-all">{generated.link}</p>
        <div className="p-4 bg-white dark:bg-neutral-800 inline-block rounded-md">
          <QRCode value={generated.link} size={256} />
        </div>
        <Button variant="secondary" onClick={() => navigate(-1)}>Back to Dashboard</Button>
      </section>
    );
  }

  return (
    <section className="p-8 space-y-6">
      <h2 className="font-heading text-2xl mb-4">Create Share Link</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Credential selection */}
        <div className="space-y-2">
          <h3 className="font-medium">Select credentials to share</h3>
          {credentials.map((cred) => (
            <div key={cred.id} className="flex items-center">
              <Checkbox
                checked={selected.includes(cred.id)}
                onChange={() => toggleSelect(cred.id)}
                className="mr-2"
              />
              <span>{cred.title} – {cred.issuer}</span>
            </div>
          ))}
        </div>
        {/* Options */}
        <div className="space-y-4">
          <h3 className="font-medium mb-2">Options</h3>
          <div className="flex items-center space-x-2">
            <label>Expiry (days):</label>
            <input
              type="number"
              min={1}
              value={expiryDays}
              onChange={(e) => setExpiryDays(parseInt(e.target.value, 10) || 1)}
              className="w-20 rounded border px-2 py-1"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox checked={showDate} onChange={() => setShowDate(!showDate)} />
            <label>Show issue/expiry dates</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox checked={showSkills} onChange={() => setShowSkills(!showSkills)} />
            <label>Show skills</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox checked={showId} onChange={() => setShowId(!showId)} />
            <label>Show credential ID</label>
          </div>
        </div>
      </div>
      <Button variant="primary" onClick={handleGenerate} className="mt-4">Generate Share Link</Button>
    </section>
  );
};

export default Share;
