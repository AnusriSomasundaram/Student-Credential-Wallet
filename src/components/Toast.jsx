// src/components/Toast.jsx
import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export const Toast = ({ message, type = "success", onClose, duration = 4000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(onClose, 300);
      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  const bg = type === "error" ? "bg-red-100 dark:bg-red-900" : "bg-green-100 dark:bg-green-900";
  const Icon = type === "error" ? XCircleIcon : CheckCircleIcon;

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs w-full ${bg} text-neutral-900 dark:text-neutral-100 rounded-md shadow-lg p-4 flex items-start space-x-3 transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}
      role="status"
      aria-live="polite"
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      <div className="flex-1 text-sm">{message}</div>
    </div>
  );
};

export default Toast;
