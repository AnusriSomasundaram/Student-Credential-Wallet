// src/components/Layout.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Wallet', to: '/dashboard', icon: Bars3BottomLeftIcon },
  { name: 'Explore', to: '/explore', icon: Bars3BottomLeftIcon },
  { name: 'Activity', to: '/activity', icon: Bars3BottomLeftIcon },
  { name: 'Profile', to: '/profile', icon: Bars3BottomLeftIcon },
];

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:h-full md:pt-4 md:pb-6 md:pr-2 md:overflow-y-auto bg-neutral-200 dark:bg-neutral-800">
        <nav className="flex-1 space-y-2 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-2 py-2 rounded-md text-base font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 ${isActive ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`
              }
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleToggle}
          className="m-3 flex items-center rounded-md bg-neutral-300 dark:bg-neutral-700 px-2 py-1 hover:bg-neutral-400 dark:hover:bg-neutral-600"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </aside>

      {/* Main content area */}
      <main className="flex-1 md:ml-64 p-4">
        {children}
      </main>

      {/* Bottom tab bar for mobile */}
      <nav className="fixed inset-x-0 bottom-0 flex md:hidden justify-around bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${isActive ? 'text-teal-600' : 'text-neutral-600 dark:text-neutral-400'}`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
        <button
          onClick={handleToggle}
          className="flex flex-col items-center text-xs"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span>Theme</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
