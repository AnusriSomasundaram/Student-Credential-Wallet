// src/components/Button.jsx
import React from 'react';

export const Button = ({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500',
    secondary: 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-600 focus-visible:ring-teal-500',
    ghost: 'bg-transparent text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900 focus-visible:ring-teal-500',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
