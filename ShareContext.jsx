// src/context/ShareContext.jsx
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ShareContext = createContext();

export const ShareProvider = ({ children }) => {
  const mockShare = {
    id: 'share-001',
    link: `${window.location.origin}/verifier?share=share-001`,
    revoked: false,
    expiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    options: { showDate: true, showSkills: true, showId: false },
    items: []
  };
  const [shares, setShares] = useState([mockShare]);

  const createShare = ({ items, expiryDays, showDate, showSkills, showId }) => {
    const id = uuidv4();
    const expires = new Date();
    expires.setDate(expires.getDate() + expiryDays);
    const link = `${window.location.origin}/verifier?share=${id}`;
    const newShare = {
      id,
      items,
      expiry: expires.toISOString(),
      options: { showDate, showSkills, showId },
      link,
    };
    setShares((prev) => [...prev, newShare]);
    return newShare;
  };

  const revokeShare = (id) => {
    setShares((prev) => prev.map((s) => (s.id === id ? { ...s, revoked: true } : s)));
  };

  const getShare = (id) => shares.find((s) => s.id === id);

  return (
    <ShareContext.Provider value={{ shares, createShare, revokeShare, getShare }}>
      {children}
    </ShareContext.Provider>
  );
};

export default ShareProvider;
