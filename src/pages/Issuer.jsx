// src/pages/Issuer.jsx
import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const Issuer = () => {
  const navigate = useNavigate();
  return (
    <section className="p-8">
      <h2 className="font-heading text-2xl mb-4">Issuer Dashboard (Placeholder)</h2>
      <p>This page will let issuers create, update, renew, and revoke credentials.</p>
      <Button variant="secondary" onClick={() => navigate('/dashboard')} className="mt-4">
        Back to Dashboard
      </Button>
    </section>
  );
};

export default Issuer;
