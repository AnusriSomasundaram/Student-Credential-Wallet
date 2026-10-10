// src/context/CredentialContext.jsx
import React, { createContext } from "react";
import { useCredentials } from "../hooks/useCredentials";

export const CredentialContext = createContext();

export const CredentialProvider = ({ children }) => {
  const { credentials, updateCredential } = useCredentials();
  return (
    <CredentialContext.Provider value={{ credentials, updateCredential }}>
      {children}
    </CredentialContext.Provider>
  );
};

export default CredentialProvider;
