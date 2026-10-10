// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ReducedMotionProvider } from "./context/ReducedMotionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReducedMotionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReducedMotionProvider>
  </React.StrictMode>
);
