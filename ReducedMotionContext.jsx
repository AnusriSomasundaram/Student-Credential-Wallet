// src/context/ReducedMotionContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ReducedMotionContext = createContext();

export const ReducedMotionProvider = ({ children }) => {
  const getInitial = () => {
    const saved = localStorage.getItem('reducedMotion');
    if (saved) return saved === 'true';
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };
  const [reduce, setReduce] = useState(getInitial());

  useEffect(() => {
    localStorage.setItem('reducedMotion', reduce);
  }, [reduce]);

  return (
    <ReducedMotionContext.Provider value={{ reduce, setReduce }}>
      {children}
    </ReducedMotionContext.Provider>
  );
};

export default ReducedMotionProvider;
