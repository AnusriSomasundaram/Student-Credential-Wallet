// src/pages/CredentialDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCredentials } from "../hooks/useCredentials";
import { Drawer } from "../components/Drawer";
import { Button } from "../components/Button";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const CredentialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { credentials } = useCredentials();
  const credential = credentials.find((c) => c.id === id);
  const [showDrawer, setShowDrawer] = useState(true);

  const copyId = async () => {
    if (!credential) return;
    await navigator.clipboard.writeText(credential.id);
    // could add toast later
  };

  if (!credential) {
    return (
      <div className="p-8">
        <p className="text-red-600">Credential not found.</p>
        <Button variant="secondary" onClick={() => navigate(-1)} className="mt-4">Go back</Button>
      </div>
    );
  }

  return (
    <Drawer
      isOpen={showDrawer}
      onClose={() => navigate(-1)}
      title={credential.title}
      side="right"
    >
      <div className="space-y-4">
        <p><strong>Issuer:</strong> {credential.issuer}</p>
        <p><strong>Issued on:</strong> {credential.issueDate}</p>
        {credential.expiryDate && <p><strong>Expires:</strong> {credential.expiryDate}</p>}
        <p><strong>Skills:</strong> {credential.skills?.join(", ")}</p>
        <div className="flex items-center space-x-2">
          <p className="font-mono text-sm break-all">ID: {credential.id}</p>
          <button onClick={copyId} className="text-teal-600 hover:text-teal-800" aria-label="Copy ID">
            <ClipboardIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button variant="primary" onClick={() => alert("Share action")}>Share</Button>
          <Button variant="secondary" onClick={() => window.open(credential.link, "_blank")}>View original</Button>
          <Button variant="ghost" onClick={() => alert("Report problem")}>Report</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CredentialDetail;
