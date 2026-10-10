// src/pages/Auth.jsx
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const commonInput = (label, type, value, setValue) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
      required
    />
  </div>
);

const Auth = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState({ email: "", password: "", role: "Student" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  const handleGuest = () => {
    // Directly navigate to dashboard as a guest user
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-neutral-800 rounded-lg shadow">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-neutral-200 dark:bg-neutral-700 p-1">
          {["Sign in", "Create account"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full py-2.5 text-sm leading-5 font-medium rounded-lg ${selected ? "bg-white dark:bg-neutral-900 shadow" : "text-neutral-500 hover:bg-white/[0.12]"}`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <form onSubmit={handleSubmit}>
              {commonInput("Email", "email", signIn.email, (v) => setSignIn((s) => ({ ...s, email: v })))}
              {commonInput("Password", "password", signIn.password, (v) => setSignIn((s) => ({ ...s, password: v })))}
              <Button type="submit" variant="primary" disabled={loading} className="w-full">
                {loading ? "Signing in…" : "Sign in"}
              </Button>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            <form onSubmit={handleSubmit}>
              {commonInput("Email", "email", signUp.email, (v) => setSignUp((s) => ({ ...s, email: v })))}
              {commonInput("Password", "password", signUp.password, (v) => setSignUp((s) => ({ ...s, password: v })))}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={signUp.role}
                  onChange={(e) => setSignUp((s) => ({ ...s, role: e.target.value }))}
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>Student</option>
                  <option>Issuer</option>
                  <option>Verifier</option>
                </select>
              </div>
              <Button type="submit" variant="primary" disabled={loading} className="w-full">
                {loading ? "Creating…" : "Create account"}
              </Button>
            </form>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Button variant="secondary" onClick={handleGuest} className="w-full mt-4">Continue as Guest</Button>
    </div>
  );
};

export default Auth;
