// src/pages/Landing.jsx
import React from "react";
import ThreeLanding from "../components/ThreeLanding";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
    <div className="max-w-4xl w-full px-4">
      <h1 className="font-heading text-4xl md:text-5xl text-center mb-6">
        Credentials you can prove. Data you control.
      </h1>
      <p className="font-body text-center text-lg mb-8">
        Collect verifiable credentials, share only what you choose, and let colleges or employers verify instantly—no accounts required.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Link to="/auth">
          <Button variant="primary">Get started</Button>
        </Link>
        <Link to="/auth">
          <Button variant="secondary">Sign in</Button>
        </Link>
      </div>
      <div className="mx-auto w-full max-w-3xl h-96">
        <ThreeLanding />
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-heading text-xl mb-2">Issuer‑signed</h3>
          <p className="font-body text-sm">Every credential is cryptographically signed by its issuer.</p>
        </div>
        <div>
          <h3 className="font-heading text-xl mb-2">Selective sharing</h3>
          <p className="font-body text-sm">Show only the fields the verifier needs.</p>
        </div>
        <div>
          <h3 className="font-heading text-xl mb-2">Revocable links</h3>
          <p className="font-body text-sm">End a share link at any time, preserving privacy.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
