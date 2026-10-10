// src/pages/Dashboard.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCredentials } from "../hooks/useCredentials";
import { CredentialCard } from "../components/CredentialCard";
import DonutChart from "../components/DonutChart";
import BarChart from "../components/BarChart";
import VerifierChart from "../components/VerifierChart";
import { Button } from "../components/Button";
import { Drawer } from "../components/Drawer";
import { Toast } from "../components/Toast";
import { ExclamationCircleIcon, ClipboardIcon } from "@heroicons/react/24/outline";

const Dashboard = () => { const navigate = useNavigate();
  const { credentials, updateCredential } = useCredentials();
  const [selectedId, setSelectedId] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    setShowDrawer(true);
  };

  const closeDrawer = () => setShowDrawer(false);

  const selectedCred = credentials.find((c) => c.id === selectedId);

  // Status counts for donut
  const statusCounts = useMemo(() => {
    const map = { verified: 0, pending: 0, "student-added": 0, unverified: 0, expired: 0 };
    credentials.forEach((c) => {
      map[c.status] = (map[c.status] || 0) + 1;
    });
    return Object.entries(map)
      .filter(([, v]) => v > 0)
      .map(([key, value]) => ({ name: key, value }));
  }, [credentials]);

  // Skill data for bar chart
  const skillData = useMemo(() => {
    const skillMap = {};
    credentials.forEach((c) => {
      c.skills?.forEach((s) => {
        skillMap[s] = (skillMap[s] || 0) + 1;
      });
    });
    return Object.entries(skillMap)
      .map(([skill, cnt]) => ({ skill, level: Math.min(100, cnt * 20) }))
      .sort((a, b) => b.level - a.level)
      .slice(0, 5);
  }, [credentials]);

  // Verifier activity mock data
  const verifierData = useMemo(() => {
    const today = new Date();
    return [...Array(7)].map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      return {
        date: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
        checks: Math.floor(Math.random() * 8),
      };
    }).reverse();
  }, []);

  const copyId = async () => {
    if (!selectedCred) return;
    await navigator.clipboard.writeText(selectedCred.id);
    setToast({ message: "Credential ID copied", type: "success" });
  };

  return (
    <section className="space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="font-heading text-2xl">Welcome, Maya Iyer</h1>
        <Button variant="primary" onClick={() => navigate('/share')}>Share my profile</Button>
      </header>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
          <h2 className="font-heading text-lg mb-2">Credential status</h2>
          <DonutChart data={statusCounts} />
        </div>
        <div className="rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
          <h2 className="font-heading text-lg mb-2">Top skills</h2>
          <BarChart data={skillData} />
        </div>
        <div className="rounded-lg bg-white dark:bg-neutral-800 p-4 shadow">
          <h2 className="font-heading text-lg mb-2">Verifier checks (last 7 days)</h2>
          <VerifierChart data={verifierData} />
        </div>
      </div>

      {/* Alert for attention */}
      {credentials.some((c) => c.status === "expired") && (
        <div className="rounded-md bg-amber-100 dark:bg-amber-900 p-4 flex items-center space-x-3">
          <ExclamationCircleIcon className="h-6 w-6 text-amber-600" />
          <p className="text-amber-800 dark:text-amber-200">
            Some credentials need attention (expired or unverified). Review them below.
          </p>
        </div>
      )}

      {/* Credential list */}
      <section>
        <h2 className="font-heading text-xl mb-4">Your credentials</h2>
        <div className="space-y-3">
          {credentials.map((cred) => (
            <CredentialCard key={cred.id} cred={cred} onSelect={handleSelect} />
          ))}
        </div>
      </section>

      {/* Drawer for selected credential */}
      <Drawer isOpen={showDrawer} onClose={closeDrawer} title={selectedCred?.title || "Credential"} side="right">
        {selectedCred && (
          <div className="space-y-4">
            <p><strong>Issuer:</strong> {selectedCred.issuer}</p>
            <p><strong>Issued on:</strong> {selectedCred.issueDate}</p>
            {selectedCred.expiryDate && <p><strong>Expires:</strong> {selectedCred.expiryDate}</p>}
            <p><strong>Skills:</strong> {selectedCred.skills?.join(", ")}</p>
            <div className="flex items-center space-x-2">
              <p className="font-mono text-sm break-all">ID: {selectedCred.id}</p>
              <button onClick={copyId} className="text-teal-600 hover:text-teal-800" aria-label="Copy ID">
                <ClipboardIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button variant="primary" onClick={() => alert("Share action")}>Share</Button>
              <Button variant="secondary" onClick={() => window.open(selectedCred.link, "_blank")}>View original</Button>
              <Button variant="ghost" onClick={() => alert("Report problem")}>Report</Button>
            </div>
          </div>
        )}
      </Drawer>

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </section>
  );
};

export default Dashboard;
