// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CredentialDetail from "./pages/CredentialDetail";
import Share from "./pages/Share";
import Verifier from "./pages/Verifier";
import Explore from "./pages/Explore";
import Activity from "./pages/Activity";
import Issuer from "./pages/Issuer";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import { CredentialProvider } from "./context/CredentialContext";
import { ShareProvider } from "./context/ShareContext";

const App = () => {
  return (
    <Router>
      <CredentialProvider>
        <ShareProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/credential/:id" element={<CredentialDetail />} />
              <Route path="/share/*" element={<Share />} />
              <Route path="/verifier" element={<Verifier />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/issuer/*" element={<Issuer />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </ShareProvider>
      </CredentialProvider>
    </Router>
  );
};

export default App;
